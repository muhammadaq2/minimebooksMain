import React, { useState } from 'react';
import {
  Container,
  Grid,
  Stack,
  Text,
  TextInput,
  Select,
  Button,
  Box,
  Group,
  rem,
  Radio,
  Checkbox,
  Alert
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import { useMantineColorScheme } from '@mantine/core';
import { IconTruck, IconRocket, IconInfoCircle } from '@tabler/icons-react';
import { useCart } from '../../context/CartContext';
import StepIndicator from './components/StepIndicator';
import FloatingCircularHeader from '../../components/layout/Header/FloatingCircularHeader';
import ProfessionalFooter from '../../components/layout/Footer/ProfessionalFooter';

function DeliveryPage() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isSmallMobile = useMediaQuery('(max-width: 480px)');
  const navigate = useNavigate();
  
  const { shippingInfo, updateShippingInfo, shippingCosts } = useCart();
  const [errors, setErrors] = useState({});

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

  const provinceOptions = [
    { value: 'AB', label: 'Alberta' },
    { value: 'BC', label: 'British Columbia' },
    { value: 'MB', label: 'Manitoba' },
    { value: 'NB', label: 'New Brunswick' },
    { value: 'NL', label: 'Newfoundland and Labrador' },
    { value: 'NT', label: 'Northwest Territories' },
    { value: 'NS', label: 'Nova Scotia' },
    { value: 'NU', label: 'Nunavut' },
    { value: 'ON', label: 'Ontario' },
    { value: 'PE', label: 'Prince Edward Island' },
    { value: 'QC', label: 'Quebec' },
    { value: 'SK', label: 'Saskatchewan' },
    { value: 'YT', label: 'Yukon' }
  ];

  const countryOptions = [
    { value: 'Canada', label: 'Canada' },
    { value: 'United States', label: 'United States' },
    { value: 'United Kingdom', label: 'United Kingdom' }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!shippingInfo.email || !shippingInfo.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!shippingInfo.fullName || shippingInfo.fullName.length < 2) {
      newErrors.fullName = 'Please enter your full name';
    }
    if (!shippingInfo.phone || shippingInfo.phone.length < 10) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!shippingInfo.street) {
      newErrors.street = 'Please enter your street address';
    }
    if (!shippingInfo.city) {
      newErrors.city = 'Please enter your city';
    }
    if (!shippingInfo.postalCode || shippingInfo.postalCode.length < 5) {
      newErrors.postalCode = 'Please enter a valid postal code';
    }
    if (!shippingInfo.province) {
      newErrors.province = 'Please select your province/state';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    updateShippingInfo({ [field]: value });
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const handleContinue = () => {
    if (validateForm()) {
      navigate('/checkout');
    }
  };

  const inputStyles = {
    input: {
      background: colors.inputBg,
      border: `1px solid ${colors.border}`,
      color: colors.text,
      fontFamily: 'Nunito, sans-serif',
      fontSize: isSmallMobile ? rem(14) : rem(16),
      height: isSmallMobile ? rem(44) : rem(48),
      '&::placeholder': {
        color: colors.textMuted,
      },
      '&:focus': {
        borderColor: colors.primary,
        boxShadow: `0 0 0 1px ${colors.primary}40`
      }
    },
    label: {
      color: colors.text,
      fontFamily: 'Nunito, sans-serif',
      fontWeight: 600,
      fontSize: isSmallMobile ? rem(13) : rem(14)
    },
    error: {
      fontSize: isSmallMobile ? rem(11) : rem(12)
    }
  };

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
        <StepIndicator currentStep="delivery" colors={colors} />
        
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
          Shipping Details
        </Text>

        <Grid gutter={isSmallMobile ? "lg" : "xl"}>
          {/* Shipping Form */}
          <Grid.Col span={isMobile ? 12 : 8}>
            <Box
              style={{
                background: colors.cardBg,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${colors.border}`,
                borderRadius: rem(16),
                padding: isSmallMobile ? rem(20) : rem(32)
              }}
            >
              <Stack gap={isSmallMobile ? "md" : "lg"}>
                {/* Email */}
                <TextInput
                  label="Email"
                  placeholder="your.email@example.com"
                  value={shippingInfo.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  error={errors.email}
                  required
                  styles={inputStyles}
                  description="This email will be used to keep you informed about your order status and details."
                />

                {/* Country */}
                <Select
                  label="Country"
                  placeholder="Select country"
                  data={countryOptions}
                  value={shippingInfo.country}
                  onChange={(value) => handleInputChange('country', value)}
                  styles={inputStyles}
                />

                {/* Name and Phone */}
                <Grid gutter={isSmallMobile ? "sm" : "md"}>
                  <Grid.Col span={isMobile ? 12 : 6}>
                    <TextInput
                      label="Full Name"
                      placeholder="John Doe"
                      value={shippingInfo.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      error={errors.fullName}
                      required
                      styles={inputStyles}
                    />
                  </Grid.Col>
                  <Grid.Col span={isMobile ? 12 : 6}>
                    <TextInput
                      label="Phone Number"
                      placeholder="+1 (555) 123-4567"
                      value={shippingInfo.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      error={errors.phone}
                      required
                      styles={inputStyles}
                    />
                  </Grid.Col>
                </Grid>

                {/* Address */}
                <TextInput
                  label="Street"
                  placeholder="123 Main Street"
                  value={shippingInfo.street}
                  onChange={(e) => handleInputChange('street', e.target.value)}
                  error={errors.street}
                  required
                  styles={inputStyles}
                />

                {/* City and Postal Code */}
                <Grid gutter={isSmallMobile ? "sm" : "md"}>
                  <Grid.Col span={isMobile ? 12 : 6}>
                    <TextInput
                      label="City"
                      placeholder="Toronto"
                      value={shippingInfo.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      error={errors.city}
                      required
                      styles={inputStyles}
                    />
                  </Grid.Col>
                  <Grid.Col span={isMobile ? 12 : 6}>
                    <TextInput
                      label="Postal/Zip Code"
                      placeholder="M5V 3A8"
                      value={shippingInfo.postalCode}
                      onChange={(e) => handleInputChange('postalCode', e.target.value)}
                      error={errors.postalCode}
                      required
                      styles={inputStyles}
                    />
                  </Grid.Col>
                </Grid>

                {/* Province */}
                <Select
                  label="Province/State"
                  placeholder="Select province/state"
                  data={provinceOptions}
                  value={shippingInfo.province}
                  onChange={(value) => handleInputChange('province', value)}
                  error={errors.province}
                  required
                  styles={inputStyles}
                />

                {/* Save Details Checkbox */}
                <Checkbox
                  label="Save Shipping details"
                  checked={shippingInfo.saveShippingDetails}
                  onChange={(e) => handleInputChange('saveShippingDetails', e.target.checked)}
                  styles={{
                    label: {
                      color: colors.text,
                      fontFamily: 'Nunito, sans-serif'
                    }
                  }}
                />
              </Stack>
            </Box>
          </Grid.Col>

          {/* Shipping Method Sidebar */}
          <Grid.Col span={isMobile ? 12 : 4}>
            <Stack gap="lg">
              {/* Shipping Methods */}
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
                  Shipping Method
                </Text>

                <Stack gap="sm">
                  {/* Standard Shipping */}
                  <Box
                    onClick={() => handleInputChange('shippingMethod', 'standard')}
                    style={{
                      background: shippingInfo.shippingMethod === 'standard' 
                        ? `${colors.primary}20` 
                        : 'transparent',
                      border: `1px solid ${
                        shippingInfo.shippingMethod === 'standard' 
                          ? colors.primary 
                          : colors.border
                      }`,
                      borderRadius: rem(12),
                      padding: rem(16),
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <Group justify="space-between" align="center">
                      <Group align="center" gap="sm">
                        <Radio
                          checked={shippingInfo.shippingMethod === 'standard'}
                          onChange={() => handleInputChange('shippingMethod', 'standard')}
                          color="violet"
                        />
                        <Box>
                          <Group gap="xs" align="center">
                            <IconTruck size={20} color={colors.primary} />
                            <Text
                              fw={600}
                              style={{
                                color: colors.text,
                                fontFamily: 'Nunito, sans-serif'
                              }}
                            >
                              Standard
                            </Text>
                          </Group>
                          <Text
                            size="xs"
                            style={{
                              color: colors.textSecondary,
                              fontFamily: 'Nunito, sans-serif'
                            }}
                          >
                            10-17 Business Days
                          </Text>
                        </Box>
                      </Group>
                      <Text
                        fw={600}
                        style={{
                          color: colors.text,
                          fontFamily: 'Nunito, sans-serif'
                        }}
                      >
                        ${shippingCosts.standard.toFixed(2)}
                      </Text>
                    </Group>
                  </Box>

                  {/* Express Shipping */}
                  <Box
                    onClick={() => handleInputChange('shippingMethod', 'express')}
                    style={{
                      background: shippingInfo.shippingMethod === 'express' 
                        ? `${colors.primary}20` 
                        : 'transparent',
                      border: `1px solid ${
                        shippingInfo.shippingMethod === 'express' 
                          ? colors.primary 
                          : colors.border
                      }`,
                      borderRadius: rem(12),
                      padding: rem(16),
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <Group justify="space-between" align="center">
                      <Group align="center" gap="sm">
                        <Radio
                          checked={shippingInfo.shippingMethod === 'express'}
                          onChange={() => handleInputChange('shippingMethod', 'express')}
                          color="violet"
                        />
                        <Box>
                          <Group gap="xs" align="center">
                            <IconRocket size={20} color={colors.primary} />
                            <Text
                              fw={600}
                              style={{
                                color: colors.text,
                                fontFamily: 'Nunito, sans-serif'
                              }}
                            >
                              Express
                            </Text>
                          </Group>
                          <Text
                            size="xs"
                            style={{
                              color: colors.textSecondary,
                              fontFamily: 'Nunito, sans-serif'
                            }}
                          >
                            8-10 Business Days
                          </Text>
                        </Box>
                      </Group>
                      <Text
                        fw={600}
                        style={{
                          color: colors.text,
                          fontFamily: 'Nunito, sans-serif'
                        }}
                      >
                        ${shippingCosts.express.toFixed(2)}
                      </Text>
                    </Group>
                  </Box>
                </Stack>
              </Box>

              {/* Continue Button */}
              <Button
                size="lg"
                fullWidth
                onClick={handleContinue}
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
                Continue
              </Button>

              {/* Info Alert */}
              <Alert
                icon={<IconInfoCircle size={16} />}
                color="blue"
                variant="light"
                styles={{
                  root: {
                    background: colors.cardBg,
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${colors.border}`,
                    borderRadius: rem(12)
                  },
                  message: {
                    color: colors.text,
                    fontFamily: 'Nunito, sans-serif',
                    fontSize: rem(12)
                  }
                }}
              >
                Shipping times are estimates and may vary based on your location and current processing volumes.
              </Alert>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
      
      {/* Footer */}
      <ProfessionalFooter />
    </Box>
  );
}

export default DeliveryPage;
