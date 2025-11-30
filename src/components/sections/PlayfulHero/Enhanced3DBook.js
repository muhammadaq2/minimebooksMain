import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Box, Text, rem, ActionIcon, Group, Loader } from '@mantine/core';
import { IconChevronLeft, IconChevronRight, IconX, IconMaximize } from '@tabler/icons-react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Environment, OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Book configuration - Fixed dimensions for better visibility
const PAGE_WIDTH = 2.4;  // Increased from 1.28
const PAGE_HEIGHT = 3.2; // Increased from 1.71
const PAGE_DEPTH = 0.02; // Increased from 0.003 for proper book thickness
const PAGE_SEGMENTS = 20;
const SEGMENT_WIDTH = PAGE_WIDTH / PAGE_SEGMENTS;

// Create page geometry with skeletal animation setup
const createPageGeometry = () => {
  const geometry = new THREE.BoxGeometry(
    PAGE_WIDTH,
    PAGE_HEIGHT,
    PAGE_DEPTH,
    PAGE_SEGMENTS,
    2
  );

  // Translate so x runs from 0..PAGE_WIDTH (easier skinning math)
  geometry.translate(PAGE_WIDTH / 2, 0, 0);

  const position = geometry.attributes.position;
  const vertex = new THREE.Vector3();
  const skinIndexes = [];
  const skinWeights = [];

  for (let i = 0; i < position.count; i++) {
    vertex.fromBufferAttribute(position, i);
    const x = vertex.x; // now in [0, PAGE_WIDTH]

    // Clamp to keep second influence valid (<= PAGE_SEGMENTS)
    const segment = Math.min(PAGE_SEGMENTS - 1, Math.max(0, Math.floor(x / SEGMENT_WIDTH)));
    const nextSegment = segment + 1; // always <= PAGE_SEGMENTS

    // Local position inside the segment -> smooth weights
    const local = x - segment * SEGMENT_WIDTH;
    const w2 = THREE.MathUtils.clamp(local / SEGMENT_WIDTH, 0, 1);
    const w1 = 1 - w2;

    skinIndexes.push(segment, nextSegment, 0, 0);
    skinWeights.push(w1, w2, 0, 0);
  }

  geometry.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndexes, 4));
  geometry.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));

  return geometry;
};

// Book pages data
const bookPages = [
  {
    front: 'https://static-01.daraz.pk/p/6b4e2c85fc68c6835801cdf13fd799f1.jpg',
    back: 'https://i.ibb.co/bg1FbhSc/image-1-1.png'
  },
  {
    front: 'https://i.postimg.cc/vTmKY0DY/image-2.png',
    back: 'https://i.postimg.cc/FKVm1nF3/image-3.png'
  },
  {
    front: 'https://i.postimg.cc/vZRdhdc5/image-4.png',
    back: 'https://static-01.daraz.pk/p/6b4e2c85fc68c6835801cdf13fd799f1.jpg'
  }
];

