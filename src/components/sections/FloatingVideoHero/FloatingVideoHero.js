import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Text, 
  Box,
  Group,
  Stack,
  Button,
  rem,
  Badge,
  Grid
} from '@mantine/core';
import { useMantineColorScheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import { 
  IconSparkles,
  IconPhoto,
  IconPalette,
  IconWand,
  IconCheck,
  IconHeart,
  IconStarFilled,
  IconCircleDot,
  IconStar
} from '@tabler/icons-react';

function DynamicHeroSection() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [activeFeature, setActiveFeature] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  const handleShopNavigation = () => {
    navigate('/shop');
  };

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Your consistent color palette
  const colors = isDark ? {
    primary: '#a855f7',
    secondary: '#facc15',
    accent: '#14b8a6',
    background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)',
    text: '#f8fafc',
    textSecondary: '#cbd5e1',
    glassBg: 'rgba(255, 255, 255, 0.1)',
    border: 'rgba(168, 85, 247, 0.3)',
  } : {
    primary: '#8B5CF6',
    secondary: '#facc15',
    accent: '#14b8a6',
    background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 10%, #f3e8ff 30%, #e0e7ff 60%, #dbeafe 90%, #f0f9ff 100%)',
    text: '#1e293b',
    textSecondary: '#475569',
    glassBg: 'rgba(255, 255, 255, 0.7)',
    border: 'rgba(139, 92, 246, 0.2)',
  };

  // Your transformation examples
const transformationPairs = [
  {
    original: "/images%20kids/sec1imgr1.jpg",
    character: "/images%20kids/sec1img1.jpg",
    name: "Theo",
    style: "Superhero"
  },
  {
    original: "/images%20kids/sec1imgr1.jpg",
    character: "/images%20kids/sec1img1.jpg",
    name: "James",
    style: "Adventure"
  },
  {
    original: "/images%20kids/sec1imgr1.jpg",
    character: "/images%20kids/sec1img1.jpg",
    name: "Charlie",
    style: "Fantasy"
  }
];


