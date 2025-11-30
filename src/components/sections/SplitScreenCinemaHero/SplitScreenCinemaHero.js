import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Text, 
  Box,
  Group,
  Stack,
  Button,
  rem,
  Grid
} from '@mantine/core';
import { useMantineColorScheme } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { 
  IconSparkles,
  IconPlayerPlay,
  IconRocket,
  IconStarFilled,
  IconCircleDot,
  IconStar,
  IconHeart
} from '@tabler/icons-react';

function SplitScreenCinemaHero() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
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
        position: 'relative',
        background: colors.background,
        overflow: 'hidden',
      }}
    >
      <DecorativeElements />
      
      <Grid style={{ height: 'auto', margin: 0 }}>
        {/* Left Content Panel */}
        <Grid.Col 
          span={{ base: 12, lg: 5 }} 
          style={{ 
            background: isDark 
              ? 'linear-gradient(135deg, rgba(15, 15, 35, 0.95) 0%, rgba(26, 26, 46, 0.9) 100%)'
              : 'linear-gradient(135deg, rgba(254, 243, 199, 0.95) 0%, rgba(243, 232, 255, 0.9) 100%)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <Container size="sm" style={{ width: '100%' }}>
            <Stack gap={{ base: 'md', md: 'xl' }} align={{ base: 'center', lg: 'flex-start' }} style={{ padding: `${rem(30)} ${rem(15)}` }}>
              {/* Cinema Badge */}
              <Group
                gap="xs"
                justify="center"
                style={{
                  background: colors.glassBg,
                  backdropFilter: 'blur(16px)',
                  borderRadius: rem(30),
                  padding: `${rem(10)} ${rem(20)}`,
                  border: `1px solid ${colors.border}`,
                  width: 'fit-content',
                  boxShadow: `0 8px 25px ${colors.primary}20`,
                  margin: { base: '0 auto', lg: '0' },
                }}
              >
                <IconPlayerPlay size={16} style={{ color: colors.secondary }} />
                <Text 
                  size="xs" 
                  fw={700}
                  style={{ 
                    color: colors.primary,
                    fontFamily: 'Nunito, sans-serif',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                  }}
                >
                  Cinema Preview
                </Text>
              </Group>

              {/* Main Title */}
              <Text
                component="h1"
                fw={800}
                lh={1.1}
                ta={{ base: 'center', lg: 'left' }}
                style={{
                  fontFamily: 'Quicksand, sans-serif',
                  color: colors.text,
                  letterSpacing: '-0.02em',
                  textShadow: isDark ? '0 4px 8px rgba(255,255,255,0.1)' : '0 4px 8px rgba(0,0,0,0.1)',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                }}
              >
                The Future of{' '}
                <Text
                  component="span"
                  inherit
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    display: 'inline-block',
                  }}
                >
                  Story telling
                </Text>
                {' '}is Here
              </Text>


              {/* Stats */}
              <Group 
                gap="md" 
                wrap="wrap" 
                justify="center" 
                style={{ 
                  '@media (min-width: 62em)': { justifyContent: 'flex-start' },
                  marginTop: rem(24)
                }}
              >
                {[
                  { number: "5K+", label: "Happy Children" },
                  { number: "99%", label: "Parent Satisfaction" },
                  { number: "<60s", label: "Transformation Time" }
                ].map((stat, index) => (
                  <Stack key={index} gap="xs" align="center">
                    <Text 
                      fw={800}
                      style={{ 
                        color: colors.secondary,
                        fontFamily: 'Quicksand, sans-serif',
                        fontSize: `clamp(${rem(22)}, 3vw, ${rem(28)})`,
                      }}
                    >
                      {stat.number}
                    </Text>
                    <Text 
                      style={{ 
                        color: colors.textSecondary,
                        fontFamily: 'Nunito, sans-serif',
                        textAlign: 'center',
                        fontSize: `clamp(${rem(12)}, 1.5vw, ${rem(14)})`,
                      }}
                    >
                      {stat.label}
                    </Text>
                  </Stack>
                ))}
              </Group>

              {/* CTA Button */}
              <Button
                size="lg"
                radius="xl"
                rightSection={<IconRocket size={20} />}
                onClick={handleShopNavigation}
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                  border: 'none',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 600,
                  padding: `${rem(16)} ${rem(32)}`,
                  fontSize: rem(16),
                  boxShadow: `0 12px 35px ${colors.primary}40`,
                  width: '100%',
                  letterSpacing: '0.5px',
                  '@media (min-width: 36em)': {
                    width: 'fit-content',
                    padding: `${rem(18)} ${rem(40)}`,
                    fontSize: rem(18),
                  }
                }}
              >
                Experience the Magic
              </Button>
            </Stack>
          </Container>
        </Grid.Col>

        {/* Right Video Panel */}
        <Grid.Col 
          span={{ base: 12, lg: 7 }} 
          style={{ 
            position: 'relative',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Cinema Video Container */}
          <Box
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              background: '#000000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            >
              <source src="/images/20250818_0329_Magical Cartoon Transformation_simple_compose_01k2x2dwd8e8jtb42w81jc3tm4.mp4" type="video/mp4" />
            </video>

            {/* Cinema Overlay Effects */}
            <Box
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `linear-gradient(90deg, ${isDark ? 'rgba(15, 15, 35, 0.8)' : 'rgba(254, 243, 199, 0.8)'} 0%, transparent 30%, transparent 70%, ${isDark ? 'rgba(15, 15, 35, 0.3)' : 'rgba(254, 243, 199, 0.3)'} 100%)`,
                pointerEvents: 'none',
              }}
            />

            {/* Floating Video Labels */}
            <Box
              style={{
                position: 'absolute',
                bottom: rem(20),
                right: rem(20),
                background: colors.glassBg,
                backdropFilter: 'blur(20px)',
                borderRadius: rem(20),
                padding: `${rem(8)} ${rem(12)}`,
                border: `1px solid ${colors.border}`,
                '@media (min-width: 48em)': {
                  bottom: rem(40),
                  right: rem(40),
                  padding: `${rem(12)} ${rem(20)}`,
                }
              }}
            >
              <Group gap="sm">
                <Box
                  style={{
                    width: rem(12),
                    height: rem(12),
                    borderRadius: '50%',
                    background: '#ef4444',
                    animation: 'pulse 2s ease-in-out infinite',
                  }}
                />
                <Text 
                  size="xs"
                  fw={600}
                  style={{ 
                    color: colors.text,
                    fontFamily: 'Nunito, sans-serif',
                    fontSize: rem(12),
                    '@media (min-width: 48em)': {
                      fontSize: rem(14),
                    }
                  }}
                >
                  LIVE TRANSFORMATION
                </Text>
              </Group>
            </Box>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
}

export default SplitScreenCinemaHero;
