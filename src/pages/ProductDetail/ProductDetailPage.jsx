import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container, 
  Text, 
  Box,
  Group,
  Stack,
  SimpleGrid,
  Button,
  Select,
  rem,
  useMantineColorScheme,
  Grid,
  Image,
  Badge,
  Card,
  Tabs,
  Rating,
  Transition,
  Paper,
  ActionIcon,
  Tooltip
} from '@mantine/core';
import { useMediaQuery, useHover, useIntersection } from '@mantine/hooks';
import { IconHeart, IconShare, IconShieldCheck, IconTruck, IconRefresh, IconEye, IconChevronDown, IconChevronUp } from '@tabler/icons-react';

// Import header and footer components
import FloatingCircularHeader from '../../components/layout/Header/FloatingCircularHeader';
import ProfessionalFooter from '../../components/layout/Footer/ProfessionalFooter';

function ProductDetailPage({ productId = 1, onNavigate = () => {} }) {
  const navigate = useNavigate();
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Debug font loading (remove this after testing)
  useEffect(() => {
    console.log('Font families available:', {
      quicksand: document.fonts.check('16px Quicksand'),
      nunito: document.fonts.check('16px Nunito')
    });
  }, []);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [mounted, setMounted] = useState(false);
  const imageRef = useRef(null);
  const { hovered: imageHovered, ref: imageHoverRef } = useHover();
  const { ref: intersectionRef } = useIntersection({
    threshold: 0.1,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Clean colors matching your theme
  const colors = isDark ? {
    primary: '#a855f7',
    background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)',
    text: '#f8fafc',
    textSecondary: '#cbd5e1',
    textMuted: '#94a3b8',
    border: 'rgba(255, 255, 255, 0.1)',
    cardBg: 'rgba(255, 255, 255, 0.05)',
  } : {
    primary: '#8B5CF6',
    background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 10%, #f3e8ff 30%, #e0e7ff 60%, #dbeafe 90%, #f0f9ff 100%)',
    text: '#1e293b',
    textSecondary: '#475569',
    textMuted: '#9ca3af',
    border: 'rgba(0, 0, 0, 0.08)',
    cardBg: 'rgba(255, 255, 255, 0.6)',
  };

  const productData = {
    title: "Boy Explores the World of Jobs",
    description: "What do people do when they grow up? From doctors and farmers to zookeepers and firefighters, this little kid is determined to figure out the important roles that people play in the big wide world.",
    moreDescription: "With each new job, they try on new hats, and test out new skills. Along the way, the kid figures out that grownups actually do a lot more than they ever thought they did.",
    price: 39.99,
    originalPrice: 50.00,
    features: [
      "For kids ages: 4-8 years",
      "Preview available before ordering", 
      "Encourages learning and curiosity",
      "Upload your favorite photo of your child"
    ],
    productInfo: [
      { label: "IDEAL FOR", value: "Boy" },
      { label: "AGE RANGE", value: "4 - 8 years old" },
      { label: "CHARACTERS", value: "Boys" },
      { label: "GENRE", value: "Learning & Growth" },
      { label: "PAGES", value: "40 Pages" },
      { label: "SHIPPING", value: "Standard, Express" }
    ],
    languages: [
      { value: 'english', label: 'English' },
      { value: 'spanish', label: 'Spanish' },
      { value: 'french', label: 'French' },
      { value: 'german', label: 'German' }
    ],
    images: [
      "https://storage.wonderwraps.com/c94b3c35-fb0e-448f-85f1-3968004417b4/sRLuayulk8mSEEOpfXQGKgAKaAumsC-metaSTVyUzlmMURxZWxwQkM3eUpHdEhnNWV3bXVScW1uM2E0U0FhRGhpRS1wcmV2aWV3LmpwZw==-.jpg",
      "https://storage.wonderwraps.com/09e96f12-f7d1-48d3-8ba5-24b528c98e16/iyzbgYw3ox8YwgNJDRYvZ4zzffZHIA-metaVGhlby5qcGc=-.jpg",
      "https://storage.wonderwraps.com/6dbdccfc-7a9e-40a2-b0f5-4fada8a6c3bf/aiPdyeg0hoInP3ZjkW0MdTvXTlQtQ0-metaYWJjIGJveS5wbmc=-.png",
      "https://storage.wonderwraps.com/a7443806-2e0c-499f-8aa9-9caf747effc5/responsive-images/7Xq3ymBxBXBVexVdn7Is8LMdryMT9g-metaMDEucG5n-___media_library_original_512_512.png",
      "https://storage.wonderwraps.com/27963038-0d3f-4241-b311-fd836e5ab228/responsive-images/SkRnuUvfxZDzBM1Xzhr3KIn06NvNT4-metabW9vbiBnb2RkZXNzIGJveS5wbmc%3D-___media_library_original_550_550.png"
    ]
  };

  const handleCreateStory = () => {
    setIsLoading(true);
    // Navigate to personalization steps page after a brief delay
    setTimeout(() => {
      setIsLoading(false);
      navigate(`/personalize-steps/${productId}`);
    }, 800);
  };

  const handleImageSelect = (index) => {
    setImageLoading(true);
    setSelectedImage(index);
    setTimeout(() => setImageLoading(false), 300);
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  // Enhanced image gallery component
  const ImageGallery = ({ images, selectedIndex, onImageSelect, isHovered }) => (
    <Box
      ref={imageHoverRef}
      style={{
        background: colors.cardBg,
        border: `1px solid ${colors.border}`,
        borderRadius: rem(16),
        padding: rem(20),
        backdropFilter: 'blur(15px)',
        boxShadow: isDark 
          ? '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
      }}
    >
      {/* Action buttons overlay */}
      <Group
        style={{
          position: 'absolute',
          top: rem(16),
          right: rem(16),
          zIndex: 10,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.2s ease',
        }}
      >
        <Tooltip label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}>
          <ActionIcon
            onClick={toggleWishlist}
            style={{
              background: colors.cardBg,
              backdropFilter: 'blur(10px)',
              border: `1px solid ${colors.border}`,
              color: isWishlisted ? '#ff6b6b' : colors.textMuted,
            }}
          >
            <IconHeart size={18} fill={isWishlisted ? 'currentColor' : 'none'} />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Share product">
          <ActionIcon
            style={{
              background: colors.cardBg,
              backdropFilter: 'blur(10px)',
              border: `1px solid ${colors.border}`,
              color: colors.textMuted,
            }}
          >
            <IconShare size={18} />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Quick view">
          <ActionIcon
            style={{
              background: colors.cardBg,
              backdropFilter: 'blur(10px)',
              border: `1px solid ${colors.border}`,
              color: colors.textMuted,
            }}
          >
            <IconEye size={18} />
          </ActionIcon>
        </Tooltip>
      </Group>

      <Transition mounted={!imageLoading} transition="fade" duration={300}>
        {(styles) => (
          <Image
            ref={imageRef}
            src={images[selectedIndex]}
            alt={productData.title}
            style={{
              ...styles,
              width: '100%',
              height: isMobile ? rem(300) : rem(400),
              objectFit: 'cover',
              borderRadius: rem(12),
              transition: 'transform 0.3s ease',
              transform: isHovered && !isMobile ? 'scale(1.05)' : 'scale(1)',
            }}
            onLoad={() => setImageLoading(false)}
          />
        )}
      </Transition>
    </Box>
  );

  // Trust badges component
  const TrustBadges = () => (
    <Group gap="md" style={{ marginTop: rem(16) }}>
      <Badge
        leftSection={<IconShieldCheck size={14} />}
        variant="light"
        color="green"
        style={{
          background: colors.cardBg,
          backdropFilter: 'blur(10px)',
          border: `1px solid ${colors.border}`,
          color: colors.text,
        }}
      >
        Secure & Safe
      </Badge>
      <Badge
        leftSection={<IconTruck size={14} />}
        variant="light"
        color="blue"
        style={{
          background: colors.cardBg,
          backdropFilter: 'blur(10px)',
          border: `1px solid ${colors.border}`,
          color: colors.text,
        }}
      >
        Fast Delivery
      </Badge>
      <Badge
        leftSection={<IconRefresh size={14} />}
        variant="light"
        color="orange"
        style={{
          background: colors.cardBg,
          backdropFilter: 'blur(10px)',
          border: `1px solid ${colors.border}`,
          color: colors.text,
        }}
      >
        Easy Returns
      </Badge>
    </Group>
  );

  return (
    <Box
      ref={intersectionRef}
      style={{
        minHeight: '100vh',
        background: colors.background,
        width: '100%',
        position: 'relative',
        backgroundAttachment: isMobile ? 'initial' : 'fixed',
        backgroundSize: 'cover',
      }}
    >
      {/* Header */}
      <FloatingCircularHeader />
      
      {/* Main Content */}
      <Transition mounted={mounted} transition="slide-up" duration={600}>
        {(styles) => (
          <div style={styles}>
            {isMobile ? (
              // Mobile Layout
              <Container size="lg" pt={rem(140)} pb={rem(60)} px={rem(20)}>
                <Stack gap="xl">
                  
                  {/* Mobile Enhanced Image Gallery */}
                  <ImageGallery 
                    images={productData.images}
                    selectedIndex={selectedImage}
                    onImageSelect={handleImageSelect}
                    isHovered={imageHovered}
                  />

                  {/* Mobile Enhanced Thumbnails */}
                  <SimpleGrid cols={5} spacing="xs">
                    {productData.images.map((image, index) => (
                      <Paper
                        key={index}
                        onClick={() => handleImageSelect(index)}
                        style={{
                          background: colors.cardBg,
                          border: selectedImage === index 
                            ? `2px solid ${colors.primary}` 
                            : `1px solid ${colors.border}`,
                          borderRadius: rem(8),
                          padding: rem(4),
                          cursor: 'pointer',
                          backdropFilter: 'blur(10px)',
                          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                          transform: selectedImage === index ? 'scale(1.05)' : 'scale(1)',
                        }}
                      >
                        <Image
                          src={image}
                          alt={`View ${index + 1}`}
                          style={{
                            width: '100%',
                            height: rem(50),
                            objectFit: 'cover',
                            borderRadius: rem(4),
                          }}
                        />
                      </Paper>
                    ))}
                  </SimpleGrid>

                  {/* Mobile Product Header */}
                  <Stack gap="md">
                    <Group justify="space-between" align="flex-start">
                      <Text
                        size="xl"
                        fw={700}
                        style={{
                          color: colors.text,
                          fontFamily: 'Quicksand, sans-serif',
                          lineHeight: 1.3,
                        }}
                      >
                        {productData.title}
                      </Text>
                      <Rating value={4.8} fractions={2} readOnly size="sm" />
                    </Group>

                    <Group gap="xs">
                      <Badge size="sm" variant="light" style={{ background: colors.cardBg, color: colors.text }}>
                        4-8 Years
                      </Badge>
                      <Badge size="sm" variant="light" style={{ background: colors.cardBg, color: colors.text }}>
                        Educational
                      </Badge>
                      <Badge size="sm" variant="light" style={{ background: colors.cardBg, color: colors.text }}>
                        Personalized
                      </Badge>
                    </Group>
                  </Stack>

                  {/* Enhanced Product Information */}
                  <Tabs value={activeTab} onChange={setActiveTab}>
                    <Tabs.List
                      style={{
                        background: colors.cardBg,
                        backdropFilter: 'blur(10px)',
                        border: `1px solid ${colors.border}`,
                        borderRadius: rem(8),
                      }}
                    >
                      <Tabs.Tab value="overview" style={{ color: colors.text }}>Overview</Tabs.Tab>
                      <Tabs.Tab value="details" style={{ color: colors.text }}>Details</Tabs.Tab>
                      <Tabs.Tab value="reviews" style={{ color: colors.text }}>Reviews</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="overview" pt="md">
                      <Stack gap="md">
                        <Text
                          style={{
                            color: colors.textSecondary,
                            fontFamily: 'Nunito, sans-serif',
                            lineHeight: 1.6,
                          }}
                        >
                          {productData.description}
                        </Text>
                        
                        <Transition mounted={showFullDescription} transition="slide-down" duration={200}>
                          {(styles) => (
                            <Text 
                              style={{
                                ...styles,
                                color: colors.textSecondary,
                                fontFamily: 'Nunito, sans-serif',
                                lineHeight: 1.6,
                              }}
                            >
                              {productData.moreDescription}
                            </Text>
                          )}
                        </Transition>
                        
                        <Box
                          onClick={() => setShowFullDescription(!showFullDescription)}
                          style={{ cursor: 'pointer' }}
                        >
                          <Group gap="xs">
                            <Text 
                              size="sm" 
                              style={{ 
                                color: colors.primary,
                                fontFamily: 'Nunito, sans-serif',
                                fontWeight: 500
                              }}
                            >
                              {showFullDescription ? 'Show less' : 'Read more'}
                            </Text>
                            {showFullDescription ? 
                              <IconChevronUp size={16} color={colors.primary} /> : 
                              <IconChevronDown size={16} color={colors.primary} />
                            }
                          </Group>
                        </Box>

                      </Stack>
                    </Tabs.Panel>

                    <Tabs.Panel value="details" pt="md">
                      <SimpleGrid cols={2} spacing="md">
                        {productData.productInfo.map((info, index) => (
                          <Paper
                            key={index}
                            p="sm"
                            style={{
                              background: colors.cardBg,
                              backdropFilter: 'blur(10px)',
                              border: `1px solid ${colors.border}`,
                              borderRadius: rem(8),
                            }}
                          >
                            <Text
                              size="xs"
                              fw={500}
                              style={{
                                color: colors.textMuted,
                                fontFamily: 'Nunito, sans-serif',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                marginBottom: rem(4),
                              }}
                            >
                              {info.label}
                            </Text>
                            <Text
                              size="sm"
                              fw={500}
                              style={{
                                color: colors.text,
                                fontFamily: 'Nunito, sans-serif',
                              }}
                            >
                              {info.value}
                            </Text>
                          </Paper>
                        ))}
                      </SimpleGrid>
                    </Tabs.Panel>

                    <Tabs.Panel value="reviews" pt="md">
                      <Stack gap="md">
                        <Group gap="md">
                          <Rating value={4.8} fractions={2} readOnly />
                          <Text fw={600} style={{ color: colors.text }}>4.8 out of 5</Text>
                          <Text size="sm" style={{ color: colors.textMuted }}>(247 reviews)</Text>
                        </Group>
                        
                        <Paper
                          p="md"
                          style={{
                            background: colors.cardBg,
                            backdropFilter: 'blur(10px)',
                            border: `1px solid ${colors.border}`,
                            borderRadius: rem(8),
                          }}
                        >
                          <Stack gap="xs">
                            <Group justify="space-between">
                              <Text fw={500} style={{ color: colors.text }}>Sarah M.</Text>
                              <Rating value={5} readOnly size="sm" />
                            </Group>
                            <Text size="sm" style={{ color: colors.textSecondary, fontStyle: 'italic' }}>
                              "My son absolutely loves this personalized story! The quality is amazing and it arrived quickly."
                            </Text>
                          </Stack>
                        </Paper>
                      </Stack>
                    </Tabs.Panel>
                  </Tabs>

                  <TrustBadges />

                  {/* Action Section */}
                  <Stack gap="md">
                    <Select
                      value={selectedLanguage}
                      onChange={setSelectedLanguage}
                      data={productData.languages}
                      size="md"
                      radius="md"
                      styles={{
                        input: {
                          background: colors.cardBg,
                          backdropFilter: 'blur(10px)',
                          border: `1px solid ${colors.border}`,
                          color: colors.text,
                          fontFamily: 'Nunito, sans-serif',
                          height: rem(48),
                        },
                        dropdown: {
                          background: colors.cardBg,
                          backdropFilter: 'blur(20px)',
                          border: `1px solid ${colors.border}`,
                        },
                      }}
                    />

                    <Button
                      size="lg"
                      radius="md"
                      onClick={handleCreateStory}
                      loading={isLoading}
                      fullWidth
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary} 0%, #6366f1 100%)`,
                        fontFamily: 'Nunito, sans-serif',
                        fontWeight: 600,
                        height: rem(52),
                        boxShadow: '0 4px 15px 0 rgba(139, 92, 246, 0.3)',
                        transition: 'all 0.2s ease',
                      }}
                      styles={{
                        root: {
                          '&:hover': {
                            transform: 'translateY(-1px)',
                            boxShadow: '0 8px 25px 0 rgba(139, 92, 246, 0.4)',
                          }
                        }
                      }}
                    >
                      {isLoading ? 'Creating Your Story...' : 'Personalize Your Story'}
                    </Button>
                  </Stack>
                </Stack>
              </Container>
            ) : (
              // Desktop Layout - Enhanced
              <Container size="xl" pt={rem(160)} pb={rem(60)} px={rem(40)}>
                <Grid gutter="xl" align="flex-start">
                  
                  {/* Left - Enhanced Thumbnails */}
                  <Grid.Col span={2}>
                    <Stack gap="sm">
                      {productData.images.map((image, index) => (
                        <Paper
                          key={index}
                          onClick={() => handleImageSelect(index)}
                          style={{
                            background: colors.cardBg,
                            border: selectedImage === index 
                              ? `2px solid ${colors.primary}` 
                              : `1px solid ${colors.border}`,
                            borderRadius: rem(12),
                            padding: rem(8),
                            cursor: 'pointer',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            transform: selectedImage === index ? 'scale(1.05)' : 'scale(1)',
                            boxShadow: selectedImage === index 
                              ? `0 8px 25px rgba(139, 92, 246, 0.3)`
                              : '0 2px 8px rgba(0, 0, 0, 0.1)',
                          }}
                        >
                          <Image
                            src={image}
                            alt={`View ${index + 1}`}
                            style={{
                              width: '100%',
                              height: rem(80),
                              objectFit: 'cover',
                              borderRadius: rem(6),
                            }}
                          />
                        </Paper>
                      ))}
                    </Stack>
                  </Grid.Col>

                  {/* Center - Enhanced Main Image */}
                  <Grid.Col span={5}>
                    <ImageGallery 
                      images={productData.images}
                      selectedIndex={selectedImage}
                      onImageSelect={handleImageSelect}
                      isHovered={imageHovered}
                    />
                  </Grid.Col>

                  {/* Right - Enhanced Product Details */}
                  <Grid.Col span={5}>
                    <Stack gap="xl">
                      
                      {/* Header Section */}
                      <Stack gap="md">
                        <Group justify="space-between" align="flex-start">
                          <Text
                            size="2.2rem"
                            fw={700}
                            style={{
                              color: colors.text,
                              fontFamily: 'Quicksand, sans-serif',
                              lineHeight: 1.2,
                            }}
                          >
                            {productData.title}
                          </Text>
                        </Group>

                        <Group gap="md">
                          <Rating value={4.8} fractions={2} readOnly size="md" />
                          <Text fw={500} style={{ color: colors.text }}>4.8</Text>
                          <Text size="sm" style={{ color: colors.textMuted }}>(247 reviews)</Text>
                        </Group>

                        <Group gap="sm">
                          <Badge size="md" variant="gradient" gradient={{ from: colors.primary, to: '#6366f1' }}>
                            Ages 4-8
                          </Badge>
                          <Badge size="md" variant="light" style={{ background: colors.cardBg, color: colors.text }}>
                            Educational
                          </Badge>
                          <Badge size="md" variant="light" style={{ background: colors.cardBg, color: colors.text }}>
                            Personalized
                          </Badge>
                          <Badge size="md" variant="light" style={{ background: colors.cardBg, color: colors.text }}>
                            40 Pages
                          </Badge>
                        </Group>
                      </Stack>

                      {/* Enhanced Tabs */}
                      <Tabs value={activeTab} onChange={setActiveTab}>
                        <Tabs.List
                          style={{
                            background: colors.cardBg,
                            backdropFilter: 'blur(15px)',
                            border: `1px solid ${colors.border}`,
                            borderRadius: rem(12),
                            padding: rem(4),
                            borderBottom: 'none',
                          }}
                          styles={{
                            list: {
                              borderBottom: 'none !important',
                            }
                          }}
                        >
                          <Tabs.Tab 
                            value="overview" 
                            style={{ 
                              color: colors.text,
                              fontFamily: 'Nunito, sans-serif',
                              fontWeight: 500,
                            }}
                          >
                            Overview
                          </Tabs.Tab>
                          <Tabs.Tab 
                            value="details" 
                            style={{ 
                              color: colors.text,
                              fontFamily: 'Nunito, sans-serif',
                              fontWeight: 500,
                            }}
                          >
                            Specifications
                          </Tabs.Tab>
                          <Tabs.Tab 
                            value="reviews" 
                            style={{ 
                              color: colors.text,
                              fontFamily: 'Nunito, sans-serif',
                              fontWeight: 500,
                            }}
                          >
                            Reviews
                          </Tabs.Tab>
                        </Tabs.List>

                        <Box mt="lg">
                          <Tabs.Panel value="overview">
                            <Stack gap="lg">
                              <Text
                                size="md"
                                style={{
                                  color: colors.textSecondary,
                                  fontFamily: 'Nunito, sans-serif',
                                  lineHeight: 1.6,
                                }}
                              >
                                {productData.description}
                              </Text>

                              <Text
                                size="md"
                                style={{
                                  color: colors.textSecondary,
                                  fontFamily: 'Nunito, sans-serif',
                                  lineHeight: 1.6,
                                }}
                              >
                                {productData.moreDescription}
                              </Text>

                            </Stack>
                          </Tabs.Panel>

                          <Tabs.Panel value="details">
                            <SimpleGrid cols={2} spacing="lg">
                              {productData.productInfo.map((info, index) => (
                                <Card
                                  key={index}
                                  p="lg"
                                  style={{
                                    background: colors.cardBg,
                                    backdropFilter: 'blur(15px)',
                                    border: `1px solid ${colors.border}`,
                                    borderRadius: rem(12),
                                  }}
                                >
                                  <Text
                                    size="xs"
                                    fw={500}
                                    style={{
                                      color: colors.textMuted,
                                      fontFamily: 'Nunito, sans-serif',
                                      textTransform: 'uppercase',
                                      letterSpacing: '0.5px',
                                      marginBottom: rem(8),
                                    }}
                                  >
                                    {info.label}
                                  </Text>
                                  <Text
                                    fw={600}
                                    style={{
                                      color: colors.text,
                                      fontFamily: 'Nunito, sans-serif',
                                    }}
                                  >
                                    {info.value}
                                  </Text>
                                </Card>
                              ))}
                            </SimpleGrid>
                          </Tabs.Panel>

                          <Tabs.Panel value="reviews">
                            <Stack gap="lg">
                              <Group gap="lg">
                                <Stack gap="xs" align="center">
                                  <Text size="3rem" fw={700} style={{ color: colors.text }}>4.8</Text>
                                  <Rating value={4.8} fractions={2} readOnly size="lg" />
                                  <Text size="sm" style={{ color: colors.textMuted }}>247 reviews</Text>
                                </Stack>
                              </Group>
                              
                              <Stack gap="md">
                                {[
                                  { name: 'Sarah M.', rating: 5, comment: 'My son absolutely loves this personalized story! The quality is amazing and it arrived quickly.' },
                                  { name: 'Michael R.', rating: 5, comment: 'Perfect gift for my nephew. The personalization made it extra special!' },
                                  { name: 'Emma L.', rating: 4, comment: 'Great book concept. My daughter enjoys reading about different careers now.' }
                                ].map((review, index) => (
                                  <Paper
                                    key={index}
                                    p="lg"
                                    style={{
                                      background: colors.cardBg,
                                      backdropFilter: 'blur(10px)',
                                      border: `1px solid ${colors.border}`,
                                      borderRadius: rem(12),
                                    }}
                                  >
                                    <Stack gap="sm">
                                      <Group justify="space-between">
                                        <Text fw={600} style={{ color: colors.text }}>{review.name}</Text>
                                        <Rating value={review.rating} readOnly size="sm" />
                                      </Group>
                                      <Text 
                                        size="sm" 
                                        style={{ 
                                          color: colors.textSecondary, 
                                          fontStyle: 'italic',
                                          lineHeight: 1.5
                                        }}
                                      >
                                        "{review.comment}"
                                      </Text>
                                    </Stack>
                                  </Paper>
                                ))}
                              </Stack>
                            </Stack>
                          </Tabs.Panel>
                        </Box>
                      </Tabs>

                      <TrustBadges />

                      {/* Enhanced Action Section */}
                      <Stack gap="lg">
                        <Select
                          value={selectedLanguage}
                          onChange={setSelectedLanguage}
                          data={productData.languages}
                          size="lg"
                          radius="md"
                          label="Choose Language"
                          styles={{
                            label: {
                              color: colors.text,
                              fontFamily: 'Nunito, sans-serif',
                              fontWeight: 500,
                              marginBottom: rem(8),
                            },
                            input: {
                              background: colors.cardBg,
                              backdropFilter: 'blur(15px)',
                              border: `1px solid ${colors.border}`,
                              color: colors.text,
                              fontFamily: 'Nunito, sans-serif',
                              height: rem(52),
                              fontSize: rem(14),
                            },
                            dropdown: {
                              background: colors.cardBg,
                              backdropFilter: 'blur(20px)',
                              border: `1px solid ${colors.border}`,
                            },
                          }}
                        />

                        <Group gap="md">
                          <Button
                            size="xl"
                            radius="md"
                            onClick={handleCreateStory}
                            loading={isLoading}
                            flex={1}
                            style={{
                              background: `linear-gradient(135deg, ${colors.primary} 0%, #6366f1 100%)`,
                              fontFamily: 'Nunito, sans-serif',
                              fontWeight: 600,
                              height: rem(56),
                              boxShadow: '0 4px 15px 0 rgba(139, 92, 246, 0.3)',
                              transition: 'all 0.2s ease',
                            }}
                            styles={{
                              root: {
                                '&:hover': {
                                  transform: 'translateY(-1px)',
                                  boxShadow: '0 8px 25px 0 rgba(139, 92, 246, 0.4)',
                                }
                              }
                            }}
                          >
                            {isLoading ? 'Creating Your Story...' : 'Personalize Your Story'}
                          </Button>
                          
                          <ActionIcon
                            size="xl"
                            radius="md"
                            onClick={toggleWishlist}
                            style={{
                              background: colors.cardBg,
                              backdropFilter: 'blur(15px)',
                              border: `1px solid ${colors.border}`,
                              color: isWishlisted ? '#ff6b6b' : colors.textMuted,
                              height: rem(56),
                              width: rem(56),
                            }}
                          >
                            <IconHeart size={24} fill={isWishlisted ? 'currentColor' : 'none'} />
                          </ActionIcon>
                        </Group>
                      </Stack>
                    </Stack>
                  </Grid.Col>
                </Grid>
              </Container>
            )}
          </div>
        )}
      </Transition>
      
      {/* Footer */}
      <ProfessionalFooter />
    </Box>
  );
}

export default ProductDetailPage;