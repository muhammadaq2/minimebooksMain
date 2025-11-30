import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Text, 
  Box,
  Group,
  Stack,
  SimpleGrid,
  Button,
  rem,
  useMantineColorScheme 
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import { 
  IconSparkles, 
  IconArrowRight,
  IconPhoto,
  IconPalette,
  IconBook2,
  IconWand,
  IconCamera,
  IconBrush,
  IconShoppingCart
} from '@tabler/icons-react';

function CharacterTransformationShowcase() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const isMobile = useMediaQuery('(max-width: 768px)');
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  // Navigate to shop function
  const handleShopNavigation = () => {
    navigate('/shop');
  };

  // Auto-cycle through transformation steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Sample transformation data - you'll replace these URLs with your actual images
  const transformationData = {
    realPhotos: [
      'https://storage.wonderwraps.com/c9f696fc-a817-44a9-87a1-45f96e13b030/qUl8juS5TDUP2gFBa9fYVTpU2IB6nZ-metaQ2hhcmxpZS5qcGc=-.jpg',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    ],
    cartoonCharacters: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop',
    ],
    bookCovers: [
      'https://storage.wonderwraps.com/18827642-5c78-49fd-9bc8-3b740f178665/dsv9FAxZO4VNxrrZI8yK1vGoqAu14n-metaYWlfaW1hZ2UuanBlZw==-.jpeg',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
    ]
  };

  const characterStyles = [
    {
      name: 'Princess',
      theme: 'Magical Kingdom',
      color: '#f472b6',
      gradient: 'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop'
    },
    {
      name: 'Superhero',
      theme: 'City Protector',
      color: '#3b82f6',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop'
    },
    {
      name: 'Space Explorer',
      theme: 'Cosmic Adventure',
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop'
    },
    {
      name: 'Animal Friend',
      theme: 'Safari Adventure',
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop'
    }
  ];

  const careerOptions = [
    { name: 'Doctor', icon: '👩‍⚕️', color: '#10b981' },
    { name: 'Firefighter', icon: '👨‍🚒', color: '#ef4444' },
    { name: 'Pilot', icon: '👨‍✈️', color: '#3b82f6' },
    { name: 'Artist', icon: '👩‍🎨', color: '#8b5cf6' },
    { name: 'Scientist', icon: '👩‍🔬', color: '#06b6d4' },
    { name: 'Teacher', icon: '👨‍🏫', color: '#f59e0b' }
  ];

  return (
    <Box
      style={{
        background: isDark 
          ? 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)'
          : 'linear-gradient(135deg, #fef3c7 0%, #fde68a 10%, #f3e8ff 30%, #e0e7ff 60%, #dbeafe 90%, #f0f9ff 100%)',
        paddingTop: rem(100),
        paddingBottom: rem(100),
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Professional Decorative Elements */}
      <Box
        style={{
          position: 'absolute',
          top: '8%',
          right: '6%',
          color: isDark ? '#facc15' : '#8B5CF6',
          animation: 'sparkleAndFloat 4s ease-in-out infinite',
          zIndex: 2,
          opacity: 0.8,
        }}
      >
        <IconSparkles size={24} />
      </Box>

      <Box
        style={{
          position: 'absolute',
          top: '20%',
          left: '4%',
          color: '#f472b6',
          animation: 'sparkleAndFloat 5s ease-in-out infinite 1s',
          zIndex: 2,
          opacity: 0.7,
        }}
      >
        <IconWand size={20} />
      </Box>

      <Box
        style={{
          position: 'absolute',
          bottom: '12%',
          right: '8%',
          color: isDark ? '#8b5cf6' : '#a855f7',
          animation: 'sparkleAndFloat 6s ease-in-out infinite 2s',
          zIndex: 1,
          opacity: 0.6,
        }}
      >
        <IconPalette size={28} />
      </Box>

      <Container size="xl" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Header Section */}
        <Box ta="center" mb={isMobile ? rem(50) : rem(80)}>
          <Group
            justify="center"
            mb={isMobile ? "lg" : "xl"}
            style={{
              background: isDark 
                ? 'rgba(139, 92, 246, 0.1)' 
                : 'rgba(139, 92, 246, 0.1)',
              backdropFilter: 'blur(16px)',
              borderRadius: isMobile ? rem(25) : rem(30),
              padding: isMobile ? `${rem(8)} ${rem(20)}` : `${rem(10)} ${rem(24)}`,
              border: `1px solid ${isDark ? 'rgba(139, 92, 246, 0.2)' : 'rgba(139, 92, 246, 0.2)'}`,
              display: 'inline-flex',
              boxShadow: isDark 
                ? '0 8px 32px rgba(139, 92, 246, 0.1)' 
                : '0 8px 32px rgba(139, 92, 246, 0.08)',
            }}
          >
            <Group gap={isMobile ? "xs" : "xs"}>
              <IconWand size={isMobile ? 16 : 18} style={{ color: isDark ? '#c4b5fd' : '#8B5CF6' }} />
              <Text 
                size={isMobile ? "xs" : "sm"} 
                fw={600}
                style={{ 
                  color: isDark ? '#c4b5fd' : '#8B5CF6',
                  fontFamily: 'Nunito, sans-serif',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}
              >
                AI Magic in Action
              </Text>
            </Group>
          </Group>

          <Text
            component="h2"
            size={isMobile ? "1.8rem" : "3rem"}
            fw={800}
            ta="center"
            mb={isMobile ? "lg" : "xl"}
            style={{
              fontFamily: 'Quicksand, sans-serif',
              color: isDark ? '#ffffff' : '#1e293b',
              letterSpacing: '-0.02em',
              lineHeight: isMobile ? 1.2 : 1.1,
              textShadow: isDark ? '0 2px 4px rgba(255,255,255,0.1)' : '0 2px 4px rgba(0,0,0,0.1)',
              padding: isMobile ? `0 ${rem(16)}` : '0',
            }}
          >
            From{' '}
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
              Photo
            </Text>
            {isMobile ? <br /> : ' '}
            to{' '}
            <Text
              component="span"
              inherit
              style={{
                background: 'linear-gradient(135deg, #facc15 0%, #fb923c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Storybook Hero
            </Text>
          </Text>

          <Text
            size={isMobile ? "sm" : "lg"}
            mb={isMobile ? "lg" : "xl"}
            style={{
              color: isDark ? '#e2e8f0' : '#475569',
              fontFamily: 'Nunito, sans-serif',
              maxWidth: isMobile ? '100%' : rem(700),
              margin: '0 auto',
              lineHeight: 1.6,
              padding: isMobile ? `0 ${rem(16)}` : '0',
              fontSize: isMobile ? rem(15) : rem(18),
            }}
          >
            Watch the magic unfold as our advanced AI transforms your child's photo into a personalized cartoon character, ready for their own adventure story.
          </Text>

          {/* Primary CTA Button */}
          <Group justify="center" style={{ padding: isMobile ? `0 ${rem(16)}` : '0' }}>
            <Button
              size={isMobile ? "md" : "lg"}
              onClick={handleShopNavigation}
              style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #f472b6 100%)',
                border: 'none',
                borderRadius: rem(50),
                padding: isMobile ? `${rem(12)} ${rem(24)}` : `${rem(16)} ${rem(32)}`,
                fontSize: isMobile ? rem(14) : rem(16),
                fontWeight: 700,
                fontFamily: 'Quicksand, sans-serif',
                boxShadow: '0 8px 25px rgba(139, 92, 246, 0.3)',
                transition: 'all 0.3s ease',
                textTransform: 'none',
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(139, 92, 246, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.3)';
                }
              }}
              leftSection={<IconShoppingCart size={isMobile ? 18 : 20} />}
            >
              Start Creating Now
            </Button>
          </Group>
        </Box>

        {/* 3D Transformation Process */}
        <Box
          mb={isMobile ? rem(50) : rem(80)}
          style={{
            background: isDark 
              ? 'rgba(255, 255, 255, 0.03)'
              : 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(20px)',
            borderRadius: isMobile ? rem(20) : rem(24),
            padding: isMobile ? rem(24) : rem(40),
            border: isDark 
              ? '1px solid rgba(255, 255, 255, 0.1)' 
              : '1px solid rgba(139, 92, 246, 0.1)',
            width: '100%',
            maxWidth: '100%',
            overflow: 'hidden',
          }}
        >
          {isMobile ? (
            // Mobile: Vertical Stack Layout
            <Stack align="center" gap={rem(32)}>
              {/* Step 1: Real Photo - Mobile */}
              <Box ta="center" style={{ width: '100%' }}>
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
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: `3px solid ${activeStep >= 0 ? '#8B5CF6' : isDark ? '#374151' : '#e5e7eb'}`,
                      transition: 'all 0.5s ease',
                      transform: activeStep >= 0 ? 'scale(1.05)' : 'scale(1)',
                      boxShadow: activeStep >= 0 
                        ? '0 15px 30px rgba(139, 92, 246, 0.3)' 
                        : '0 8px 20px rgba(0,0,0,0.1)',
                    }}
                  >
                    <img 
                      src={transformationData.realPhotos[0]}
                      alt="Child's Photo"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                  
                  {/* Photo Icon Overlay - Mobile */}
                  <Box
                    style={{
                      position: 'absolute',
                      top: rem(-8),
                      right: rem(-8),
                      background: 'linear-gradient(135deg, #8B5CF6 0%, #9333ea 100%)',
                      borderRadius: '50%',
                      width: rem(32),
                      height: rem(32),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(139, 92, 246, 0.4)',
                    }}
                  >
                    <IconCamera size={16} style={{ color: '#ffffff' }} />
                  </Box>
                </Box>

                <Text fw={700} size="md" mb="xs" style={{ color: isDark ? '#ffffff' : '#1e293b', fontFamily: 'Quicksand, sans-serif' }}>
                  1. Upload Photo
                </Text>
                <Text size="sm" style={{ color: isDark ? '#cbd5e1' : '#64748b', fontFamily: 'Nunito, sans-serif', textAlign: 'center' }}>
                  Start with your child's favorite photo
                </Text>
              </Box>

              {/* Mobile Arrow Down */}
              <Box style={{ display: 'flex', justifyContent: 'center' }}>
                <svg 
                  width="24" 
                  height="40" 
                  viewBox="0 0 24 40" 
                  style={{ 
                    color: activeStep >= 1 ? '#8B5CF6' : isDark ? '#374151' : '#e5e7eb',
                    filter: 'drop-shadow(0 2px 4px rgba(139, 92, 246, 0.2))',
                    transform: 'rotate(90deg)',
                    transition: 'all 0.5s ease',
                  }}
                >
                  <path 
                    d="M2 15 Q12 5, 22 15" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none"
                    strokeLinecap="round"
                  />
                  <polygon 
                    points="22,15 18,12 18,18" 
                    fill="currentColor"
                  />
                </svg>
              </Box>

              {/* Step 2: AI Processing - Mobile */}
              <Box ta="center" style={{ width: '100%' }}>
                <Box
                  style={{
                    position: 'relative',
                    width: rem(140),
                    height: rem(140),
                    margin: '0 auto',
                    marginBottom: rem(16),
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #f472b6 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.5s ease',
                    transform: activeStep >= 1 ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: activeStep >= 1 
                      ? '0 15px 30px rgba(139, 92, 246, 0.4)' 
                      : '0 8px 20px rgba(139, 92, 246, 0.2)',
                  }}
                >
                  <IconBrush 
                    size={48} 
                    style={{ 
                      color: '#ffffff',
                      animation: activeStep >= 1 ? 'spin 2s linear infinite' : 'none',
                    }} 
                  />
                  
                  {/* Sparkle effects - Mobile */}
                  {activeStep >= 1 && (
                    <>
                      <Box
                        style={{
                          position: 'absolute',
                          top: '20%',
                          right: '20%',
                          color: '#ffffff',
                          animation: 'sparkleGlow 1s ease-in-out infinite',
                        }}
                      >
                        <IconSparkles size={12} />
                      </Box>
                      <Box
                        style={{
                          position: 'absolute',
                          bottom: '25%',
                          left: '25%',
                          color: '#ffffff',
                          animation: 'sparkleGlow 1s ease-in-out infinite 0.5s',
                        }}
                      >
                        <IconSparkles size={10} />
                      </Box>
                    </>
                  )}
                </Box>

                <Text fw={700} size="md" mb="xs" style={{ color: isDark ? '#ffffff' : '#1e293b', fontFamily: 'Quicksand, sans-serif' }}>
                  2. AI Transformation
                </Text>
                <Text size="sm" style={{ color: isDark ? '#cbd5e1' : '#64748b', fontFamily: 'Nunito, sans-serif', textAlign: 'center' }}>
                  Our AI creates a unique cartoon character
                </Text>
              </Box>

              {/* Mobile Arrow Down */}
              <Box style={{ display: 'flex', justifyContent: 'center' }}>
                <svg 
                  width="24" 
                  height="40" 
                  viewBox="0 0 24 40" 
                  style={{ 
                    color: activeStep >= 2 ? '#f59e0b' : isDark ? '#374151' : '#e5e7eb',
                    filter: 'drop-shadow(0 2px 4px rgba(245, 158, 11, 0.2))',
                    transform: 'rotate(90deg)',
                    transition: 'all 0.5s ease',
                  }}
                >
                  <path 
                    d="M2 15 Q12 5, 22 15" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none"
                    strokeLinecap="round"
                  />
                  <polygon 
                    points="22,15 18,12 18,18" 
                    fill="currentColor"
                  />
                </svg>
              </Box>

              {/* Step 3: Storybook - Mobile */}
              <Box ta="center" style={{ width: '100%' }}>
                <Box
                  style={{
                    position: 'relative',
                    width: rem(110),
                    height: rem(140),
                    margin: '0 auto',
                    marginBottom: rem(16),
                  }}
                >
                  <Box
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: rem(12),
                      overflow: 'hidden',
                      border: `3px solid ${activeStep >= 2 ? '#f59e0b' : isDark ? '#374151' : '#e5e7eb'}`,
                      transition: 'all 0.5s ease',
                      transform: activeStep >= 2 ? 'scale(1.05)' : 'scale(1)',
                      boxShadow: activeStep >= 2 
                        ? '0 15px 30px rgba(245, 158, 11, 0.3)' 
                        : '0 8px 20px rgba(0,0,0,0.1)',
                    }}
                  >
                    <img 
                      src={transformationData.bookCovers[0]}
                      alt="Personalized Book"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                  
                  {/* Book Icon Overlay - Mobile */}
                  <Box
                    style={{
                      position: 'absolute',
                      top: rem(-8),
                      right: rem(-8),
                      background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                      borderRadius: '50%',
                      width: rem(32),
                      height: rem(32),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(245, 158, 11, 0.4)',
                    }}
                  >
                    <IconBook2 size={16} style={{ color: '#ffffff' }} />
                  </Box>
                </Box>

                <Text fw={700} size="md" mb="xs" style={{ color: isDark ? '#ffffff' : '#1e293b', fontFamily: 'Quicksand, sans-serif' }}>
                  3. Personalized Book
                </Text>
                <Text size="sm" style={{ color: isDark ? '#cbd5e1' : '#64748b', fontFamily: 'Nunito, sans-serif', textAlign: 'center' }}>
                  Your child becomes the story's hero
                </Text>
              </Box>
            </Stack>
          ) : (
            // Desktop: Horizontal Grid Layout  
            <SimpleGrid
              cols={{ base: 1, md: 3 }}
              spacing={rem(40)}
              style={{ alignItems: 'center' }}
            >
            {/* Step 1: Real Photo */}
            <Box ta="center">
              <Box
                style={{
                  position: 'relative',
                  width: rem(200),
                  height: rem(200),
                  margin: '0 auto',
                  marginBottom: rem(24),
                }}
              >
                <Box
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: `4px solid ${activeStep >= 0 ? '#8B5CF6' : isDark ? '#374151' : '#e5e7eb'}`,
                    transition: 'all 0.5s ease',
                    transform: activeStep >= 0 ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: activeStep >= 0 
                      ? '0 20px 40px rgba(139, 92, 246, 0.3)' 
                      : '0 10px 25px rgba(0,0,0,0.1)',
                  }}
                >
                  <img 
                    src={transformationData.realPhotos[0]}
                    alt="Child's Photo"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                
                {/* Photo Icon Overlay */}
                <Box
                  style={{
                    position: 'absolute',
                    top: rem(-10),
                    right: rem(-10),
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #9333ea 100%)',
                    borderRadius: '50%',
                    width: rem(40),
                    height: rem(40),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(139, 92, 246, 0.4)',
                  }}
                >
                  <IconCamera size={20} style={{ color: '#ffffff' }} />
                </Box>
              </Box>

              <Text fw={700} size="lg" mb="xs" style={{ color: isDark ? '#ffffff' : '#1e293b', fontFamily: 'Quicksand, sans-serif' }}>
                1. Upload Photo
              </Text>
              <Text size="sm" style={{ color: isDark ? '#cbd5e1' : '#64748b', fontFamily: 'Nunito, sans-serif' }}>
                Start with your child's favorite photo
              </Text>
            </Box>

            {/* Arrow 1 */}
            <Box ta="center" style={{ display: isMobile ? 'none' : 'block' }}>
              <IconArrowRight 
                size={40} 
                style={{ 
                  color: activeStep >= 1 ? '#8B5CF6' : isDark ? '#374151' : '#e5e7eb',
                  transition: 'all 0.5s ease',
                }} 
              />
            </Box>

            {/* Step 2: AI Processing */}
            <Box ta="center">
              <Box
                style={{
                  position: 'relative',
                  width: rem(200),
                  height: rem(200),
                  margin: '0 auto',
                  marginBottom: rem(24),
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #f472b6 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.5s ease',
                  transform: activeStep >= 1 ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: activeStep >= 1 
                    ? '0 20px 40px rgba(139, 92, 246, 0.4)' 
                    : '0 10px 25px rgba(139, 92, 246, 0.2)',
                }}
              >
                <IconBrush 
                  size={60} 
                  style={{ 
                    color: '#ffffff',
                    animation: activeStep >= 1 ? 'spin 2s linear infinite' : 'none',
                  }} 
                />
                
                {/* Sparkle effects */}
                {activeStep >= 1 && (
                  <>
                    <Box
                      style={{
                        position: 'absolute',
                        top: '20%',
                        right: '20%',
                        color: '#ffffff',
                        animation: 'sparkleGlow 1s ease-in-out infinite',
                      }}
                    >
                      <IconSparkles size={16} />
                    </Box>
                    <Box
                      style={{
                        position: 'absolute',
                        bottom: '25%',
                        left: '25%',
                        color: '#ffffff',
                        animation: 'sparkleGlow 1s ease-in-out infinite 0.5s',
                      }}
                    >
                      <IconSparkles size={12} />
                    </Box>
                  </>
                )}
              </Box>

              <Text fw={700} size="lg" mb="xs" style={{ color: isDark ? '#ffffff' : '#1e293b', fontFamily: 'Quicksand, sans-serif' }}>
                2. AI Transformation
              </Text>
              <Text size="sm" style={{ color: isDark ? '#cbd5e1' : '#64748b', fontFamily: 'Nunito, sans-serif' }}>
                Our AI creates a unique cartoon character
              </Text>
            </Box>

            {/* Arrow 2 */}
            <Box ta="center" style={{ display: isMobile ? 'none' : 'block' }}>
              <IconArrowRight 
                size={40} 
                style={{ 
                  color: activeStep >= 2 ? '#8B5CF6' : isDark ? '#374151' : '#e5e7eb',
                  transition: 'all 0.5s ease',
                }} 
              />
            </Box>

            {/* Step 3: Storybook */}
            <Box ta="center">
              <Box
                style={{
                  position: 'relative',
                  width: rem(160),
                  height: rem(200),
                  margin: '0 auto',
                  marginBottom: rem(24),
                }}
              >
                <Box
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: rem(12),
                    overflow: 'hidden',
                    border: `4px solid ${activeStep >= 2 ? '#f59e0b' : isDark ? '#374151' : '#e5e7eb'}`,
                    transition: 'all 0.5s ease',
                    transform: activeStep >= 2 ? 'scale(1.05) rotateY(10deg)' : 'scale(1)',
                    boxShadow: activeStep >= 2 
                      ? '0 20px 40px rgba(245, 158, 11, 0.3)' 
                      : '0 10px 25px rgba(0,0,0,0.1)',
                    perspective: '1000px',
                  }}
                >
                  <img 
                    src={transformationData.bookCovers[0]}
                    alt="Personalized Book"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                
                {/* Book Icon Overlay */}
                <Box
                  style={{
                    position: 'absolute',
                    top: rem(-10),
                    right: rem(-10),
                    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                    borderRadius: '50%',
                    width: rem(40),
                    height: rem(40),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(245, 158, 11, 0.4)',
                  }}
                >
                  <IconBook2 size={20} style={{ color: '#ffffff' }} />
                </Box>
              </Box>

              <Text fw={700} size="lg" mb="xs" style={{ color: isDark ? '#ffffff' : '#1e293b', fontFamily: 'Quicksand, sans-serif' }}>
                3. Personalized Book
              </Text>
              <Text size="sm" style={{ color: isDark ? '#cbd5e1' : '#64748b', fontFamily: 'Nunito, sans-serif' }}>
                Your child becomes the story's hero
              </Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Character Styles Showcase */}
        <Box mb={isMobile ? rem(50) : rem(80)}>
          <Text
            size={isMobile ? "lg" : "xl"}
            fw={700}
            ta="center"
            mb={isMobile ? "md" : "lg"}
            style={{
              color: isDark ? '#ffffff' : '#1e293b',
              fontFamily: 'Quicksand, sans-serif',
              padding: isMobile ? `0 ${rem(16)}` : '0',
            }}
          >
            Endless Character Possibilities
          </Text>

          <SimpleGrid
            cols={{ base: 2, sm: 4 }}
            spacing={isMobile ? rem(16) : rem(24)}
            style={{ 
              maxWidth: isMobile ? '100%' : rem(800), 
              margin: '0 auto',
              padding: isMobile ? `0 ${rem(16)}` : '0',
            }}
          >
            {characterStyles.map((style, index) => (
              <Box
                key={style.name}
                onClick={handleShopNavigation}
                style={{
                  background: isDark 
                    ? 'rgba(255, 255, 255, 0.05)'
                    : 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: rem(20),
                  padding: rem(20),
                  border: isDark 
                    ? '1px solid rgba(255, 255, 255, 0.1)' 
                    : '1px solid rgba(139, 92, 246, 0.1)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                    e.currentTarget.style.boxShadow = `0 20px 40px ${style.color}40`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
                  }
                }}
                onTouchStart={(e) => {
                  if (isMobile) {
                    e.currentTarget.style.transform = 'scale(0.98)';
                    e.currentTarget.style.boxShadow = `0 10px 25px ${style.color}30`;
                  }
                }}
                onTouchEnd={(e) => {
                  if (isMobile) {
                    setTimeout(() => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
                    }, 100);
                  }
                }}
              >
                <Box
                  style={{
                    width: rem(80),
                    height: rem(80),
                    borderRadius: '50%',
                    background: style.gradient,
                    margin: '0 auto',
                    marginBottom: rem(12),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}
                >
                  <img 
                    src={style.image}
                    alt={style.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                
                <Text fw={600} size="sm" mb="xs" style={{ color: isDark ? '#ffffff' : '#1e293b', fontFamily: 'Quicksand, sans-serif' }}>
                  {style.name}
                </Text>
                <Text size="xs" style={{ color: isDark ? '#cbd5e1' : '#64748b', fontFamily: 'Nunito, sans-serif' }}>
                  {style.theme}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Career Dreams Section */}
        <Box
          style={{
            background: isDark 
              ? 'rgba(255, 255, 255, 0.03)'
              : 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(20px)',
            borderRadius: isMobile ? rem(20) : rem(24),
            padding: isMobile ? rem(24) : rem(40),
            border: isDark 
              ? '1px solid rgba(255, 255, 255, 0.1)' 
              : '1px solid rgba(139, 92, 246, 0.1)',
            margin: isMobile ? `0 ${rem(16)}` : '0',
            width: isMobile ? 'calc(100% - 32px)' : 'auto',
          }}
        >
          <Text
            size={isMobile ? "lg" : "xl"}
            fw={700}
            ta="center"
            mb={isMobile ? "md" : "lg"}
            style={{
              color: isDark ? '#ffffff' : '#1e293b',
              fontFamily: 'Quicksand, sans-serif',
            }}
          >
            Inspire Their Dreams
          </Text>

          <Text
            size={isMobile ? "sm" : "md"}
            ta="center"
            mb={isMobile ? "lg" : "xl"}
            style={{
              color: isDark ? '#cbd5e1' : '#64748b',
              fontFamily: 'Nunito, sans-serif',
              maxWidth: isMobile ? '100%' : rem(600),
              margin: '0 auto',
              fontSize: isMobile ? rem(14) : rem(16),
              lineHeight: 1.6,
            }}
          >
            From doctors to astronauts, let your child explore any career through personalized adventures
          </Text>

          <SimpleGrid
            cols={{ base: 3, sm: 6 }}
            spacing={isMobile ? rem(12) : rem(16)}
            style={{ 
              maxWidth: isMobile ? '100%' : rem(600), 
              margin: '0 auto' 
            }}
          >
            {careerOptions.map((career, index) => (
              <Box
                key={career.name}
                onClick={handleShopNavigation}
                style={{
                  background: `${career.color}20`,
                  borderRadius: isMobile ? rem(12) : rem(16),
                  padding: isMobile ? rem(12) : rem(16),
                  textAlign: 'center',
                  border: `2px solid ${career.color}40`,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  minHeight: isMobile ? rem(80) : rem(90),
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: isMobile ? rem(4) : rem(8),
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.background = `${career.color}30`;
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.background = `${career.color}20`;
                    e.currentTarget.style.transform = 'scale(1)';
                  }
                }}
                onTouchStart={(e) => {
                  if (isMobile) {
                    e.currentTarget.style.background = `${career.color}35`;
                    e.currentTarget.style.transform = 'scale(0.95)';
                  }
                }}
                onTouchEnd={(e) => {
                  if (isMobile) {
                    setTimeout(() => {
                      e.currentTarget.style.background = `${career.color}20`;
                      e.currentTarget.style.transform = 'scale(1)';
                    }, 150);
                  }
                }}
              >
                <Text 
                  size={isMobile ? "1.4rem" : "2rem"} 
                  mb={isMobile ? rem(2) : "xs"}
                  style={{
                    lineHeight: 1,
                  }}
                >
                  {career.icon}
                </Text>
                <Text 
                  size={isMobile ? "10px" : "xs"} 
                  fw={600} 
                  style={{ 
                    color: career.color, 
                    fontFamily: 'Nunito, sans-serif',
                    fontSize: isMobile ? rem(10) : rem(12),
                    lineHeight: 1.2,
                    textAlign: 'center',
                  }}
                >
                  {career.name}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

      </Container>

      {/* Professional Animations */}
      <style jsx global>{`
        @keyframes sparkleAndFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.8;
          }
          25% { 
            transform: translateY(-8px) rotate(90deg) scale(1.1); 
            opacity: 1;
          }
          50% { 
            transform: translateY(-15px) rotate(180deg) scale(1.2); 
            opacity: 0.9;
          }
          75% { 
            transform: translateY(-8px) rotate(270deg) scale(1.1); 
            opacity: 1;
          }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes sparkleGlow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </Box>
  );
}

export default CharacterTransformationShowcase;