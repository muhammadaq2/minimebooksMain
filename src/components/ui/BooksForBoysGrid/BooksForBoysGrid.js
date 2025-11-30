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
import { IconSword, IconRocket, IconTrophy } from '@tabler/icons-react';
import BookCard from '../../ui/BookCard/BookCard';

function BooksForBoysGrid() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Books specifically designed for boys with your provided images
  const boysBooksData = [
    {
      id: 17,
      title: "ABC Boy's Great Adventure",
      description: "Follow our young hero on an epic quest through magical lands, learning letters while conquering challenges with bravery.",
      ageRange: "3-7 years",
      theme: "adventure",
      childName: "Brave Explorer",
      coverImage: "https://storage.wonderwraps.com/6dbdccfc-7a9e-40a2-b0f5-4fada8a6c3bf/aiPdyeg0hoInP3ZjkW0MdTvXTlQtQ0-metaYWJjIGJveS5wbmc=-.png"
    },
    {
      id: 18,
      title: "Action Hero Chronicles",
      description: "Become the ultimate action hero in this thrilling alphabet adventure filled with excitement, courage, and amazing discoveries.",
      ageRange: "4-8 years",
      theme: "superhero",
      childName: "Action Hero",
      coverImage: "https://storage.wonderwraps.com/a7443806-2e0c-499f-8aa9-9caf747effc5/responsive-images/7Xq3ymBxBXBVexVdn7Is8LMdryMT9g-metaMDEucG5n-___media_library_original_512_512.png"
    },
    {
      id: 19,
      title: "Moon Goddess Hero",
      description: "Join our brave hero on a mystical adventure under the moonlight, discovering the power of courage and the alphabet.",
      ageRange: "5-9 years",
      theme: "adventure",
      childName: "Moon Guardian",
      coverImage: "https://storage.wonderwraps.com/27963038-0d3f-4241-b311-fd836e5ab228/responsive-images/SkRnuUvfxZDzBM1Xzhr3KIn06NvNT4-metabW9vbiBnb2RkZXNzIGJveS5wbmc%3D-___media_library_original_550_550.png"
    }
  ];

  const handlePersonalize = (bookData) => {
    console.log('Personalizing boys book:', bookData);
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
          color: isDark ? '#3b82f6' : '#1d4ed8',
          animation: 'sparkleAndFloat 4s ease-in-out infinite',
          zIndex: 2,
          opacity: 0.8,
        }}
      >
        <IconRocket size={24} />
      </Box>

      <Box
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '6%',
          color: '#f59e0b',
          animation: 'sparkleAndFloat 5s ease-in-out infinite 1s',
          zIndex: 2,
          opacity: 0.7,
        }}
      >
        <IconTrophy size={20} />
      </Box>

      <Box
        style={{
          position: 'absolute',
          top: '25%',
          left: '10%',
          color: isDark ? '#ef4444' : '#dc2626',
          animation: 'sparkleAndFloat 6s ease-in-out infinite 2s',
          zIndex: 1,
          opacity: 0.6,
        }}
      >
        <IconSword size={18} />
      </Box>

      <Container size="xl" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <Box ta="center" mb={rem(60)}>
          <Group
            justify="center"
            mb="xl"
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              backdropFilter: 'blur(16px)',
              borderRadius: rem(30),
              padding: `${rem(10)} ${rem(24)}`,
              display: 'inline-flex',
              boxShadow: '0 8px 32px rgba(59, 130, 246, 0.3)',
            }}
          >
            <Group gap="xs">
              <IconRocket size={18} style={{ color: '#ffffff' }} />
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
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Little Boy!
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
            Action-packed adventures featuring heroes, space explorers, and brave characters that inspire young boys to be courageous and kind.
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
          {boysBooksData.map((book) => (
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
            Every Boy is a Hero in His Own Adventure
          </Text>
          
          <Box
            component="button"
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              color: '#ffffff',
              border: 'none',
              borderRadius: rem(25),
              padding: `${rem(12)} ${rem(24)}`,
              fontSize: rem(14),
              fontWeight: 600,
              fontFamily: 'Nunito, sans-serif',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(59, 130, 246, 0.3)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px) scale(1.02)';
              e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.3)';
            }}
          >
            Explore More Adventure Books
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

export default BooksForBoysGrid;