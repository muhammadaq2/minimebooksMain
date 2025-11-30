import React from 'react';
import { 
  Text, 
  Box,
  Group,
  Stack,
  rem,
  Image,
  Badge,
  Card,
  Center,
  SimpleGrid
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { 
  IconCheck, 
  IconStar, 
  IconUsers, 
  IconBook,
  IconClock
} from '@tabler/icons-react';

function BookSelectionStep({ bookData, colors, isMobile, isDark }) {
  // Enhanced mobile breakpoints using hooks
  const isSmallMobile = useMediaQuery('(max-width: 480px)');
  
  if (!bookData) {
    return (
      <Center style={{ minHeight: rem(300) }}>
        <Text 
          size="lg" 
          style={{ 
            color: colors.textMuted,
            fontFamily: 'Nunito, sans-serif'
          }}
        >
          Loading book information...
        </Text>
      </Center>
    );
  }

  const bookFeatures = [
    { icon: IconUsers, label: bookData.ageRange, color: colors.primary },
    { icon: IconBook, label: `${bookData.pages} Pages`, color: colors.primary },
    { icon: IconClock, label: "Fast Delivery", color: colors.primary },
    { icon: IconStar, label: "Personalized", color: colors.primary }
  ];

  return (
    <Stack 
      gap={isMobile ? "lg" : "xl"} 
      style={{ 
        height: '100%',
        maxWidth: '100%',
        overflow: 'hidden'
      }}
    >
      {/* Header */}
      <Box ta="center">
        <Group 
          justify="center" 
          gap={isSmallMobile ? "xs" : "sm"} 
          mb={isMobile ? "sm" : "md"}
          style={{
            flexDirection: isSmallMobile ? 'column' : 'row'
          }}
        >
          <Box
            style={{
              background: `linear-gradient(135deg, ${colors.primary} 0%, #10b981 100%)`,
              borderRadius: '50%',
              padding: isSmallMobile ? rem(6) : rem(8),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: isSmallMobile ? rem(32) : rem(36),
              minHeight: isSmallMobile ? rem(32) : rem(36),
            }}
          >
            <IconCheck size={isSmallMobile ? 16 : 20} color="white" />
          </Box>
          <Text
            size={isSmallMobile ? "md" : isMobile ? "lg" : "xl"}
            fw={700}
            style={{
              color: colors.text,
              fontFamily: 'Quicksand, sans-serif',
              textAlign: 'center',
              lineHeight: 1.2
            }}
          >
            Book Selected
          </Text>
        </Group>
        <Text
          size={isSmallMobile ? "sm" : "md"}
          style={{
            color: colors.textSecondary,
            fontFamily: 'Nunito, sans-serif',
            maxWidth: isMobile ? '100%' : rem(400),
            margin: '0 auto',
            textAlign: 'center',
            lineHeight: 1.4,
            padding: isSmallMobile ? `0 ${rem(8)}` : '0'
          }}
        >
          Perfect! We've selected this amazing book for your personalization
        </Text>
      </Box>

      {/* Book Display */}
      <Card
        style={{
          background: colors.cardBg,
          backdropFilter: 'blur(10px)',
          border: `2px solid ${colors.primary}`,
          borderRadius: rem(16),
          position: 'relative',
          overflow: 'hidden',
        }}
        p={isSmallMobile ? "sm" : isMobile ? "md" : "lg"}
      >
        {/* Selected Badge */}
        <Badge
          size={isSmallMobile ? "md" : "lg"}
          radius="xl"
          style={{
            position: 'absolute',
            top: isSmallMobile ? rem(12) : rem(16),
            right: isSmallMobile ? rem(12) : rem(16),
            background: `linear-gradient(135deg, ${colors.primary} 0%, #10b981 100%)`,
            color: 'white',
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 600,
            zIndex: 2,
            fontSize: isSmallMobile ? rem(11) : undefined
          }}
        >
          Selected
        </Badge>

        <Stack 
          gap={isMobile ? "md" : "lg"} 
          align={isMobile ? "center" : "flex-start"}
        >
          {/* Book Cover - Mobile First */}
          <Box
            style={{
              position: 'relative',
              borderRadius: rem(12),
              overflow: 'hidden',
              aspectRatio: '3/4',
              width: isSmallMobile ? rem(160) : isMobile ? rem(200) : rem(220),
              maxWidth: '100%',
              margin: isMobile ? '0 auto' : '0',
              boxShadow: `0 10px 25px -3px rgba(139, 92, 246, 0.3)`,
            }}
          >
            <Image
              src={bookData.coverImage}
              alt={bookData.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            
            {/* Glow effect */}
            <Box
              style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(135deg, ${colors.primary}20 0%, transparent 50%)`,
                pointerEvents: 'none',
              }}
            />
          </Box>

          {/* Book Details - Mobile Optimized */}
          <Stack 
            gap={isSmallMobile ? "sm" : "md"} 
            ta={isMobile ? "center" : "left"}
            style={{ 
              width: '100%',
              maxWidth: '100%' 
            }}
          >
            <Text
              size={isSmallMobile ? "md" : isMobile ? "lg" : "xl"}
              fw={700}
              style={{
                color: colors.text,
                fontFamily: 'Quicksand, sans-serif',
                lineHeight: 1.2,
                textAlign: isMobile ? 'center' : 'left',
                wordBreak: 'break-word',
                hyphens: 'auto'
              }}
            >
              {bookData.title}
            </Text>

            <Text
              size={isSmallMobile ? "xs" : "sm"}
              style={{
                color: colors.textSecondary,
                fontFamily: 'Nunito, sans-serif',
                lineHeight: 1.4,
                textAlign: isMobile ? 'center' : 'left',
                maxWidth: '100%',
                overflow: 'hidden'
              }}
            >
              {bookData.description}
            </Text>

            {/* Book Quality Badge - Mobile Optimized */}
            <Group 
              gap={isSmallMobile ? "xs" : "sm"} 
              justify={isMobile ? "center" : "flex-start"}
              style={{
                flexWrap: 'wrap'
              }}
            >
              <Badge
                size={isSmallMobile ? "sm" : "md"}
                variant="light"
                style={{
                  background: `${colors.primary}20`,
                  color: colors.primary,
                  fontFamily: 'Nunito, sans-serif',
                  fontSize: isSmallMobile ? rem(10) : undefined
                }}
              >
                Premium Quality
              </Badge>
              <Badge
                size={isSmallMobile ? "sm" : "md"}
                variant="light"
                style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  color: '#10b981',
                  fontFamily: 'Nunito, sans-serif',
                  fontSize: isSmallMobile ? rem(10) : undefined
                }}
              >
                Personalized Story
              </Badge>
            </Group>
          </Stack>
        </Stack>
      </Card>

      {/* Book Features */}
      <Card
        style={{
          background: colors.cardBg,
          backdropFilter: 'blur(10px)',
          border: `1px solid ${colors.border}`,
          borderRadius: rem(16),
        }}
        p={isSmallMobile ? "sm" : isMobile ? "md" : "lg"}
      >
        <Text
          size={isSmallMobile ? "sm" : "md"}
          fw={600}
          mb={isSmallMobile ? "sm" : "md"}
          style={{
            color: colors.text,
            fontFamily: 'Quicksand, sans-serif',
            textAlign: 'center',
          }}
        >
          What You Get
        </Text>
        
        <SimpleGrid 
          cols={isSmallMobile ? 2 : isMobile ? 2 : 4} 
          spacing={isSmallMobile ? "xs" : "md"}
          verticalSpacing={isSmallMobile ? "md" : "lg"}
        >
          {bookFeatures.map((feature, index) => {
            const FeatureIcon = feature.icon;
            return (
              <Stack 
                key={index} 
                gap={isSmallMobile ? "xs" : "sm"} 
                align="center" 
                ta="center"
                style={{
                  minHeight: isSmallMobile ? rem(80) : rem(100)
                }}
              >
                <Box
                  style={{
                    background: `${feature.color}20`,
                    borderRadius: '50%',
                    padding: isSmallMobile ? rem(8) : rem(12),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: isSmallMobile ? rem(32) : rem(40),
                    minHeight: isSmallMobile ? rem(32) : rem(40),
                  }}
                >
                  <FeatureIcon size={isSmallMobile ? 16 : 20} color={feature.color} />
                </Box>
                <Text
                  size={isSmallMobile ? "xs" : "sm"}
                  fw={500}
                  style={{
                    color: colors.text,
                    fontFamily: 'Nunito, sans-serif',
                    textAlign: 'center',
                    lineHeight: 1.3,
                    maxWidth: '100%',
                    wordBreak: 'break-word'
                  }}
                >
                  {feature.label}
                </Text>
              </Stack>
            );
          })}
        </SimpleGrid>
      </Card>

      {/* Confirmation Message */}
      <Box
        style={{
          background: `${colors.primary}10`,
          border: `1px solid ${colors.primary}30`,
          borderRadius: rem(12),
          padding: isSmallMobile ? rem(12) : rem(16),
          textAlign: 'center',
          margin: isSmallMobile ? `0 ${rem(8)}` : '0'
        }}
      >
        <Text
          size={isSmallMobile ? "xs" : "sm"}
          style={{
            color: colors.text,
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 500,
            lineHeight: 1.4
          }}
        >
          Click "Next Step" to continue with personalizing this book for your child
        </Text>
      </Box>
    </Stack>
  );
}

export default BookSelectionStep;
