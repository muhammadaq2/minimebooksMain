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
  IconStar,
  IconHeart,
  IconTrophy,
  IconCrown,
  IconRocket
} from '@tabler/icons-react';

function PosterCharacterGallery() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [highlightedCharacter, setHighlightedCharacter] = useState(0);

  // Your character showcase
  const characterGallery = [
    {
      image: "https://storage.wonderwraps.com/6eeca8a8-3a46-4995-bb9a-d97bfdaa8dad/kYlYjXM9qyld2nhVqtkjoFMsYzkWgj-metaVGhlby5wbmc=-.png",
      name: "Theo",
      theme: "Superhero",
      color: "#3b82f6",
      icon: IconTrophy
    },
    {
      image: "https://storage.wonderwraps.com/0707e8b3-ecd7-43d5-9bd7-8678e99b371a/EmQKu5WF25s0bDzekEnErUZJwJuKlJ-metaSmFtZXMxLmpwZWc=-.jpeg",
      name: "James",
      theme: "Adventure",
      color: "#f59e0b",
      icon: IconRocket
    },
    {
      image: "https://storage.wonderwraps.com/18827642-5c78-49fd-9bc8-3b740f178665/dsv9FAxZO4VNxrrZI8yK1vGoqAu14n-metaYWlfaW1hZ2UuanBlZw==-.jpeg",
      name: "Charlie",
      theme: "Fantasy",
      color: "#8b5cf6",
      icon: IconCrown
    },
    {
      image: "https://storage.wonderwraps.com/9c1c5eae-1770-42b9-96ec-0072b0d836be/LYTRfP8C5j8nZ5Wshz4norg4IfQKGH-metaYWlfaW1hZ2UgKDEpLmpwZWc=-.jpeg",
      name: "Preview",
      theme: "Princess",
      color: "#f472b6",
      icon: IconHeart
    }
  ];

  const benefits = [
    {
      icon: IconStar,
      title: "Unlimited Styles",
      description: "Choose from dozens of character themes and artistic styles",
      stat: "50+ Themes"
    },
    {
      icon: IconSparkles,
      title: "Perfect Likeness",
      description: "AI preserves your child's unique features in every character",
      stat: "99% Accuracy"
    },
    {
      icon: IconHeart,
      title: "Instant Results",
      description: "Get your personalized character in under 60 seconds",
      stat: "<60 Seconds"
    }
  ];

  // Auto-highlight characters
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedCharacter((prev) => (prev + 1) % characterGallery.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [characterGallery.length]);

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
              : 'rgba(255, 255, 255, 0.7)',
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
                radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.05) 0%, transparent 60%),
                radial-gradient(circle at 80% 70%, rgba(244, 114, 182, 0.05) 0%, transparent 60%),
                radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.03) 0%, transparent 70%)
              `,
              borderRadius: rem(24),
            }}
          />

          <Group align="flex-start" wrap="nowrap" style={{ position: 'relative', zIndex: 2 }}>
            
            {/* Left: Content */}
            <Box style={{ flex: 1, marginRight: isMobile ? 0 : rem(40) }}>
              <Stack gap="xl">
                
                {/* Header */}
                <Box>
                  <Group
                    mb="md"
                    style={{
                      background: 'linear-gradient(135deg, #f472b6 0%, #8b5cf6 100%)',
                      backdropFilter: 'blur(12px)',
                      borderRadius: rem(20),
                      padding: `${rem(6)} ${rem(16)}`,
                      display: 'inline-flex',
                      boxShadow: '0 4px 15px rgba(244, 114, 182, 0.3)',
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
                      Character Gallery
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
                    Every Child Becomes a{' '}
                    <Text
                      component="span"
                      inherit
                      style={{
                        background: 'linear-gradient(135deg, #f472b6 0%, #8b5cf6 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      Unique Hero
                    </Text>
                  </Text>

                  <Text
                    size="md"
                    style={{
                      color: isDark ? '#cbd5e1' : '#64748b',
                      fontFamily: 'Nunito, sans-serif',
                      lineHeight: 1.6,
                      marginBottom: rem(30),
                    }}
                  >
                    Watch as ordinary photos transform into extraordinary characters. Each one perfectly captures your child's personality and spirit.
                  </Text>
                </Box>

                {/* Benefits */}
                <Stack gap="lg">
                  {benefits.map((benefit, index) => (
                    <Group
                      key={index}
                      gap="md"
                      align="flex-start"
                      style={{
                        padding: rem(16),
                        borderRadius: rem(16),
                        background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.6)',
                        border: '1px solid rgba(139, 92, 246, 0.1)',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {/* Benefit Icon */}
                      <Box
                        style={{
                          width: rem(50),
                          height: rem(50),
                          borderRadius: rem(12),
                          background: 'linear-gradient(135deg, #8b5cf6 0%, #f472b6 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)',
                        }}
                      >
                        <benefit.icon size={24} style={{ color: '#ffffff' }} />
                      </Box>

                      {/* Benefit Content */}
                      <Box style={{ flex: 1 }}>
                        <Group justify="space-between" mb="xs">
                          <Text
                            size="md"
                            fw={700}
                            style={{
                              color: isDark ? '#ffffff' : '#1e293b',
                              fontFamily: 'Quicksand, sans-serif',
                            }}
                          >
                            {benefit.title}
                          </Text>
                          
                          <Box
                            style={{
                              background: 'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)',
                              borderRadius: rem(12),
                              padding: `${rem(4)} ${rem(8)}`,
                            }}
                          >
                            <Text
                              size="xs"
                              fw={700}
                              style={{
                                color: '#ffffff',
                                fontFamily: 'Nunito, sans-serif',
                              }}
                            >
                              {benefit.stat}
                            </Text>
                          </Box>
                        </Group>
                        
                        <Text
                          size="sm"
                          style={{
                            color: isDark ? '#cbd5e1' : '#64748b',
                            fontFamily: 'Nunito, sans-serif',
                            lineHeight: 1.5,
                          }}
                        >
                          {benefit.description}
                        </Text>
                      </Box>
                    </Group>
                  ))}
                </Stack>
              </Stack>
            </Box>

            {/* Right: Character Gallery */}
            <Box 
              style={{ 
                flex: 1,
                display: isMobile ? 'none' : 'block',
                position: 'relative',
                minHeight: rem(500),
              }}
            >
              <Box
                style={{
                  position: 'relative',
                  height: rem(500),
                  borderRadius: rem(20),
                  overflow: 'hidden',
                  padding: rem(20),
                }}
              >
                
                {/* Character Grid */}
                <Box
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: rem(16),
                    height: '100%',
                  }}
                >
                  {characterGallery.map((character, index) => (
                    <Box
                      key={index}
                      style={{
                        position: 'relative',
                        borderRadius: rem(16),
                        overflow: 'hidden',
                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: highlightedCharacter === index 
                          ? 'scale(1.05) translateZ(20px)' 
                          : 'scale(1) translateZ(0px)',
                        boxShadow: highlightedCharacter === index 
                          ? `0 20px 40px ${character.color}40`
                          : '0 8px 25px rgba(0,0,0,0.1)',
                        border: highlightedCharacter === index 
                          ? `3px solid ${character.color}`
                          : '3px solid transparent',
                        cursor: 'pointer',
                      }}
                      onClick={() => setHighlightedCharacter(index)}
                    >
                      {/* Character Image */}
                      <Box
                        style={{
                          width: '100%',
                          height: rem(140),
                          position: 'relative',
                        }}
                      >
                        <img 
                          src={character.image}
                          alt={character.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                        
                        {/* Character Overlay */}
                        <Box
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background: highlightedCharacter === index 
                              ? `linear-gradient(45deg, ${character.color}20, transparent 70%)`
                              : 'linear-gradient(45deg, rgba(0,0,0,0.1), transparent 70%)',
                            transition: 'background 0.5s ease',
                          }}
                        />

                        {/* Theme Icon */}
                        <Box
                          style={{
                            position: 'absolute',
                            top: rem(8),
                            right: rem(8),
                            background: highlightedCharacter === index 
                              ? character.color
                              : 'rgba(0,0,0,0.5)',
                            borderRadius: '50%',
                            width: rem(32),
                            height: rem(32),
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.5s ease',
                            animation: highlightedCharacter === index ? 'iconBounce 0.6s ease-out' : 'none',
                          }}
                        >
                          <character.icon size={16} style={{ color: '#ffffff' }} />
                        </Box>
                      </Box>

                      {/* Character Info */}
                      <Box
                        style={{
                          padding: rem(12),
                          background: highlightedCharacter === index 
                            ? `linear-gradient(135deg, ${character.color}15, ${character.color}05)`
                            : (isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.9)'),
                          transition: 'background 0.5s ease',
                        }}
                      >
                        <Text
                          size="sm"
                          fw={700}
                          mb="xs"
                          style={{
                            color: highlightedCharacter === index 
                              ? character.color 
                              : (isDark ? '#ffffff' : '#1e293b'),
                            fontFamily: 'Quicksand, sans-serif',
                            transition: 'color 0.5s ease',
                          }}
                        >
                          {character.name}
                        </Text>
                        
                        <Text
                          size="xs"
                          style={{
                            color: isDark ? '#cbd5e1' : '#64748b',
                            fontFamily: 'Nunito, sans-serif',
                          }}
                        >
                          {character.theme} Hero
                        </Text>
                      </Box>

                      {/* Highlight Ring */}
                      {highlightedCharacter === index && (
                        <Box
                          style={{
                            position: 'absolute',
                            inset: rem(-4),
                            borderRadius: rem(20),
                            background: `conic-gradient(from 0deg, ${character.color}, transparent, ${character.color})`,
                            animation: 'ringRotate 3s linear infinite',
                            zIndex: -1,
                          }}
                        />
                      )}
                    </Box>
                  ))}
                </Box>

                {/* Gallery Footer */}
                <Box
                  ta="center"
                  mt={rem(20)}
                  style={{
                    position: 'absolute',
                    bottom: rem(20),
                    left: rem(20),
                    right: rem(20),
                  }}
                >
                  <Text
                    size="sm"
                    fw={600}
                    style={{
                      color: characterGallery[highlightedCharacter].color,
                      fontFamily: 'Quicksand, sans-serif',
                      transition: 'color 0.5s ease',
                    }}
                  >
                    {characterGallery[highlightedCharacter].name} • {characterGallery[highlightedCharacter].theme} Style
                  </Text>
                </Box>
              </Box>
            </Box>
          </Group>
        </Box>
      </Container>

      {/* Gallery Animations */}
      <style jsx global>{`
        @keyframes iconBounce {
          0%, 100% { 
            transform: scale(1);
          }
          50% { 
            transform: scale(1.2);
          }
        }
        
        @keyframes ringRotate {
          from { 
            transform: rotate(0deg);
          }
          to { 
            transform: rotate(360deg);
          }
        }
      `}</style>
    </Box>
  );
}

export default PosterCharacterGallery;