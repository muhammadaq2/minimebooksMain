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
  Divider
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import { useMantineColorScheme } from '@mantine/core';
import { 
  IconCreditCard, 
  IconUser, 
  IconTruck, 
  IconRocket,
  IconMapPin 
} from '@tabler/icons-react';
import { useCart } from '../../context/CartContext';
import StepIndicator from './components/StepIndicator';
import ProductCard from './components/ProductCard';
import OrderSummary from './components/OrderSummary';
import FloatingCircularHeader from '../../components/layout/Header/FloatingCircularHeader';
import ProfessionalFooter from '../../components/layout/Footer/ProfessionalFooter';

function CheckoutPage() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isSmallMobile = useMediaQuery('(max-width: 480px)');
  const navigate = useNavigate();
  
  const { cartItems, shippingInfo, getTotal } = useCart();

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

  // Mock Stripe payment integration
  const handlePayment = () => {
    // In real implementation, this would redirect to Stripe
    const stripeUrl = `https://checkout.stripe.com/pay?amount=${Math.round(getTotal() * 100)}&currency=cad`;
    
    // For demo purposes, we'll show an alert
    alert(`Redirecting to Stripe payment page for $${getTotal().toFixed(2)} CAD`);
    
    // In production, you would:
    // window.location.href = stripeUrl;
    // or use Stripe's JavaScript SDK to create a checkout session
  };

  const handlePayPal = () => {
    // Mock PayPal integration
    alert(`Redirecting to PayPal for $${getTotal().toFixed(2)} CAD`);
  };

  // If no shipping info, redirect to delivery page
  if (!shippingInfo.email || !shippingInfo.fullName) {
    navigate('/delivery');
    return null;
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
        <StepIndicator currentStep="checkout" colors={colors} />
        
        {/* Page Header */}
        <Text
          size={isSmallMobile ? "xl" : "2rem"}
          fw={700}
          mb={rem(32)}
          style={{
            color: colors.text,
            fontFamily: 'Quicksand, sans-serif',
            lineHeight: 1.2
          }}
        >
          Checkout
        </Text>

        <Grid gutter={isSmallMobile ? "lg" : "xl"}>
          {/* Order Review */}
          <Grid.Col span={isMobile ? 12 : 8}>
            <Stack gap={isSmallMobile ? "md" : "lg"}>
              {/* Order Items */}
              <Box
                style={{
                  background: colors.cardBg,
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${colors.border}`,
                  borderRadius: rem(16),
                  padding: isSmallMobile ? rem(16) : rem(24)
                }}
              >
                <Text
                  size={isSmallMobile ? "lg" : "xl"}
                  fw={700}
                  mb="md"
                  style={{
                    color: colors.text,
                    fontFamily: 'Quicksand, sans-serif'
                  }}
                >
                  Order Review
                </Text>

                <Stack gap="sm">
                  {cartItems.map((item) => (
                    <ProductCard
                      key={item.id}
                      item={item}
                      colors={colors}
                      showActions={false}
                    />
                  ))}
                </Stack>
              </Box>

              {/* Shipping Information */}
              <Box
                style={{
                  background: colors.cardBg,
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${colors.border}`,
                  borderRadius: rem(16),
                  padding: isSmallMobile ? rem(16) : rem(24)
                }}
              >
                <Group mb="md" gap="sm">
                  <IconMapPin size={20} color={colors.primary} />
                  <Text
                    size={isSmallMobile ? "lg" : "xl"}
                    fw={700}
                    style={{
                      color: colors.text,
                      fontFamily: 'Quicksand, sans-serif'
                    }}
                  >
                    Shipping Information
                  </Text>
                </Group>

                <Stack gap="xs">
                  {/* Contact Info */}
                  <Group gap="sm" align="center">
                    <IconUser size={16} color={colors.primary} />
                    <Text
                      size={isSmallMobile ? "sm" : "md"}
                      fw={600}
                      style={{
                        color: colors.text,
                        fontFamily: 'Nunito, sans-serif'
                      }}
                    >
                      {shippingInfo.fullName}
                    </Text>
                  </Group>

                  <Text
                    size={isSmallMobile ? "xs" : "sm"}
                    style={{
                      color: colors.textSecondary,
                      fontFamily: 'Nunito, sans-serif',
                      marginLeft: rem(24)
                    }}
                  >
                    {shippingInfo.phone}
                  </Text>

                  <Text
                    size={isSmallMobile ? "xs" : "sm"}
                    style={{
                      color: colors.textSecondary,
                      fontFamily: 'Nunito, sans-serif',
                      marginLeft: rem(24)
                    }}
                  >
                    {shippingInfo.street}
                  </Text>

                  <Text
                    size={isSmallMobile ? "xs" : "sm"}
                    style={{
                      color: colors.textSecondary,
                      fontFamily: 'Nunito, sans-serif',
                      marginLeft: rem(24)
                    }}
                  >
                    {shippingInfo.city}, {shippingInfo.province} {shippingInfo.postalCode}
                  </Text>

                  <Text
                    size={isSmallMobile ? "xs" : "sm"}
                    style={{
                      color: colors.textSecondary,
                      fontFamily: 'Nunito, sans-serif',
                      marginLeft: rem(24)
                    }}
                  >
                    {shippingInfo.country}
                  </Text>

                  <Divider my="sm" color={colors.border} />

                  {/* Shipping Method */}
                  <Group gap="sm" align="center">
                    {shippingInfo.shippingMethod === 'express' ? (
                      <IconRocket size={16} color={colors.primary} />
                    ) : (
                      <IconTruck size={16} color={colors.primary} />
                    )}
                    <Text
                      size={isSmallMobile ? "sm" : "md"}
                      fw={600}
                      style={{
                        color: colors.text,
                        fontFamily: 'Nunito, sans-serif'
                      }}
                    >
                      {shippingInfo.shippingMethod === 'express' ? 'Express Shipping' : 'Standard Shipping'}
                    </Text>
                  </Group>

                  <Text
                    size={isSmallMobile ? "xs" : "sm"}
                    style={{
                      color: colors.textSecondary,
                      fontFamily: 'Nunito, sans-serif',
                      marginLeft: rem(24)
                    }}
                  >
                    {shippingInfo.shippingMethod === 'express' 
                      ? '8-10 Business Days' 
                      : '10-17 Business Days'
                    }
                  </Text>
                </Stack>
              </Box>
            </Stack>
          </Grid.Col>

          {/* Payment Sidebar */}
          <Grid.Col span={isMobile ? 12 : 4}>
            <Stack gap="lg">
              {/* Order Summary */}
              <OrderSummary 
                colors={colors} 
                showCoupon={true} 
                title="Order Summary" 
              />

              {/* Payment Methods */}
              <Box
                style={{
                  background: colors.cardBg,
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${colors.border}`,
                  borderRadius: rem(16),
                  padding: isSmallMobile ? rem(16) : rem(24)
                }}
              >
                <Text
                  size={isSmallMobile ? "lg" : "xl"}
                  fw={700}
                  mb="md"
                  style={{
                    color: colors.text,
                    fontFamily: 'Quicksand, sans-serif'
                  }}
                >
                  Payment
                </Text>

                <Stack gap="sm">
                  {/* PayPal Button */}
                  <Button
                    size="lg"
                    fullWidth
                    onClick={handlePayPal}
                    styles={{
                      root: {
                        background: '#FFC439',
                        color: '#003087',
                        border: 'none',
                        fontFamily: 'Nunito, sans-serif',
                        fontSize: rem(16),
                        fontWeight: 700,
                        height: rem(52),
                        borderRadius: rem(12),
                        '&:hover': {
                          background: '#FFB800',
                          transform: 'translateY(-1px)',
                          boxShadow: '0 4px 15px rgba(255, 196, 57, 0.4)'
                        }
                      }
                    }}
                  >
                    PayPal
                  </Button>

                  {/* Stripe Payment Button */}
                  <Button
                    size="lg"
                    fullWidth
                    leftSection={<IconCreditCard size={20} />}
                    onClick={handlePayment}
                    styles={{
                      root: {
                        background: `linear-gradient(135deg, ${colors.primary} 0%, #6366f1 100%)`,
                        border: 'none',
                        color: 'white',
                        fontFamily: 'Nunito, sans-serif',
                        fontSize: rem(16),
                        fontWeight: 600,
                        height: rem(52),
                        borderRadius: rem(12),
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: `0 8px 25px ${colors.primary}40`
                        }
                      }
                    }}
                  >
                    Pay ${getTotal().toFixed(2)}
                  </Button>
                </Stack>

                {/* Security Notice */}
                <Text
                  size="xs"
                  ta="center"
                  mt="md"
                  style={{
                    color: colors.textMuted,
                    fontFamily: 'Nunito, sans-serif',
                    lineHeight: 1.4
                  }}
                >
                  🔒 Secure payment powered by Stripe. Your payment information is encrypted and secure.
                </Text>
              </Box>

              {/* Support Info */}
              <Box
                style={{
                  background: colors.cardBg,
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${colors.border}`,
                  borderRadius: rem(12),
                  padding: rem(16),
                  textAlign: 'center'
                }}
              >
                <Text
                  size="xs"
                  style={{
                    color: colors.textMuted,
                    fontFamily: 'Nunito, sans-serif',
                    lineHeight: 1.4
                  }}
                >
                  Need help? Contact our support team at{' '}
                  <Text 
                    component="span" 
                    style={{ color: colors.primary, fontWeight: 600 }}
                  >
                    support@wonderwraps.com
                  </Text>
                </Text>
              </Box>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
      
      {/* Footer */}
      <ProfessionalFooter />
    </Box>
  );
}

export default CheckoutPage;
