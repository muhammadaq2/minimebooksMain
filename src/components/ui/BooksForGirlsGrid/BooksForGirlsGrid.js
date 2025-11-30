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
import { IconCrown, IconHeart, IconSparkles } from '@tabler/icons-react';
import BookCard from '../../ui/BookCard/BookCard';

function BooksForGirlsGrid() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Books specifically designed for girls with your provided images
  const girlsBooksData = [
    {
      id: 13,
      title: "Princess Emma's Royal Quest",
      description: "Join Princess Emma on a magical royal adventure through the alphabet kingdom, learning letters while ruling with kindness.",
      ageRange: "3-7 years",
      theme: "princess",
      childName: "Princess Emma",
      coverImage: "https://storage.wonderwraps.com/880ffabc-7b62-43e2-9a80-ab068914d4aa/responsive-images/yQsTEjrZo8uGUEbdTBemd4bwxrTZ0o-metaZW1hLnBuZw%3D%3D-___media_library_original_512_512.png"
    },
    {
      id: 14,
      title: "Charlotte's Fairy Tale Journey",
      description: "Follow Charlotte through magical forests and enchanted castles on an alphabet adventure filled with wonder and friendship.",
      ageRange: "3-6 years",
      theme: "fairy",
      childName: "Charlotte",
      coverImage: "https://storage.wonderwraps.com/79d041e3-75d4-4e1a-bb3b-9f9c6921ff89/responsive-images/0L6gAsml0anZOxUTvmRNKRlbqlPlVd-metaY2hhcmxvdGUucG5n-___media_library_original_512_512.png"
    },
    {
      id: 15,
      title: "Magical Princess Adventures",
      description: "Discover enchanted realms and fairy tale magic while mastering the alphabet in this princess-themed adventure.",
      ageRange: "4-8 years",
      theme: "princess",
      childName: "Royal Princess",
      coverImage: "https://storage.wonderwraps.com/39251108-94db-4a7e-8714-83f6c641674f/responsive-images/ULW12hCt0dxyS08Ugjzcfh3Sgv91GK-metacHJpbmNlc3MucG5n-___media_library_original_550_550.png"
    }
  ];

  const handlePersonalize = (bookData) => {
    console.log('Personalizing girls book:', bookData);
  };

  return (
    <Box
      style={{
        paddingTop: rem(80),
        paddingBottom: rem(80),
        position: 'relative',
      }}
    >
      {/* Professional Decorative Elements */}
      <Box
        style={{
          position: 'absolute',
          top: '15%',
          right: '8%',
          color: isDark ? '#f472b6' : '#ec4899',
          animation: 'sparkleAndFloat 4s ease-in-out infinite',
          zIndex: 2,
          opacity: 0.8,
        }}
      >
        <IconCrown size={24} />
      </Box>

      <Box
        style={{
          position: 'absolute',
          bottom: '20%',
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
          top: '25%',
          left: '10%',
          color: isDark ? '#a855f7' : '#8b5cf6',
          animation: 'sparkleAndFloat 6s ease-in-out infinite 2s',
          zIndex: 1,
          opacity: 0.6,
        }}
      >
        <IconSparkles size={18} />
      </Box>

      <Container size="xl" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <Box ta="center" mb={rem(60)}>
          <Group
            justify="center"
            mb="xl"
            style={{
              background: 'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)',
              backdropFilter: 'blur(16px)',
              borderRadius: rem(30),
              padding: `${rem(10)} ${rem(24)}`,
              display: 'inline-flex',
              boxShadow: '0 8px 32px rgba(244, 114, 182, 0.3)',
            }}
          >
            <Group gap="xs">
              <IconCrown size={18} style={{ color: '#ffffff' }} />
              <Text 
                size="sm" 
                fw={600}
                style={{ 
                  color: '#ffffff',
                  fontFamily: 'Nunito, sans-serif',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}
              >
                Our Books
              </Text>
            </Group>
          </Group>

          <Text
            component="h2"
            size={isMobile ? "2rem" : "2.5rem"}
            fw={800}
            ta="center"
            mb="lg"
            style={{
              fontFamily: 'Quicksand, sans-serif',
              color: isDark ? '#ffffff' : '#1e293b',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
          >
            Books for Your{' '}
            <Text
              component="span"
              inherit
              style={{
                background: 'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Little Girl!
            </Text>
          </Text>

          <Text
            size={isMobile ? "md" : "lg"}
            style={{
              color: isDark ? '#cbd5e1' : '#64748b',
              fontFamily: 'Nunito, sans-serif',
              maxWidth: rem(600),
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Magical adventures featuring princesses, fairies, and enchanting stories that inspire and empower young girls to dream big.
          </Text>
        </Box>

        {/* Books Grid - 3 items in single row */}
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3, lg: 3 }}
          spacing={{ base: rem(24), sm: rem(32), md: rem(40) }}
          verticalSpacing={{ base: rem(32), sm: rem(40) }}
          style={{
            maxWidth: rem(1000),
            margin: '0 auto',
          }}
        >
          {girlsBooksData.map((book) => (
            <BookCard
              key={book.id}
              id={book.id}
              title={book.title}
              description={book.description}
              ageRange={book.ageRange}
              theme={book.theme}
              childName={book.childName}
              coverImage={book.coverImage}
              onPersonalize={handlePersonalize}
              isDark={isDark}
            />
          ))}
        </SimpleGrid>

        {/* Call to Action */}
        <Box ta="center" mt={rem(50)}>
          <Text
            size="md"
            fw={600}
            mb="sm"
            style={{
              color: isDark ? '#ffffff' : '#1e293b',
              fontFamily: 'Quicksand, sans-serif',
            }}
          >
            Every Girl is a Princess in Her Own Story
          </Text>
          
          <Box
            component="button"
            style={{
              background: 'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)',
              color: '#ffffff',
              border: 'none',
              borderRadius: rem(25),
              padding: `${rem(12)} ${rem(24)}`,
              fontSize: rem(14),
              fontWeight: 600,
              fontFamily: 'Nunito, sans-serif',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(244, 114, 182, 0.3)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px) scale(1.02)';
              e.target.style.boxShadow = '0 8px 25px rgba(244, 114, 182, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 6px 20px rgba(244, 114, 182, 0.3)';
            }}
          >
            Explore More Princess Books
          </Box>
        </Box>
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
      `}</style>
    </Box>
  );
}

export default BooksForGirlsGrid;