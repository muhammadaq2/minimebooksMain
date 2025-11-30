import React from 'react';
import { 
  Box, 
  Group, 
  Text, 
  Image, 
  Button, 
  Stack, 
  rem,
  ActionIcon
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconX, IconEdit } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

function ProductCard({ item, onRemove, colors, showActions = true }) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isSmallMobile = useMediaQuery('(max-width: 480px)');
  const navigate = useNavigate();

  const handleEdit = () => {
    // Navigate back to personalization page for editing
    navigate(`/personalize-steps/${item.id}`);
  };

  const handleRemove = () => {
    if (onRemove) {
      onRemove(item.id);
    }
  };

  return (
    <Box
      style={{
        background: colors.cardBg,
        backdropFilter: 'blur(10px)',
        border: `1px solid ${colors.border}`,
        borderRadius: isSmallMobile ? rem(12) : rem(16),
        padding: isSmallMobile ? rem(12) : rem(16),
        position: 'relative',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
      }}
    >
      {/* Remove Button */}
      {showActions && (
        <ActionIcon
          variant="subtle"
          color="gray"
          size="sm"
          onClick={handleRemove}
          style={{
            position: 'absolute',
            top: rem(8),
            right: rem(8),
            zIndex: 1
          }}
        >
          <IconX size={16} />
        </ActionIcon>
      )}

      <Group align="flex-start" gap={isSmallMobile ? "sm" : "md"}>
        {/* Book Cover */}
        <Box
          style={{
            minWidth: isSmallMobile ? rem(60) : rem(80),
            width: isSmallMobile ? rem(60) : rem(80),
            height: isSmallMobile ? rem(90) : rem(120),
            borderRadius: rem(8),
            overflow: 'hidden',
            background: colors.inputBg || 'rgba(255,255,255,0.05)',
            border: `1px solid ${colors.border}`
          }}
        >
          <Image
            src={item.cover}
            alt={item.title}
            fit="cover"
            style={{ 
              width: '100%', 
              height: '100%',
              objectFit: 'cover'
            }}
            fallbackSrc="/api/placeholder/80/120"
          />
        </Box>

        {/* Product Details */}
        <Stack gap={isSmallMobile ? "xs" : "sm"} style={{ flex: 1 }}>
          <Box>
            <Text
              size={isSmallMobile ? "md" : "lg"}
              fw={700}
              style={{
                color: colors.text,
                fontFamily: 'Quicksand, sans-serif',
                lineHeight: 1.2,
                marginRight: rem(24) // Space for remove button
              }}
            >
              {item.title}
            </Text>
            
            <Group gap="sm" mt={rem(4)}>
              <Text
                size={isSmallMobile ? "xs" : "sm"}
                style={{
                  color: colors.textSecondary,
                  fontFamily: 'Nunito, sans-serif'
                }}
              >
                {item.format}
              </Text>
              <Text
                size={isSmallMobile ? "xs" : "sm"}
                style={{
                  color: colors.textSecondary,
                  fontFamily: 'Nunito, sans-serif'
                }}
              >
                |
              </Text>
              <Text
                size={isSmallMobile ? "xs" : "sm"}
                style={{
                  color: colors.textSecondary,
                  fontFamily: 'Nunito, sans-serif'
                }}
              >
                {item.language}
              </Text>
            </Group>

            {/* Personalization Details */}
            {item.personalization && (
              <Box mt="xs">
                <Text
                  size="xs"
                  style={{
                    color: colors.textMuted,
                    fontFamily: 'Nunito, sans-serif',
                    lineHeight: 1.3
                  }}
                >
                  Personalized for {item.personalization.childName} (age {item.personalization.childAge})
                </Text>
              </Box>
            )}
          </Box>

          {/* Price and Actions */}
          <Group justify="space-between" align="center">
            <Box>
              {item.originalPrice > item.currentPrice && (
                <Text
                  size={isSmallMobile ? "xs" : "sm"}
                  style={{
                    color: colors.textMuted,
                    textDecoration: 'line-through',
                    fontFamily: 'Nunito, sans-serif'
                  }}
                >
                  ${item.originalPrice.toFixed(2)}
                </Text>
              )}
              <Text
                size={isSmallMobile ? "lg" : "xl"}
                fw={700}
                style={{
                  color: colors.text,
                  fontFamily: 'Quicksand, sans-serif'
                }}
              >
                ${item.currentPrice.toFixed(2)}
              </Text>
            </Box>

            {showActions && (
              <Button
                variant="outline"
                size={isSmallMobile ? "xs" : "sm"}
                leftSection={<IconEdit size={14} />}
                onClick={handleEdit}
                styles={{
                  root: {
                    border: `1px solid ${colors.primary}`,
                    color: colors.primary,
                    background: 'transparent',
                    fontFamily: 'Nunito, sans-serif',
                    fontSize: isSmallMobile ? rem(11) : rem(12),
                    height: isSmallMobile ? rem(28) : rem(32),
                    minWidth: isSmallMobile ? rem(60) : rem(70),
                    '&:hover': {
                      background: `${colors.primary}10`,
                      transform: 'translateY(-1px)'
                    }
                  }
                }}
              >
                Edit
              </Button>
            )}
          </Group>
        </Stack>
      </Group>
    </Box>
  );
}

export default ProductCard;
