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
  Grid,
  ActionIcon
} from '@mantine/core';
import { 
  IconSparkles,
  IconStar,
  IconHeart,
  IconPlayerPlay,
  IconWand,
  IconRocket,
  IconChevronRight,
  IconStarFilled,
  IconCircleDot,
  IconSun,
  IconMoonStars
} from '@tabler/icons-react';

function VideoHeroSections() {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState(1);
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

  const toggleTheme = () => setIsDark(!isDark);

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

  // Hero Section 1: Video Background with Overlay Content
  const HeroSection1 = () => (
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
            opacity: 0.3,
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
              ? 'linear-gradient(135deg, rgba(15, 15, 35, 0.9) 0%, rgba(26, 26, 46, 0.8) 50%, rgba(83, 52, 131, 0.9) 100%)'
              : 'linear-gradient(135deg, rgba(254, 243, 199, 0.9) 0%, rgba(243, 232, 255, 0.8) 50%, rgba(219, 234, 254, 0.9) 100%)',
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
                  }}
                >
                  Transform
                </Text>{' '}
                Into a{' '}
                <Text
                  component="span"
                  inherit
                  style={{
                    background: `linear-gradient(135deg, ${colors.secondary} 0%, #fb923c 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
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

  // Hero Section 2: Floating Video Card Layout
  const HeroSection2 = () => (
    <Box
      style={{
        minHeight: '100vh',
        position: 'relative',
        background: colors.background,
        paddingTop: rem(120),
        paddingBottom: rem(80),
      }}
    >
      <DecorativeElements />
      
      <Container size="xl" style={{ position: 'relative', zIndex: 10 }}>
        <Grid align="center" gutter="4xl">
          {/* Left Content */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="xl">
              {/* Badge */}
              <Group
                gap="xs"
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
                  Live Transformation
                </Text>
              </Group>

              {/* Heading */}
              <Text
                component="h1"
                size="3.5rem"
                fw={800}
                lh={1.1}
                style={{
                  fontFamily: 'Quicksand, sans-serif',
                  color: colors.text,
                  letterSpacing: '-0.02em',
                  textShadow: isDark ? '0 2px 4px rgba(255,255,255,0.1)' : '0 2px 4px rgba(0,0,0,0.1)',
                }}
              >
                From Photo to{' '}
                <Text
                  component="span"
                  inherit
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, #f472b6 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Character
                </Text>{' '}
                in Seconds
              </Text>

              {/* Description */}
              <Text
                size="lg"
                style={{
                  color: colors.textSecondary,
                  fontFamily: 'Nunito, sans-serif',
                  lineHeight: 1.6,
                  maxWidth: rem(500),
                }}
              >
                Our advanced AI technology analyzes your child's unique features and 
                transforms them into beautiful, engaging storybook characters that 
                maintain their personality and charm.
              </Text>

              {/* Features List */}
              <Stack gap="md">
                {[
                  { icon: IconWand, text: "Instant AI transformation" },
                  { icon: IconHeart, text: "Preserves child's personality" },
                  { icon: IconSparkles, text: "Professional quality artwork" }
                ].map((feature, index) => (
                  <Group key={index} gap="md">
                    <Box
                      style={{
                        width: rem(40),
                        height: rem(40),
                        background: `linear-gradient(135deg, ${colors.primary} 0%, #9333ea 100%)`,
                        borderRadius: rem(20),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 4px 12px ${colors.primary}30`,
                      }}
                    >
                      <feature.icon size={20} style={{ color: '#ffffff' }} />
                    </Box>
                    <Text 
                      size="md" 
                      fw={500} 
                      style={{ 
                        color: colors.text, 
                        fontFamily: 'Nunito, sans-serif' 
                      }}
                    >
                      {feature.text}
                    </Text>
                  </Group>
                ))}
              </Stack>

              {/* CTA */}
              <Button
                size="lg"
                radius="xl"
                style={{
                  background: `linear-gradient(135deg, ${colors.secondary} 0%, #fb923c 100%)`,
                  border: 'none',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 600,
                  padding: `${rem(16)} ${rem(32)}`,
                  fontSize: rem(16),
                  boxShadow: `0 8px 25px ${colors.secondary}40`,
                  width: 'fit-content',
                }}
              >
                Try It Now - Free
              </Button>
            </Stack>
          </Grid.Col>

          {/* Right Video */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: rem(600),
              }}
            >
              {/* Floating Video Card */}
              <Box
                style={{
                  position: 'relative',
                  background: colors.glassBg,
                  backdropFilter: 'blur(20px)',
                  borderRadius: rem(24),
                  padding: rem(20),
                  border: `1px solid ${colors.border}`,
                  boxShadow: isDark 
                    ? '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                    : '0 25px 50px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-20px)',
                  animation: 'floatAnimation 6s ease-in-out infinite',
                }}
              >
                <Box
                  style={{
                    borderRadius: rem(16),
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      width: '100%',
                      height: rem(400),
                      objectFit: 'cover',
                    }}
                  >
                    <source src="/images/20250818_0329_Magical Cartoon Transformation_simple_compose_01k2x2dwd8e8jtb42w81jc3tm4.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Video Overlay Badge */}
                  <Badge
                    size="lg"
                    style={{
                      position: 'absolute',
                      top: rem(16),
                      right: rem(16),
                      background: `linear-gradient(135deg, ${colors.secondary} 0%, #fb923c 100%)`,
                      color: '#1a202c',
                      fontWeight: 700,
                      padding: `${rem(8)} ${rem(16)}`,
                      fontSize: rem(12),
                    }}
                  >
                    LIVE DEMO
                  </Badge>
                </Box>

                {/* Video Card Footer */}
                <Group justify="space-between" align="center" mt="md" px="xs">
                  <Text 
                    size="sm" 
                    fw={600}
                    style={{ 
                      color: colors.text,
                      fontFamily: 'Quicksand, sans-serif'
                    }}
                  >
                    AI Transformation Process
                  </Text>
                  <Group gap="xs">
                    {Array.from({ length: 3 }, (_, i) => (
                      <Box
                        key={i}
                        style={{
                          width: rem(8),
                          height: rem(8),
                          borderRadius: '50%',
                          background: colors.primary,
                          animation: `pulse ${1 + i * 0.2}s ease-in-out infinite`,
                        }}
                      />
                    ))}
                  </Group>
                </Group>
              </Box>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );

  // Hero Section 3: Split Screen Cinema Layout
  const HeroSection3 = () => (
    <Box
      style={{
        minHeight: '100vh',
        position: 'relative',
        background: colors.background,
        overflow: 'hidden',
      }}
    >
      <DecorativeElements />
      
      <Grid style={{ height: '100vh', margin: 0 }}>
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
            <Stack gap="xl" style={{ padding: `${rem(40)} ${rem(20)}` }}>
              {/* Cinema Badge */}
              <Group
                gap="xs"
                style={{
                  background: colors.glassBg,
                  backdropFilter: 'blur(16px)',
                  borderRadius: rem(30),
                  padding: `${rem(10)} ${rem(20)}`,
                  border: `1px solid ${colors.border}`,
                  width: 'fit-content',
                  boxShadow: `0 8px 25px ${colors.primary}20`,
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
                size="4rem"
                fw={800}
                lh={1.1}
                style={{
                  fontFamily: 'Quicksand, sans-serif',
                  color: colors.text,
                  letterSpacing: '-0.02em',
                  textShadow: isDark ? '0 4px 8px rgba(255,255,255,0.1)' : '0 4px 8px rgba(0,0,0,0.1)',
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
                  }}
                >
                  Storytelling
                </Text>{' '}
                is Here
              </Text>

              {/* Description */}
              <Text
                size="lg"
                style={{
                  color: colors.textSecondary,
                  fontFamily: 'Nunito, sans-serif',
                  lineHeight: 1.7,
                  fontSize: rem(18),
                }}
              >
                Experience the magic as our AI transforms your child's photograph 
                into a captivating storybook character, complete with personality, 
                charm, and endless adventure possibilities.
              </Text>

              {/* Stats */}
              <Group gap="xl" wrap="wrap">
                {[
                  { number: "50K+", label: "Happy Children" },
                  { number: "99%", label: "Parent Satisfaction" },
                  { number: "<60s", label: "Transformation Time" }
                ].map((stat, index) => (
                  <Stack key={index} gap="xs" align="center">
                    <Text 
                      size="2xl" 
                      fw={800}
                      style={{ 
                        color: colors.secondary,
                        fontFamily: 'Quicksand, sans-serif',
                        fontSize: rem(28),
                      }}
                    >
                      {stat.number}
                    </Text>
                    <Text 
                      size="sm" 
                      style={{ 
                        color: colors.textSecondary,
                        fontFamily: 'Nunito, sans-serif',
                        textAlign: 'center',
                      }}
                    >
                      {stat.label}
                    </Text>
                  </Stack>
                ))}
              </Group>

              {/* CTA Button */}
              <Button
                size="xl"
                radius="xl"
                rightSection={<IconRocket size={20} />}
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                  border: 'none',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 600,
                  padding: `${rem(18)} ${rem(40)}`,
                  fontSize: rem(18),
                  boxShadow: `0 12px 35px ${colors.primary}40`,
                  width: 'fit-content',
                  letterSpacing: '0.5px',
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
                bottom: rem(40),
                right: rem(40),
                background: colors.glassBg,
                backdropFilter: 'blur(20px)',
                borderRadius: rem(20),
                padding: `${rem(12)} ${rem(20)}`,
                border: `1px solid ${colors.border}`,
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
                  size="sm" 
                  fw={600}
                  style={{ 
                    color: colors.text,
                    fontFamily: 'Nunito, sans-serif'
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

  const sections = [
    { id: 1, name: "Video Background Overlay", component: HeroSection1 },
    { id: 2, name: "Floating Video Card", component: HeroSection2 },
    { id: 3, name: "Split Screen Cinema", component: HeroSection3 }
  ];

  const CurrentSection = sections.find(s => s.id === activeSection)?.component || HeroSection1;

  return (
    <Box style={{ background: colors.background, minHeight: '100vh' }}>
      {/* Theme Toggle & Section Selector */}
      <Box
        style={{
          position: 'fixed',
          top: rem(20),
          right: rem(20),
          zIndex: 1000,
          background: colors.glassBg,
          backdropFilter: 'blur(20px)',
          borderRadius: rem(20),
          padding: rem(12),
          border: `1px solid ${colors.border}`,
        }}
      >
        <Stack gap="sm">
          <ActionIcon
            onClick={toggleTheme}
            size="lg"
            radius="xl"
            style={{
              backgroundColor: colors.primary,
              color: '#ffffff',
            }}
          >
            {isDark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
          </ActionIcon>
          
          {sections.map((section) => (
            <Button
              key={section.id}
              size="xs"
              variant={activeSection === section.id ? "filled" : "subtle"}
              onClick={() => setActiveSection(section.id)}
              style={{
                backgroundColor: activeSection === section.id ? colors.primary : 'transparent',
                color: activeSection === section.id ? '#ffffff' : colors.text,
                fontFamily: 'Nunito, sans-serif',
                fontSize: rem(10),
              }}
            >
              {section.id}
            </Button>
          ))}
        </Stack>
      </Box>

      {/* Current Section */}
      <CurrentSection />

      {/* Section Info */}
      <Box
        style={{
          position: 'fixed',
          bottom: rem(20),
          left: rem(20),
          background: colors.glassBg,
          backdropFilter: 'blur(20px)',
          borderRadius: rem(16),
          padding: `${rem(12)} ${rem(20)}`,
          border: `1px solid ${colors.border}`,
          zIndex: 1000,
        }}
      >
        <Text 
          size="sm" 
          fw={600}
          style={{ 
            color: colors.text,
            fontFamily: 'Nunito, sans-serif'
          }}
        >
          {sections.find(s => s.id === activeSection)?.name}
        </Text>
      </Box>

    </Box>
  );
}

export default VideoHeroSections;