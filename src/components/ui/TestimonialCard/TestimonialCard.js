import React, { useState } from 'react';
import { 
  Card, 
  Text, 
  Badge, 
  Group, 
  Box,
  Stack,
  Avatar,
  rem,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { 
  IconCrown,
  IconBolt,
  IconRocket,
  IconPaw,
  IconTrophy,
  IconSparkles,
  IconStar,
  IconStarFilled,
  IconShieldCheck,
  IconQuote,
  IconUser
} from '@tabler/icons-react';

function TestimonialCard({ 
  id,
  parentName,
  parentImage,
  childName,
  rating,
  testimonial,
  childReaction,
  verified,
  location,
  bookTheme,
  isDark
}) {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Professional theme configurations with icons
  const themeConfig = {
    adventure: {
      icon: IconStar,
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
    },
    princess: {
      icon: IconCrown,
      color: '#f472b6',
      gradient: 'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)'
    },
    superhero: {
      icon: IconBolt,
      color: '#3b82f6',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
    },
    space: {
      icon: IconRocket,
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
    },
    animal: {
      icon: IconPaw,
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
    },
    pirate: {
      icon: IconTrophy,
      color: '#ef4444',
      gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
    },
    fairy: {
      icon: IconSparkles,
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    }
  };

  const currentTheme = themeConfig[bookTheme] || themeConfig.adventure;
  const ThemeIcon = currentTheme.icon;

  // Render star rating
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <Box key={index}>
        {index < rating ? (
          <IconStarFilled
            size={16}
            style={{
              color: '#facc15',
              transition: 'all 0.2s ease',
            }}
          />
        ) : (
          <IconStar
            size={16}
            style={{
              color: isDark ? '#374151' : '#e5e7eb',
              transition: 'all 0.2s ease',
            }}
          />
        )}
      </Box>
    ));
  };

  return (
    <Card
      shadow="none"
      radius="2xl"
      padding={0}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'translateY(-6px) scale(1.01)' : 'translateY(0) scale(1)',
        background: isDark 
          ? 'rgba(30, 27, 75, 0.6)'
          : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px)',
        border: isDark 
          ? '1px solid rgba(139, 92, 246, 0.2)' 
          : '1px solid rgba(139, 92, 246, 0.15)',
        boxShadow: isHovered
          ? (isDark 
            ? '0 20px 40px -12px rgba(139, 92, 246, 0.25), 0 0 0 1px rgba(139, 92, 246, 0.1)' 
            : '0 20px 40px -12px rgba(139, 92, 246, 0.2), 0 0 0 1px rgba(139, 92, 246, 0.1)')
          : (isDark
            ? '0 8px 25px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)'
            : '0 8px 25px -3px rgba(139, 92, 246, 0.1), 0 4px 6px -2px rgba(139, 92, 246, 0.06)'),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {/* Professional Content */}
      <Box p={rem(24)}>
        <Stack gap="lg">
          
          {/* Header with Parent Info and Rating */}
          <Group justify="space-between" align="flex-start">
            <Group gap="md">
              <Avatar
                src={parentImage}
                size={rem(50)}
                radius="xl"
                style={{
                  border: `2px solid ${currentTheme.color}`,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
              />
              <Box>
                <Group gap="xs" align="center">
                  <Text
                    size="md"
                    fw={700}
                    style={{
                      color: isDark ? '#ffffff' : '#1e293b',
                      fontFamily: 'Quicksand, sans-serif',
                      lineHeight: 1.2,
                    }}
                  >
                    {parentName}
                  </Text>
                  {verified && (
                    <Box
                      style={{
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                        borderRadius: '50%',
                        width: rem(20),
                        height: rem(20),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <IconShieldCheck size={12} style={{ color: '#ffffff' }} />
                    </Box>
                  )}
                </Group>
                <Text
                  size="sm"
                  style={{
                    color: isDark ? '#94a3b8' : '#64748b',
                    fontFamily: 'Nunito, sans-serif',
                  }}
                >
                  Parent of {childName}
                </Text>
              </Box>
            </Group>

            <Group gap="xs" align="center">
              {renderStars()}
            </Group>
          </Group>

          {/* Book Theme Badge */}
          <Group justify="space-between" align="center">
            <Badge
              size="md"
              radius="lg"
              style={{
                background: currentTheme.gradient,
                color: '#ffffff',
                border: 'none',
                fontSize: rem(11),
                fontWeight: 600,
                fontFamily: 'Nunito, sans-serif',
                padding: `${rem(8)} ${rem(16)}`,
                textTransform: 'capitalize',
                display: 'flex',
                alignItems: 'center',
                gap: rem(6),
              }}
            >
              <ThemeIcon size={14} />
              {bookTheme} Book
            </Badge>

            <Text
              size="xs"
              style={{
                color: isDark ? '#94a3b8' : '#64748b',
                fontFamily: 'Nunito, sans-serif',
              }}
            >
              {location}
            </Text>
          </Group>

          {/* Main Testimonial */}
          <Box
            style={{
              background: isDark 
                ? 'rgba(139, 92, 246, 0.08)'
                : 'rgba(139, 92, 246, 0.05)',
              borderRadius: rem(16),
              padding: rem(20),
              border: isDark 
                ? '1px solid rgba(139, 92, 246, 0.15)'
                : '1px solid rgba(139, 92, 246, 0.1)',
              position: 'relative',
            }}
          >
            {/* Professional Quote Icon */}
            <Box
              style={{
                position: 'absolute',
                top: rem(-10),
                left: rem(20),
                background: currentTheme.gradient,
                borderRadius: rem(12),
                width: rem(24),
                height: rem(24),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              }}
            >
              <IconQuote size={12} style={{ color: '#ffffff' }} />
            </Box>

            <Text
              size="sm"
              style={{
                color: isDark ? '#e2e8f0' : '#374151',
                fontFamily: 'Nunito, sans-serif',
                lineHeight: 1.6,
                fontStyle: 'italic',
                marginTop: rem(8),
              }}
            >
              {testimonial}
            </Text>
          </Box>

          {/* Child's Reaction */}
          <Box
            style={{
              background: isDark 
                ? 'rgba(250, 204, 21, 0.1)'
                : 'rgba(250, 204, 21, 0.1)',
              borderRadius: rem(12),
              padding: rem(16),
              border: isDark 
                ? '1px solid rgba(250, 204, 21, 0.2)'
                : '1px solid rgba(250, 204, 21, 0.2)',
              position: 'relative',
            }}
          >
            <Group gap="xs" mb="xs">
              <Box
                style={{
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  borderRadius: '50%',
                  width: rem(20),
                  height: rem(20),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <IconUser size={12} style={{ color: '#ffffff' }} />
              </Box>
              <Text
                size="xs"
                fw={600}
                style={{
                  color: isDark ? '#fbbf24' : '#d97706',
                  fontFamily: 'Nunito, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                Child's Reaction
              </Text>
            </Group>
            
            <Text
              size="sm"
              style={{
                color: isDark ? '#fde68a' : '#92400e',
                fontFamily: 'Nunito, sans-serif',
                lineHeight: 1.5,
                fontWeight: 500,
              }}
            >
              "{childReaction}"
            </Text>
          </Box>

          {/* Subtle Professional Elements for Hover Effect */}
          {isHovered && (
            <>
              <Box
                style={{
                  position: 'absolute',
                  top: '10%',
                  right: '10%',
                  color: currentTheme.color,
                  animation: 'gentleFloat 2s ease-in-out infinite',
                  opacity: 0.6,
                  zIndex: 1,
                }}
              >
                <IconSparkles size={12} />
              </Box>
              <Box
                style={{
                  position: 'absolute',
                  bottom: '15%',
                  left: '8%',
                  color: currentTheme.color,
                  animation: 'gentleFloat 2.5s ease-in-out infinite 0.5s',
                  opacity: 0.5,
                  zIndex: 1,
                }}
              >
                <IconStar size={10} />
              </Box>
            </>
          )}
        </Stack>
      </Box>

      {/* Professional CSS Animations */}
      <style jsx global>{`
        @keyframes gentleFloat {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
            opacity: 0.5;
          }
          50% { 
            transform: translateY(-4px) scale(1.1); 
            opacity: 0.8;
          }
        }
      `}</style>
    </Card>
  );
}

export default TestimonialCard;