// Individual Page Component
const BookPage = ({ number, front, back, currentPage, totalPages, isOpen }) => {
  const meshRef = useRef();
  const groupRef = useRef();
  const [frontTexture, backTexture] = useTexture([front, back]);
  const [isInitialized, setIsInitialized] = useState(false);

  const pageGeometry = React.useMemo(() => createPageGeometry(), []);

  // Create skeletal mesh with proper bone initialization
  const skeletalMesh = React.useMemo(() => {
    const bones = [];

    // Create bones with proper hierarchy and matrix initialization
    for (let i = 0; i <= PAGE_SEGMENTS; i++) {
      const bone = new THREE.Bone();
      bone.name = `bone_${i}`;
      bone.matrix = new THREE.Matrix4();
      bone.matrixWorld = new THREE.Matrix4();
      bone.updateMatrix();
      bone.updateMatrixWorld(true);

      bones.push(bone);

      if (i === 0) {
        bone.position.set(0, 0, 0);
      } else {
        bone.position.set(SEGMENT_WIDTH, 0, 0);
        bones[i - 1].add(bone);
      }
    }

    bones.forEach((bone) => {
      bone.updateMatrix();
      bone.updateMatrixWorld(true);
    });

    const skeleton = new THREE.Skeleton(bones);

    const materials = [
      new THREE.MeshStandardMaterial({ color: '#e2e8f0', roughness: 0.8, metalness: 0.05 }), // Top
      new THREE.MeshStandardMaterial({ color: '#64748b', roughness: 0.9, metalness: 0.05 }), // Bottom
      new THREE.MeshStandardMaterial({ color: '#e2e8f0', roughness: 0.8, metalness: 0.05 }), // Side
      new THREE.MeshStandardMaterial({ color: '#e2e8f0', roughness: 0.8, metalness: 0.05 }), // Side
      new THREE.MeshStandardMaterial({ 
        color: '#ffffff', 
        map: frontTexture, 
        roughness: 0.6, 
        metalness: 0.02,
        transparent: false,
        opacity: 1
      }), // Front
      new THREE.MeshStandardMaterial({ 
        color: '#ffffff', 
        map: backTexture, 
        roughness: 0.6, 
        metalness: 0.02,
        transparent: false,
        opacity: 1
      }) // Back
    ];

    const mesh = new THREE.SkinnedMesh(pageGeometry, materials);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.frustumCulled = false;

    // Proper skeleton binding
    mesh.add(skeleton.bones[0]);
    mesh.bind(skeleton);
    skeleton.calculateInverses();
    skeleton.update();

    skeleton.bones.forEach((bone) => {
      if (!bone.matrixWorld) bone.matrixWorld = new THREE.Matrix4();
      bone.updateMatrixWorld(true);
    });

    return mesh;
  }, [pageGeometry, frontTexture, backTexture]);

  // Initialize skeleton properly on mount - FIXED VERSION
  useEffect(() => {
    // Only initialize once by checking if already initialized
    if (skeletalMesh && skeletalMesh.skeleton && !isInitialized) {
      const bones = skeletalMesh.skeleton.bones;
      bones.forEach((bone) => {
        if (!bone.matrixWorld) bone.matrixWorld = new THREE.Matrix4();
        bone.updateMatrix();
        bone.updateMatrixWorld(true);
      });
      skeletalMesh.skeleton.calculateInverses();
      skeletalMesh.skeleton.update();
      setIsInitialized(true);
    }
  }, [skeletalMesh, isInitialized]); // Added isInitialized to dependencies

  const opened = currentPage > number;
  const bookClosed = currentPage === 0 || currentPage === totalPages;

  useFrame((_, delta) => {
    if (!meshRef.current || !meshRef.current.skeleton || !isInitialized) return;

    let targetRotation = opened ? -Math.PI / 2 : Math.PI / 2;
    if (!bookClosed) {
      targetRotation += THREE.MathUtils.degToRad(number * 0.8);
    }

    const bones = meshRef.current.skeleton.bones;

    bones.forEach((bone, i) => {
      if (!bone) return;

      const insideCurveIntensity = i < 8 ? Math.sin(i * 0.2 + 0.25) : 0;
      const outsideCurveIntensity = i >= 8 ? Math.cos(i * 0.3 + 0.09) : 0;

      let rotationAngle =
        0.18 * insideCurveIntensity * targetRotation -
        0.05 * outsideCurveIntensity * targetRotation;

      if (bookClosed) {
        rotationAngle = i === 0 ? targetRotation : 0;
      }

      // Rotate bones directly (root bone rotates the whole page)
      bone.rotation.y = THREE.MathUtils.lerp(bone.rotation.y, rotationAngle, delta * 2);

      bone.updateMatrix();
      bone.updateMatrixWorld(true);
    });

    try {
      meshRef.current.skeleton.update();
    } catch {
      /* noop */
    }
  });

  if (!isInitialized) return null;

  return (
    <group ref={groupRef}>
      <primitive
        object={skeletalMesh}
        ref={meshRef}
        position-z={-number * PAGE_DEPTH + currentPage * PAGE_DEPTH}
      />
    </group>
  );
};

// Main 3D Book Component
const ThreeJSBook = ({ currentPage, totalPages, isOpen }) => {
  return (
    <group rotation-y={Math.PI / 2}>
      {bookPages.map((pageData, index) => (
        <BookPage
          key={index}
          number={index}
          currentPage={currentPage}
          totalPages={totalPages}
          isOpen={isOpen}
          {...pageData}
        />
      ))}
    </group>
  );
};

// Scene Component with improved lighting
const BookScene = ({ currentPage, isOpen }) => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(-1, 2, 6);
    camera.fov = 50;
    camera.updateProjectionMatrix();
  }, [camera]);

  return (
    <>
      <Float rotation-x={-Math.PI / 4} rotation-y={Math.PI / 1} floatIntensity={0.5} speed={1.5} rotationIntensity={1}>
        <ThreeJSBook currentPage={currentPage} totalPages={bookPages.length} isOpen={isOpen} />
      </Float>

      {/* OrbitControls completely disabled - no user interaction with the book */}

      {/* 30% lighting for better visibility */}
      <ambientLight intensity={1} />
      
      <directionalLight
        position={[1, 2, 2]}
        intensity={0.5}
        castShadow={false}
      />

      <mesh position-y={-2.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <shadowMaterial transparent opacity={0.25} />
      </mesh>
    </>
  );
};

