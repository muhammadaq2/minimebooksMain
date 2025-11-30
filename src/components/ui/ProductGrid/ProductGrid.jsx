import React from 'react';
import { 
  Container, 
  Text, 
  SimpleGrid, 
  Box,
  Group,
  rem,
  useMantineColorScheme 
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconSparkles, IconStar, IconHeart } from '@tabler/icons-react';
import BookCard from '../../ui/BookCard/BookCard';

function ProductGrid() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Available books for purchase with your provided images
  const booksData = [
    {
      id: 1,
      title: "Colors ABC Adventure",
      description: "Learn the alphabet while discovering the magical world of colors with engaging activities and visual learning.",
      ageRange: "3-5 years",
      theme: "educational",
      childName: "Learning Explorer",
      coverImage: "/images%20kids/bookCover1age3-5.png"
    },

    {
      id: 2,
      title: "Princess Emma's Royal Quest",
      description: "Join Princess Emma on a magical royal adventure through the alphabet kingdom, learning letters while ruling with kindness.",
      ageRange: "3-5 years",
      theme: "princess",
      childName: "Princess Emma",
      coverImage: "/images%20kids/bookCover1age3-5girls.png"
    },
    {
  id: 2,
  title: "Baby's First Words",
  description: "A delightful introduction to first words and sounds, perfect for little ones beginning their learning journey with colorful images and simple concepts.",
  ageRange: "0-12 months",
  theme: "baby",
  childName: "Little Explorer",
  coverImage: "/images%20kids/bookCoverkidsage012months.png"
}

  ];

  const handlePersonalize = (bookData) => {
    console.log('Personalizing book:', bookData);
    // Here you would navigate to personalization page or open modal
    // Example: navigate(`/personalize/${bookData.id}`);
  };

  return (
    <Box
      style={{
        paddingTop: rem(100),
        paddingBottom: rem(100),
        position: 'relative',
      }}
    >
      {/* Professional Decorative Elements */}
      <Box
        style={{
          position: 'absolute',
          top: '12%',
          right: '6%',
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
          top: '22%',
          left: '5%',
          color: '#f472b6',
          animation: 'sparkleAndFloat 5s ease-in-out infinite 1s',
          zIndex: 2,
          opacity: 0.7,
        }}
      >
        <IconStar size={20} />
      </Box>

      <Box
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '8%',
          color: isDark ? '#8b5cf6' : '#a855f7',
          animation: 'sparkleAndFloat 6s ease-in-out infinite 2s',
          zIndex: 1,
          opacity: 0.6,
        }}
      >
        <IconHeart size={28} />
      </Box>

      <Box
        style={{
          position: 'absolute',
          top: '8%',
          left: '12%',
          color: isDark ? '#fbbf24' : '#f59e0b',
          animation: 'sparkleAndFloat 7s ease-in-out infinite 0.5s',
          zIndex: 1,
          opacity: 0.5,
        }}
      >
        <IconStar size={16} />
      </Box>

      <Box
        style={{
          position: 'absolute',
          bottom: '30%',
          left: '8%',
          color: isDark ? '#8b5cf6' : '#a855f7',
          animation: 'sparkleAndFloat 6.5s ease-in-out infinite 2.5s',
          zIndex: 1,
          opacity: 0.6,
        }}
      >
        <IconSparkles size={18} />
      </Box>

      <Box
        style={{
          position: 'absolute',
          top: '5%',
          right: '20%',
          color: '#10b981',
          animation: 'sparkleAndFloat 7.5s ease-in-out infinite 3s',
          zIndex: 1,
          opacity: 0.5,
        }}
      >
        <IconHeart size={22} />
      </Box>

      {/* Small twinkling elements */}
      <Box
        style={{
          position: 'absolute',
          top: '35%',
          right: '25%',
          color: isDark ? '#fde047' : '#eab308',
          animation: 'sparkleAndFloat 4.5s ease-in-out infinite 2s',
          zIndex: 1,
          opacity: 0.4,
        }}
      >
        <IconSparkles size={12} />
      </Box>

      <Box
        style={{
          position: 'absolute',
          bottom: '25%',
          right: '15%',
          color: '#10b981',
          animation: 'sparkleAndFloat 6.3s ease-in-out infinite 2.8s',
          zIndex: 1,
          opacity: 0.5,
        }}
      >
        <IconStar size={14} />
      </Box>

      <Container size="xl" style={{ position: 'relative', zIndex: 10 }}>
        {/* Refined Section Header */}
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
                Product Grid
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
            Available books for{' '}
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
              purchase
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
            Transform your child into the hero of their own ABC adventure. 
            Each story is uniquely personalized with their name, photo, and favorite themes.
          </Text>
        </Box>

        {/* Books Grid with Professional Spacing - 6 items in 3x2 layout */}
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3, lg: 3 }}
          spacing={{ base: rem(24), sm: rem(32), md: rem(40) }}
          verticalSpacing={{ base: rem(32), sm: rem(40) }}
          style={{
            maxWidth: rem(1200),
            margin: '0 auto',
          }}
        >
          {booksData.map((book) => (
            <BookCard
              key={book.id}
              {...book}
              onPersonalize={handlePersonalize}
              isDark={isDark}
            />
          ))}
        </SimpleGrid>

        {/* Refined Call-to-Action Section */}
        <Box ta="center" mt={rem(80)}>
          <Text
            size="xl"
            fw={700}
            mb="md"
            style={{
              color: isDark ? '#ffffff' : '#1e293b',
              fontFamily: 'Quicksand, sans-serif',
              letterSpacing: '-0.01em',
            }}
          >
            Can't find the perfect theme?
          </Text>
          
          <Text
            size="lg"
            mb="xl"
            style={{
              color: isDark ? '#cbd5e1' : '#64748b',
              fontFamily: 'Nunito, sans-serif',
              maxWidth: rem(500),
              margin: '0 auto',
              lineHeight: 1.5,
            }}
          >
            Browse our complete collection of 50+ personalized ABC storybooks
          </Text>

          <Group justify="center" gap="lg">
            <Box
              component="button"
              style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #9333ea 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: rem(30),
                padding: `${rem(16)} ${rem(32)}`,
                fontSize: rem(16),
                fontWeight: 600,
                fontFamily: 'Nunito, sans-serif',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(139, 92, 246, 0.3)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                letterSpacing: '0.2px',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.02)';
                e.target.style.boxShadow = '0 12px 35px rgba(139, 92, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.3)';
              }}
            >
              View All Books
            </Box>

            <Box
              component="button"
              style={{
                background: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(139, 92, 246, 0.1)',
                color: isDark ? '#e2e8f0' : '#8B5CF6',
                border: `2px solid ${isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(139, 92, 246, 0.2)'}`,
                borderRadius: rem(30),
                padding: `${rem(14)} ${rem(30)}`,
                fontSize: rem(16),
                fontWeight: 500,
                fontFamily: 'Nunito, sans-serif',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                backdropFilter: 'blur(10px)',
                letterSpacing: '0.2px',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(139, 92, 246, 0.15)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(139, 92, 246, 0.1)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Browse by Age
            </Box>
          </Group>
        </Box>
      </Container>

      {/* Exact Same Animations as Hero */}
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

export default ProductGrid;