import React, { useState } from 'react';
import { 
  Card, 
  Text, 
  Button, 
  Badge, 
  Group, 
  Box,
  Stack,
  rem,
  useMantineColorScheme 
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import { 
  IconCrown,
  IconBolt,
  IconRocket,
  IconPaw,
  IconTrophy,
  IconSparkles,
  IconStar
} from '@tabler/icons-react';

function BookCard({ 
  id,
  title, 
  description, 
  ageRange, 
  price, 
  discount, 
  coverImage, 
  childName,
  theme = "adventure",
  onPersonalize,
  isDark
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const navigate = useNavigate();

  const handlePersonalize = () => {
    // Navigate to product detail page with the book's ID
    navigate(`/personalise/${id || 1}`);
  };

  // Professional theme configurations
  const themeConfig = {
    adventure: {
      icon: IconStar,
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 30%, #92400e 100%)',
      accent: '#f59e0b'
    },
    princess: {
      icon: IconCrown,
      gradient: 'linear-gradient(135deg, #f472b6 0%, #ec4899 30%, #be185d 100%)',
      accent: '#f472b6'
    },
    superhero: {
      icon: IconBolt,
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 30%, #1e40af 100%)',
      accent: '#3b82f6'
    },
    space: {
      icon: IconRocket,
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 30%, #6d28d9 100%)',
      accent: '#8b5cf6'
    },
    animal: {
      icon: IconPaw,
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 30%, #92400e 100%)',
      accent: '#f59e0b'
    },
    pirate: {
      icon: IconTrophy,
      gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 30%, #991b1b 100%)',
      accent: '#ef4444'
    },
    fairy: {
      icon: IconSparkles,
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 30%, #047857 100%)',
      accent: '#10b981'
    },
    educational: {
      icon: IconStar,
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 30%, #047857 100%)',
      accent: '#10b981'
    },
    creative: {
      icon: IconSparkles,
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 30%, #92400e 100%)',
      accent: '#f59e0b'
    },
    science: {
      icon: IconRocket,
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 30%, #6d28d9 100%)',
      accent: '#8b5cf6'
    },
    nature: {
      icon: IconPaw,
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 30%, #047857 100%)',
      accent: '#10b981'
    }
  };

  const currentTheme = themeConfig[theme] || themeConfig.adventure;
  const ThemeIcon = currentTheme.icon;

  return (
    <Card
      shadow="none"
      radius={isMobile ? "xl" : "2xl"}
      padding={0}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered && !isMobile ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        background: isDark 
          ? 'rgba(30, 27, 75, 0.6)'
          : 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(20px)',
        border: isDark 
          ? '1px solid rgba(139, 92, 246, 0.2)' 
          : '1px solid rgba(139, 92, 246, 0.15)',
        boxShadow: isHovered && !isMobile
          ? (isDark 
            ? '0 25px 50px -12px rgba(139, 92, 246, 0.25), 0 0 0 1px rgba(139, 92, 246, 0.1)' 
            : '0 25px 50px -12px rgba(139, 92, 246, 0.2), 0 0 0 1px rgba(139, 92, 246, 0.1)')
          : (isDark
            ? isMobile ? '0 8px 16px -4px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.1)' : '0 10px 25px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)'
            : isMobile ? '0 8px 16px -4px rgba(139, 92, 246, 0.15), 0 2px 4px -1px rgba(139, 92, 246, 0.06)' : '0 10px 25px -3px rgba(139, 92, 246, 0.1), 0 4px 6px -2px rgba(139, 92, 246, 0.06)'),
        width: '100%',
        maxWidth: '100%',
        height: isMobile ? 'auto' : 'auto',
      }}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={isMobile ? handlePersonalize : undefined}
    >

      {/* Professional Book Cover Section */}
      <Card.Section style={{ position: 'relative' }}>
        <Box
          style={{
            position: 'relative',
            height: isMobile ? rem(180) : rem(220),
            background: !imageLoaded || imageError ? currentTheme.gradient : '#f8f9fa',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Actual Book Cover Image */}
          {coverImage && (
            <img
              src={coverImage}
              alt={title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: imageLoaded && !imageError ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out',
                zIndex: 1,
              }}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          )}

          {/* Fallback content when image is loading or failed */}
          {(!imageLoaded || imageError) && (
            <>
              {/* Sophisticated Pattern Overlay */}
              <Box
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `
                    radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                    radial-gradient(circle at 75% 75%, rgba(255,255,255,0.08) 0%, transparent 50%),
                    linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)
                  `,
                }}
              />

              {/* Elegant Theme Icon */}
              <Box
                style={{
                  textAlign: 'center',
                  zIndex: 2,
                  animation: isHovered ? 'elegantFloat 0.6s ease-in-out' : 'none',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                  color: '#ffffff',
                }}
              >
                <ThemeIcon size={32} />
              </Box>

              {/* Subtle Floating Elements */}
              <Box
                style={{
                  position: 'absolute',
                  top: '20%',
                  right: '20%',
                  color: 'rgba(255,255,255,0.6)',
                  animation: 'gentleSparkle 3s ease-in-out infinite',
                  zIndex: 1,
                }}
              >
                <IconSparkles size={12} />
              </Box>
              <Box
                style={{
                  position: 'absolute',
                  bottom: '25%',
                  left: '25%',
                  color: 'rgba(255,255,255,0.5)',
                  animation: 'gentleSparkle 4s ease-in-out infinite 1s',
                  zIndex: 1,
                }}
              >
                <IconStar size={10} />
              </Box>
            </>
          )}

          {/* Professional Shine Effect */}
          <Box
            style={{
              position: 'absolute',
              top: 0,
              left: isHovered ? '0%' : '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              transition: 'left 0.8s ease-out',
              zIndex: 3,
            }}
          />

          {/* Age Badge Positioned on Cover */}
          <Badge
            size="sm"
            radius="lg"
            style={{
              position: 'absolute',
              top: rem(16),
              right: rem(16),
              background: 'rgba(255, 255, 255, 0.95)',
              color: currentTheme.accent,
              border: 'none',
              fontSize: rem(11),
              fontWeight: 600,
              fontFamily: 'Nunito, sans-serif',
              padding: `${rem(6)} ${rem(12)}`,
              backdropFilter: 'blur(10px)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              zIndex: 4,
            }}
          >
            {ageRange}
          </Badge>
        </Box>
      </Card.Section>

      {/* Professional Content Section */}
      <Box p={isMobile ? rem(18) : rem(24)}>
        <Stack gap={isMobile ? "sm" : "md"}>
          {/* Title */}
          <Text
            size={isMobile ? "md" : "lg"}
            fw={700}
            lineClamp={2}
            style={{
              color: isDark ? '#ffffff' : '#1e293b',
              fontFamily: 'Quicksand, sans-serif',
              lineHeight: isMobile ? 1.2 : 1.3,
              letterSpacing: '-0.01em',
              fontSize: isMobile ? rem(16) : rem(18),
            }}
          >
            {title}
          </Text>

          {/* Professional Description */}
          <Text
            size="sm"
            lineClamp={isMobile ? 2 : 3}
            style={{
              color: isDark ? '#cbd5e1' : '#64748b',
              fontFamily: 'Nunito, sans-serif',
              lineHeight: 1.4,
              fontSize: isMobile ? rem(13) : rem(14),
              marginBottom: isMobile ? rem(4) : rem(0),
            }}
          >
            {description}
          </Text>

          {/* Professional CTA Button */}
          <Button
            size={isMobile ? "sm" : "md"}
            radius="xl"
            onClick={handlePersonalize}
            fullWidth
            style={{
              background: 'linear-gradient(135deg, #8B5CF6 0%, #9333ea 100%)',
              border: 'none',
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 600,
              fontSize: isMobile ? rem(13) : rem(14),
              padding: isMobile ? `${rem(12)} ${rem(20)}` : `${rem(14)} ${rem(24)}`,
              boxShadow: '0 4px 12px rgba(139, 92, 246, 0.25)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              letterSpacing: '0.2px',
              marginTop: isMobile ? rem(6) : rem(8),
              minHeight: isMobile ? rem(42) : rem(48),
            }}
            styles={{
              root: {
                '&:hover': !isMobile ? {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(139, 92, 246, 0.35)',
                  background: 'linear-gradient(135deg, #9333ea 0%, #7c3aed 100%)',
                } : {},
                '&:active': isMobile ? {
                  transform: 'scale(0.98)',
                  boxShadow: '0 2px 8px rgba(139, 92, 246, 0.3)',
                } : {}
              }
            }}
          >
            {isMobile ? "Personalise" : "Personalise"}
          </Button>
        </Stack>
      </Box>

      {/* Professional CSS Animations */}
      <style jsx global>{`
        @keyframes gentleSparkle {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
            opacity: 0.5;
          }
          50% { 
            transform: translateY(-3px) scale(1.1); 
            opacity: 0.8;
          }
        }
        
        @keyframes elegantFloat {
          0%, 100% { 
            transform: translateY(0px) scale(1);
          }
          50% { 
            transform: translateY(-3px) scale(1.05);
          }
        }
      `}</style>
    </Card>
  );
}

export default BookCard;