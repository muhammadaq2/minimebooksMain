import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Text, 
  Box,
  Group,
  Stack,
  SimpleGrid,
  rem,
  useMantineColorScheme 
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { 
  IconSparkles, 
  IconHeart,
  IconStar,
  IconTrophy,
  IconRocket,
  IconStethoscope
} from '@tabler/icons-react';

function CareerDreamsShowcase() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [activeCareer, setActiveCareer] = useState(0);

  // Auto-cycle through careers
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCareer((prev) => (prev + 1) % 6);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Career data with character images - replace URLs with your actual character images
  const careerData = [
    {
      title: 'Doctor',
      description: 'Healing hearts and saving lives',
      icon: IconStethoscope,
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      characterImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop',
      storyLine: 'Dr. Emma saves the day at the hospital!',
      skills: ['Caring', 'Brave', 'Smart'],
    },
    {
      title: 'Firefighter',
      description: 'Brave hero protecting the community',
      icon: IconTrophy,
      color: '#ef4444',
      gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
      characterImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop',
      storyLine: 'Captain Max rescues the kitten from the tree!',
      skills: ['Courageous', 'Strong', 'Helpful'],
    },
    {
      title: 'Astronaut',
      description: 'Exploring the wonders of space',
      icon: IconRocket,
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      characterImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop',
      storyLine: 'Commander Luna discovers a new planet!',
      skills: ['Adventurous', 'Curious', 'Brave'],
    },
    {
      title: 'Teacher',
      description: 'Inspiring young minds to learn',
      icon: IconHeart,
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      characterImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop',
      storyLine: 'Teacher Sofia makes learning fun for everyone!',
      skills: ['Patient', 'Kind', 'Creative'],
    },
    {
      title: 'Artist',
      description: 'Creating beautiful masterpieces',
      icon: IconSparkles,
      color: '#f472b6',
      gradient: 'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)',
      characterImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop',
      storyLine: 'Artist Zoe paints the most amazing rainbow!',
      skills: ['Creative', 'Imaginative', 'Talented'],
    },
    {
      title: 'Scientist',
      description: 'Discovering amazing new things',
      icon: IconStar,
      color: '#06b6d4',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
      characterImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop',
      storyLine: 'Scientist Alex invents something incredible!',
      skills: ['Curious', 'Smart', 'Innovative'],
    },
  ];

  const currentCareer = careerData[activeCareer];

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
      {/* Decorative Elements */}
      <Box
        style={{
          position: 'absolute',
          top: '12%',
          right: '8%',
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
          top: '25%',
          left: '6%',
          color: '#f472b6',
          animation: 'sparkleAndFloat 5s ease-in-out infinite 1s',
          zIndex: 2,
          opacity: 0.7,
        }}
      >
        <IconHeart size={20} />
      </Box>

      <Box
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          color: isDark ? '#8b5cf6' : '#a855f7',
          animation: 'sparkleAndFloat 6s ease-in-out infinite 2s',
          zIndex: 1,
          opacity: 0.6,
        }}
      >
        <IconTrophy size={28} />
      </Box>

      <Container size="xl" style={{ position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <Box ta="center" mb={rem(80)}>
          <Group
            justify="center"
            mb="xl"
            style={{
              background: isDark 
                ? 'rgba(139, 92, 246, 0.1)' 
                : 'rgba(139, 92, 246, 0.1)',
              backdropFilter: 'blur(16px)',
              borderRadius: rem(30),
              padding: `${rem(10)} ${rem(24)}`,
              border: `1px solid ${isDark ? 'rgba(139, 92, 246, 0.2)' : 'rgba(139, 92, 246, 0.2)'}`,
              display: 'inline-flex',
              boxShadow: isDark 
                ? '0 8px 32px rgba(139, 92, 246, 0.1)' 
                : '0 8px 32px rgba(139, 92, 246, 0.08)',
            }}
          >
            <Group gap="xs">
              <IconTrophy size={18} style={{ color: isDark ? '#c4b5fd' : '#8B5CF6' }} />
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
                Dream Careers
              </Text>
            </Group>
          </Group>

          <Text
            component="h2"
            size={isMobile ? "2.2rem" : "3rem"}
            fw={800}
            ta="center"
            mb="xl"
            style={{
              fontFamily: 'Quicksand, sans-serif',
              color: isDark ? '#ffffff' : '#1e293b',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              textShadow: isDark ? '0 2px 4px rgba(255,255,255,0.1)' : '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Inspire Their{' '}
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
              Big Dreams
            </Text>
          </Text>

          <Text
            size={isMobile ? "md" : "lg"}
            style={{
              color: isDark ? '#e2e8f0' : '#475569',
              fontFamily: 'Nunito, sans-serif',
              maxWidth: rem(700),
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Personalized stories that celebrate their aspirations and show them they can be anything they dream of becoming
          </Text>
        </Box>

        {/* Main Career Showcase */}
        <Box
          mb={rem(80)}
          style={{
            background: isDark 
              ? 'rgba(255, 255, 255, 0.03)'
              : 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(20px)',
            borderRadius: rem(32),
            padding: rem(50),
            border: isDark 
              ? '1px solid rgba(255, 255, 255, 0.1)' 
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
              background: `radial-gradient(circle at 20% 80%, ${currentCareer.color}10 0%, transparent 50%),
                          radial-gradient(circle at 80% 20%, ${currentCareer.color}08 0%, transparent 50%)`,
              borderRadius: rem(32),
            }}
          />

          <SimpleGrid
            cols={{ base: 1, md: 2 }}
            spacing={rem(60)}
            style={{ alignItems: 'center', position: 'relative', zIndex: 2 }}
          >
            {/* Character Display */}
            <Box ta="center">
              <Box
                style={{
                  position: 'relative',
                  width: rem(280),
                  height: rem(280),
                  margin: '0 auto',
                  marginBottom: rem(24),
                }}
              >
                {/* Rotating Background Ring */}
                <Box
                  style={{
                    position: 'absolute',
                    inset: rem(-20),
                    borderRadius: '50%',
                    background: `conic-gradient(from 0deg, ${currentCareer.color}, transparent, ${currentCareer.color})`,
                    animation: 'slowRotate 8s linear infinite',
                  }}
                />

                {/* Character Image */}
                <Box
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: `6px solid ${currentCareer.color}`,
                    background: currentCareer.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 30px 60px ${currentCareer.color}30`,
                    transition: 'all 0.5s ease',
                  }}
                >
                  <img 
                    src={currentCareer.characterImage}
                    alt={currentCareer.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>

                {/* Career Icon Badge */}
                <Box
                  style={{
                    position: 'absolute',
                    top: rem(-10),
                    right: rem(-10),
                    background: currentCareer.gradient,
                    borderRadius: '50%',
                    width: rem(60),
                    height: rem(60),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 8px 25px ${currentCareer.color}40`,
                    border: `3px solid ${isDark ? '#1e293b' : '#ffffff'}`,
                  }}
                >
                  <currentCareer.icon size={28} style={{ color: '#ffffff' }} />
                </Box>

                {/* Floating Sparkles */}
                <Box
                  style={{
                    position: 'absolute',
                    top: '15%',
                    left: '15%',
                    color: currentCareer.color,
                    animation: 'sparkleFloat 2s ease-in-out infinite',
                  }}
                >
                  <IconSparkles size={16} />
                </Box>
                <Box
                  style={{
                    position: 'absolute',
                    bottom: '20%',
                    right: '20%',
                    color: currentCareer.color,
                    animation: 'sparkleFloat 2s ease-in-out infinite 1s',
                  }}
                >
                  <IconSparkles size={20} />
                </Box>
              </Box>

              <Text
                size="xl"
                fw={700}
                mb="xs"
                style={{
                  color: currentCareer.color,
                  fontFamily: 'Quicksand, sans-serif',
                }}
              >
                {currentCareer.title}
              </Text>
              <Text
                size="md"
                style={{
                  color: isDark ? '#cbd5e1' : '#64748b',
                  fontFamily: 'Nunito, sans-serif',
                }}
              >
                {currentCareer.description}
              </Text>
            </Box>

            {/* Career Details */}
            <Stack gap="xl">
              {/* Story Preview */}
              <Box
                style={{
                  background: `${currentCareer.color}15`,
                  borderRadius: rem(20),
                  padding: rem(24),
                  border: `2px solid ${currentCareer.color}30`,
                }}
              >
                <Text
                  size="lg"
                  fw={700}
                  mb="md"
                  style={{
                    color: isDark ? '#ffffff' : '#1e293b',
                    fontFamily: 'Quicksand, sans-serif',
                  }}
                >
                  Story Preview
                </Text>
                <Text
                  size="md"
                  style={{
                    color: currentCareer.color,
                    fontFamily: 'Nunito, sans-serif',
                    fontStyle: 'italic',
                    fontSize: rem(18),
                    fontWeight: 600,
                  }}
                >
                  "{currentCareer.storyLine}"
                </Text>
              </Box>

              {/* Skills */}
              <Box>
                <Text
                  size="lg"
                  fw={700}
                  mb="md"
                  style={{
                    color: isDark ? '#ffffff' : '#1e293b',
                    fontFamily: 'Quicksand, sans-serif',
                  }}
                >
                  Character Traits
                </Text>
                <Group gap="sm">
                  {currentCareer.skills.map((skill, index) => (
                    <Box
                      key={skill}
                      style={{
                        background: `${currentCareer.color}20`,
                        borderRadius: rem(20),
                        padding: `${rem(8)} ${rem(16)}`,
                        border: `1px solid ${currentCareer.color}40`,
                      }}
                    >
                      <Text
                        size="sm"
                        fw={600}
                        style={{
                          color: currentCareer.color,
                          fontFamily: 'Nunito, sans-serif',
                        }}
                      >
                        {skill}
                      </Text>
                    </Box>
                  ))}
                </Group>
              </Box>
            </Stack>
          </SimpleGrid>
        </Box>

        {/* Career Options Grid */}
        <SimpleGrid
          cols={{ base: 3, sm: 6 }}
          spacing={rem(20)}
          style={{ maxWidth: rem(800), margin: '0 auto' }}
        >
          {careerData.map((career, index) => (
            <Box
              key={career.title}
              style={{
                background: index === activeCareer 
                  ? `${career.color}25` 
                  : (isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)'),
                borderRadius: rem(16),
                padding: rem(16),
                textAlign: 'center',
                border: index === activeCareer 
                  ? `2px solid ${career.color}` 
                  : `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(139, 92, 246, 0.1)'}`,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                transform: index === activeCareer ? 'scale(1.05)' : 'scale(1)',
                boxShadow: index === activeCareer 
                  ? `0 8px 25px ${career.color}30` 
                  : '0 4px 12px rgba(0,0,0,0.1)',
              }}
              onClick={() => setActiveCareer(index)}
            >
              <Box
                style={{
                  background: career.gradient,
                  borderRadius: '50%',
                  width: rem(50),
                  height: rem(50),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  marginBottom: rem(8),
                }}
              >
                <career.icon size={24} style={{ color: '#ffffff' }} />
              </Box>
              <Text
                size="xs"
                fw={600}
                style={{
                  color: index === activeCareer ? career.color : (isDark ? '#ffffff' : '#1e293b'),
                  fontFamily: 'Nunito, sans-serif',
                }}
              >
                {career.title}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* Animations */}
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
        
        @keyframes slowRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes sparkleFloat {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-6px) scale(1.2); 
            opacity: 1;
          }
        }
      `}</style>
    </Box>
  );
}

export default CareerDreamsShowcase;