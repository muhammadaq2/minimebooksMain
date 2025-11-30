import React from 'react';
import { 
  Container, 
  Grid, 
  Stack, 
  Text, 
  Button, 
  Box, 
  Group,
  rem,
  Center
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import { IconShoppingBag, IconPlus } from '@tabler/icons-react';
import { useMantineColorScheme } from '@mantine/core';
import { useCart } from '../../context/CartContext';
import StepIndicator from './components/StepIndicator';
import ProductCard from './components/ProductCard';
import OrderSummary from './components/OrderSummary';
import FloatingCircularHeader from '../../components/layout/Header/FloatingCircularHeader';
import ProfessionalFooter from '../../components/layout/Footer/ProfessionalFooter';

function CartPage() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isSmallMobile = useMediaQuery('(max-width: 480px)');
  const navigate = useNavigate();
  
  const { cartItems, removeFromCart } = useCart();

  // Color scheme
  const colors = {
    primary: '#8B5CF6',
    secondary: '#A78BFA',
    accent: '#F59E0B',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    text: isDark ? '#F8FAFC' : '#1E293B',
    textSecondary: isDark ? '#CBD5E1' : '#475569',
    textMuted: isDark ? '#64748B' : '#94A3B8',
    background: isDark ? '#0F172A' : '#FFFFFF',
    cardBg: isDark ? 'rgba(30, 41, 59, 0.5)' : 'rgba(255, 255, 255, 0.7)',
    border: isDark ? 'rgba(148, 163, 184, 0.1)' : 'rgba(148, 163, 184, 0.2)',
    inputBg: isDark ? 'rgba(30, 41, 59, 0.3)' : 'rgba(248, 250, 252, 0.8)'
  };

  const handleContinue = () => {
    navigate('/delivery');
  };

  const handleAddBooks = () => {
    navigate('/shop'); // Navigate to shop page to add more books
  };

  if (cartItems.length === 0) {
    return (
      <Box
        style={{
          minHeight: '100vh',
          background: isDark 
            ? 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)'
            : 'linear-gradient(135deg, #fef3c7 0%, #fde68a 10%, #f3e8ff 30%, #e0e7ff 60%, #dbeafe 90%, #f0f9ff 100%)',
          width: '100%',
          position: 'relative',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
        }}
      >
        {/* Header */}
        <FloatingCircularHeader />
        
        <Container size="lg" py={isSmallMobile ? rem(120) : rem(140)}>
          <StepIndicator currentStep="cart" colors={colors} />
          
          <Center py={rem(60)}>
            <Stack align="center" gap="xl">
              <Box
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, #6366f1 100%)`,
                  borderRadius: '50%',
                  padding: rem(32),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <IconShoppingBag size={48} color="white" />
              </Box>
              
              <Stack align="center" gap="md">
                <Text
                  size="xl"
                  fw={700}
                  style={{
                    color: colors.text,
                    fontFamily: 'Quicksand, sans-serif',
                    textAlign: 'center'
                  }}
                >
                  Your Cart is Empty
                </Text>
                <Text
                  size="md"
                  style={{
                    color: colors.textSecondary,
                    fontFamily: 'Nunito, sans-serif',
                    textAlign: 'center',
                    maxWidth: rem(400)
                  }}
                >
                  Start by adding some personalized books to your cart from our shop
                </Text>
              </Stack>

              <Button
                size="lg"
                leftSection={<IconPlus size={20} />}
                onClick={() => navigate('/shop')}
                styles={{
                  root: {
                    background: `linear-gradient(135deg, ${colors.primary} 0%, #6366f1 100%)`,
                    border: 'none',
                    color: 'white',
                    fontFamily: 'Nunito, sans-serif',
                    fontSize: rem(16),
                    height: rem(48),
                    paddingLeft: rem(24),
                    paddingRight: rem(24),
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: `0 8px 25px ${colors.primary}40`
                    }
                  }
                }}
              >
                Browse Books
              </Button>
            </Stack>
          </Center>
        </Container>
        
        {/* Footer */}
        <ProfessionalFooter />
      </Box>
    );
  }

  return (
    <Box
      style={{
        minHeight: '100vh',
        background: isDark 
          ? 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)'
          : 'linear-gradient(135deg, #fef3c7 0%, #fde68a 10%, #f3e8ff 30%, #e0e7ff 60%, #dbeafe 90%, #f0f9ff 100%)',
        width: '100%',
        position: 'relative',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      }}
    >
      {/* Header */}
      <FloatingCircularHeader />
      
      <Container size="lg" py={isSmallMobile ? rem(120) : rem(140)}>
        <StepIndicator currentStep="cart" colors={colors} />
        
        {/* Page Header */}
        <Group justify="space-between" mb={rem(32)} align="center">
          <Text
            size={isSmallMobile ? "xl" : "2rem"}
            fw={700}
            style={{
              color: colors.text,
              fontFamily: 'Quicksand, sans-serif',
              lineHeight: 1.2
            }}
          >
            Your Cart
          </Text>
        </Group>

        <Grid gutter={isSmallMobile ? "lg" : "xl"}>
          {/* Cart Items */}
          <Grid.Col span={isMobile ? 12 : 8}>
            <Stack gap={isSmallMobile ? "md" : "lg"}>
              {/* Cart Products */}
              {cartItems.map((item) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  onRemove={removeFromCart}
                  colors={colors}
                  showActions={true}
                />
              ))}

              {/* Add Another Book Section */}
              <Box
                style={{
                  background: colors.cardBg,
                  backdropFilter: 'blur(10px)',
                  border: `2px dashed ${colors.border}`,
                  borderRadius: rem(16),
                  padding: isSmallMobile ? rem(20) : rem(24),
                  textAlign: 'center'
                }}
              >
                <Stack align="center" gap={isSmallMobile ? "sm" : "md"}>
                  <Text
                    size={isSmallMobile ? "md" : "lg"}
                    fw={600}
                    style={{
                      color: colors.text,
                      fontFamily: 'Quicksand, sans-serif'
                    }}
                  >
                    Add Another Personalised Book?
                  </Text>
                  
                  <Button
                    variant="outline"
                    size={isSmallMobile ? "sm" : "md"}
                    leftSection={<IconPlus size={16} />}
                    onClick={handleAddBooks}
                    styles={{
                      root: {
                        border: `2px solid ${colors.primary}`,
                        color: colors.primary,
                        background: 'transparent',
                        fontFamily: 'Nunito, sans-serif',
                        fontSize: isSmallMobile ? rem(13) : rem(14),
                        height: isSmallMobile ? rem(36) : rem(44),
                        paddingLeft: rem(20),
                        paddingRight: rem(20),
                        '&:hover': {
                          background: `${colors.primary}10`,
                          transform: 'translateY(-1px)',
                          boxShadow: `0 4px 15px ${colors.primary}20`
                        }
                      }
                    }}
                  >
                    Add Books
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </Grid.Col>

          {/* Order Summary Sidebar */}
          <Grid.Col span={isMobile ? 12 : 4}>
            <Stack gap="lg">
              <OrderSummary colors={colors} showCoupon={true} />
              
              {/* Continue Button */}
              <Button
                size="lg"
                fullWidth
                onClick={handleContinue}
                disabled={cartItems.length === 0}
                styles={{
                  root: {
                    background: cartItems.length > 0 
                      ? `linear-gradient(135deg, ${colors.primary} 0%, #6366f1 100%)` 
                      : colors.border,
                    border: 'none',
                    color: 'white',
                    fontFamily: 'Nunito, sans-serif',
                    fontSize: rem(16),
                    fontWeight: 600,
                    height: rem(52),
                    borderRadius: rem(12),
                    '&:hover': cartItems.length > 0 ? {
                      transform: 'translateY(-2px)',
                      boxShadow: `0 8px 25px ${colors.primary}40`
                    } : {},
                    '&:disabled': {
                      background: colors.border,
                      color: colors.textMuted
                    }
                  }
                }}
              >
                Continue
              </Button>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
      
      {/* Footer */}
      <ProfessionalFooter />
    </Box>
  );
}

export default CartPage;
