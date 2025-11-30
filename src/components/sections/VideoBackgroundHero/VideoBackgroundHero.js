import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Text, 
  Box,
  Group,
  Grid,
  Button,
  rem
} from '@mantine/core';
import { useMantineColorScheme } from '@mantine/core';
import { 
  IconSparkles,
  IconWand,
  IconRocket,
  IconChevronRight,
  IconStarFilled,
  IconCircleDot,
  IconStar,
  IconHeart
} from '@tabler/icons-react';

function VideoBackgroundHero() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const [scrollY, setScrollY] = useState(0);

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
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: colors.background,
      }}
    >
      <DecorativeElements />
      
      {/* Video Background */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
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
            opacity: 0.6,
          }}
        >
          <source src="/images/20250818_0329_Magical Cartoon Transformation_simple_compose_01k2x2dwd8e8jtb42w81jc3tm4.mp4" type="video/mp4" />
        </video>
        
        {/* Video Overlay */}
        <Box
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: isDark 
              ? 'linear-gradient(135deg, rgba(15, 15, 35, 0.6) 0%, rgba(26, 26, 46, 0.5) 50%, rgba(83, 52, 131, 0.6) 100%)'
              : 'linear-gradient(135deg, rgba(254, 243, 199, 0.6) 0%, rgba(243, 232, 255, 0.5) 50%, rgba(219, 234, 254, 0.6) 100%)',
          }}
        />
      </Box>

      {/* Content Overlay */}
      <Container size="xl" style={{ position: 'relative', zIndex: 10, height: '100vh', display: 'flex', alignItems: 'center' }}>
        <Grid align="center" style={{ width: '100%' }}>
          <Grid.Col span={12}>
            <Box ta="center">
              {/* Professional Badge */}
              <Group
                justify="center"
                mb="xl"
                style={{
                  background: colors.glassBg,
                  backdropFilter: 'blur(20px)',
                  borderRadius: rem(30),
                  padding: `${rem(12)} ${rem(24)}`,
                  border: `1px solid ${colors.border}`,
                  display: 'inline-flex',
                  boxShadow: isDark 
                    ? '0 8px 32px rgba(139, 92, 246, 0.2)' 
                    : '0 8px 32px rgba(139, 92, 246, 0.15)',
                }}
              >
                <IconWand size={20} style={{ color: colors.primary }} />
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
                  AI Magic in Action
                </Text>
              </Group>

              {/* Main Heading */}
              <Text
                component="h1"
                size="4.5rem"
                fw={800}
                lh={1.1}
                ta="center"
                mb="xl"
                style={{
                  fontFamily: 'Quicksand, sans-serif',
                  color: colors.text,
                  letterSpacing: '-0.02em',
                  textShadow: isDark ? '0 4px 8px rgba(255,255,255,0.1)' : '0 4px 8px rgba(0,0,0,0.1)',
                  maxWidth: rem(800),
                  margin: '0 auto',
                }}
              >
                Watch Your Child{' '}
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
                Transform{' '}
                </Text>
                Into a{' '}
                <Text
                  component="span"
                  inherit
                  style={{
                    background: `linear-gradient(135deg, ${colors.secondary} 0%, #fb923c 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    display: 'inline-block',
                  }}
                >
                  Hero
                </Text>
              </Text>

              {/* Subtitle */}
              <Text
                size="xl"
                style={{
                  color: colors.textSecondary,
                  fontFamily: 'Nunito, sans-serif',
                  lineHeight: 1.6,
                  maxWidth: rem(600),
                  margin: '0 auto',
                  marginBottom: rem(40),
                }}
                ta="center"
              >
                See the incredible AI transformation process that turns ordinary photos 
                into extraordinary storybook characters in seconds.
              </Text>

              {/* CTA Buttons */}
              <Group justify="center" gap="lg">
                <Button
                  size="xl"
                  radius="xl"
                  leftSection={<IconRocket size={20} />}
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, #9333ea 100%)`,
                    border: 'none',
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 600,
                    padding: `${rem(18)} ${rem(36)}`,
                    fontSize: rem(18),
                    boxShadow: `0 12px 35px ${colors.primary}40`,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    letterSpacing: '0.3px',
                  }}
                >
                  Start Creating Now
                </Button>

                <Button
                  variant="outline"
                  size="xl"
                  radius="xl"
                  rightSection={<IconChevronRight size={18} />}
                  style={{
                    borderColor: colors.border,
                    color: colors.text,
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 500,
                    padding: `${rem(18)} ${rem(36)}`,
                    fontSize: rem(18),
                    backgroundColor: colors.glassBg,
                    backdropFilter: 'blur(20px)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  Watch Full Demo
                </Button>
              </Group>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}

export default VideoBackgroundHero;
