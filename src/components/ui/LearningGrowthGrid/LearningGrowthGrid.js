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
import { IconBrain, IconStar, IconHeart } from '@tabler/icons-react';
import BookCard from '../../ui/BookCard/BookCard';

function LearningGrowthGrid() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Learning and Growth focused books with your provided images
  const learningBooksData = [
    {
      id: 1,
      title: "Colors ABC Adventure",
      description: "Learn the alphabet while discovering the magical world of colors with engaging activities and visual learning.",
      ageRange: "2-4 years",
      theme: "educational",
      childName: "Learning Explorer",
      coverImage: "https://storage.wonderwraps.com/7daa5bac-f8e8-494b-9178-4ce752a44c52/responsive-images/7gnj6nsMk0qaCuWkohcvNK5KeWy38W-metaY29sb3JzLnBuZw%3D%3D-___media_library_original_512_512.png"
    },
    {
      id: 2,
      title: "Wise Owl's ABC Lessons",
      description: "Join the wise owl on an educational journey through letters, developing critical thinking and reading skills.",
      ageRange: "3-6 years",
      theme: "educational",
      childName: "Smart Learner",
      coverImage: "https://storage.wonderwraps.com/ed03abb2-d6d6-45ab-bc18-5127ff1efb55/responsive-images/SErZEWq3gkI5kAyfMVLxAc5wYKo3dG-metad2lzZSBvd2wucG5n-___media_library_original_512_512.png"
    },
    {
      id: 3,
      title: "Numbers & Letters Fun",
      description: "Combine math and literacy skills in this comprehensive learning adventure that builds foundation knowledge.",
      ageRange: "4-7 years",
      theme: "educational",
      childName: "Young Scholar",
      coverImage: "https://storage.wonderwraps.com/d35d6e1a-0e81-4c95-8801-0a85243e5436/responsive-images/DQYrN2Uwo6QLi4z7aCOdI5rvuer8hd-metaMC5wbmc%3D-___media_library_original_512_512.png"
    },
    {
      id: 4,
      title: "Creative ABC Art Studio",
      description: "Express creativity while learning letters through art, crafts, and imaginative storytelling activities.",
      ageRange: "3-8 years",
      theme: "creative",
      childName: "Little Artist",
      coverImage: "https://storage.wonderwraps.com/46388391-b28e-40bc-bc41-2e8656a7f8f2/responsive-images/bya74384NVEvlodVUNHD6Y6eca4EEB-metaMC5wbmc%3D-___media_library_original_512_512.png"
    },
    {
      id: 5,
      title: "Zara's Science Discovery",
      description: "Explore the wonders of science while mastering the alphabet through experiments and discoveries.",
      ageRange: "5-8 years",
      theme: "science",
      childName: "Future Scientist",
      coverImage: "https://storage.wonderwraps.com/b18a8d05-5ddf-45ec-94d3-78291cf89459/responsive-images/tOjyqmexaiKAbCC7ujriQWABID1I4z-metaemFyYS5wbmc%3D-___media_library_original_512_512.png"
    },
    {
      id: 6,
      title: "Animal Kingdom ABC",
      description: "Learn about different animals and their habitats while discovering letters in this educational adventure.",
      ageRange: "2-6 years",
      theme: "nature",
      childName: "Nature Explorer",
      coverImage: "https://storage.wonderwraps.com/ce288741-c82b-4551-9f7a-59f0b623316f/kzFTf29UFlXyGeEInsHLWSYuxc7bAi-metaYW5pbWFscy5wbmc=-.png"
    }
  ];

  const handlePersonalize = (bookData) => {
    console.log('Personalizing learning book:', bookData);
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
          color: isDark ? '#10b981' : '#059669',
          animation: 'sparkleAndFloat 4s ease-in-out infinite',
          zIndex: 2,
          opacity: 0.8,
        }}
      >
        <IconBrain size={24} />
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
        <IconStar size={20} />
      </Box>

      <Container size="xl" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <Box ta="center" mb={rem(60)}>
          <Group
            justify="center"
            mb="xl"
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              backdropFilter: 'blur(16px)',
              borderRadius: rem(30),
              padding: `${rem(10)} ${rem(24)}`,
              display: 'inline-flex',
              boxShadow: '0 8px 32px rgba(16, 185, 129, 0.3)',
            }}
          >
            <Group gap="xs">
              <IconBrain size={18} style={{ color: '#ffffff' }} />
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
                Based on Category
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
            Learning and{' '}
            <Text
              component="span"
              inherit
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Growth
            </Text>
          </Text>

        </Box>

        {/* Books Grid - 6 items in 3x2 layout */}
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3 }}
          spacing={{ base: rem(24), sm: rem(32), md: rem(40) }}
          verticalSpacing={{ base: rem(32), sm: rem(40) }}
          style={{
            maxWidth: rem(1200),
            margin: '0 auto',
          }}
        >
          {learningBooksData.map((book) => (
            <BookCard
              key={book.id}
              {...book}
              onPersonalize={handlePersonalize}
              isDark={isDark}
            />
          ))}
        </SimpleGrid>
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

export default LearningGrowthGrid;