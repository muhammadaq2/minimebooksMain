import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Text, 
  Box,
  Group,
  Stack,
  SimpleGrid,
  Button,
  TextInput,
  rem,
  useMantineColorScheme,
  Paper,
  Badge,
  Select,
  Tabs,
  Center,
  ActionIcon,
  Divider,
  Image,
  Skeleton,
  Transition,
  Modal,
  ScrollArea,
  Progress,
  Tooltip,
  Notification,
  Affix,
  Card
} from '@mantine/core';
import { useMediaQuery, useDisclosure } from '@mantine/hooks';
import { 
  IconSearch,
  IconShoppingCart,
  IconStar,
  IconClock,
  IconCheck,
  IconPlus,
  IconBookmark,
  IconSparkles,
  IconFilter,
  IconHeart,
  IconTrash,
  IconEye,
  IconPhoto,
  IconEdit,
  IconDownload,
  IconShare,
  IconPrint,
  IconArrowUp,
  IconSortAscending,
  IconSortDescending,
  IconGridDots,
  IconList,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTwitter,
  IconChevronUp
} from '@tabler/icons-react';

// Import the main header and footer
import FloatingCircularHeader from '../../components/layout/Header/FloatingCircularHeader';
import ProfessionalFooter from '../../components/layout/Footer/ProfessionalFooter';

// Enhanced BookCard for customized books preview (Grid View)
function CustomBookCard({ 
  id,
  title, 
  description, 
  ageRange, 
  price, 
  originalPrice,
  coverImage, 
  childName,
  theme = "adventure",
  status = "customized", // customized, in-cart, ordered
  customizationDate,
  onAddToCart,
  onRemove,
  onEdit,
  onPreview,
  isDark
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const statusConfig = {
    customized: { 
      icon: IconPhoto, 
      color: '#8B5CF6', 
      label: 'Customized',
      bgColor: 'rgba(139, 92, 246, 0.1)'
    },
    'in-cart': { 
      icon: IconShoppingCart, 
      color: '#f59e0b', 
      label: 'In Cart',
      bgColor: 'rgba(245, 158, 11, 0.1)'
    },
    ordered: { 
      icon: IconCheck, 
      color: '#10b981', 
      label: 'Ordered',
      bgColor: 'rgba(16, 185, 129, 0.1)'
    }
  };

  const currentStatus = statusConfig[status] || statusConfig.customized;
  const StatusIcon = currentStatus.icon;

  return (
    <Paper
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
          : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(20px)',
        border: isDark 
          ? '1px solid rgba(168, 85, 247, 0.2)' 
          : '1px solid rgba(139, 92, 246, 0.15)',
        boxShadow: isHovered && !isMobile
          ? (isDark 
            ? '0 25px 50px -12px rgba(168, 85, 247, 0.25)' 
            : '0 25px 50px -12px rgba(139, 92, 246, 0.2)')
          : (isDark
            ? '0 10px 25px -3px rgba(0, 0, 0, 0.3)'
            : '0 10px 25px -3px rgba(139, 92, 246, 0.1)'),
        width: '100%',
        maxWidth: '100%',
      }}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      {/* Book Cover Section */}
      <Box style={{ position: 'relative' }}>
        <Box
          style={{
            position: 'relative',
            height: isMobile ? rem(200) : rem(240),
            background: !imageLoaded || imageError 
              ? 'linear-gradient(135deg, #8B5CF6 0%, #9333ea 100%)' 
              : '#f8f9fa',
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

          {/* Fallback content */}
          {(!imageLoaded || imageError) && (
            <IconPhoto size={32} style={{ color: '#ffffff', zIndex: 2 }} />
          )}

          {/* Status Badge */}
          <Badge
            size="sm"
            radius="lg"
            style={{
              position: 'absolute',
              top: rem(12),
              left: rem(12),
              background: currentStatus.bgColor,
              color: currentStatus.color,
              border: `1px solid ${currentStatus.color}40`,
              fontSize: rem(10),
              fontWeight: 600,
              fontFamily: 'Nunito, sans-serif',
              padding: `${rem(4)} ${rem(8)}`,
              backdropFilter: 'blur(10px)',
              zIndex: 4,
            }}
            leftSection={<StatusIcon size={12} />}
          >
            {currentStatus.label}
          </Badge>

          {/* Action Buttons Overlay */}
          <Box
            style={{
              position: 'absolute',
              top: rem(12),
              right: rem(12),
              display: 'flex',
              flexDirection: 'column',
              gap: rem(8),
              zIndex: 4,
            }}
          >
            <ActionIcon
              size="sm"
              radius="xl"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#64748b',
                backdropFilter: 'blur(10px)',
              }}
              onClick={() => onPreview?.(id)}
            >
              <IconEye size={14} />
            </ActionIcon>
            <ActionIcon
              size="sm"
              radius="xl"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#64748b',
                backdropFilter: 'blur(10px)',
              }}
              onClick={() => onEdit?.(id)}
            >
              <IconEdit size={14} />
            </ActionIcon>
            <ActionIcon
              size="sm"
              radius="xl"
              style={{
                background: 'rgba(239, 68, 68, 0.9)',
                color: '#ffffff',
                backdropFilter: 'blur(10px)',
              }}
              onClick={() => onRemove?.(id)}
            >
              <IconTrash size={14} />
            </ActionIcon>
          </Box>

          {/* AI Customization Badge */}
          <Badge
            size="xs"
            radius="lg"
            style={{
              position: 'absolute',
              bottom: rem(12),
              left: rem(12),
              background: 'rgba(20, 184, 166, 0.9)',
              color: '#ffffff',
              fontSize: rem(9),
              fontWeight: 600,
              fontFamily: 'Nunito, sans-serif',
              backdropFilter: 'blur(10px)',
              zIndex: 4,
            }}
            leftSection={<IconSparkles size={10} />}
          >
            AI Customized
          </Badge>
        </Box>
      </Box>

      {/* Content Section */}
      <Box p={isMobile ? rem(16) : rem(20)}>
        <Stack gap={isMobile ? "xs" : "sm"}>
          {/* Title */}
          <Text
            size={isMobile ? "md" : "lg"}
            fw={700}
            lineClamp={2}
            style={{
              color: isDark ? '#f8fafc' : '#1e293b',
              fontFamily: 'Quicksand, sans-serif',
              lineHeight: 1.3,
              letterSpacing: '-0.01em',
            }}
          >
            {title}
          </Text>

          {/* Child Name */}
          <Text
            size="sm"
            style={{
              color: '#8B5CF6',
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 600,
            }}
          >
            Featuring: {childName}
          </Text>

          {/* Age Range */}
          <Text
            size="xs"
            style={{
              color: isDark ? '#cbd5e1' : '#64748b',
              fontFamily: 'Nunito, sans-serif',
            }}
          >
            Age: {ageRange}
          </Text>

          {/* Price Section */}
          <Group justify="space-between" align="center" mt="xs">
            <Box>
              <Group gap="xs" align="center">
                <Text
                  size="lg"
                  fw={700}
                  style={{
                    color: '#10b981',
                    fontFamily: 'Quicksand, sans-serif',
                  }}
                >
                  ${price}
                </Text>
                {originalPrice && originalPrice > price && (
                  <Text
                    size="sm"
                    style={{
                      color: isDark ? '#94a3b8' : '#94a3b8',
                      textDecoration: 'line-through',
                      fontFamily: 'Nunito, sans-serif',
                    }}
                  >
                    ${originalPrice}
                  </Text>
                )}
              </Group>
              {customizationDate && (
                <Text
                  size="xs"
                  style={{
                    color: isDark ? '#94a3b8' : '#94a3b8',
                    fontFamily: 'Nunito, sans-serif',
                  }}
                >
                  Created: {customizationDate}
                </Text>
              )}
            </Box>
          </Group>

          {/* Add to Cart Button */}
          <Button
            size={isMobile ? "sm" : "md"}
            radius="xl"
            onClick={() => onAddToCart?.(id)}
            fullWidth
            disabled={status === 'in-cart' || status === 'ordered'}
            leftSection={status === 'in-cart' ? <IconCheck size={16} /> : <IconShoppingCart size={16} />}
            style={{
              background: status === 'in-cart' 
                ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
                : status === 'ordered'
                ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                : 'linear-gradient(135deg, #8B5CF6 0%, #9333ea 100%)',
              border: 'none',
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 600,
              fontSize: isMobile ? rem(13) : rem(14),
              boxShadow: '0 4px 12px rgba(139, 92, 246, 0.25)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              letterSpacing: '0.2px',
              minHeight: isMobile ? rem(42) : rem(48),
              opacity: (status === 'in-cart' || status === 'ordered') ? 0.8 : 1,
            }}
            styles={{
              root: {
                '&:hover': !isMobile && status === 'customized' ? {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(139, 92, 246, 0.35)',
                } : {},
                '&:active': isMobile && status === 'customized' ? {
                  transform: 'scale(0.98)',
                } : {}
              }
            }}
          >
            {status === 'customized' && "Add to Cart"}
            {status === 'in-cart' && "In Cart"}
            {status === 'ordered' && "Ordered"}
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}

