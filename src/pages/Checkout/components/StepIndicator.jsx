import React from 'react';
import { Box, Group, Text, rem } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

function StepIndicator({ currentStep, colors }) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isSmallMobile = useMediaQuery('(max-width: 480px)');

  const steps = [
    { key: 'cart', label: 'Cart', path: '/cart' },
    { key: 'delivery', label: 'Delivery', path: '/delivery' },
    { key: 'checkout', label: 'Checkout', path: '/checkout' }
  ];

  const getStepIndex = (step) => {
    return steps.findIndex(s => s.key === step);
  };

  const currentStepIndex = getStepIndex(currentStep);

  const getStepStatus = (stepIndex) => {
    if (stepIndex < currentStepIndex) return 'completed';
    if (stepIndex === currentStepIndex) return 'active';
    return 'inactive';
  };

  return (
    <Box
      style={{
        background: colors.cardBg,
        backdropFilter: 'blur(10px)',
        border: `1px solid ${colors.border}`,
        borderRadius: rem(16),
        padding: isSmallMobile ? rem(16) : rem(24),
        marginBottom: rem(24)
      }}
    >
      <Group 
        justify="space-between" 
        gap={isSmallMobile ? "xs" : "md"}
        style={{ position: 'relative' }}
      >
        {/* Progress Line Background */}
        <Box
          style={{
            position: 'absolute',
            top: '50%',
            left: `${(isSmallMobile ? 16 : 20)}px`, // Half of circle width
            right: `${(isSmallMobile ? 16 : 20)}px`, // Half of circle width
            height: rem(2),
            background: colors.border,
            transform: 'translateY(-50%)',
            zIndex: 0
          }}
        />
        {/* Active Progress Line */}
        <Box
          style={{
            position: 'absolute',
            top: '50%',
            left: `${(isSmallMobile ? 16 : 20)}px`, // Half of circle width
            width: currentStepIndex > 0 
              ? `calc(${(currentStepIndex / (steps.length - 1)) * 100}% - ${(isSmallMobile ? 16 : 20)}px)`
              : '0%',
            height: rem(2),
            background: colors.primary,
            transform: 'translateY(-50%)',
            zIndex: 1,
            transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />

        {steps.map((step, index) => {
          const status = getStepStatus(index);
          
          return (
            <Box
              key={step.key}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: rem(8),
                zIndex: 2,
                position: 'relative'
              }}
            >
              {/* Step Circle */}
              <Box
                style={{
                  width: isSmallMobile ? rem(32) : rem(40),
                  height: isSmallMobile ? rem(32) : rem(40),
                  borderRadius: '50%',
                  background: status === 'inactive' 
                    ? colors.cardBg 
                    : status === 'active' 
                      ? colors.primary 
                      : colors.primary,
                  border: status === 'inactive' 
                    ? `2px solid ${colors.border}` 
                    : `2px solid ${colors.primary}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: status !== 'inactive' 
                    ? `0 4px 12px ${colors.primary}40` 
                    : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <Text
                  size={isSmallMobile ? "sm" : "md"}
                  fw={600}
                  style={{
                    color: status === 'inactive' ? colors.textMuted : 'white',
                    fontFamily: 'Quicksand, sans-serif'
                  }}
                >
                  {index + 1}
                </Text>
              </Box>

              {/* Step Label */}
              <Text
                size={isSmallMobile ? "xs" : "sm"}
                fw={status === 'active' ? 600 : 500}
                style={{
                  color: status === 'active' 
                    ? colors.primary 
                    : status === 'completed' 
                      ? colors.text 
                      : colors.textMuted,
                  fontFamily: 'Nunito, sans-serif',
                  textAlign: 'center',
                  lineHeight: 1.2,
                  whiteSpace: 'nowrap'
                }}
              >
                {step.label}
              </Text>
            </Box>
          );
        })}
      </Group>
    </Box>
  );
}

export default StepIndicator;