const features = [
    {
      icon: IconPhoto,
      title: "Character Creation",
      description: "AI analyzes your baby’s face and creates a cute illustrated version of them.",
      color: "#3b82f6"
    },
    {
      icon: IconPalette,
      title: "Style Adaptation",
      description: "Transform the photo into any art style—fantasy, cartoon, or storybook.",
      color: "#8b5cf6"
    },
    {
      icon: IconWand,
      title: "Unique Character Design",
      description: "Your AI baby becomes the hero of their personalized book.",
      color: "#f472b6"
    }
  ];

  // Auto-cycle through features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  // Cycle through transformation pairs for Before/After
  const [currentPair, setCurrentPair] = useState(0);
  useEffect(() => {
    const pairInterval = setInterval(() => {
      setCurrentPair((prev) => (prev + 1) % transformationPairs.length);
    }, 4000);
    return () => clearInterval(pairInterval);
  }, [transformationPairs.length]);

  // Decorative Elements Component
  const DecorativeElements = () => (
    <>
      <Box
        style={{
          position: 'absolute',
          top: '15%',
          right: '8%',
          color: isDark ? colors.secondary : colors.primary,
          animation: 'sparkleAndFloat 4s ease-in-out infinite',
          transform: `translateY(${scrollY * 0.2}px)`,
          zIndex: 2,
        }}
      >
        <IconSparkles size={28} />
      </Box>

      <Box
        style={{
          position: 'absolute',
          top: '25%',
          left: '8%',
          color: '#f472b6',
          animation: 'sparkleAndFloat 5s ease-in-out infinite 1s',
          transform: `translateY(${scrollY * 0.18}px)`,
          zIndex: 2,
        }}
      >
        <IconStarFilled size={24} />
      </Box>

      <Box
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          color: isDark ? colors.primary : '#a855f7',
          animation: 'sparkleAndFloat 6s ease-in-out infinite 2s',
          transform: `translateY(${scrollY * 0.12}px) rotate(15deg)`,
          zIndex: 2,
        }}
      >
        <IconHeart size={32} />
      </Box>

      <Box
        style={{
          position: 'absolute',
          top: '12%',
          left: '15%',
          color: isDark ? '#fbbf24' : '#f59e0b',
          animation: 'sparkleAndFloat 7s ease-in-out infinite 0.5s',
          transform: `translateY(${scrollY * 0.15}px)`,
          zIndex: 1,
        }}
      >
        <IconStar size={20} />
      </Box>

      <Box
        style={{
          position: 'absolute',
          top: '18%',
          left: '25%',
          color: isDark ? '#fde047' : '#eab308',
          animation: 'sparkleAndFloat 4.5s ease-in-out infinite 2s',
          transform: `translateY(${scrollY * 0.25}px)`,
          zIndex: 1,
        }}
      >
        <IconCircleDot size={14} />
      </Box>
    </>
  );

  return (
    <Box
      style={{
        minHeight: '100vh',
        position: 'relative',
        background: colors.background,
        paddingTop: rem(140),
        paddingBottom: rem(80),
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <DecorativeElements />
      
      <Container size="xl" style={{ position: 'relative', zIndex: 10 }}>
        <Grid align="center" gutter={isMobile ? "xl" : "4xl"}>
          {/* Left Content - Hero Style */}
          <Grid.Col span={{ base: 12, md: 6 }} order={isMobile ? 2 : 1}>
            <Stack gap={isMobile ? "lg" : "xl"} align={isMobile ? "center" : "flex-start"}>
              {/* Badge */}
              <Group
                gap="xs"
                justify={isMobile ? "center" : "flex-start"}
                style={{
                  background: colors.glassBg,
                  backdropFilter: 'blur(16px)',
                  borderRadius: rem(25),
                  padding: `${rem(8)} ${rem(16)}`,
                  border: `1px solid ${colors.border}`,
                  width: 'fit-content',
                  boxShadow: isDark 
                    ? '0 4px 15px rgba(139, 92, 246, 0.1)' 
                    : '0 4px 15px rgba(139, 92, 246, 0.08)',
                }}
              >
                <IconSparkles size={18} style={{ color: colors.primary }} />
                <Text 
                  size="sm" 
                  fw={600}
                  style={{ 
                    color: colors.primary,
                    fontFamily: 'Nunito, sans-serif',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                  }}
                >
                 Your Baby, The Star
                </Text>
              </Group>

              {/* Hero Heading */}
              <Text
                component="h1"
                size={isMobile ? "2.8rem" : "4rem"}
                fw={800}
                lh={1.1}
                ta={isMobile ? "center" : "left"}
                style={{
                  fontFamily: 'Quicksand, sans-serif',
                  color: colors.text,
                  letterSpacing: '-0.02em',
                  textShadow: isDark ? '0 2px 4px rgba(255,255,255,0.1)' : '0 2px 4px rgba(0,0,0,0.1)',
                  maxWidth: isMobile ? '100%' : 'none',
                }}
              >
                Magical Personalized Books{' '}
                <Text
                  component="span"
                  inherit
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, #f472b6 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    display: 'inline-block',
                  }}
                >
                  Featuring Your Little One
                </Text>
              </Text>

              {/* Subtitle */}
              {/* How It Works Badge */}

              {/* Enhanced Features List */}
              <Stack gap="lg" align={isMobile ? "center" : "flex-start"} style={{ width: '100%' }}>
                {features.map((feature, index) => (
                  <Group
                    key={index}
                    gap="md"
                    align="flex-start"
                    justify={isMobile ? "center" : "flex-start"}
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
                      width: '100%',
                      maxWidth: isMobile ? rem(400) : 'none',
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
                        flexShrink: 0,
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
                    <Box style={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}>
                      <Group gap="xs" mb="xs" justify={isMobile ? "center" : "flex-start"}>
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

              {/* Hero CTA Buttons */}
              <Group gap="md" justify={isMobile ? "center" : "flex-start"} style={{ marginTop: rem(20) }}>
                <Button
                  size={isMobile ? "md" : "lg"}
                  radius="xl"
                  onClick={handleShopNavigation}
                  style={{
                    background: `linear-gradient(135deg, ${colors.secondary} 0%, #fb923c 100%)`,
                    border: 'none',
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 600,
                    padding: isMobile ? `${rem(12)} ${rem(24)}` : `${rem(16)} ${rem(32)}`,
                    fontSize: isMobile ? rem(14) : rem(16),
                    boxShadow: `0 8px 25px ${colors.secondary}40`,
                  }}
                >
                  Try It Now - Free
                </Button>

              </Group>
            </Stack>
          </Grid.Col>

          {/* Right Dynamic Showcase */}
          <Grid.Col span={{ base: 12, md: 6 }} order={isMobile ? 1 : 2}>
            <Box
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: rem(700),
              }}
            >
              {/* Main Transformation Container */}
              <Box
                style={{
                  position: 'relative',
                  background: colors.glassBg,
                  backdropFilter: 'blur(20px)',
                  borderRadius: rem(24),
                  padding: rem(24),
                  border: `1px solid ${colors.border}`,
                  boxShadow: isDark 
                    ? '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                    : '0 25px 50px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-20px)',
                  animation: 'floatAnimation 6s ease-in-out infinite',
                  width: '100%',
                  maxWidth: rem(500),
                }}
              >
                {/* Header */}
                <Group justify="space-between" align="center" mb="lg">
                  <Text 
                    size="md" 
                    fw={700}
                    style={{ 
                      color: colors.text,
                      fontFamily: 'Quicksand, sans-serif'
                    }}
                  >
                    {activeFeature === 0 && 'Photo Recognition'}
                    {activeFeature === 1 && 'AI Processing'}
                    {activeFeature === 2 && 'Character Creation'}
                  </Text>
                  
                  <Badge
                    size="md"
                    style={{
                      background: `linear-gradient(135deg, ${features[activeFeature]?.color || colors.primary} 0%, ${features[activeFeature]?.color || colors.primary}80 100%)`,
                      color: '#ffffff',
                      fontWeight: 700,
                      padding: `${rem(4)} ${rem(12)}`,
                      fontSize: rem(10),
                    }}
                  >
                    STEP {activeFeature + 1}
                  </Badge>
                </Group>

                {/* Dynamic Content Container */}
                <Box
                  style={{
                    borderRadius: rem(16),
                    overflow: 'hidden',
                    position: 'relative',
                    marginBottom: rem(20),
                    minHeight: rem(400),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: activeFeature === 1 ? (isDark ? '#1a1a2e' : '#f8fafc') : 'transparent',
                  }}
                >
                  {/* Photo Recognition - Before/After */}
                  {activeFeature === 0 && (
                    <Box style={{ height: '100%', padding: rem(20), position: 'relative' }}>
                      {isMobile ? (
                        // Mobile Layout - Vertical Stack
                        <Stack align="center" gap="xl" style={{ height: '100%', justifyContent: 'center' }}>
                          {/* Original Photo - Mobile */}
                          <Box style={{ textAlign: 'center' }}>
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
                                marginBottom: rem(12),
                              }}
                            >
                              <Box
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  borderRadius: rem(16),
                                  overflow: 'hidden',
                                  border: '3px solid #e5e7eb',
                                  transition: 'all 0.5s ease',
                                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
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
                                  width: rem(28),
                                  height: rem(28),
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                <IconPhoto size={14} style={{ color: '#ffffff' }} />
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

                          {/* Downward Arrow - Mobile */}
                          <Box style={{ 
                            color: colors.primary, 
                            animation: 'arrowPulse 2s ease-in-out infinite'
                          }}>
                            <svg width="20" height="40" viewBox="0 0 20 40" fill="none">
                              <path 
                                d="M10 1V35M10 35L5 30M10 35L15 30" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Box>

                          {/* After Character - Mobile */}
                          <Box style={{ textAlign: 'center' }}>
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
                                width: rem(200),
                                height: rem(200),
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
                                  border: `3px solid ${colors.primary}`,
                                  transition: 'all 0.5s ease',
                                  boxShadow: `0 15px 40px ${colors.primary}40`,
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
                                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primary}80 100%)`,
                                  borderRadius: '50%',
                                  width: rem(40),
                                  height: rem(40),
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                <IconSparkles size={20} style={{ color: '#ffffff' }} />
                              </Box>
                            </Box>

                            <Text
                              size="md"
                              fw={700}
                              style={{
                                color: colors.primary,
                                fontFamily: 'Quicksand, sans-serif',
                              }}
                            >
                              {transformationPairs[currentPair].style} Style
                            </Text>
                          </Box>
                        </Stack>
                      ) : (
                        // Desktop Layout - Horizontal
                        <Group gap="xl" align="center" style={{ height: '100%' }}>
                          
                          {/* Original Photo - Desktop */}
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
                                width: rem(120),
                                height: rem(120),
                                margin: '0 auto',
                                marginBottom: rem(12),
                              }}
                            >
                              <Box
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  borderRadius: rem(16),
                                  overflow: 'hidden',
                                  border: '3px solid #e5e7eb',
                                  transition: 'all 0.5s ease',
                                  transform: 'perspective(1000px) rotateY(-15deg)',
                                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
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
                                  width: rem(28),
                                  height: rem(28),
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                <IconPhoto size={14} style={{ color: '#ffffff' }} />
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

                          {/* Curvy Arrow SVG - Desktop */}
                          <Box 
                            style={{ 
                              position: 'absolute',
                              top: '15%',
                              left: '25%',
                              transform: 'translate(0, 0)',
                              zIndex: 10,
                              animation: 'arrowPulse 2s ease-in-out infinite',
                            }}
                          >
                            <svg 
                              width="113" 
                              height="112" 
                              viewBox="0 0 113 112" 
                              fill="none" 
                              xmlns="http://www.w3.org/2000/svg"
                              style={{
                                width: rem(80),
                                height: rem(80),
                                filter: 'drop-shadow(0 4px 12px rgba(139, 92, 246, 0.3))',
                              }}
                            >
                              <path 
                                d="M43.4022 52.3076C42.4085 51.9881 41.7313 51.4496 40.8414 52.3401C37.2081 55.983 34.7371 60.283 33.2731 65.1907C32.5052 67.7651 34.6428 70.1531 37.2119 69.5582C38.1997 69.3297 39.1944 69.0532 40.0883 68.5185C45.4049 65.3405 46.5049 60.366 45.363 54.8201C45.132 53.6941 44.4204 52.6827 43.4022 52.3076ZM102.944 40.369C97.9366 39.4253 93.2916 38.9305 88.6551 38.5273C80.4313 37.8145 72.2455 38.2891 64.2011 40.5039C60.0206 41.6546 55.8667 42.892 51.9721 44.8086C49.4863 46.0304 46.9429 47.2109 44.7302 48.9378C44.3403 49.2408 43.5155 49.5763 44.4432 50.2383C47.5378 52.4529 47.9013 55.8223 48.0994 59.2366C48.2476 61.7805 47.8437 64.361 46.5041 66.4515C44.858 69.0173 42.496 71.0355 39.396 71.7658C38.5574 71.9645 37.8328 72.3987 36.9122 72.4862C33.0274 72.8569 29.3966 66.6337 31.2684 62.6238C32.9983 58.9133 34.7975 55.2716 37.379 52.0698C37.5039 51.9161 37.6587 51.7947 37.5367 51.4091C35.2745 51.5241 32.9999 51.8138 30.727 52.2463C25.5886 53.2256 20.8211 55.2252 16.3906 57.9289C12.4848 60.3109 9.097 63.402 7.00055 67.5805C6.04562 69.4837 5.59329 71.6409 5.50628 73.8049C5.43989 75.4502 5.49683 77.0989 5.50644 78.7474C5.50652 78.926 5.65354 79.1585 5.39678 79.2316C5.2309 79.2779 4.9891 79.2492 4.84572 79.1587C4.56075 78.9737 4.39041 78.6975 4.26867 78.3471C2.43378 73.0674 3.14996 68.1529 6.33671 63.5425C9.77191 58.5665 14.6008 55.3835 19.9333 52.9207C26.162 50.0469 32.6781 48.4182 39.5848 48.9173C40.111 48.9569 40.4896 48.8371 40.9034 48.4873C45.3927 44.7172 50.5729 42.2413 55.9768 40.1178C61.2501 38.0466 66.7104 36.7216 72.2468 35.8256C76.8201 35.0878 81.4774 35.0648 86.1166 35.3369C92.1019 35.6888 98.0001 36.6528 103.892 37.67C104.975 37.8566 105.035 37.875 106.18 37.6013C104.257 36.434 102.488 35.2888 100.649 34.2686C98.1811 32.8957 95.8812 31.2684 93.5267 29.7255C92.7049 29.1885 91.8834 28.6547 90.9475 28.3687C90.0144 28.0839 89.639 27.4204 89.5261 26.5348C89.3768 25.3812 89.9886 24.8733 91.1069 25.2686C93.3334 26.0533 95.2559 27.4149 97.2076 28.6857C100.797 31.0262 104.44 33.2584 108.242 35.2353C108.872 35.5617 109.57 35.822 109.978 36.4956C110.786 37.8255 110.512 38.5222 109.262 39.4213C107.085 40.99 105.03 42.7342 102.896 44.3698C100.578 46.1444 98.2524 47.9026 96.1882 49.9838C95.6208 50.5559 94.7986 50.8497 94.2171 50.3343C93.541 49.7325 93.6987 48.8357 94.2091 48.0597C95.6528 45.8733 97.9356 44.6351 99.8527 42.9833C100.796 42.1689 101.756 41.3733 102.941 40.3724" 
                                fill={isDark ? "#C569FF" : "#8b5cf6"} 
                              />
                            </svg>
                          </Box>

                          {/* After Character - Desktop */}
                          <Box style={{ flex: 1.5, textAlign: 'center' }}>
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
                                width: rem(200),
                                height: rem(200),
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
                                  border: `3px solid ${colors.primary}`,
                                  transition: 'all 0.5s ease',
                                  transform: 'perspective(1000px) rotateY(15deg)',
                                  boxShadow: `0 15px 40px ${colors.primary}40`,
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
                                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primary}80 100%)`,
                                  borderRadius: '50%',
                                  width: rem(40),
                                  height: rem(40),
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                <IconSparkles size={20} style={{ color: '#ffffff' }} />
                              </Box>
                            </Box>

                            <Text
                              size="md"
                              fw={700}
                              style={{
                                color: colors.primary,
                                fontFamily: 'Quicksand, sans-serif',
                              }}
                            >
                              {transformationPairs[currentPair].style} Style
                            </Text>
                          </Box>
                        </Group>
                      )}
                    </Box>
                  )}

                  {/* Style Adaptation - AI Processing */}
                  {activeFeature === 1 && (
                    <Stack align="center" gap="xl" style={{ padding: rem(40) }}>
                      {/* Circular Processing Animation */}
                      <Box
                        style={{
                          position: 'relative',
                          width: rem(160),
                          height: rem(160),
                          borderRadius: '50%',
                          background: `conic-gradient(from 0deg, ${colors.primary} 0%, ${colors.primary}40 50%, transparent 50%, transparent 100%)`,
                          animation: 'circularProgress 2s linear infinite',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Box
                          style={{
                            width: rem(120),
                            height: rem(120),
                            borderRadius: '50%',
                            background: isDark ? '#1a1a2e' : '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                          }}
                        >
                          <IconPalette size={40} style={{ color: colors.primary }} />
                        </Box>
                      </Box>

                      <Stack align="center" gap="md">
                        <Text
                          size="lg"
                          fw={700}
                          style={{
                            color: colors.text,
                            fontFamily: 'Quicksand, sans-serif',
                            textAlign: 'center',
                          }}
                        >
                          AI Processing Style
                        </Text>
                        
                        <Text
                          size="sm"
                          style={{
                            color: colors.textSecondary,
                            fontFamily: 'Nunito, sans-serif',
                            textAlign: 'center',
                            maxWidth: rem(280),
                          }}
                        >
                          Analyzing facial features and adapting to your chosen artistic style
                        </Text>

                        {/* Processing Dots */}
                        <Group gap="xs">
                          {Array.from({ length: 3 }, (_, i) => (
                            <Box
                              key={i}
                              style={{
                                width: rem(8),
                                height: rem(8),
                                borderRadius: '50%',
                                background: colors.primary,
                                animation: `pulse ${1 + i * 0.3}s ease-in-out infinite`,
                              }}
                            />
                          ))}
                        </Group>
                      </Stack>
                    </Stack>
                  )}

                  {/* Character Creation - Video */}
                  {activeFeature === 2 && (
                    <Box style={{ width: '100%', height: '100%' }}>
                      <video
                        key={activeFeature} // Force re-render when feature changes
                        autoPlay
                        muted
                        playsInline
                        onEnded={(e) => {
                          // Add a small delay before restarting to show completion
                          setTimeout(() => {
                            e.target.currentTime = 0;
                            e.target.play();
                          }, 500);
                        }}
                        style={{
                          width: '100%',
                          height: rem(400),
                          objectFit: 'cover',
                          borderRadius: rem(12),
                        }}
                      >
                        <source src="/images/20250818_0329_Magical Cartoon Transformation_simple_compose_01k2x2dwd8e8jtb42w81jc3tm4.mp4" type="video/mp4" />
                      </video>
                      
                      {/* Video Overlay */}
                      <Box
                        style={{
                          position: 'absolute',
                          bottom: rem(32),
                          left: rem(32),
                          right: rem(32),
                          background: 'rgba(0, 0, 0, 0.6)',
                          backdropFilter: 'blur(10px)',
                          borderRadius: rem(8),
                          padding: `${rem(8)} ${rem(12)}`,
                        }}
                      >
                        <Group justify="space-between" align="center">
                          <Text
                            size="xs"
                            style={{
                              color: '#ffffff',
                              fontFamily: 'Nunito, sans-serif',
                              fontWeight: 600,
                            }}
                          >
                            Generating Character...
                          </Text>
                          
                          <Group gap="xs">
                            {Array.from({ length: 3 }, (_, i) => (
                              <Box
                                key={i}
                                style={{
                                  width: rem(6),
                                  height: rem(6),
                                  borderRadius: '50%',
                                  background: colors.secondary,
                                  animation: `pulse ${1 + i * 0.2}s ease-in-out infinite`,
                                }}
                              />
                            ))}
                          </Group>
                        </Group>
                      </Box>
                    </Box>
                  )}
                </Box>

                {/* Process Steps */}
                <Stack gap="sm">
                  {['Photo Upload', 'AI Analysis', 'Character Generation'].map((step, index) => (
                    <Group
                      key={index}
                      gap="md"
                      style={{
                        padding: `${rem(8)} ${rem(12)}`,
                        borderRadius: rem(8),
                        background: activeFeature === index 
                          ? (isDark ? 'rgba(139, 92, 246, 0.1)' : 'rgba(139, 92, 246, 0.08)')
                          : 'transparent',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Box
                        style={{
                          width: rem(24),
                          height: rem(24),
                          borderRadius: '50%',
                          background: activeFeature === index 
                            ? `linear-gradient(135deg, ${features[index]?.color || colors.primary} 0%, ${features[index]?.color || colors.primary}80 100%)`
                            : (isDark ? '#374151' : '#e5e7eb'),
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <Text
                          size="xs"
                          fw={700}
                          style={{
                            color: activeFeature === index ? '#ffffff' : (isDark ? '#9ca3af' : '#6b7280'),
                          }}
                        >
                          {index + 1}
                        </Text>
                      </Box>
                      
                      <Text
                        size="sm"
                        fw={activeFeature === index ? 600 : 500}
                        style={{
                          color: activeFeature === index 
                            ? (features[index]?.color || colors.primary)
                            : (isDark ? '#cbd5e1' : '#64748b'),
                          fontFamily: 'Nunito, sans-serif',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {step}
                      </Text>
                    </Group>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>

      {/* Enhanced Hero Animations */}
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

        @keyframes floatAnimation {
          0%, 100% { 
            transform: translateY(-20px) rotate(0deg);
          }
          33% { 
            transform: translateY(-25px) rotate(0.5deg);
          }
          66% { 
            transform: translateY(-15px) rotate(-0.5deg);
          }
        }

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
        
        @keyframes characterGlow {
          0%, 100% { 
            box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
          }
          50% { 
            box-shadow: 0 12px 35px rgba(139, 92, 246, 0.6);
          }
        }
        
        @keyframes arrowPulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.8;
          }
          50% { 
            transform: scale(1.1);
            opacity: 1;
          }
        }

        @keyframes circularProgress {
          0% { 
            transform: rotate(0deg);
          }
          100% { 
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% { 
            opacity: 0.4;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </Box>
  );
}

export default DynamicHeroSection;