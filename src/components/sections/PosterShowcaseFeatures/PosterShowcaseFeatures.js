import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Text, 
  Box,
  Group,
  Stack,
  rem,
  useMantineColorScheme 
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { 
  IconSparkles,
  IconPhoto,
  IconPalette,
  IconWand,
  IconCheck
} from '@tabler/icons-react';

function PosterShowcaseFeatures() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [activeFeature, setActiveFeature] = useState(0);

  // Your transformation examples
  const transformationPairs = [
    {
      original: "https://storage.wonderwraps.com/09e96f12-f7d1-48d3-8ba5-24b528c98e16/iyzbgYw3ox8YwgNJDRYvZ4zzffZHIA-metaVGhlby5qcGc=-.jpg",
      character: "https://storage.wonderwraps.com/6eeca8a8-3a46-4995-bb9a-d97bfdaa8dad/kYlYjXM9qyld2nhVqtkjoFMsYzkWgj-metaVGhlby5wbmc=-.png",
      name: "Theo",
      style: "Superhero"
    },
    {
      original: "https://storage.wonderwraps.com/f9a1516b-670b-4018-adb0-76b89e7f99ac/2ii4qGLXmYbewYkPgUDxINvarDAU3d-metaSmFtZXMuanBn-.jpg",
      character: "https://storage.wonderwraps.com/0707e8b3-ecd7-43d5-9bd7-8678e99b371a/EmQKu5WF25s0bDzekEnErUZJwJuKlJ-metaSmFtZXMxLmpwZWc=-.jpeg",
      name: "James",
      style: "Adventure"
    },
    {
      original: "https://storage.wonderwraps.com/c9f696fc-a817-44a9-87a1-45f96e13b030/qUl8juS5TDUP2gFBa9fYVTpU2IB6nZ-metaQ2hhcmxpZS5qcGc=-.jpg",
      character: "https://storage.wonderwraps.com/18827642-5c78-49fd-9bc8-3b740f178665/dsv9FAxZO4VNxrrZI8yK1vGoqAu14n-metaYWlfaW1hZ2UuanBlZw==-.jpeg",
      name: "Charlie",
      style: "Fantasy"
    }
  ];

  const features = [
    {
      icon: IconPhoto,
      title: "Character Creation",
      description: "Advanced AI analyzes facial features, expressions, and unique characteristics",
      color: "#3b82f6"
    },
    {
      icon: IconPalette,
      title: "Style Adaptation",
      description: "Converts your child into any artistic style while preserving their essence",
      color: "#8b5cf6"
    },
    {
      icon: IconWand,
      title: "Character Creation",
      description: "Generates a unique cartoon character perfect for storybook adventures",
      color: "#f472b6"
    }
  ];

  // Auto-cycle through features and examples
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  const [currentPair, setCurrentPair] = useState(0);

  useEffect(() => {
    const pairInterval = setInterval(() => {
      setCurrentPair((prev) => (prev + 1) % transformationPairs.length);
    }, 4000);
    return () => clearInterval(pairInterval);
  }, [transformationPairs.length]);

  return (
    <Box
      style={{
        paddingTop: rem(60),
        paddingBottom: rem(60),
        position: 'relative',
      }}
    >
      <Container size="xl">
        <Box
          style={{
            background: isDark 
              ? 'rgba(255, 255, 255, 0.02)'
              : 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(20px)',
            borderRadius: rem(24),
            padding: isMobile ? rem(24) : rem(40),
            border: isDark 
              ? '1px solid rgba(255, 255, 255, 0.08)' 
              : '1px solid rgba(139, 92, 246, 0.1)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background Pattern */}
          <Box
            style={{
              position: 'absolute',
              inset: 0,
              background: `
                radial-gradient(circle at 10% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 90% 80%, rgba(244, 114, 182, 0.08) 0%, transparent 50%)
              `,
              borderRadius: rem(24),
            }}
          />

          <Group align="flex-start" wrap="nowrap" style={{ position: 'relative', zIndex: 2 }}>
            
            {/* Left: Features Content */}
            <Box style={{ flex: 1, marginRight: isMobile ? 0 : rem(40) }}>
              <Stack gap="xl">
                
                {/* Header */}
                <Box>
                  <Group
                    mb="md"
                    style={{
                      background: 'linear-gradient(135deg, #8b5cf6 0%, #f472b6 100%)',
                      backdropFilter: 'blur(12px)',
                      borderRadius: rem(20),
                      padding: `${rem(6)} ${rem(16)}`,
                      display: 'inline-flex',
                      boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)',
                    }}
                  >
                    <IconSparkles size={16} style={{ color: '#ffffff' }} />
                    <Text 
                      size="xs" 
                      fw={600}
                      style={{ 
                        color: '#ffffff',
                        fontFamily: 'Nunito, sans-serif',
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                      }}
                    >
                      How It Works
                    </Text>
                  </Group>

                  <Text
                    size={isMobile ? "xl" : "2xl"}
                    fw={800}
                    mb="md"
                    style={{
                      fontFamily: 'Quicksand, sans-serif',
                      color: isDark ? '#ffffff' : '#1e293b',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.2,
                    }}
                  >
                    Transform Any Photo into a{' '}
                    <Text
                      component="span"
                      inherit
                      style={{
                        background: 'linear-gradient(135deg, #8B5CF6 0%, #f472b6 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      Character
                    </Text>
                  </Text>

                </Box>

                {/* Features List */}
                <Stack gap="lg">
                  {features.map((feature, index) => (
                    <Group
                      key={index}
                      gap="md"
                      align="flex-start"
                      style={{
                        padding: rem(16),
                        borderRadius: rem(16),
                        background: activeFeature === index 
                          ? (isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)')
                          : 'transparent',
                        border: activeFeature === index 
                          ? `1px solid ${feature.color}30`
                          : '1px solid transparent',
                        transition: 'all 0.5s ease',
                        transform: activeFeature === index ? 'translateX(8px)' : 'translateX(0)',
                      }}
                    >
                      {/* Feature Icon */}
                      <Box
                        style={{
                          width: rem(50),
                          height: rem(50),
                          borderRadius: rem(12),
                          background: activeFeature === index 
                            ? `linear-gradient(135deg, ${feature.color} 0%, ${feature.color}80 100%)`
                            : (isDark ? '#374151' : '#f3f4f6'),
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.5s ease',
                          boxShadow: activeFeature === index 
                            ? `0 8px 25px ${feature.color}30`
                            : '0 2px 8px rgba(0,0,0,0.1)',
                        }}
                      >
                        <feature.icon 
                          size={24} 
                          style={{ 
                            color: activeFeature === index ? '#ffffff' : (isDark ? '#9ca3af' : '#6b7280'),
                            transition: 'color 0.5s ease',
                          }} 
                        />
                      </Box>

                      {/* Feature Content */}
                      <Box style={{ flex: 1 }}>
                        <Group gap="xs" mb="xs">
                          <Text
                            size="md"
                            fw={700}
                            style={{
                              color: activeFeature === index 
                                ? feature.color 
                                : (isDark ? '#ffffff' : '#1e293b'),
                              fontFamily: 'Quicksand, sans-serif',
                              transition: 'color 0.5s ease',
                            }}
                          >
                            {feature.title}
                          </Text>
                          
                          {activeFeature === index && (
                            <Box
                              style={{
                                color: feature.color,
                                animation: 'checkmarkPop 0.5s ease-out',
                              }}
                            >
                              <IconCheck size={18} />
                            </Box>
                          )}
                        </Group>
                        
                        <Text
                          size="sm"
                          style={{
                            color: isDark ? '#cbd5e1' : '#64748b',
                            fontFamily: 'Nunito, sans-serif',
                            lineHeight: 1.5,
                          }}
                        >
                          {feature.description}
                        </Text>
                      </Box>
                    </Group>
                  ))}
                </Stack>
              </Stack>
            </Box>

            {/* Right: Image Showcase */}
            <Box 
              style={{ 
                flex: 1,
                display: isMobile ? 'none' : 'block',
                position: 'relative',
                minHeight: rem(600),
              }}
            >
              <Box
                style={{
                  position: 'relative',
                  height: rem(600),
                  borderRadius: rem(20),
                  overflow: 'hidden',
                }}
              >
                {/* Before/After Showcase */}
                <Group gap="xl" align="center" style={{ height: '100%', padding: rem(20) }}>
                  
                  {/* Original Photo */}
                  <Box style={{ flex: 1, textAlign: 'center' }}>
                    <Text
                      size="sm"
                      fw={600}
                      mb="md"
                      style={{
                        color: isDark ? '#cbd5e1' : '#64748b',
                        fontFamily: 'Nunito, sans-serif',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      Before
                    </Text>
                    
                    <Box
                      style={{
                        position: 'relative',
                        width: rem(140),
                        height: rem(140),
                        margin: '0 auto',
                        marginBottom: rem(16),
                      }}
                    >
                      <Box
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: rem(20),
                          overflow: 'hidden',
                          border: '3px solid #e5e7eb',
                          transition: 'all 0.5s ease',
                          transform: 'perspective(1000px) rotateY(-15deg)',
                          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                        }}
                      >
                        <img 
                          src={transformationPairs[currentPair].original}
                          alt="Original"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                      </Box>
                      
                      <Box
                        style={{
                          position: 'absolute',
                          bottom: rem(-8),
                          right: rem(-8),
                          background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
                          borderRadius: '50%',
                          width: rem(32),
                          height: rem(32),
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <IconPhoto size={16} style={{ color: '#ffffff' }} />
                      </Box>
                    </Box>

                    <Text
                      size="sm"
                      fw={600}
                      style={{
                        color: isDark ? '#ffffff' : '#1e293b',
                        fontFamily: 'Quicksand, sans-serif',
                      }}
                    >
                      {transformationPairs[currentPair].name}
                    </Text>
                  </Box>

                  {/* Arrow SVG */}
                  <Box 
                    style={{ 
                      position: 'absolute',
                      top: '25%',
                      left: '30%',
                      transform: 'translate(0, 0)',
                      zIndex: 10,
                      animation: 'arrowPulse 2s ease-in-out infinite',
                    }}
                  >
                    <svg 
                      className="w-36 h-36" 
                      width="113" 
                      height="112" 
                      viewBox="0 0 113 112" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        width: rem(90),
                        height: rem(90),
                        filter: 'drop-shadow(0 4px 12px rgba(139, 92, 246, 0.3))',
                      }}
                    >
                      <path 
                        d="M43.4022 52.3076C42.4085 51.9881 41.7313 51.4496 40.8414 52.3401C37.2081 55.983 34.7371 60.283 33.2731 65.1907C32.5052 67.7651 34.6428 70.1531 37.2119 69.5582C38.1997 69.3297 39.1944 69.0532 40.0883 68.5185C45.4049 65.3405 46.5049 60.366 45.363 54.8201C45.132 53.6941 44.4204 52.6827 43.4022 52.3076ZM102.944 40.369C97.9366 39.4253 93.2916 38.9305 88.6551 38.5273C80.4313 37.8145 72.2455 38.2891 64.2011 40.5039C60.0206 41.6546 55.8667 42.892 51.9721 44.8086C49.4863 46.0304 46.9429 47.2109 44.7302 48.9378C44.3403 49.2408 43.5155 49.5763 44.4432 50.2383C47.5378 52.4529 47.9013 55.8223 48.0994 59.2366C48.2476 61.7805 47.8437 64.361 46.5041 66.4515C44.858 69.0173 42.496 71.0355 39.396 71.7658C38.5574 71.9645 37.8328 72.3987 36.9122 72.4862C33.0274 72.8569 29.3966 66.6337 31.2684 62.6238C32.9983 58.9133 34.7975 55.2716 37.379 52.0698C37.5039 51.9161 37.6587 51.7947 37.5367 51.4091C35.2745 51.5241 32.9999 51.8138 30.727 52.2463C25.5886 53.2256 20.8211 55.2252 16.3906 57.9289C12.4848 60.3109 9.097 63.402 7.00055 67.5805C6.04562 69.4837 5.59329 71.6409 5.50628 73.8049C5.43989 75.4502 5.49683 77.0989 5.50644 78.7474C5.50652 78.926 5.65354 79.1585 5.39678 79.2316C5.2309 79.2779 4.9891 79.2492 4.84572 79.1587C4.56075 78.9737 4.39041 78.6975 4.26867 78.3471C2.43378 73.0674 3.14996 68.1529 6.33671 63.5425C9.77191 58.5665 14.6008 55.3835 19.9333 52.9207C26.162 50.0469 32.6781 48.4182 39.5848 48.9173C40.111 48.9569 40.4896 48.8371 40.9034 48.4873C45.3927 44.7172 50.5729 42.2413 55.9768 40.1178C61.2501 38.0466 66.7104 36.7216 72.2468 35.8256C76.8201 35.0878 81.4774 35.0648 86.1166 35.3369C92.1019 35.6888 98.0001 36.6528 103.892 37.67C104.975 37.8566 105.035 37.875 106.18 37.6013C104.257 36.434 102.488 35.2888 100.649 34.2686C98.1811 32.8957 95.8812 31.2684 93.5267 29.7255C92.7049 29.1885 91.8834 28.6547 90.9475 28.3687C90.0144 28.0839 89.639 27.4204 89.5261 26.5348C89.3768 25.3812 89.9886 24.8733 91.1069 25.2686C93.3334 26.0533 95.2559 27.4149 97.2076 28.6857C100.797 31.0262 104.44 33.2584 108.242 35.2353C108.872 35.5617 109.57 35.822 109.978 36.4956C110.786 37.8255 110.512 38.5222 109.262 39.4213C107.085 40.99 105.03 42.7342 102.896 44.3698C100.578 46.1444 98.2524 47.9026 96.1882 49.9838C95.6208 50.5559 94.7986 50.8497 94.2171 50.3343C93.541 49.7325 93.6987 48.8357 94.2091 48.0597C95.6528 45.8733 97.9356 44.6351 99.8527 42.9833C100.796 42.1689 101.756 41.3733 102.941 40.3724" 
                        fill={isDark ? "#C569FF" : "#8b5cf6"} 
                      />
                    </svg>
                  </Box>

                  {/* Character Result */}
                  <Box style={{ flex: 1, textAlign: 'center' }}>
                    <Text
                      size="sm"
                      fw={600}
                      mb="md"
                      style={{
                        color: isDark ? '#cbd5e1' : '#64748b',
                        fontFamily: 'Nunito, sans-serif',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      After
                    </Text>
                    
                    <Box
                      style={{
                        position: 'relative',
                        width: rem(280),
                        height: rem(280),
                        margin: '0 auto',
                        marginBottom: rem(16),
                      }}
                    >
                      <Box
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: rem(20),
                          overflow: 'hidden',
                          border: '3px solid #8b5cf6',
                          transition: 'all 0.5s ease',
                          transform: 'perspective(1000px) rotateY(15deg)',
                          boxShadow: '0 15px 40px rgba(139, 92, 246, 0.4)',
                          animation: 'characterGlow 3s ease-in-out infinite',
                        }}
                      >
                        <img 
                          src={transformationPairs[currentPair].character}
                          alt="Character"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                      </Box>
                      
                      <Box
                        style={{
                          position: 'absolute',
                          bottom: rem(-12),
                          right: rem(-12),
                          background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                          borderRadius: '50%',
                          width: rem(48),
                          height: rem(48),
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <IconSparkles size={24} style={{ color: '#ffffff' }} />
                      </Box>
                    </Box>

                    <Text
                      size="sm"
                      fw={600}
                      style={{
                        color: '#8b5cf6',
                        fontFamily: 'Quicksand, sans-serif',
                      }}
                    >
                      {transformationPairs[currentPair].style} Style
                    </Text>
                  </Box>
                </Group>
              </Box>
            </Box>
          </Group>
        </Box>
      </Container>

      {/* 3D Poster Animations */}
      <style jsx global>{`
        @keyframes checkmarkPop {
          0% { 
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
          50% { 
            transform: scale(1.2) rotate(0deg);
            opacity: 1;
          }
          100% { 
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
        
        @keyframes float3D {
          0%, 100% { 
            transform: perspective(1000px) rotateX(0deg) translateY(0px);
          }
          50% { 
            transform: perspective(1000px) rotateX(5deg) translateY(-4px);
          }
        }
        
        @keyframes characterGlow {
          0%, 100% { 
            box-shadow: 0 15px 40px rgba(139, 92, 246, 0.4);
          }
          50% { 
            box-shadow: 0 20px 50px rgba(139, 92, 246, 0.6);
          }
        }
        
        @keyframes arrowPulse {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          50% { 
            transform: translate(0, 0) scale(1.1);
            opacity: 1;
          }
        }
        
      `}</style>
    </Box>
  );
}

export default PosterShowcaseFeatures;