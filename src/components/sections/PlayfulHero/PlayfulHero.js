// src/components/sections/PlayfulHero/PlayfulHero.js
import React, { useEffect, useState } from 'react';
import { 
  Box, 
  Container, 
  Text, 
  Button, 
  Group, 
  Stack,
  Grid,
  rem,
  useMantineColorScheme
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import { 
  IconSparkles, 
  IconBook, 
  IconHeart, 
  IconStar,
  IconStarFilled,
  IconCircleDot
} from '@tabler/icons-react';
// IMPORTANT: Make sure this import matches your actual file name
import Enhanced3DBook from './Enhanced3DBook'; // or './Interactive3DBook' if that's what you named it

function PlayfulHero() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');
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

  // Enhanced book data with better images
  const bookData = {
    title: 'Super ABC Adventure',
    childName: 'Emma\'s Story',
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face',
    pages: [
      'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=500&fit=crop',
      'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=500&fit=crop', 
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=500&fit=crop',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=500&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop'
    ]
  };

  return (
    <Box
      style={{
        minHeight: '100vh',
        paddingTop: isMobile ? rem(70) : isTablet ? rem(80) : rem(90),
        paddingBottom: rem(40),
        position: 'relative',
      }}
    >
      {/* Professional Decorative Elements with Icons */}
      <Box
        style={{
          position: 'absolute',
          top: '15%',
          right: '8%',
          color: isDark ? '#facc15' : '#8B5CF6',
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
          color: isDark ? '#8b5cf6' : '#a855f7',
          animation: 'sparkleAndFloat 6s ease-in-out infinite 2s',
          transform: `translateY(${scrollY * 0.12}px) rotate(15deg)`,
          zIndex: 2,
        }}
      >
        <IconHeart size={32} />
      </Box>

      {/* Additional Professional Stars */}
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
          top: '35%',
          right: '15%',
          color: '#ec4899',
          animation: 'sparkleAndFloat 5.5s ease-in-out infinite 1.5s',
          transform: `translateY(${scrollY * 0.22}px) rotate(-20deg)`,
          zIndex: 1,
        }}
      >
        <IconStarFilled size={18} />
      </Box>

      <Box
        style={{
          position: 'absolute',
          bottom: '35%',
          left: '12%',
          color: isDark ? '#8b5cf6' : '#a855f7',
          animation: 'sparkleAndFloat 6.5s ease-in-out infinite 2.5s',
          transform: `translateY(${scrollY * 0.14}px)`,
          zIndex: 1,
        }}
      >
        <IconSparkles size={22} />
      </Box>

      <Box
        style={{
          position: 'absolute',
          top: '45%',
          left: '5%',
          color: '#06d6a0',
          animation: 'sparkleAndFloat 8s ease-in-out infinite 1s',
          transform: `translateY(${scrollY * 0.17}px) rotate(45deg)`,
          zIndex: 1,
        }}
      >
        <IconStar size={16} />
      </Box>

      {/* Additional Professional Hearts */}
      <Box
        style={{
          position: 'absolute',
          top: '8%',
          right: '25%',
          color: '#f472b6',
          animation: 'sparkleAndFloat 7.5s ease-in-out infinite 3s',
          transform: `translateY(${scrollY * 0.13}px) rotate(-10deg)`,
          zIndex: 1,
        }}
      >
        <IconHeart size={26} />
      </Box>

      <Box
        style={{
          position: 'absolute',
          bottom: '45%',
          right: '5%',
          color: '#8b5cf6',
          animation: 'sparkleAndFloat 6.8s ease-in-out infinite 0.8s',
          transform: `translateY(${scrollY * 0.19}px) rotate(25deg)`,
          zIndex: 1,
        }}
      >
        <IconHeart size={24} />
      </Box>

      {/* Small Professional Twinkling Elements */}
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

      <Box
        style={{
          position: 'absolute',
          top: '28%',
          right: '30%',
          color: '#f97316',
          animation: 'sparkleAndFloat 5.8s ease-in-out infinite 3.5s',
          transform: `translateY(${scrollY * 0.21}px) rotate(60deg)`,
          zIndex: 1,
        }}
      >
        <IconCircleDot size={12} />
      </Box>

      <Box
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '20%',
          color: isDark ? '#a78bfa' : '#8b5cf6',
          animation: 'sparkleAndFloat 7.2s ease-in-out infinite 1.8s',
          transform: `translateY(${scrollY * 0.16}px)`,
          zIndex: 1,
        }}
      >
        <IconCircleDot size={16} />
      </Box>

      <Box
        style={{
          position: 'absolute',
          bottom: '25%',
          right: '20%',
          color: '#10b981',
          animation: 'sparkleAndFloat 6.3s ease-in-out infinite 2.8s',
          transform: `translateY(${scrollY * 0.18}px) rotate(-30deg)`,
          zIndex: 1,
        }}
      >
        <IconStar size={18} />
      </Box>

      {/* Main Content Container */}
      <Container size="xl" style={{ position: 'relative', zIndex: 10 }}>
        <Grid align="center" gutter={isMobile ? "xl" : "4xl"}>
          
          {/* Left Content Section */}
          <Grid.Col span={isMobile ? 12 : 6} order={isMobile ? 2 : 1}>
            <Stack gap={isMobile ? "lg" : "xl"} align={isMobile ? "center" : "flex-start"}>
              
              {/* Professional Badge */}
              <Group
                gap="xs"
                style={{
                  background: isDark 
                    ? 'rgba(139, 92, 246, 0.1)' 
                    : 'rgba(139, 92, 246, 0.1)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: rem(25),
                  padding: `${rem(8)} ${rem(16)}`,
                  border: `1px solid ${isDark ? 'rgba(139, 92, 246, 0.2)' : 'rgba(139, 92, 246, 0.2)'}`,
                  boxShadow: isDark 
                    ? '0 4px 15px rgba(139, 92, 246, 0.1)' 
                    : '0 4px 15px rgba(139, 92, 246, 0.08)',
                }}
              >
                <IconSparkles size={18} style={{ color: isDark ? '#c4b5fd' : '#8B5CF6' }} />
                <Text 
                  size="sm" 
                  fw={600}
                  style={{ 
                    color: isDark ? '#c4b5fd' : '#8B5CF6',
                    fontFamily: 'Nunito, sans-serif',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                  }}
                >
                  Creating Little Heroes
                </Text>
              </Group>

              {/* Main Heading */}
              <Text
                component="h1"
                size={isMobile ? "2.5rem" : isTablet ? "3.5rem" : "4rem"}
                fw={800}
                lh={1.1}
                ta={isMobile ? "center" : "left"}
                style={{
                  fontFamily: 'Quicksand, sans-serif',
                  color: isDark ? '#ffffff' : '#1e293b',
                  letterSpacing: '-0.02em',
                  textShadow: isDark ? '0 2px 4px rgba(255,255,255,0.1)' : '0 2px 4px rgba(0,0,0,0.1)',
                  maxWidth: isMobile ? '100%' : rem(600),
                }}
              >