// Main Enhanced 3D Book Component
function Enhanced3DBook({ 
  title = "Super ABC Adventure",
  childName = "Emma's Story",
  coverImage,
  pages = [],
  isDark = false,
  size = "normal"
}) {
  const [isOpen, setIsOpen] = useState(true); // Start in open state
  const [currentPage, setCurrentPage] = useState(1); // Start at page 1 (skip cover)
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getBookSize = () => {
    if (viewportWidth < 768) {
      return { canvasWidth: 400, canvasHeight: 500, containerWidth: 350, containerHeight: 450 };
    } else if (viewportWidth < 1024) {
      return { canvasWidth: 550, canvasHeight: 650, containerWidth: 450, containerHeight: 550 };
    } else {
      return { canvasWidth: 700, canvasHeight: 800, containerWidth: 550, containerHeight: 650 };
    }
  };

  const bookSize = getBookSize();
  const isMobile = viewportWidth < 768;

  const nextPage = () => {
    // Prevent going to the last page (back cover) - limit to bookPages.length - 1
    if (currentPage < bookPages.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setCurrentPage((p) => p + 1);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const prevPage = () => {
    // Prevent going to page 0 (front cover) - limit to page 1 minimum
    if (currentPage > 1 && !isAnimating) {
      setIsAnimating(true);
      setCurrentPage((p) => p - 1);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const toggleBook = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsOpen((o) => !o);
      // When opening the book, start at page 1 (first content page, not cover)
      if (!isOpen) setCurrentPage(1);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: rem(bookSize.canvasHeight + 120),
        position: 'relative',
        padding: rem(20),
        background: isDark ? 'transparent' : 'transparent'
      }}
    >
      <Box
        style={{
          width: rem(bookSize.canvasWidth),
          height: rem(bookSize.canvasHeight),
          position: 'relative',
          borderRadius: rem(12),
          overflow: 'hidden',
          cursor: !isOpen ? 'pointer' : 'default',
          transform: isHovered && !isOpen ? 'scale(1.02)' : 'scale(1)',
          transition: 'transform 0.3s ease',
          background: 'transparent',
          userSelect: 'none', // Prevent text selection
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none'
        }}
        onMouseEnter={() => !isOpen && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={!isOpen ? toggleBook : undefined}
        onContextMenu={(e) => e.preventDefault()} // Disable right-click menu
        onDragStart={(e) => e.preventDefault()} // Disable dragging
      >
        <Canvas
          shadows
          camera={{ position: [-1, 2, 6], fov: 50 }}
          style={{ 
            width: '100%', 
            height: '100%', 
            background: 'transparent',
            pointerEvents: 'none' // Disable all mouse/touch interactions
          }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
          <Suspense fallback={null}>
            <BookScene currentPage={currentPage} isOpen={isOpen} />
          </Suspense>
        </Canvas>

        <Box
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(139, 92, 246, 0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            opacity: isAnimating ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
        >
          <Loader size="lg" color="violet" />
        </Box>
      </Box>

      {isOpen && (
        <Box
          style={{
            position: 'absolute',
            bottom: rem(isMobile ? -30 : -45),
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 25,
            background: isMobile ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(8px)',
            borderRadius: rem(isMobile ? 25 : 20),
            padding: isMobile ? rem(4) : rem(8),
            boxShadow: isMobile ? '0 4px 15px rgba(0,0,0,0.3)' : '0 6px 20px rgba(0,0,0,0.12)',
            border: isMobile ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: rem(isMobile ? 2 : 6)
          }}
        >
          {/* Previous Page Button */}
          <ActionIcon
            variant={isMobile ? 'transparent' : 'filled'}
            size={isMobile ? rem(28) : 'md'}
            disabled={currentPage <= 1 || isAnimating}
            onClick={prevPage}
            style={{
              background: isMobile ? 'transparent' : (
                currentPage <= 1 || isAnimating
                  ? '#94a3b8'
                  : 'linear-gradient(135deg, #8B5CF6 0%, #9333ea 100%)'
              ),
              color: isMobile ? (currentPage <= 1 || isAnimating ? '#666' : '#fff') : '#fff',
              border: 'none',
              transition: 'all 0.2s ease',
              borderRadius: rem(isMobile ? 14 : 8),
              opacity: currentPage <= 1 || isAnimating ? 0.4 : 1
            }}
          >
            <IconChevronLeft size={isMobile ? 16 : 18} stroke={isMobile ? 2.5 : 2} />
          </ActionIcon>

          {/* Page Counter */}
          <Box
            style={{
              background: isMobile ? 'rgba(255,255,255,0.15)' : 'rgba(139, 92, 246, 0.1)',
              borderRadius: rem(isMobile ? 12 : 8),
              padding: `${rem(isMobile ? 2 : 4)} ${rem(isMobile ? 6 : 8)}`,
              minWidth: rem(isMobile ? 35 : 45),
              textAlign: 'center'
            }}
          >
            <Text
              size={rem(isMobile ? 9 : 12)}
              fw={600}
              style={{
                color: isMobile ? '#fff' : '#8B5CF6',
                fontFamily: 'Nunito, sans-serif',
                lineHeight: 1,
                letterSpacing: '0.5px'
              }}
            >
              {currentPage}/{bookPages.length - 1}
            </Text>
          </Box>

          {/* Next Page Button */}
          <ActionIcon
            variant={isMobile ? 'transparent' : 'filled'}
            size={isMobile ? rem(28) : 'md'}
            disabled={currentPage >= bookPages.length - 1 || isAnimating}
            onClick={nextPage}
            style={{
              background: isMobile ? 'transparent' : (
                currentPage >= bookPages.length - 1 || isAnimating
                  ? '#94a3b8'
                  : 'linear-gradient(135deg, #8B5CF6 0%, #9333ea 100%)'
              ),
              color: isMobile ? (currentPage >= bookPages.length - 1 || isAnimating ? '#666' : '#fff') : '#fff',
              border: 'none',
              transition: 'all 0.2s ease',
              borderRadius: rem(isMobile ? 14 : 8),
              opacity: currentPage >= bookPages.length - 1 || isAnimating ? 0.4 : 1
            }}
          >
            <IconChevronRight size={isMobile ? 16 : 18} stroke={isMobile ? 2.5 : 2} />
          </ActionIcon>

          {/* Close Button - Only show on desktop or when there's space */}
          {!isMobile && (
            <>
              <Box style={{ width: rem(1), height: rem(20), background: 'rgba(0,0,0,0.1)' }} />
              <ActionIcon
                variant="subtle"
                size="sm"
                onClick={toggleBook}
                disabled={isAnimating}
                style={{
                  color: '#8B5CF6',
                  transition: 'all 0.2s ease',
                  '&:hover': { background: 'rgba(139, 92, 246, 0.1)' }
                }}
              >
                <IconX size={14} />
              </ActionIcon>
            </>
          )}
        </Box>
      )}

      {/* Mobile Close Button - Separate floating button */}
      {isOpen && isMobile && (
        <ActionIcon
          variant="filled"
          size={rem(36)}
          onClick={toggleBook}
          disabled={isAnimating}
          style={{
            position: 'absolute',
            top: rem(20),
            right: rem(20),
            zIndex: 30,
            background: 'rgba(0,0,0,0.6)',
            color: '#fff',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.1)',
            transition: 'all 0.3s ease'
          }}
        >
          <IconX size={18} stroke={2.5} />
        </ActionIcon>
      )}

      {!isOpen && (
        <Box
          style={{
            position: 'absolute',
            bottom: rem(isMobile ? -25 : -40),
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 25,
            background: 'rgba(139, 92, 246, 0.15)',
            backdropFilter: 'blur(8px)',
            borderRadius: rem(isMobile ? 18 : 16),
            padding: `${rem(isMobile ? 4 : 6)} ${rem(isMobile ? 8 : 12)}`,
            border: '1px solid rgba(139, 92, 246, 0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: rem(isMobile ? 4 : 6)
          }}
        >
          <IconMaximize 
            size={isMobile ? 12 : 16} 
            style={{ color: '#8B5CF6' }} 
            stroke={2.5}
          />
          <Text
            size={rem(isMobile ? 9 : 12)}
            fw={600}
            style={{
              color: '#8B5CF6',
              fontFamily: 'Nunito, sans-serif',
              animation: 'perfectPulse 3s ease-in-out infinite',
              whiteSpace: 'nowrap',
              letterSpacing: '0.3px'
            }}
          >
            {isMobile ? 'Tap to explore' : 'Click to explore'}
          </Text>
        </Box>
      )}

      <style jsx>{`
        @keyframes perfectPulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>
    </Box>
  );
}

export default Enhanced3DBook;