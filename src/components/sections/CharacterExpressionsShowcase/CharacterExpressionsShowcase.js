import React, { useState } from 'react';
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
  IconPalette
} from '@tabler/icons-react';

function CharacterExpressionsShowcase() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [hoveredExpression, setHoveredExpression] = useState(null);

  // Character expressions data - replace URLs with your actual character images
  const expressionCategories = {
    manyStyles: [
      {
        name: 'Realistic',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=120&h=120&fit=crop',
        color: '#8b5cf6'
      },
      {
        name: 'Cartoon',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=120&h=120&fit=crop',
        color: '#f472b6'
      },
      {
        name: 'Anime',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=120&h=120&fit=crop',
        color: '#facc15'
      }
    ],
    expressions: [
      {
        name: 'Happy',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=120&h=120&fit=crop',
        color: '#10b981'
      },
      {
        name: 'Surprised',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=120&h=120&fit=crop',
        color: '#f59e0b'
      },
      {
        name: 'Brave',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=120&h=120&fit=crop',
        color: '#ef4444'
      },
      {
        name: 'Curious',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=120&h=120&fit=crop',
        color: '#3b82f6'
      }
    ],
    angles: [
      {
        name: 'Front View',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=120&h=120&fit=crop',
        color: '#8b5cf6'
      },
      {
        name: 'Profile',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=120&h=120&fit=crop',
        color: '#06b6d4'
      },
      {
        name: '3/4 View',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=120&h=120&fit=crop',
        color: '#84cc16'
      },
      {
        name: 'Action Shot',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=120&h=120&fit=crop',
        color: '#f97316'
      }
    ]
  };

  const CategorySection = ({ title, items, icon: Icon, subtitle, accent }) => (
    <Box mb={rem(60)}>
      <Stack align="center" mb={rem(40)}>
        <Box
          style={{
            background: `${accent}20`,
            borderRadius: '50%',
            width: rem(60),
            height: rem(60),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `2px solid ${accent}40`,
          }}
        >
          <Icon size={24} style={{ color: accent }} />
        </Box>
        
        <Text
          size="xl"
          fw={700}
          ta="center"
          style={{
            color: isDark ? '#ffffff' : '#1e293b',
            fontFamily: 'Quicksand, sans-serif',
          }}
        >
          {title}
        </Text>
        
        <Text
          size="md"
          ta="center"
          style={{
            color: isDark ? '#cbd5e1' : '#64748b',
            fontFamily: 'Nunito, sans-serif',
            maxWidth: rem(400),
          }}
        >
          {subtitle}
        </Text>
      </Stack>

      <SimpleGrid
        cols={{ base: 2, sm: items.length }}
        spacing={rem(24)}
        style={{ maxWidth: rem(600), margin: '0 auto' }}
      >
        {items.map((item, index) => (
          <Box
            key={item.name}
            style={{
              position: 'relative',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={() => setHoveredExpression(`${title}-${index}`)}
            onMouseLeave={() => setHoveredExpression(null)}
          >
            {/* Character Circle */}
            <Box
              style={{
                position: 'relative',
                width: rem(120),
                height: rem(120),
                margin: '0 auto',
                marginBottom: rem(16),
              }}
            >
              {/* Floating Ring Effect */}
              <Box
                style={{
                  position: 'absolute',
                  inset: rem(-8),
                  borderRadius: '50%',
                  background: `conic-gradient(from 0deg, ${item.color}, ${item.color}80, ${item.color})`,
                  animation: hoveredExpression === `${title}-${index}` ? 'ringRotate 2s linear infinite' : 'none',
                  opacity: hoveredExpression === `${title}-${index}` ? 1 : 0,
                  transition: 'opacity 0.3s ease',
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
                  border: `4px solid ${item.color}`,
                  transform: hoveredExpression === `${title}-${index}` ? 'scale(1.1)' : 'scale(1)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: hoveredExpression === `${title}-${index}` 
                    ? `0 20px 40px ${item.color}40` 
                    : `0 8px 25px ${item.color}20`,
                }}
              >
                <img 
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>

              {/* Sparkle Effects */}
              {hoveredExpression === `${title}-${index}` && (
                <>
                  <Box
                    style={{
                      position: 'absolute',
                      top: '10%',
                      right: '10%',
                      color: item.color,
                      animation: 'sparkleFloat 1.5s ease-in-out infinite',
                      zIndex: 10,
                    }}
                  >
                    <IconSparkles size={16} />
                  </Box>
                  <Box
                    style={{
                      position: 'absolute',
                      bottom: '15%',
                      left: '15%',
                      color: item.color,
                      animation: 'sparkleFloat 1.5s ease-in-out infinite 0.5s',
                      zIndex: 10,
                    }}
                  >
                    <IconSparkles size={12} />
                  </Box>
                </>
              )}
            </Box>

            {/* Label */}
            <Text
              fw={600}
              size="sm"
              style={{
                color: hoveredExpression === `${title}-${index}` ? item.color : (isDark ? '#ffffff' : '#1e293b'),
                fontFamily: 'Quicksand, sans-serif',
                transition: 'color 0.3s ease',
              }}
            >
              {item.name}
            </Text>

            {/* Decorative Curved Line */}
            <Box
              style={{
                position: 'absolute',
                top: '50%',
                left: hoveredExpression === `${title}-${index}` ? '-30%' : '-20%',
                width: rem(40),
                height: rem(2),
                background: `linear-gradient(90deg, transparent, ${item.color}80, transparent)`,
                borderRadius: rem(1),
                opacity: hoveredExpression === `${title}-${index}` ? 1 : 0,
                transition: 'all 0.4s ease',
                transform: 'rotate(-20deg)',
              }}
            />
            <Box
              style={{
                position: 'absolute',
                top: '50%',
                right: hoveredExpression === `${title}-${index}` ? '-30%' : '-20%',
                width: rem(40),
                height: rem(2),
                background: `linear-gradient(90deg, transparent, ${item.color}80, transparent)`,
                borderRadius: rem(1),
                opacity: hoveredExpression === `${title}-${index}` ? 1 : 0,
                transition: 'all 0.4s ease',
                transform: 'rotate(20deg)',
              }}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );

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
          top: '10%',
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
          bottom: '15%',
          left: '6%',
          color: '#f472b6',
          animation: 'sparkleAndFloat 5s ease-in-out infinite 1s',
          zIndex: 2,
          opacity: 0.7,
        }}
      >
        <IconHeart size={20} />
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
              <IconPalette size={18} style={{ color: isDark ? '#c4b5fd' : '#8B5CF6' }} />
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
                Character Customization
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
            Bring Your Character{' '}
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
              to Life
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
            Customize faces, expressions, and angles to personalise the perfect character for your child's story
          </Text>
        </Box>

        {/* Category Sections */}
        <CategorySection 
          title="Many Styles"
          items={expressionCategories.manyStyles}
          icon={IconPalette}
          subtitle="Choose from realistic, cartoon, or anime art styles"
          accent="#8b5cf6"
        />

        <CategorySection 
          title="Full of Expressions"
          items={expressionCategories.expressions}
          icon={IconHeart}
          subtitle="Capture every emotion and personality trait"
          accent="#f472b6"
        />

        <CategorySection 
          title="Different Angles"
          items={expressionCategories.angles}
          icon={IconStar}
          subtitle="Dynamic poses and perspectives for engaging storytelling"
          accent="#facc15"
        />
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
        
        @keyframes ringRotate {
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

export default CharacterExpressionsShowcase;