// List View Component for books
function CustomBookListItem({ 
  id,
  title, 
  description, 
  ageRange, 
  price, 
  originalPrice,
  coverImage, 
  childName,
  theme = "adventure",
  status = "customized",
  customizationDate,
  onAddToCart,
  onRemove,
  onEdit,
  onPreview,
  isDark
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const statusConfig = {
    customized: { 
      icon: IconPhoto, 
      color: '#8B5CF6', 
      label: 'Customized',
      bgColor: 'rgba(139, 92, 246, 0.1)'
    },
    'in-cart': { 
      icon: IconShoppingCart, 
      color: '#f59e0b', 
      label: 'In Cart',
      bgColor: 'rgba(245, 158, 11, 0.1)'
    },
    ordered: { 
      icon: IconCheck, 
      color: '#10b981', 
      label: 'Ordered',
      bgColor: 'rgba(16, 185, 129, 0.1)'
    }
  };

  const currentStatus = statusConfig[status] || statusConfig.customized;
  const StatusIcon = currentStatus.icon;

  return (
    <Paper
      shadow="none"
      radius="xl"
      padding={0}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered && !isMobile ? 'translateY(-4px)' : 'translateY(0)',
        background: isDark 
          ? 'rgba(30, 27, 75, 0.6)'
          : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(20px)',
        border: isDark 
          ? '1px solid rgba(168, 85, 247, 0.2)' 
          : '1px solid rgba(139, 92, 246, 0.15)',
        boxShadow: isHovered && !isMobile
          ? (isDark 
            ? '0 20px 40px -12px rgba(168, 85, 247, 0.25)' 
            : '0 20px 40px -12px rgba(139, 92, 246, 0.2)')
          : (isDark
            ? '0 8px 20px -3px rgba(0, 0, 0, 0.3)'
            : '0 8px 20px -3px rgba(139, 92, 246, 0.1)'),
        width: '100%',
      }}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <Group align="flex-start" gap="md" p={isMobile ? rem(16) : rem(20)}>
        {/* Book Cover Thumbnail */}
        <Box
          style={{
            position: 'relative',
            width: isMobile ? rem(80) : rem(100),
            height: isMobile ? rem(100) : rem(120),
            flexShrink: 0,
            background: !imageLoaded || imageError 
              ? 'linear-gradient(135deg, #8B5CF6 0%, #9333ea 100%)' 
              : '#f8f9fa',
            borderRadius: rem(12),
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
          
          {/* Fallback content */}
          {(!imageLoaded || imageError) && (
            <IconPhoto size={24} style={{ color: '#ffffff', zIndex: 2 }} />
          )}
          
          {/* Status Badge */}
          <Badge
            size="xs"
            radius="md"
            style={{
              position: 'absolute',
              top: rem(6),
              left: rem(6),
              background: currentStatus.bgColor,
              color: currentStatus.color,
              border: `1px solid ${currentStatus.color}40`,
              fontSize: rem(9),
              fontWeight: 600,
              fontFamily: 'Nunito, sans-serif',
              zIndex: 4,
            }}
            leftSection={<StatusIcon size={10} />}
          >
            {currentStatus.label}
          </Badge>
          
          {/* AI Badge */}
          <Badge
            size="xs"
            radius="md"
            style={{
              position: 'absolute',
              bottom: rem(6),
              left: rem(6),
              background: 'rgba(20, 184, 166, 0.9)',
              color: '#ffffff',
              fontSize: rem(8),
              fontWeight: 600,
              fontFamily: 'Nunito, sans-serif',
              zIndex: 4,
            }}
            leftSection={<IconSparkles size={8} />}
          >
            AI
          </Badge>
        </Box>

        {/* Content Section */}
        <Box style={{ flex: 1, minWidth: 0 }}>
          <Stack gap="xs">
            {/* Title and Actions Row */}
            <Group justify="space-between" align="flex-start">
              <Box style={{ flex: 1, minWidth: 0 }}>
                <Text
                  size={isMobile ? "sm" : "md"}
                  fw={700}
                  lineClamp={2}
                  style={{
                    color: isDark ? '#f8fafc' : '#1e293b',
                    fontFamily: 'Quicksand, sans-serif',
                    lineHeight: 1.3,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {title}
                </Text>
                
                <Text
                  size="xs"
                  style={{
                    color: '#8B5CF6',
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 600,
                    marginTop: rem(4),
                  }}
                >
                  Featuring: {childName}
                </Text>
              </Box>
              
              {/* Action Buttons */}
              <Group gap="xs">
                <ActionIcon
                  size="sm"
                  radius="lg"
                  variant="light"
                  style={{
                    background: 'rgba(100, 116, 139, 0.1)',
                    color: '#64748b',
                  }}
                  onClick={() => onPreview?.(id)}
                >
                  <IconEye size={14} />
                </ActionIcon>
                <ActionIcon
                  size="sm"
                  radius="lg"
                  variant="light"
                  style={{
                    background: 'rgba(100, 116, 139, 0.1)',
                    color: '#64748b',
                  }}
                  onClick={() => onEdit?.(id)}
                >
                  <IconEdit size={14} />
                </ActionIcon>
                <ActionIcon
                  size="sm"
                  radius="lg"
                  variant="light"
                  style={{
                    background: 'rgba(239, 68, 68, 0.1)',
                    color: '#ef4444',
                  }}
                  onClick={() => onRemove?.(id)}
                >
                  <IconTrash size={14} />
                </ActionIcon>
              </Group>
            </Group>
            
            {/* Description */}
            <Text
              size="xs"
              lineClamp={2}
              style={{
                color: isDark ? '#cbd5e1' : '#64748b',
                fontFamily: 'Nunito, sans-serif',
                lineHeight: 1.4,
              }}
            >
              {description}
            </Text>
            
            {/* Meta Info Row */}
            <Group justify="space-between" align="center">
              <Group gap="md">
                <Text
                  size="xs"
                  style={{
                    color: isDark ? '#94a3b8' : '#64748b',
                    fontFamily: 'Nunito, sans-serif',
                  }}
                >
                  Age: {ageRange}
                </Text>
                
                {customizationDate && (
                  <Text
                    size="xs"
                    style={{
                      color: isDark ? '#94a3b8' : '#94a3b8',
                      fontFamily: 'Nunito, sans-serif',
                    }}
                  >
                    Created: {customizationDate}
                  </Text>
                )}
              </Group>
              
              {/* Price */}
              <Group gap="xs" align="center">
                <Text
                  size="md"
                  fw={700}
                  style={{
                    color: '#10b981',
                    fontFamily: 'Quicksand, sans-serif',
                  }}
                >
                  ${price}
                </Text>
                {originalPrice && originalPrice > price && (
                  <Text
                    size="xs"
                    style={{
                      color: isDark ? '#94a3b8' : '#94a3b8',
                      textDecoration: 'line-through',
                      fontFamily: 'Nunito, sans-serif',
                    }}
                  >
                    ${originalPrice}
                  </Text>
                )}
              </Group>
            </Group>
            
            {/* Add to Cart Button */}
            <Button
              size="sm"
              radius="lg"
              onClick={() => onAddToCart?.(id)}
              disabled={status === 'in-cart' || status === 'ordered'}
              leftSection={status === 'in-cart' ? <IconCheck size={14} /> : <IconShoppingCart size={14} />}
              style={{
                background: status === 'in-cart' 
                  ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
                  : status === 'ordered'
                  ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                  : 'linear-gradient(135deg, #8B5CF6 0%, #9333ea 100%)',
                border: 'none',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 600,
                fontSize: rem(12),
                boxShadow: '0 2px 8px rgba(139, 92, 246, 0.25)',
                transition: 'all 0.2s ease',
                opacity: (status === 'in-cart' || status === 'ordered') ? 0.8 : 1,
                alignSelf: 'flex-start',
                minWidth: rem(120),
              }}
            >
              {status === 'customized' && "Add to Cart"}
              {status === 'in-cart' && "In Cart"}
              {status === 'ordered' && "Ordered"}
            </Button>
          </Stack>
        </Box>
      </Group>
    </Paper>
  );
}

function MyBooksPage() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const [opened, { open, close }] = useDisclosure(false);
  const [shareOpened, { open: shareOpen, close: shareClose }] = useDisclosure(false);
  const [selectedBook, setSelectedBook] = useState(null);

  // Enhanced state management
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [isLoading, setIsLoading] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Color palette - matching site theme
  const colors = isDark ? {
    primary: '#a855f7',
    secondary: '#facc15',
    accent: '#14b8a6',
    background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)',
    text: '#f8fafc',
    textSecondary: '#cbd5e1',
    glassBg: 'rgba(255, 255, 255, 0.1)',
    border: 'rgba(168, 85, 247, 0.3)',
    cardBg: 'rgba(30, 27, 75, 0.6)',
  } : {
    primary: '#8B5CF6',
    secondary: '#facc15',
    accent: '#14b8a6',
    background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 10%, #f3e8ff 30%, #e0e7ff 60%, #dbeafe 90%, #f0f9ff 100%)',
    text: '#1e293b',
    textSecondary: '#475569',
    glassBg: 'rgba(255, 255, 255, 0.7)',
    border: 'rgba(139, 92, 246, 0.2)',
    cardBg: 'rgba(255, 255, 255, 0.7)',
  };

  // Scroll tracking for animations
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample customized books data
  const customizedBooksData = [
    
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
    }
  ];

  const sortOptions = [
    { value: 'recent', label: 'Recently Created' },
    { value: 'name', label: 'Child Name A-Z' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' }
  ];

  // Filter books based on tab and search
  const filteredBooks = customizedBooksData.filter(book => {
    const matchesSearch = searchQuery === '' || 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.childName.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTab = activeTab === 'all' || book.status === activeTab;
    
    return matchesSearch && matchesTab;
  });

  const getBookCountByStatus = (status) => {
    if (status === 'all') return customizedBooksData.length;
    return customizedBooksData.filter(book => book.status === status).length;
  };

  const handleAddToCart = (bookId) => {
    console.log('Adding to cart:', bookId);
    // Add to cart logic here
  };

  const handleRemoveBook = (bookId) => {
    console.log('Removing book:', bookId);
    // Remove book logic here
  };

  const handleEditBook = (bookId) => {
    console.log('Editing book:', bookId);
    // Navigate to edit page
  };

  const handlePreviewBook = (bookId) => {
    console.log('Previewing book:', bookId);
    // Show preview modal
  };

  return (
    <Box
      style={{
        minHeight: '100vh',
        background: colors.background,
        position: 'relative',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        overflow: 'hidden',
      }}
    >
      {/* Floating Decorative Elements */}
      <Box
        style={{
          position: 'absolute',
          top: '10%',
          right: '8%',
          color: isDark ? colors.secondary : colors.primary,
          animation: 'float 6s ease-in-out infinite',
          zIndex: 1,
          opacity: 0.6,
        }}
      >
        <IconSparkles size={28} />
      </Box>
      
      <Box
        style={{
          position: 'absolute',
          top: '20%',
          left: '5%',
          color: '#f472b6',
          animation: 'float 7s ease-in-out infinite 2s',
          zIndex: 1,
          opacity: 0.4,
        }}
      >
        <IconStar size={24} />
      </Box>
      
      <Box
        style={{
          position: 'absolute',
          bottom: '25%',
          right: '12%',
          color: isDark ? '#10b981' : colors.accent,
          animation: 'float 8s ease-in-out infinite 1s',
          zIndex: 1,
          opacity: 0.5,
        }}
      >
        <IconHeart size={32} />
      </Box>
      
      <Box
        style={{
          position: 'absolute',
          top: '60%',
          left: '8%',
          color: isDark ? colors.primary : '#9333ea',
          animation: 'float 5s ease-in-out infinite 3s',
          zIndex: 1,
          opacity: 0.3,
        }}
      >
        <IconSparkles size={20} />
      </Box>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(5deg); }
          66% { transform: translateY(-10px) rotate(-3deg); }
        }
        
        .book-card-enter {
          opacity: 0;
          transform: translateY(30px) scale(0.95);
        }
        
        .book-card-enter-active {
          opacity: 1;
          transform: translateY(0) scale(1);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      {/* Header */}
      <FloatingCircularHeader />

      {/* Scroll to Top Button */}
      <Affix position={{ bottom: rem(20), right: rem(20) }} zIndex={1000}>
        <Transition transition="slide-up" mounted={scrollY > 200}>
          {(transitionStyles) => (
            <ActionIcon
              size="xl"
              radius="xl"
              style={{
                ...transitionStyles,
                background: `linear-gradient(135deg, ${colors.primary} 0%, #9333ea 100%)`,
                border: 'none',
                boxShadow: '0 8px 25px rgba(139, 92, 246, 0.3)',
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <IconArrowUp size={20} style={{ color: '#ffffff' }} />
            </ActionIcon>
          )}
        </Transition>
      </Affix>

      {/* Main Content */}
      <Container size="xl" pt={rem(160)} pb={rem(60)}>
        
        {/* Page Header */}
        <Box ta="center" mb={rem(40)}>
          <Text
            component="h1"
            size={isMobile ? "2rem" : "2.8rem"}
            fw={800}
            ta="center"
            mb="lg"
            style={{
              fontFamily: 'Quicksand, sans-serif',
              color: colors.text,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            My{' '}
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
              Books
            </Text>
          </Text>

          <Text
            size={isMobile ? "md" : "lg"}
            style={{
              color: colors.textSecondary,
              fontFamily: 'Nunito, sans-serif',
              maxWidth: rem(500),
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Your AI-generated personalized storybooks ready to order
          </Text>
        </Box>

        {/* Quick Stats Cards */}
        <SimpleGrid 
          cols={{ base: 2, xs: 2, sm: 4 }} 
          spacing="md" 
          mb="xl"
        >
          <Paper
            style={{
              background: colors.cardBg,
              backdropFilter: 'blur(20px)',
              border: `1px solid ${colors.border}`,
              borderRadius: rem(16),
              padding: rem(16),
              textAlign: 'center',
            }}
          >
            <Text size="xl" fw={700} style={{ color: colors.primary }}>
              {customizedBooksData.length}
            </Text>
            <Text size="xs" style={{ color: colors.textSecondary, fontFamily: 'Nunito, sans-serif' }}>
              Total Books
            </Text>
          </Paper>
          
          <Paper
            style={{
              background: colors.cardBg,
              backdropFilter: 'blur(20px)',
              border: `1px solid ${colors.border}`,
              borderRadius: rem(16),
              padding: rem(16),
              textAlign: 'center',
            }}
          >
            <Text size="xl" fw={700} style={{ color: '#f59e0b' }}>
              {getBookCountByStatus('in-cart')}
            </Text>
            <Text size="xs" style={{ color: colors.textSecondary, fontFamily: 'Nunito, sans-serif' }}>
              In Cart
            </Text>
          </Paper>
          
          <Paper
            style={{
              background: colors.cardBg,
              backdropFilter: 'blur(20px)',
              border: `1px solid ${colors.border}`,
              borderRadius: rem(16),
              padding: rem(16),
              textAlign: 'center',
            }}
          >
            <Text size="xl" fw={700} style={{ color: '#10b981' }}>
              {getBookCountByStatus('ordered')}
            </Text>
            <Text size="xs" style={{ color: colors.textSecondary, fontFamily: 'Nunito, sans-serif' }}>
              Ordered
            </Text>
          </Paper>
          
          <Paper
            style={{
              background: colors.cardBg,
              backdropFilter: 'blur(20px)',
              border: `1px solid ${colors.border}`,
              borderRadius: rem(16),
              padding: rem(16),
              textAlign: 'center',
            }}
          >
            <Text size="xl" fw={700} style={{ color: colors.secondary }}>
              ${customizedBooksData.reduce((sum, book) => sum + book.price, 0).toFixed(0)}
            </Text>
            <Text size="xs" style={{ color: colors.textSecondary, fontFamily: 'Nunito, sans-serif' }}>
              Total Value
            </Text>
          </Paper>
        </SimpleGrid>

        {/* Advanced Search and Filter Bar */}
        <Paper
          mb="xl"
          style={{
            background: colors.cardBg,
            backdropFilter: 'blur(24px)',
            border: `1px solid ${colors.border}`,
            borderRadius: rem(24),
            padding: isMobile ? rem(20) : rem(24),
            boxShadow: isDark
              ? '0 25px 50px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)'
              : '0 25px 50px rgba(139, 92, 246, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.8)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle background pattern */}
          <Box
            style={{
              position: 'absolute',
              inset: 0,
              background: `
                radial-gradient(circle at 20% 20%, ${colors.primary}08 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, ${colors.secondary}05 0%, transparent 50%),
                linear-gradient(135deg, transparent 0%, ${colors.accent}03 50%, transparent 100%)
              `,
              pointerEvents: 'none',
            }}
          />
          
          {/* Search Header */}
          <Group mb={isMobile ? "md" : "lg"} style={{ position: 'relative', zIndex: 2 }}>
            <Box
              style={{
                padding: `${rem(6)} ${rem(12)}`,
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                borderRadius: rem(20),
                display: 'flex',
                alignItems: 'center',
                gap: rem(8),
              }}
            >
              <IconFilter size={14} style={{ color: '#ffffff' }} />
              <Text 
                size="xs" 
                fw={600} 
                style={{ 
                  color: '#ffffff', 
                  fontFamily: 'Nunito, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                Search & Filter
              </Text>
            </Box>
            {searchQuery && (
              <Badge
                size="sm"
                radius="xl"
                style={{
                  background: colors.secondary,
                  color: colors.text,
                  fontFamily: 'Nunito, sans-serif',
                }}
              >
                {filteredBooks.length} results
              </Badge>
            )}
          </Group>

          {isMobile ? (
            <Stack gap="lg" style={{ position: 'relative', zIndex: 2 }}>
              {/* Enhanced Search Input */}
              <Box style={{ position: 'relative' }}>
                <TextInput
                  placeholder="Search books by title, child name, or theme..."
                  leftSection={
                    <Box style={{ position: 'relative' }}>
                      <IconSearch 
                        size={18} 
                        style={{ 
                          color: searchQuery ? colors.primary : colors.textSecondary,
                          transition: 'all 0.3s ease'
                        }} 
                      />
                      {searchQuery && (
                        <Box
                          style={{
                            position: 'absolute',
                            top: -2,
                            right: -2,
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            background: colors.accent,
                            animation: 'pulse 2s infinite',
                          }}
                        />
                      )}
                    </Box>
                  }
                  rightSection={
                    searchQuery ? (
                      <ActionIcon
                        size="sm"
                        radius="xl"
                        variant="light"
                        onClick={() => setSearchQuery('')}
                        style={{
                          background: 'rgba(239, 68, 68, 0.1)',
                          color: '#ef4444',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <IconTrash size={14} />
                      </ActionIcon>
                    ) : null
                  }
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  size="lg"
                  radius="xl"
                  styles={{
                    input: {
                      background: isDark 
                        ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)' 
                        : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 100%)',
                      border: searchQuery 
                        ? `2px solid ${colors.primary}` 
                        : `2px solid ${colors.border}`,
                      color: colors.text,
                      fontFamily: 'Nunito, sans-serif',
                      fontSize: rem(16),
                      fontWeight: 500,
                      minHeight: rem(52),
                      paddingLeft: rem(50),
                      paddingRight: searchQuery ? rem(50) : rem(16),
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: searchQuery 
                        ? `0 8px 25px ${colors.primary}20, inset 0 1px 0 rgba(255, 255, 255, 0.1)` 
                        : `0 4px 15px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
                      '&:focus': {
                        borderColor: colors.primary,
                        boxShadow: `0 0 0 4px ${colors.primary}15, 0 8px 25px ${colors.primary}25`,
                        transform: 'translateY(-2px)',
                      },
                      '&::placeholder': {
                        color: colors.textSecondary,
                        fontWeight: 400,
                      }
                    }
                  }}
                />
              </Box>
              
              {/* Advanced Controls Row */}
              <Group gap="sm">
                <Select
                  placeholder="Sort by"
                  value={sortBy}
                  onChange={setSortBy}
                  data={sortOptions}
                  size="md"
                  radius="xl"
                  style={{ flex: 1 }}
                  leftSection={
                    <IconSortAscending 
                      size={16} 
                      style={{ color: colors.primary }} 
                    />
                  }
                  styles={{
                    input: {
                      background: isDark 
                        ? 'rgba(255, 255, 255, 0.08)' 
                        : 'rgba(255, 255, 255, 0.9)',
                      border: `2px solid ${colors.border}`,
                      color: colors.text,
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 500,
                      transition: 'all 0.2s ease',
                      '&:focus': {
                        borderColor: colors.primary,
                        boxShadow: `0 0 0 3px ${colors.primary}20`,
                      },
                    }
                  }}
                />
                
                {/* Enhanced View Mode Toggle */}
                <Paper
                  style={{
                    background: isDark 
                      ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(20, 184, 166, 0.1) 100%)'
                      : 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(255, 255, 255, 0.95) 100%)',
                    borderRadius: rem(20),
                    padding: rem(6),
                    border: `2px solid ${colors.border}`,
                    backdropFilter: 'blur(20px)',
                    boxShadow: `0 8px 25px ${colors.primary}15`,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Background glow effect */}
                  <Box
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: `radial-gradient(circle at 50% 50%, ${colors.primary}08 0%, transparent 70%)`,
                      pointerEvents: 'none',
                    }}
                  />
                  
                  <Group gap={rem(4)} style={{ position: 'relative', zIndex: 2 }}>
                    <Tooltip label="Grid View" position="top" withArrow>
                      <ActionIcon
                        size="lg"
                        radius="xl"
                        onClick={() => setViewMode('grid')}
                        style={{
                          background: viewMode === 'grid' 
                            ? `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)` 
                            : 'transparent',
                          color: viewMode === 'grid' ? '#ffffff' : colors.textSecondary,
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          transform: viewMode === 'grid' ? 'scale(1.1)' : 'scale(1)',
                          boxShadow: viewMode === 'grid' 
                            ? `0 6px 20px ${colors.primary}40, inset 0 1px 0 rgba(255, 255, 255, 0.25)` 
                            : '0 2px 8px rgba(0, 0, 0, 0.1)',
                          border: viewMode === 'grid' 
                            ? `2px solid rgba(255, 255, 255, 0.2)` 
                            : `2px solid transparent`,
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        {/* Active state glow */}
                        {viewMode === 'grid' && (
                          <Box
                            style={{
                              position: 'absolute',
                              inset: -2,
                              background: `linear-gradient(135deg, ${colors.primary}30 0%, ${colors.accent}30 100%)`,
                              borderRadius: rem(18),
                              filter: 'blur(4px)',
                              zIndex: -1,
                            }}
                          />
                        )}
                        <IconGridDots size={18} style={{ filter: viewMode === 'grid' ? 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))' : 'none' }} />
                      </ActionIcon>
                    </Tooltip>
                    
                    <Tooltip label="List View" position="top" withArrow>
                      <ActionIcon
                        size="lg"
                        radius="xl"
                        onClick={() => setViewMode('list')}
                        style={{
                          background: viewMode === 'list' 
                            ? `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)` 
                            : 'transparent',
                          color: viewMode === 'list' ? '#ffffff' : colors.textSecondary,
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          transform: viewMode === 'list' ? 'scale(1.1)' : 'scale(1)',
                          boxShadow: viewMode === 'list' 
                            ? `0 6px 20px ${colors.primary}40, inset 0 1px 0 rgba(255, 255, 255, 0.25)` 
                            : '0 2px 8px rgba(0, 0, 0, 0.1)',
                          border: viewMode === 'list' 
                            ? `2px solid rgba(255, 255, 255, 0.2)` 
                            : `2px solid transparent`,
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        {/* Active state glow */}
                        {viewMode === 'list' && (
                          <Box
                            style={{
                              position: 'absolute',
                              inset: -2,
                              background: `linear-gradient(135deg, ${colors.primary}30 0%, ${colors.accent}30 100%)`,
                              borderRadius: rem(18),
                              filter: 'blur(4px)',
                              zIndex: -1,
                            }}
                          />
                        )}
                        <IconList size={18} style={{ filter: viewMode === 'list' ? 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))' : 'none' }} />
                      </ActionIcon>
                    </Tooltip>
                  </Group>
                </Paper>
              </Group>
            </Stack>
          ) : (
            <Stack gap="lg" style={{ position: 'relative', zIndex: 2 }}>
              {/* Desktop Enhanced Search */}
              <Box style={{ position: 'relative' }}>
                <TextInput
                  placeholder="Search books by title, child name, theme, or age range..."
                  leftSection={
                    <Box style={{ position: 'relative' }}>
                      <IconSearch 
                        size={20} 
                        style={{ 
                          color: searchQuery ? colors.primary : colors.textSecondary,
                          transition: 'all 0.3s ease'
                        }} 
                      />
                      {searchQuery && (
                        <Box
                          style={{
                            position: 'absolute',
                            top: -2,
                            right: -2,
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            background: colors.accent,
                            animation: 'pulse 2s infinite',
                          }}
                        />
                      )}
                    </Box>
                  }
                  rightSection={
                    <Group gap="xs">
                      {searchQuery && (
                        <Badge
                          size="sm"
                          radius="xl"
                          style={{
                            background: `${colors.primary}15`,
                            color: colors.primary,
                            fontFamily: 'Nunito, sans-serif',
                            fontWeight: 600,
                          }}
                        >
                          {filteredBooks.length}
                        </Badge>
                      )}
                      {searchQuery && (
                        <ActionIcon
                          size="sm"
                          radius="xl"
                          variant="light"
                          onClick={() => setSearchQuery('')}
                          style={{
                            background: 'rgba(239, 68, 68, 0.1)',
                            color: '#ef4444',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          <IconTrash size={14} />
                        </ActionIcon>
                      )}
                    </Group>
                  }
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  size="xl"
                  radius="xl"
                  styles={{
                    input: {
                      background: isDark 
                        ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)' 
                        : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
                      border: searchQuery 
                        ? `3px solid ${colors.primary}` 
                        : `2px solid ${colors.border}`,
                      color: colors.text,
                      fontFamily: 'Nunito, sans-serif',
                      fontSize: rem(18),
                      fontWeight: 500,
                      minHeight: rem(58),
                      paddingLeft: rem(56),
                      paddingRight: searchQuery ? rem(120) : rem(20),
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      backdropFilter: 'blur(12px)',
                      boxShadow: searchQuery 
                        ? `0 12px 30px ${colors.primary}20, inset 0 1px 0 rgba(255, 255, 255, 0.15)` 
                        : `0 6px 20px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.15)`,
                      '&:focus': {
                        borderColor: colors.primary,
                        boxShadow: `0 0 0 4px ${colors.primary}15, 0 12px 30px ${colors.primary}25`,
                        transform: 'translateY(-3px) scale(1.01)',
                      },
                      '&::placeholder': {
                        color: colors.textSecondary,
                        fontWeight: 400,
                      }
                    }
                  }}
                />
              </Box>
              
              {/* Desktop Advanced Controls */}
              <Group justify="space-between" align="center">
                <Group gap="md">
                  <Select
                    placeholder="Sort by"
                    value={sortBy}
                    onChange={setSortBy}
                    data={sortOptions}
                    size="lg"
                    radius="xl"
                    leftSection={
                      <IconSortAscending 
                        size={18} 
                        style={{ color: colors.primary }} 
                      />
                    }
                    style={{ minWidth: rem(200) }}
                    styles={{
                      input: {
                        background: isDark 
                          ? 'rgba(255, 255, 255, 0.1)' 
                          : 'rgba(255, 255, 255, 0.9)',
                        border: `2px solid ${colors.border}`,
                        color: colors.text,
                        fontFamily: 'Nunito, sans-serif',
                        fontWeight: 500,
                        fontSize: rem(15),
                        transition: 'all 0.2s ease',
                        '&:focus': {
                          borderColor: colors.primary,
                          boxShadow: `0 0 0 3px ${colors.primary}20`,
                          transform: 'translateY(-1px)',
                        },
                      }
                    }}
                  />
                </Group>
                
                {/* Enhanced View Mode Toggle */}
                <Paper
                  style={{
                    background: isDark 
                      ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(20, 184, 166, 0.1) 100%)'
                      : 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(255, 255, 255, 0.95) 100%)',
                    borderRadius: rem(24),
                    padding: rem(8),
                    border: `2px solid ${colors.border}`,
                    backdropFilter: 'blur(20px)',
                    boxShadow: `0 10px 30px ${colors.primary}15`,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Background glow effect */}
                  <Box
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: `radial-gradient(circle at 50% 50%, ${colors.primary}10 0%, transparent 70%)`,
                      pointerEvents: 'none',
                    }}
                  />
                  
                  <Group gap={rem(6)} style={{ position: 'relative', zIndex: 2 }}>
                    <Tooltip label="Grid View" position="top" withArrow>
                      <ActionIcon
                        size="xl"
                        radius="xl"
                        onClick={() => setViewMode('grid')}
                        style={{
                          background: viewMode === 'grid' 
                            ? `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)` 
                            : 'transparent',
                          color: viewMode === 'grid' ? '#ffffff' : colors.textSecondary,
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          transform: viewMode === 'grid' ? 'scale(1.15)' : 'scale(1)',
                          boxShadow: viewMode === 'grid' 
                            ? `0 8px 25px ${colors.primary}50, inset 0 1px 0 rgba(255, 255, 255, 0.3)` 
                            : '0 3px 10px rgba(0, 0, 0, 0.1)',
                          border: viewMode === 'grid' 
                            ? `2px solid rgba(255, 255, 255, 0.25)` 
                            : `2px solid transparent`,
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        {/* Active state glow */}
                        {viewMode === 'grid' && (
                          <Box
                            style={{
                              position: 'absolute',
                              inset: -3,
                              background: `linear-gradient(135deg, ${colors.primary}40 0%, ${colors.accent}40 100%)`,
                              borderRadius: rem(22),
                              filter: 'blur(6px)',
                              zIndex: -1,
                            }}
                          />
                        )}
                        <IconGridDots size={22} style={{ filter: viewMode === 'grid' ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' : 'none' }} />
                      </ActionIcon>
                    </Tooltip>
                    
                    <Tooltip label="List View" position="top" withArrow>
                      <ActionIcon
                        size="xl"
                        radius="xl"
                        onClick={() => setViewMode('list')}
                        style={{
                          background: viewMode === 'list' 
                            ? `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)` 
                            : 'transparent',
                          color: viewMode === 'list' ? '#ffffff' : colors.textSecondary,
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          transform: viewMode === 'list' ? 'scale(1.15)' : 'scale(1)',
                          boxShadow: viewMode === 'list' 
                            ? `0 8px 25px ${colors.primary}50, inset 0 1px 0 rgba(255, 255, 255, 0.3)` 
                            : '0 3px 10px rgba(0, 0, 0, 0.1)',
                          border: viewMode === 'list' 
                            ? `2px solid rgba(255, 255, 255, 0.25)` 
                            : `2px solid transparent`,
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        {/* Active state glow */}
                        {viewMode === 'list' && (
                          <Box
                            style={{
                              position: 'absolute',
                              inset: -3,
                              background: `linear-gradient(135deg, ${colors.primary}40 0%, ${colors.accent}40 100%)`,
                              borderRadius: rem(22),
                              filter: 'blur(6px)',
                              zIndex: -1,
                            }}
                          />
                        )}
                        <IconList size={22} style={{ filter: viewMode === 'list' ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' : 'none' }} />
                      </ActionIcon>
                    </Tooltip>
                  </Group>
                </Paper>
              </Group>
            </Stack>
          )}
          
        </Paper>

        {/* Enhanced Tabs for Book Status */}
        <Paper
          mb="xl"
          style={{
            background: colors.cardBg,
            backdropFilter: 'blur(24px)',
            border: `2px solid ${colors.border}`,
            borderRadius: rem(28),
            padding: isMobile ? rem(12) : rem(16),
            boxShadow: isDark
              ? '0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              : '0 20px 40px rgba(139, 92, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Header Section */}
          <Group mb={isMobile ? "sm" : "md"} justify="space-between" align="center">
            <Group gap="xs">
              <Box
                style={{
                  width: rem(32),
                  height: rem(32),
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 4px 12px ${colors.primary}30`,
                }}
              >
                <IconBookmark size={16} style={{ color: '#ffffff' }} />
              </Box>
              <Text
                size={isMobile ? "sm" : "md"}
                fw={700}
                style={{
                  color: colors.text,
                  fontFamily: 'Quicksand, sans-serif',
                  letterSpacing: '-0.01em',
                }}
              >
                Book Categories
              </Text>
            </Group>
            
            {/* Status Overview */}
            <Group gap="xs" style={{ display: isMobile ? 'none' : 'flex' }}>
              <Badge
                size="xs"
                radius="xl"
                style={{
                  background: `${colors.primary}15`,
                  color: colors.primary,
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 600,
                }}
              >
                {filteredBooks.length} showing
              </Badge>
              <Badge
                size="xs"
                radius="xl"
                style={{
                  background: `${colors.accent}15`,
                  color: colors.accent,
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 600,
                }}
              >
                {customizedBooksData.length} total
              </Badge>
            </Group>
          </Group>

          {/* Enhanced Tab System */}
          <Tabs 
            value={activeTab} 
            onChange={setActiveTab}
            styles={{
              root: {
                background: 'transparent',
              },
              list: {
                gap: isMobile ? rem(6) : rem(8),
                flexWrap: isMobile ? 'wrap' : 'nowrap',
                justifyContent: isMobile ? 'space-between' : 'flex-start',
              },
              tab: {
                background: 'transparent',
                border: `2px solid transparent`,
                color: colors.textSecondary,
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 600,
                padding: isMobile ? `${rem(12)} ${rem(16)}` : `${rem(16)} ${rem(24)}`,
                borderRadius: rem(20),
                fontSize: isMobile ? rem(13) : rem(15),
                minWidth: isMobile ? 'auto' : rem(140),
                flex: isMobile ? 1 : 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                maxWidth: isMobile ? 'calc(50% - 3px)' : 'none',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  background: 'transparent',
                  borderRadius: rem(18),
                  transition: 'all 0.3s ease',
                  zIndex: -1,
                },
                '&[data-active]': {
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                  color: '#ffffff',
                  border: `2px solid ${colors.primary}40`,
                  boxShadow: `0 8px 25px ${colors.primary}35, inset 0 1px 0 rgba(255, 255, 255, 0.2)`,
                  transform: isMobile ? 'scale(1)' : 'translateY(-2px) scale(1.02)',
                  '&::before': {
                    background: `radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.2) 0%, transparent 70%)`,
                  },
                },
                '&:hover:not([data-active])': {
                  background: `${colors.primary}08`,
                  color: colors.primary,
                  border: `2px solid ${colors.primary}20`,
                  transform: isMobile ? 'none' : 'translateY(-1px)',
                  boxShadow: `0 4px 15px ${colors.primary}20`,
                }
              }
            }}
          >
            <Tabs.List>
              {/* All Tab */}
              <Tabs.Tab value="all">
                <Group gap="xs" justify="center">
                  <Box
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: rem(20),
                      height: rem(20),
                      borderRadius: '50%',
                      background: activeTab === 'all' 
                        ? 'rgba(255, 255, 255, 0.2)' 
                        : `${colors.primary}20`,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <IconSparkles 
                      size={12} 
                      style={{ 
                        color: activeTab === 'all' ? '#ffffff' : colors.primary 
                      }} 
                    />
                  </Box>
                  <Text size={isMobile ? "xs" : "sm"} fw={600}>
                    All
                  </Text>
                  <Badge
                    size="xs"
                    radius="xl"
                    style={{
                      background: activeTab === 'all' 
                        ? 'rgba(255, 255, 255, 0.25)' 
                        : `${colors.primary}15`,
                      color: activeTab === 'all' ? '#ffffff' : colors.primary,
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 700,
                      fontSize: rem(10),
                      minWidth: rem(20),
                      height: rem(18),
                    }}
                  >
                    {getBookCountByStatus('all')}
                  </Badge>
                </Group>
              </Tabs.Tab>

              {/* Ready Tab */}
              <Tabs.Tab value="customized">
                <Group gap="xs" justify="center">
                  <Box
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: rem(20),
                      height: rem(20),
                      borderRadius: '50%',
                      background: activeTab === 'customized' 
                        ? 'rgba(255, 255, 255, 0.2)' 
                        : 'rgba(139, 92, 246, 0.15)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <IconCheck 
                      size={12} 
                      style={{ 
                        color: activeTab === 'customized' ? '#ffffff' : '#8B5CF6' 
                      }} 
                    />
                  </Box>
                  <Text size={isMobile ? "xs" : "sm"} fw={600}>
                    Ready
                  </Text>
                  <Badge
                    size="xs"
                    radius="xl"
                    style={{
                      background: activeTab === 'customized' 
                        ? 'rgba(255, 255, 255, 0.25)' 
                        : 'rgba(139, 92, 246, 0.15)',
                      color: activeTab === 'customized' ? '#ffffff' : '#8B5CF6',
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 700,
                      fontSize: rem(10),
                      minWidth: rem(20),
                      height: rem(18),
                    }}
                  >
                    {getBookCountByStatus('customized')}
                  </Badge>
                </Group>
              </Tabs.Tab>

              {/* In Cart Tab */}
              <Tabs.Tab value="in-cart">
                <Group gap="xs" justify="center">
                  <Box
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: rem(20),
                      height: rem(20),
                      borderRadius: '50%',
                      background: activeTab === 'in-cart' 
                        ? 'rgba(255, 255, 255, 0.2)' 
                        : 'rgba(245, 158, 11, 0.15)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <IconShoppingCart 
                      size={12} 
                      style={{ 
                        color: activeTab === 'in-cart' ? '#ffffff' : '#f59e0b' 
                      }} 
                    />
                  </Box>
                  <Text size={isMobile ? "xs" : "sm"} fw={600}>
                    In Cart
                  </Text>
                  <Badge
                    size="xs"
                    radius="xl"
                    style={{
                      background: activeTab === 'in-cart' 
                        ? 'rgba(255, 255, 255, 0.25)' 
                        : 'rgba(245, 158, 11, 0.15)',
                      color: activeTab === 'in-cart' ? '#ffffff' : '#f59e0b',
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 700,
                      fontSize: rem(10),
                      minWidth: rem(20),
                      height: rem(18),
                    }}
                  >
                    {getBookCountByStatus('in-cart')}
                  </Badge>
                </Group>
              </Tabs.Tab>

              {/* Ordered Tab */}
              <Tabs.Tab value="ordered">
                <Group gap="xs" justify="center">
                  <Box
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: rem(20),
                      height: rem(20),
                      borderRadius: '50%',
                      background: activeTab === 'ordered' 
                        ? 'rgba(255, 255, 255, 0.2)' 
                        : 'rgba(16, 185, 129, 0.15)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <IconStar 
                      size={12} 
                      style={{ 
                        color: activeTab === 'ordered' ? '#ffffff' : '#10b981' 
                      }} 
                    />
                  </Box>
                  <Text size={isMobile ? "xs" : "sm"} fw={600}>
                    Ordered
                  </Text>
                  <Badge
                    size="xs"
                    radius="xl"
                    style={{
                      background: activeTab === 'ordered' 
                        ? 'rgba(255, 255, 255, 0.25)' 
                        : 'rgba(16, 185, 129, 0.15)',
                      color: activeTab === 'ordered' ? '#ffffff' : '#10b981',
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 700,
                      fontSize: rem(10),
                      minWidth: rem(20),
                      height: rem(18),
                    }}
                  >
                    {getBookCountByStatus('ordered')}
                  </Badge>
                </Group>
              </Tabs.Tab>
            </Tabs.List>
          </Tabs>

          {/* Tab Description */}
          <Box mt="sm">
            <Text
              size="xs"
              style={{
                color: colors.textSecondary,
                fontFamily: 'Nunito, sans-serif',
                textAlign: 'center',
                fontStyle: 'italic',
                opacity: 0.8,
              }}
            >
              {activeTab === 'all' && 'Showing all your personalized books'}
              {activeTab === 'customized' && 'Books ready to add to cart'}
              {activeTab === 'in-cart' && 'Books waiting to be ordered'}
              {activeTab === 'ordered' && 'Successfully ordered books'}
            </Text>
          </Box>

          {/* Subtle animated background */}
          <Box
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '30%',
              height: '100%',
              background: `linear-gradient(90deg, transparent 0%, ${colors.primary}03 100%)`,
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />
        </Paper>

        {/* Books Display - Grid or List View */}
        {filteredBooks.length > 0 ? (
          viewMode === 'grid' ? (
            <SimpleGrid
              cols={{ base: 1, xs: 2, sm: 2, md: 3, lg: 4 }}
              spacing={{ base: rem(16), xs: rem(18), sm: rem(20), md: rem(24) }}
              verticalSpacing={{ base: rem(20), xs: rem(24), sm: rem(28), md: rem(32) }}
            >
              {filteredBooks.map((book) => (
                <CustomBookCard
                  key={book.id}
                  {...book}
                  onAddToCart={handleAddToCart}
                  onRemove={handleRemoveBook}
                  onEdit={handleEditBook}
                  onPreview={handlePreviewBook}
                  isDark={isDark}
                />
              ))}
            </SimpleGrid>
          ) : (
            <Stack gap={rem(16)}>
              {filteredBooks.map((book) => (
                <CustomBookListItem
                  key={book.id}
                  {...book}
                  onAddToCart={handleAddToCart}
                  onRemove={handleRemoveBook}
                  onEdit={handleEditBook}
                  onPreview={handlePreviewBook}
                  isDark={isDark}
                />
              ))}
            </Stack>
          )
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
            <IconPhoto 
              size={48} 
              style={{ 
                color: colors.primary, 
                marginBottom: rem(16), 
                opacity: 0.7 
              }} 
            />
            <Text size="xl" fw={600} mb="md" style={{ color: colors.text }}>
              {searchQuery ? 'No books found' : 'No customized books yet'}
            </Text>
            <Text style={{ color: colors.textSecondary, marginBottom: rem(20) }}>
              {searchQuery 
                ? 'Try adjusting your search terms' 
                : 'Upload a photo and create your first personalized book'
              }
            </Text>
            <Button
              variant="gradient"
              gradient={{ from: colors.primary, to: '#9333ea' }}
              size="lg"
              radius="xl"
              leftSection={<IconPlus size={18} />}
            >
              Create Your First Book
            </Button>
          </Paper>
        )}

        {/* Cart Summary */}
        {filteredBooks.filter(book => book.status === 'in-cart').length > 0 && (
          <Paper
            mt="xl"
            style={{
              background: colors.cardBg,
              backdropFilter: 'blur(20px)',
              border: `1px solid ${colors.border}`,
              borderRadius: rem(20),
              padding: isMobile ? rem(20) : rem(24),
            }}
          >
            <Group justify="space-between" align="center">
              <Box>
                <Text fw={600} style={{ color: colors.text, fontFamily: 'Quicksand, sans-serif' }}>
                  Items in Cart
                </Text>
                <Text size="sm" style={{ color: colors.textSecondary }}>
                  {filteredBooks.filter(book => book.status === 'in-cart').length} books ready to order
                </Text>
              </Box>
              <Button
                variant="gradient"
                gradient={{ from: '#10b981', to: '#059669' }}
                size="lg"
                radius="xl"
                leftSection={<IconShoppingCart size={18} />}
              >
                View Cart & Checkout
              </Button>
            </Group>
          </Paper>
        )}
      </Container>

      {/* Footer */}
      <ProfessionalFooter />
    </Box>
  );
}

export default MyBooksPage;