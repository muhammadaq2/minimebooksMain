import React, { useState } from 'react';
import { 
  Container, 
  Text, 
  Box,
  Group,
  Stack,
  SimpleGrid,
  Button,
  Select,
  Checkbox,
  Divider,
  TextInput,
  rem,
  useMantineColorScheme,
  Grid,
  Paper,
  Badge,
  Collapse
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { 
  IconSearch,
  IconFilter,
  IconSparkles,
  IconAdjustmentsHorizontal,
  IconX
} from '@tabler/icons-react';
import FloatingCircularHeader from '../../components/layout/Header/FloatingCircularHeader';
import ProfessionalFooter from '../../components/layout/Footer/ProfessionalFooter';
import BookCard from '../../components/ui/BookCard/BookCard';

function ProfessionalShopPage() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');

  // Your consistent color palette
  const colors = isDark ? {
    primary: '#a855f7',
    secondary: '#facc15',
    accent: '#14b8a6',
    background: '#0f0f23',
    text: '#f8fafc',
    textSecondary: '#cbd5e1',
    glassBg: 'rgba(255, 255, 255, 0.1)',
    border: 'rgba(168, 85, 247, 0.3)',
    cardBg: 'rgba(30, 27, 75, 0.6)',
  } : {
    primary: '#8B5CF6',
    secondary: '#facc15',
    accent: '#14b8a6',
    background: '#ffffff',
    text: '#1e293b',
    textSecondary: '#475569',
    glassBg: 'rgba(255, 255, 255, 0.7)',
    border: 'rgba(139, 92, 246, 0.2)',
    cardBg: '#ffffff',
  };

  // Filter states
  const [filters, setFilters] = useState({
    gender: [],
    childAge: [],
    language: [],
    searchQuery: ''
  });

  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [sortBy, setSortBy] = useState('popular');

  // Sample products data
  const productsData = [
    {
      id: 1,
      title: "Colors ABC Adventure",
      description: "Learn the alphabet while discovering the magical world of colors with engaging activities and visual learning.",
      ageRange: "3-5 years",
      price: 21.99,
      theme: "educational",
      childName: "Learning Explorer",
      gender: "boy",
      language: "english",
      coverImage: "/images%20kids/bookCover1age3-5.png"
    },
    {
      id: 2,
      title: "Princess Emma's Royal Quest",
      description: "Join Princess Emma on a magical royal adventure through the alphabet kingdom, learning letters while ruling with kindness.",
      ageRange: "3-5 years",
      price: 24.99,
      theme: "princess",
      childName: "Princess Emma",
      gender: "girl",
      language: "english",
      coverImage: "/images%20kids/bookCover1age3-5girls.png"
    },
    {
      id: 3,
      title: "Baby's First Words",
      description: "A delightful introduction to first words and sounds, perfect for little ones beginning their learning journey with colorful images and simple concepts.",
      ageRange: "0-1 years",
      price: 19.99,
      theme: "baby",
      childName: "Little Explorer",
      gender: "boy",
      language: "english",
      coverImage: "/images%20kids/bookCoverkidsage012months.png"
    }
  ];

  // Filter options - CORRECTED
  const filterOptions = {
    gender: [
      { value: 'boy', label: 'Boy' },
      { value: 'girl', label: 'Girl' }
    ],
    childAge: [
      { value: '0-1', label: '0-1 years' },
      { value: '3-5', label: '3-5 years' }
    ],
    language: [
      { value: 'english', label: 'English' }
    ]
  };

  const sortOptions = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'newest', label: 'Newest First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'name', label: 'Name A-Z' }
  ];

  // Filter functions
  const handleFilterChange = (filterType, value, checked) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: checked 
        ? [...prev[filterType], value]
        : prev[filterType].filter(item => item !== value)
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      gender: [],
      childAge: [],
      language: [],
      searchQuery: ''
    });
  };

  const getActiveFilterCount = () => {
    return filters.gender.length + filters.childAge.length + filters.language.length;
  };

  // Filter products based on current filters - CORRECTED
  const filteredProducts = productsData.filter(product => {
    const matchesSearch = filters.searchQuery === '' || 
      product.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(filters.searchQuery.toLowerCase());
    
    const matchesGender = filters.gender.length === 0 || filters.gender.includes(product.gender);
    
    const matchesAge = filters.childAge.length === 0 || 
      filters.childAge.some(ageFilter => {
        // Extract age numbers from product age range
        const productAgeMatch = product.ageRange.match(/(\d+)-(\d+)/);
        if (!productAgeMatch) return false;
        
        const productMinAge = parseInt(productAgeMatch[1]);
        const productMaxAge = parseInt(productAgeMatch[2]);
        
        // Check if product age range matches filter
        if (ageFilter === '0-1') {
          return productMinAge <= 1 && productMaxAge >= 0;
        } else if (ageFilter === '3-5') {
          return productMinAge <= 5 && productMaxAge >= 3;
        }
        return false;
      });
    
    const matchesLanguage = filters.language.length === 0 || filters.language.includes(product.language);

    return matchesSearch && matchesGender && matchesAge && matchesLanguage;
  });

  // Filter Sidebar Component
  const FilterSidebar = () => (
    <Paper
      style={{
        background: colors.cardBg,
        backdropFilter: 'blur(20px)',
        border: `1px solid ${colors.border}`,
        borderRadius: rem(20),
        padding: rem(24),
        position: 'sticky',
        top: rem(120),
      }}
    >
      <Group justify="space-between" mb="lg">
        <Group gap="sm">
          <IconFilter size={20} style={{ color: colors.primary }} />
          <Text fw={700} style={{ color: colors.text, fontFamily: 'Quicksand, sans-serif' }}>
            Filters
          </Text>
          {getActiveFilterCount() > 0 && (
            <Badge size="sm" color="violet" variant="filled">
              {getActiveFilterCount()}
            </Badge>
          )}
        </Group>
        {getActiveFilterCount() > 0 && (
          <Button
            variant="subtle"
            size="xs"
            onClick={clearAllFilters}
            style={{ color: colors.textSecondary }}
          >
            Clear All
          </Button>
        )}
      </Group>

      <Stack gap="lg">
        {/* Gender Filter */}
        <Box>
          <Text fw={600} mb="sm" style={{ color: colors.text, fontFamily: 'Nunito, sans-serif' }}>
            Gender
          </Text>
          <Stack gap="xs">
            {filterOptions.gender.map(option => (
              <Checkbox
                key={option.value}
                label={option.label}
                checked={filters.gender.includes(option.value)}
                onChange={(e) => handleFilterChange('gender', option.value, e.target.checked)}
                styles={{
                  label: { color: colors.textSecondary, fontFamily: 'Nunito, sans-serif', fontSize: rem(14) },
                  input: { '&:checked': { backgroundColor: colors.primary, borderColor: colors.primary } }
                }}
              />
            ))}
          </Stack>
        </Box>

        <Divider color={colors.border} />

        {/* Child Age Filter */}
        <Box>
          <Text fw={600} mb="sm" style={{ color: colors.text, fontFamily: 'Nunito, sans-serif' }}>
            Child Age
          </Text>
          <Stack gap="xs">
            {filterOptions.childAge.map(option => (
              <Checkbox
                key={option.value}
                label={option.label}
                checked={filters.childAge.includes(option.value)}
                onChange={(e) => handleFilterChange('childAge', option.value, e.target.checked)}
                styles={{
                  label: { color: colors.textSecondary, fontFamily: 'Nunito, sans-serif', fontSize: rem(14) },
                  input: { '&:checked': { backgroundColor: colors.primary, borderColor: colors.primary } }
                }}
              />
            ))}
          </Stack>
        </Box>

        <Divider color={colors.border} />

        {/* Language Filter */}
        <Box>
          <Text fw={600} mb="sm" style={{ color: colors.text, fontFamily: 'Nunito, sans-serif' }}>
            Language
          </Text>
          <Stack gap="xs">
            {filterOptions.language.map(option => (
              <Checkbox
                key={option.value}
                label={option.label}
                checked={filters.language.includes(option.value)}
                onChange={(e) => handleFilterChange('language', option.value, e.target.checked)}
                styles={{
                  label: { color: colors.textSecondary, fontFamily: 'Nunito, sans-serif', fontSize: rem(14) },
                  input: { '&:checked': { backgroundColor: colors.primary, borderColor: colors.primary } }
                }}
              />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );

  const handlePersonalize = (bookData) => {
    console.log('Personalizing book:', bookData);
    // Navigate to personalization page
  };

  return (
    <Box
      style={{
        minHeight: '100vh',
        background: colors.background,
        position: 'relative',
      }}
    >
      {/* Header */}
      <FloatingCircularHeader />

      {/* Main Content */}
      <Container size="xl" pt={rem(160)} pb={rem(60)}>
        
        {/* Page Header */}
        <Box ta="center" mb={rem(50)}>
          <Text
            component="h1"
            size={isMobile ? "2.2rem" : "3rem"}
            fw={800}
            ta="center"
            mb="xl"
            style={{
              fontFamily: 'Quicksand, sans-serif',
              color: colors.text,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Shop{' '}
            <Text
              component="span"
              inherit
              style={{
                background: `linear-gradient(135deg, ${colors.primary} 0%, #f472b6 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Magical
            </Text>{' '}
            ABC Adventures
          </Text>

          <Text
            size={isMobile ? "md" : "lg"}
            style={{
              color: colors.textSecondary,
              fontFamily: 'Nunito, sans-serif',
              maxWidth: rem(600),
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Transform your child into the hero of their own personalized alphabet adventure
          </Text>
        </Box>

        {/* Search and Sort Bar */}
        <Paper
          mb="xl"
          style={{
            background: colors.cardBg,
            backdropFilter: 'blur(24px)',
            border: `1px solid ${colors.border}`,
            borderRadius: rem(20),
            padding: isMobile ? rem(20) : rem(24),
            boxShadow: isDark
              ? '0 20px 40px rgba(0, 0, 0, 0.3)'
              : '0 20px 40px rgba(139, 92, 246, 0.12)',
            width: '100%',
            maxWidth: '100%',
            overflow: 'hidden',
          }}
        >
          {isMobile ? (
            // Mobile Layout
            <Stack gap="lg">
              <Box style={{ width: '100%' }}>
                <TextInput
                  placeholder="Search magical adventures..."
                  leftSection={
                    <Box
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary} 0%, #f472b6 100%)`,
                        borderRadius: '50%',
                        padding: rem(6),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <IconSearch size={16} style={{ color: '#ffffff' }} />
                    </Box>
                  }
                  value={filters.searchQuery}
                  onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
                  size="lg"
                  radius="xl"
                  styles={{
                    root: { width: '100%' },
                    input: {
                      background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.9)',
                      border: `2px solid ${colors.border}`,
                      color: colors.text,
                      fontFamily: 'Nunito, sans-serif',
                      fontSize: rem(16),
                      height: rem(56),
                      paddingLeft: rem(56),
                      width: '100%',
                      '&:focus': {
                        borderColor: colors.primary,
                        boxShadow: `0 0 0 4px ${colors.primary}15`,
                        background: isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.95)',
                        transform: 'scale(1.02)',
                        transition: 'all 0.2s ease',
                      },
                      '&::placeholder': {
                        color: colors.textSecondary,
                        fontStyle: 'italic',
                      }
                    }
                  }}
                />
              </Box>

              <Group justify="space-between" align="center" gap="md">
                <Button
                  variant="gradient"
                  gradient={{ from: colors.primary, to: '#f472b6', deg: 135 }}
                  leftSection={<IconAdjustmentsHorizontal size={18} />}
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  size="lg"
                  radius="xl"
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 600,
                    height: rem(50),
                    flex: 1,
                    maxWidth: rem(160),
                  }}
                >
                  Filters{getActiveFilterCount() > 0 && ` (${getActiveFilterCount()})`}
                </Button>

                <Select
                  placeholder="Sort by"
                  value={sortBy}
                  onChange={setSortBy}
                  data={sortOptions}
                  size="lg"
                  radius="xl"
                  style={{ flex: 1, maxWidth: rem(160) }}
                  styles={{
                    input: {
                      background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.9)',
                      border: `2px solid ${colors.border}`,
                      color: colors.text,
                      fontFamily: 'Nunito, sans-serif',
                      fontSize: rem(15),
                      height: rem(50),
                      '&:focus': {
                        borderColor: colors.primary,
                        boxShadow: `0 0 0 3px ${colors.primary}20`,
                        transform: 'scale(1.02)',
                        transition: 'all 0.2s ease',
                      },
                    },
                    dropdown: {
                      background: isDark ? colors.cardBg : '#ffffff',
                      border: `1px solid ${colors.border}`,
                      borderRadius: rem(12),
                      maxHeight: rem(200),
                    },
                    option: {
                      color: colors.text,
                      fontFamily: 'Nunito, sans-serif',
                      padding: rem(12),
                      '&[data-selected]': {
                        backgroundColor: colors.primary,
                      },
                      '&:hover': {
                        backgroundColor: `${colors.primary}20`,
                      }
                    }
                  }}
                />
              </Group>
            </Stack>
          ) : (
            // Desktop Layout
            <Group justify="space-between" wrap="nowrap" gap="md">
              <Box style={{ flex: 1, position: 'relative' }}>
                <TextInput
                  placeholder="Search for magical adventures..."
                  leftSection={
                    <Box
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary} 0%, #f472b6 100%)`,
                        borderRadius: '50%',
                        padding: rem(4),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <IconSearch size={14} style={{ color: '#ffffff' }} />
                    </Box>
                  }
                  value={filters.searchQuery}
                  onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
                  size="lg"
                  radius="xl"
                  styles={{
                    input: {
                      background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.9)',
                      border: `2px solid ${colors.border}`,
                      color: colors.text,
                      fontFamily: 'Nunito, sans-serif',
                      fontSize: rem(15),
                      height: rem(50),
                      paddingLeft: rem(50),
                      '&:focus': {
                        borderColor: colors.primary,
                        boxShadow: `0 0 0 3px ${colors.primary}20`,
                        background: isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.95)',
                      },
                      '&::placeholder': {
                        color: colors.textSecondary,
                        fontStyle: 'italic',
                      }
                    }
                  }}
                />
              </Box>

              <Select
                placeholder="Sort by"
                value={sortBy}
                onChange={setSortBy}
                data={sortOptions}
                size="lg"
                radius="xl"
                style={{ minWidth: rem(180) }}
                styles={{
                  input: {
                    background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.9)',
                    border: `2px solid ${colors.border}`,
                    color: colors.text,
                    fontFamily: 'Nunito, sans-serif',
                    fontSize: rem(15),
                    height: rem(50),
                    '&:focus': {
                      borderColor: colors.primary,
                      boxShadow: `0 0 0 3px ${colors.primary}20`,
                    },
                  },
                  dropdown: {
                    background: isDark ? colors.cardBg : '#ffffff',
                    border: `1px solid ${colors.border}`,
                    borderRadius: rem(12),
                  },
                  option: {
                    color: colors.text,
                    fontFamily: 'Nunito, sans-serif',
                    '&[data-selected]': {
                      backgroundColor: colors.primary,
                    },
                    '&:hover': {
                      backgroundColor: `${colors.primary}20`,
                    }
                  }
                }}
              />
            </Group>
          )}

          {/* Results Count and Active Filters */}
          <Stack gap={isMobile ? "sm" : "xs"} mt="lg">
            <Text 
              size={isMobile ? "md" : "sm"} 
              fw={isMobile ? 600 : 400}
              style={{ 
                color: colors.text,
                fontFamily: 'Nunito, sans-serif',
              }}
            >
              Showing {filteredProducts.length} of {productsData.length} storybooks
            </Text>
            
            {getActiveFilterCount() > 0 && (
              <Box>
                <Text 
                  size="xs" 
                  mb="xs" 
                  style={{ 
                    color: colors.textSecondary,
                    fontFamily: 'Nunito, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontWeight: 600,
                  }}
                >
                  Active Filters:
                </Text>
                <Group gap={isMobile ? "xs" : "xs"} align="flex-start">
                  {filters.gender.map(filter => (
                    <Badge
                      key={filter}
                      variant="light"
                      color="violet"
                      size={isMobile ? "md" : "sm"}
                      radius="lg"
                      rightSection={
                        <IconX 
                          size={isMobile ? 14 : 12} 
                          style={{ 
                            cursor: 'pointer',
                            minWidth: rem(14),
                            minHeight: rem(14),
                          }}
                          onClick={() => handleFilterChange('gender', filter, false)}
                        />
                      }
                      styles={{
                        root: {
                          paddingRight: rem(8),
                          minHeight: isMobile ? rem(32) : rem(24),
                          fontSize: isMobile ? rem(14) : rem(12),
                          fontFamily: 'Nunito, sans-serif',
                        },
                        section: {
                          marginLeft: rem(4),
                        }
                      }}
                    >
                      {filterOptions.gender.find(opt => opt.value === filter)?.label}
                    </Badge>
                  ))}
                  {filters.childAge.map(filter => (
                    <Badge
                      key={filter}
                      variant="light"
                      color="violet"
                      size={isMobile ? "md" : "sm"}
                      radius="lg"
                      rightSection={
                        <IconX 
                          size={isMobile ? 14 : 12} 
                          style={{ 
                            cursor: 'pointer',
                            minWidth: rem(14),
                            minHeight: rem(14),
                          }}
                          onClick={() => handleFilterChange('childAge', filter, false)}
                        />
                      }
                      styles={{
                        root: {
                          paddingRight: rem(8),
                          minHeight: isMobile ? rem(32) : rem(24),
                          fontSize: isMobile ? rem(14) : rem(12),
                          fontFamily: 'Nunito, sans-serif',
                        },
                        section: {
                          marginLeft: rem(4),
                        }
                      }}
                    >
                      {filterOptions.childAge.find(opt => opt.value === filter)?.label}
                    </Badge>
                  ))}
                  {filters.language.map(filter => (
                    <Badge
                      key={filter}
                      variant="light"
                      color="violet"
                      size={isMobile ? "md" : "sm"}
                      radius="lg"
                      rightSection={
                        <IconX 
                          size={isMobile ? 14 : 12} 
                          style={{ 
                            cursor: 'pointer',
                            minWidth: rem(14),
                            minHeight: rem(14),
                          }}
                          onClick={() => handleFilterChange('language', filter, false)}
                        />
                      }
                      styles={{
                        root: {
                          paddingRight: rem(8),
                          minHeight: isMobile ? rem(32) : rem(24),
                          fontSize: isMobile ? rem(14) : rem(12),
                          fontFamily: 'Nunito, sans-serif',
                        },
                        section: {
                          marginLeft: rem(4),
                        }
                      }}
                    >
                      {filterOptions.language.find(opt => opt.value === filter)?.label}
                    </Badge>
                  ))}
                </Group>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* Mobile Filters */}
        {isMobile && (
          <Collapse in={showMobileFilters}>
            <Box mb="xl">
              <FilterSidebar />
            </Box>
          </Collapse>
        )}

        <Grid gutter="lg">
          {/* Desktop Sidebar */}
          {!isMobile && (
            <Grid.Col span={3}>
              <FilterSidebar />
            </Grid.Col>
          )}

          {/* Products Grid */}
          <Grid.Col span={isMobile ? 12 : 9}>
            {filteredProducts.length > 0 ? (
              <SimpleGrid
                cols={{ base: 1, xs: 2, sm: 2, md: 3, lg: 3 }}
                spacing={{ base: rem(12), xs: rem(14), sm: rem(16), md: rem(20), lg: rem(24) }}
                verticalSpacing={{ base: rem(16), xs: rem(18), sm: rem(20), md: rem(24), lg: rem(32) }}
                style={{
                  width: '100%',
                  maxWidth: '100%',
                }}
              >
                {filteredProducts.map((book) => (
                  <BookCard
                    key={book.id}
                    {...book}
                    onPersonalize={handlePersonalize}
                    isDark={isDark}
                  />
                ))}
              </SimpleGrid>
            ) : (
              <Paper
                style={{
                  background: colors.cardBg,
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${colors.border}`,
                  borderRadius: rem(20),
                  padding: rem(60),
                  textAlign: 'center',
                }}
              >
                <Text size="xl" fw={600} mb="md" style={{ color: colors.text }}>
                  No storybooks found
                </Text>
                <Text style={{ color: colors.textSecondary, marginBottom: rem(20) }}>
                  Try adjusting your filters or search terms
                </Text>
                <Button onClick={clearAllFilters} variant="light">
                  Clear All Filters
                </Button>
              </Paper>
            )}
          </Grid.Col>
        </Grid>
      </Container>

      {/* Footer */}
      <ProfessionalFooter />
    </Box>
  );
}

export default ProfessionalShopPage;