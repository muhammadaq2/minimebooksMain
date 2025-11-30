import React, { useState } from 'react';
import { 
  Box, 
  Text, 
  Group, 
  Stack, 
  TextInput, 
  Button, 
  rem,
  Divider,
  Alert
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconTag, IconCheck, IconX } from '@tabler/icons-react';
import { useCart } from '../../../context/CartContext';

function OrderSummary({ colors, showCoupon = true, title = "Order Summary" }) {
  const isSmallMobile = useMediaQuery('(max-width: 480px)');
  
  const {
    cartItems,
    couponCode,
    setCouponCode,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    getShippingCost,
    getDiscountAmount,
    getTotal
  } = useCart();

  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');

  const handleApplyCoupon = () => {
    if (!couponCode.trim()) {
      setCouponError('Please enter a coupon code');
      return;
    }

    const result = applyCoupon(couponCode);
    if (result.success) {
      setCouponSuccess(result.message);
      setCouponError('');
      setTimeout(() => setCouponSuccess(''), 3000);
    } else {
      setCouponError(result.message);
      setCouponSuccess('');
    }
  };

  const handleRemoveCoupon = () => {
    removeCoupon();
    setCouponError('');
    setCouponSuccess('');
  };

  const shipping = getShippingCost();
  const discount = getDiscountAmount();
  const total = getTotal();

  return (
    <Box
      style={{
        background: colors.cardBg,
        backdropFilter: 'blur(10px)',
        border: `1px solid ${colors.border}`,
        borderRadius: isSmallMobile ? rem(12) : rem(16),
        padding: isSmallMobile ? rem(16) : rem(24),
        height: 'fit-content',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}
    >
      <Stack gap={isSmallMobile ? "md" : "lg"}>
        {/* Title */}
        <Text
          size={isSmallMobile ? "lg" : "xl"}
          fw={700}
          style={{
            color: colors.text,
            fontFamily: 'Quicksand, sans-serif',
            lineHeight: 1.2
          }}
        >
          {title}
        </Text>

        {/* Book Items */}
        <Stack gap="sm">
          {cartItems.map((item) => (
            <Group key={item.id} justify="space-between" align="flex-start">
              <Box style={{ flex: 1 }}>
                <Text
                  size={isSmallMobile ? "sm" : "md"}
                  fw={600}
                  style={{
                    color: colors.text,
                    fontFamily: 'Nunito, sans-serif',
                    lineHeight: 1.3
                  }}
                >
                  Books (1)
                </Text>
                <Text
                  size="xs"
                  style={{
                    color: colors.textSecondary,
                    fontFamily: 'Nunito, sans-serif'
                  }}
                >
                  {item.title}
                </Text>
              </Box>
              <Box style={{ textAlign: 'right' }}>
                {item.originalPrice > item.currentPrice && (
                  <Text
                    size="xs"
                    style={{
                      color: colors.textMuted,
                      textDecoration: 'line-through',
                      fontFamily: 'Nunito, sans-serif'
                    }}
                  >
                    ${item.originalPrice.toFixed(2)}
                  </Text>
                )}
                <Text
                  size={isSmallMobile ? "sm" : "md"}
                  fw={600}
                  style={{
                    color: colors.text,
                    fontFamily: 'Nunito, sans-serif'
                  }}
                >
                  ${item.currentPrice.toFixed(2)}
                </Text>
              </Box>
            </Group>
          ))}
        </Stack>

        {/* Shipping Cost (if applicable) */}
        {shipping > 0 && (
          <>
            <Divider color={colors.border} />
            <Group justify="space-between">
              <Text
                size={isSmallMobile ? "sm" : "md"}
                style={{
                  color: colors.text,
                  fontFamily: 'Nunito, sans-serif'
                }}
              >
                Shipping
              </Text>
              <Text
                size={isSmallMobile ? "sm" : "md"}
                fw={500}
                style={{
                  color: colors.text,
                  fontFamily: 'Nunito, sans-serif'
                }}
              >
                ${shipping.toFixed(2)}
              </Text>
            </Group>
          </>
        )}

        {/* Applied Coupon */}
        {appliedCoupon && (
          <>
            <Divider color={colors.border} />
            <Group justify="space-between" align="center">
              <Group gap="xs">
                <IconTag size={16} color={colors.success || colors.primary} />
                <Text
                  size={isSmallMobile ? "sm" : "md"}
                  style={{
                    color: colors.text,
                    fontFamily: 'Nunito, sans-serif'
                  }}
                >
                  {appliedCoupon.code}
                </Text>
                <Button
                  variant="subtle"
                  size="xs"
                  color="red"
                  onClick={handleRemoveCoupon}
                  styles={{
                    root: {
                      padding: rem(4),
                      minWidth: 'unset',
                      height: rem(20)
                    }
                  }}
                >
                  <IconX size={12} />
                </Button>
              </Group>
              <Text
                size={isSmallMobile ? "sm" : "md"}
                fw={500}
                style={{
                  color: colors.success || colors.primary,
                  fontFamily: 'Nunito, sans-serif'
                }}
              >
                -${discount.toFixed(2)}
              </Text>
            </Group>
          </>
        )}

        {/* Coupon Code Section */}
        {showCoupon && !appliedCoupon && (
          <>
            <Divider color={colors.border} />
            <Box>
              <Text
                size={isSmallMobile ? "sm" : "md"}
                fw={600}
                mb="sm"
                style={{
                  color: colors.text,
                  fontFamily: 'Nunito, sans-serif'
                }}
              >
                Got a Coupon Code?
              </Text>
              <Group gap="xs" align="flex-end">
                <TextInput
                  placeholder="CODE"
                  value={couponCode}
                  onChange={(event) => {
                    setCouponCode(event.currentTarget.value.toUpperCase());
                    setCouponError('');
                    setCouponSuccess('');
                  }}
                  size={isSmallMobile ? "sm" : "md"}
                  radius="md"
                  style={{ flex: 1 }}
                  styles={{
                    input: {
                      background: colors.inputBg || 'rgba(255,255,255,0.05)',
                      border: `1px solid ${colors.border}`,
                      color: colors.text,
                      fontFamily: 'Nunito, sans-serif',
                      fontSize: isSmallMobile ? rem(13) : rem(14),
                      height: isSmallMobile ? rem(36) : rem(40),
                      '&::placeholder': {
                        color: colors.textMuted,
                      },
                      '&:focus': {
                        borderColor: colors.primary
                      }
                    }
                  }}
                  error={couponError}
                />
                <Button
                  onClick={handleApplyCoupon}
                  size={isSmallMobile ? "sm" : "md"}
                  radius="md"
                  variant="filled"
                  styles={{
                    root: {
                      background: `linear-gradient(135deg, ${colors.primary} 0%, #6366f1 100%)`,
                      border: 'none',
                      color: 'white',
                      fontFamily: 'Nunito, sans-serif',
                      fontSize: isSmallMobile ? rem(12) : rem(14),
                      height: isSmallMobile ? rem(36) : rem(40),
                      minWidth: isSmallMobile ? rem(60) : rem(70),
                      '&:hover': {
                        transform: 'translateY(-1px)',
                        boxShadow: `0 6px 20px ${colors.primary}40`
                      }
                    }
                  }}
                >
                  Apply
                </Button>
              </Group>
              
              {/* Success/Error Messages */}
              {couponSuccess && (
                <Alert
                  icon={<IconCheck size={16} />}
                  color="green"
                  variant="light"
                  mt="xs"
                  styles={{
                    root: {
                      background: 'rgba(34, 197, 94, 0.1)',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                      borderRadius: rem(8)
                    },
                    message: {
                      color: colors.text,
                      fontFamily: 'Nunito, sans-serif',
                      fontSize: rem(12)
                    }
                  }}
                >
                  {couponSuccess}
                </Alert>
              )}
            </Box>
          </>
        )}

        {/* Total */}
        <Divider color={colors.border} />
        <Group justify="space-between" align="center">
          <Text
            size={isSmallMobile ? "lg" : "xl"}
            fw={700}
            style={{
              color: colors.text,
              fontFamily: 'Quicksand, sans-serif'
            }}
          >
            Total
          </Text>
          <Text
            size={isSmallMobile ? "lg" : "xl"}
            fw={700}
            style={{
              color: colors.primary,
              fontFamily: 'Quicksand, sans-serif'
            }}
          >
            ${total.toFixed(2)}
          </Text>
        </Group>

        {/* Note */}
        {shipping > 0 && (
          <Text
            size="xs"
            style={{
              color: colors.textMuted,
              fontFamily: 'Nunito, sans-serif',
              textAlign: 'center',
              lineHeight: 1.4
            }}
          >
            Customs duties, or import fees may be applied upon delivery.
          </Text>
        )}
      </Stack>
    </Box>
  );
}

export default OrderSummary;
