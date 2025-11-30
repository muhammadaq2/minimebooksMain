import React, { useState, useEffect } from 'react';
import { 
  Text, 
  Box,
  Group,
  Stack,
  rem,
  Image,
  Card,
  Grid,
  ScrollArea,
  ActionIcon,
  Badge,
  Loader
} from '@mantine/core';
import { 
  IconEye, 
  IconChevronLeft, 
  IconChevronRight,
  IconBook,
  IconSparkles
} from '@tabler/icons-react';

function BookPreviewStep({ formData, colors, isMobile, isDark }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Use the provided image URL for all pages
  const baseImageUrl = "https://storage.wonderwraps.com/8b4df7b7-6994-48cb-851c-571775c027c9/conversions/image-preview.jpeg";

  useEffect(() => {
    // Simulate loading time for the preview generation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Generate pages array: cover + 30 middle pages + back cover = 32 total pages
  const totalPages = 32;
  const pages = Array.from({ length: totalPages }, (_, index) => ({
    id: index,
    type: index === 0 ? 'cover' : index === totalPages - 1 ? 'backcover' : 'content',
    imageUrl: baseImageUrl,
    isBlurred: index !== 0 && index !== totalPages - 1 // Only middle pages are blurred
  }));

  const handlePageChange = (direction) => {
    if (direction === 'next' && currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageSelect = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  if (isLoading) {
    return (
      <Stack align="center" justify="center" style={{ height: '100%', minHeight: rem(400) }}>
        <Box ta="center">
          <Loader size="lg" color={colors.primary} mb="md" />
          <Text
            size="lg"
            fw={600}
            mb="xs"
            style={{
              color: colors.text,
              fontFamily: 'Quicksand, sans-serif',
            }}
          >
            Generating Your Preview
          </Text>
          <Text
            size="sm"
            style={{
              color: colors.textSecondary,
              fontFamily: 'Nunito, sans-serif',
            }}
          >
            Just a moment while we bring your story to life...
          </Text>
        </Box>
      </Stack>
    );
  }

  return (
    <Stack gap="xl" style={{ height: '100%' }}>
      {/* Header */}
      <Box ta="center" mb="md">
        <Group justify="center" gap="xs" mb="sm">
          <Box
            style={{
              background: `linear-gradient(135deg, ${colors.primary} 0%, #6366f1 100%)`,
              borderRadius: '50%',
              padding: rem(8),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconEye size={20} color="white" />
          </Box>
          <Text
            size={isMobile ? "lg" : "xl"}
            fw={700}
            style={{
              color: colors.text,
              fontFamily: 'Quicksand, sans-serif',
            }}
          >
            Book Preview
          </Text>
        </Group>
        <Text
          size="md"
          style={{
            color: colors.textSecondary,
            fontFamily: 'Nunito, sans-serif',
            maxWidth: rem(500),
            margin: '0 auto',
          }}
        >
          Here's a preview of "{formData.selectedBook?.title}" personalized for {formData.childName}
        </Text>
      </Box>

      <Grid gutter="lg" style={{ height: '100%' }}>
        {/* Main Book Preview */}
        <Grid.Col span={isMobile ? 12 : 8}>
          <Card
            style={{
              background: colors.cardBg,
              backdropFilter: 'blur(10px)',
              border: `1px solid ${colors.border}`,
              borderRadius: rem(16),
              height: isMobile ? rem(400) : rem(500),
              position: 'relative',
              overflow: 'hidden',
            }}
            p={0}
          >
            {/* Page Display */}
            <Box
              style={{
                position: 'relative',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: rem(20),
              }}
            >
              {/* Current Page */}
              <Box
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  maxWidth: rem(300),
                  borderRadius: rem(12),
                  overflow: 'hidden',
                  boxShadow: `0 10px 30px -3px rgba(139, 92, 246, 0.3)`,
                }}
              >
                <Image
                  src={pages[currentPage].imageUrl}
                  alt={`Page ${currentPage + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: pages[currentPage].isBlurred ? 'blur(8px)' : 'none',
                    transition: 'filter 0.3s ease',
                  }}
                />

                {/* Page Type Overlay */}
                {currentPage === 0 && (
                  <Box
                    style={{
                      position: 'absolute',
                      bottom: rem(16),
                      left: rem(16),
                      right: rem(16),
                    }}
                  >
                    <Badge
                      size="lg"
                      radius="xl"
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        color: colors.primary,
                        fontFamily: 'Nunito, sans-serif',
                        fontWeight: 600,
                      }}
                    >
                      <Group gap="xs">
                        <IconSparkles size={14} />
                        Cover Page
                      </Group>
                    </Badge>
                  </Box>
                )}

                {pages[currentPage].isBlurred && (
                  <Box
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(0, 0, 0, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backdropFilter: 'blur(2px)',
                    }}
                  >
                    <Badge
                      size="lg"
                      radius="xl"
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        color: colors.primary,
                        fontFamily: 'Nunito, sans-serif',
                        fontWeight: 600,
                      }}
                    >
                      Preview Only
                    </Badge>
                  </Box>
                )}

                {currentPage === totalPages - 1 && (
                  <Box
                    style={{
                      position: 'absolute',
                      bottom: rem(16),
                      left: rem(16),
                      right: rem(16),
                    }}
                  >
                    <Badge
                      size="lg"
                      radius="xl"
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        color: colors.primary,
                        fontFamily: 'Nunito, sans-serif',
                        fontWeight: 600,
                      }}
                    >
                      Back Cover
                    </Badge>
                  </Box>
                )}
              </Box>

              {/* Navigation Arrows */}
              <ActionIcon
                size="lg"
                radius="xl"
                onClick={() => handlePageChange('prev')}
                disabled={currentPage === 0}
                style={{
                  position: 'absolute',
                  left: rem(16),
                  background: colors.cardBg,
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${colors.border}`,
                  color: colors.text,
                  opacity: currentPage === 0 ? 0.5 : 1,
                }}
              >
                <IconChevronLeft size={18} />
              </ActionIcon>

              <ActionIcon
                size="lg"
                radius="xl"
                onClick={() => handlePageChange('next')}
                disabled={currentPage === totalPages - 1}
                style={{
                  position: 'absolute',
                  right: rem(16),
                  background: colors.cardBg,
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${colors.border}`,
                  color: colors.text,
                  opacity: currentPage === totalPages - 1 ? 0.5 : 1,
                }}
              >
                <IconChevronRight size={18} />
              </ActionIcon>
            </Box>

            {/* Page Counter */}
            <Box
              style={{
                position: 'absolute',
                bottom: rem(16),
                left: '50%',
                transform: 'translateX(-50%)',
                background: colors.cardBg,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${colors.border}`,
                borderRadius: rem(20),
                padding: `${rem(6)} ${rem(12)}`,
              }}
            >
              <Text
                size="sm"
                fw={500}
                style={{
                  color: colors.text,
                  fontFamily: 'Nunito, sans-serif',
                }}
              >
                {currentPage + 1} / {totalPages}
              </Text>
            </Box>
          </Card>
        </Grid.Col>

        {/* Page Thumbnails */}
        <Grid.Col span={isMobile ? 12 : 4}>
          <Card
            style={{
              background: colors.cardBg,
              backdropFilter: 'blur(10px)',
              border: `1px solid ${colors.border}`,
              borderRadius: rem(16),
              height: isMobile ? rem(150) : rem(500),
            }}
            p="md"
          >
            <Text
              size="md"
              fw={600}
              mb="md"
              style={{
                color: colors.text,
                fontFamily: 'Quicksand, sans-serif',
                textAlign: 'center',
              }}
            >
              All Pages
            </Text>

            <ScrollArea style={{ height: isMobile ? rem(80) : rem(420) }}>
              <Grid gutter="xs">
                {pages.map((page, index) => (
                  <Grid.Col key={page.id} span={isMobile ? 2 : 6}>
                    <Box
                      onClick={() => handlePageSelect(index)}
                      style={{
                        position: 'relative',
                        aspectRatio: '3/4',
                        borderRadius: rem(8),
                        overflow: 'hidden',
                        cursor: 'pointer',
                        border: currentPage === index 
                          ? `2px solid ${colors.primary}` 
                          : `1px solid ${colors.border}`,
                        transition: 'all 0.2s ease',
                        transform: currentPage === index ? 'scale(1.05)' : 'scale(1)',
                      }}
                    >
                      <Image
                        src={page.imageUrl}
                        alt={`Page ${index + 1}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: page.isBlurred ? 'blur(4px)' : 'none',
                        }}
                      />
                      
                      {/* Page Number */}
                      <Box
                        style={{
                          position: 'absolute',
                          bottom: rem(4),
                          right: rem(4),
                          background: 'rgba(0, 0, 0, 0.7)',
                          borderRadius: rem(4),
                          padding: `${rem(2)} ${rem(4)}`,
                        }}
                      >
                        <Text
                          size="xs"
                          style={{
                            color: 'white',
                            fontFamily: 'Nunito, sans-serif',
                            fontSize: rem(10),
                          }}
                        >
                          {index + 1}
                        </Text>
                      </Box>

                      {/* Special badges for cover and back */}
                      {index === 0 && (
                        <Badge
                          size="xs"
                          style={{
                            position: 'absolute',
                            top: rem(4),
                            left: rem(4),
                            background: colors.primary,
                            color: 'white',
                            fontSize: rem(8),
                          }}
                        >
                          Cover
                        </Badge>
                      )}
                      
                      {index === totalPages - 1 && (
                        <Badge
                          size="xs"
                          style={{
                            position: 'absolute',
                            top: rem(4),
                            left: rem(4),
                            background: colors.primary,
                            color: 'white',
                            fontSize: rem(8),
                          }}
                        >
                          Back
                        </Badge>
                      )}
                    </Box>
                  </Grid.Col>
                ))}
              </Grid>
            </ScrollArea>
          </Card>
        </Grid.Col>
      </Grid>

      {/* Book Info */}
      <Card
        style={{
          background: `${colors.primary}10`,
          border: `1px solid ${colors.primary}30`,
          borderRadius: rem(16),
        }}
        p={isMobile ? "md" : "lg"}
      >
        <Grid>
          <Grid.Col span={isMobile ? 12 : 8}>
            <Stack gap="xs">
              <Text
                size="lg"
                fw={700}
                style={{
                  color: colors.text,
                  fontFamily: 'Quicksand, sans-serif',
                }}
              >
                Your Personalized Book
              </Text>
              <Text
                style={{
                  color: colors.textSecondary,
                  fontFamily: 'Nunito, sans-serif',
                  lineHeight: 1.5,
                }}
              >
                This preview shows your personalized book for{' '}
                <Text component="span" fw={600} style={{ color: colors.primary }}>
                  {formData.childName}
                </Text>
                . The full version will include your child's name throughout the story and 
                high-quality printing on premium paper.
              </Text>
            </Stack>
          </Grid.Col>
          <Grid.Col span={isMobile ? 12 : 4}>
            <Stack gap="xs" ta={isMobile ? "center" : "right"}>
              <Group gap="md" justify={isMobile ? "center" : "flex-end"}>
                <Box ta="center">
                  <Text size="lg" fw={700} style={{ color: colors.primary }}>
                    {totalPages}
                  </Text>
                  <Text size="sm" style={{ color: colors.textMuted }}>
                    Pages
                  </Text>
                </Box>
                <Box ta="center">
                  <Text size="lg" fw={700} style={{ color: colors.primary }}>
                    {formData.language}
                  </Text>
                  <Text size="sm" style={{ color: colors.textMuted }}>
                    Language
                  </Text>
                </Box>
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>
      </Card>
    </Stack>
  );
}

export default BookPreviewStep;