Preview Your{' '}
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
                  Storybook
                </Text>{' '}
                with this{' '}
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
                  3D Demo
                </Text>
              </Text>

              {/* Subtitle */}
              <Text
                size={isMobile ? "md" : "lg"}
                style={{
                  color: isDark ? '#e2e8f0' : '#475569',
                  fontFamily: 'Nunito, sans-serif',
                  lineHeight: 1.6,
                  maxWidth: isMobile ? '100%' : rem(500),
                }}
                ta={isMobile ? "center" : "left"}
              >
See how your child's personalized physical storybook will look with this interactive 3D demo. 
                Get a preview of the magical AI-powered adventure before you order!
              </Text>

              {/* Professional Features List */}
              <Stack gap="sm" style={{ marginTop: rem(20) }}>
                <Group gap="sm">
                  <Box
                    style={{
                      width: rem(28),
                      height: rem(28),
                      background: 'linear-gradient(135deg, #8B5CF6 0%, #9333ea 100%)',
                      borderRadius: rem(14),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 3px 8px rgba(139, 92, 246, 0.3)',
                    }}
                  >
                    <IconBook size={14} style={{ color: '#ffffff' }} />
                  </Box>
                  <Text size="sm" fw={500} style={{ color: isDark ? '#cbd5e1' : '#374151', fontFamily: 'Nunito, sans-serif' }}>
                    Demo shows how your child's photo & name will appear
                  </Text>
                </Group>

                <Group gap="sm">
                  <Box
                    style={{
                      width: rem(28),
                      height: rem(28),
                      background: 'linear-gradient(135deg, #facc15 0%, #fb923c 100%)',
                      borderRadius: rem(14),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 3px 8px rgba(250, 204, 21, 0.3)',
                    }}
                  >
                    <IconSparkles size={14} style={{ color: '#ffffff' }} />
                  </Box>
                  <Text size="sm" fw={500} style={{ color: isDark ? '#cbd5e1' : '#374151', fontFamily: 'Nunito, sans-serif' }}>
                    Explore pages with stunning AI illustrations in 3D
                  </Text>
                </Group>

                <Group gap="sm">
                  <Box
                    style={{
                      width: rem(28),
                      height: rem(28),
                      background: 'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)',
                      borderRadius: rem(14),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 3px 8px rgba(244, 114, 182, 0.3)',
                    }}
                  >
                    <IconHeart size={14} style={{ color: '#ffffff' }} />
                  </Box>
                  <Text size="sm" fw={500} style={{ color: isDark ? '#cbd5e1' : '#374151', fontFamily: 'Nunito, sans-serif' }}>
                    Try the full immersive experience – click & interact!
                  </Text>
                </Group>
              </Stack>

              {/* Professional CTA Buttons */}
              <Group gap="md" justify={isMobile ? "center" : "flex-start"} mt="lg">
                <Button
                  size={isMobile ? "md" : "lg"}
                  radius="xl"
                  onClick={handleShopNavigation}
                  style={{
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #9333ea 100%)',
                    border: 'none',
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 600,
                    padding: isMobile ? '12px 24px' : '16px 32px',
                    fontSize: isMobile ? '14px' : '16px',
                    boxShadow: '0 8px 25px rgba(139, 92, 246, 0.3)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    letterSpacing: '0.2px',
                  }}
                  styles={{
                    root: {
                      '&:hover': {
                        transform: 'translateY(-3px) scale(1.02)',
                        boxShadow: '0 12px 35px rgba(139, 92, 246, 0.4)',
                      }
                    }
                  }}
                >
                  Create Your Book
                </Button>

                <Button
                  variant="outline"
                  size={isMobile ? "md" : "lg"}
                  radius="xl"
                  style={{
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.3)' : '#8B5CF6',
                    color: isDark ? '#e2e8f0' : '#8B5CF6',
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 500,
                    padding: isMobile ? '12px 24px' : '16px 32px',
                    fontSize: isMobile ? '14px' : '16px',
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    letterSpacing: '0.2px',
                  }}
                  styles={{
                    root: {
                      '&:hover': {
                        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(139, 92, 246, 0.1)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(139, 92, 246, 0.2)',
                      }
                    }
                  }}
                >
                  See Examples
                </Button>
              </Group>
            </Stack>
          </Grid.Col>

          {/* Right Side - Interactive Book */}
          <Grid.Col span={isMobile ? 12 : 6} order={isMobile ? 1 : 2}>
            <Box
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: isMobile || isTablet ? 'center' : 'flex-start',
                minHeight: rem(450),
                padding: isMobile || isTablet ? rem(40) : `${rem(0)} ${rem(40)} ${rem(80)} ${rem(40)}`,
                transform: isMobile || isTablet ? 'none' : 'translateY(-40px)',
              }}
            >
              {/* IMPORTANT: Using the Enhanced3DBook component */}
              <Enhanced3DBook
                title={bookData.title}
                childName={bookData.childName}
                coverImage={bookData.coverImage}
                pages={bookData.pages}
                isDark={isDark}
                size="normal"
              />
            </Box>
          </Grid.Col>
        </Grid>
      </Container>

      {/* Professional CSS Animations */}
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
      `}</style>
    </Box>
  );
}

export default PlayfulHero;