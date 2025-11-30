import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Text, 
  Box,
  Group,
  Stack,
  Grid,
  Paper,
  rem,
  useMantineColorScheme 
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { 
  IconBrain,
  IconPhoto,
  IconSparkles,
  IconCpu,
  IconRobot,
  IconWand,
  IconBolt,
  IconStars
} from '@tabler/icons-react';

function AINeuralProcessor() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const [processingStage, setProcessingStage] = useState(0);

  // Your transformation examples
  const examples = [
    {
      original: "/images%20kids/sec1imgr1.jpg",
      character: "/images%20kids/sec1img1.jpg",
      name: "Preview"
    },
    {
      original: "/images%20kids/sec1imgr1.jpg",
      character: "/images%20kids/sec1img1.jpg",
      name: "Theo"
    }
  ];

  const [activeExample, setActiveExample] = useState(0);

  // Neural processing animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProcessingStage((prev) => (prev + 1) % 5);
    }, 1200);

    const exampleInterval = setInterval(() => {
      setActiveExample((prev) => (prev + 1) % examples.length);
    }, 6000);

    return () => {
      clearInterval(interval);
      clearInterval(exampleInterval);
    };
  }, [examples.length]);

  const currentExample = examples[activeExample];

  // Color scheme
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

  return (
    <Box
      style={{
        paddingTop: isMobile ? rem(40) : rem(80),
        paddingBottom: isMobile ? rem(40) : rem(80),
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100vw',
      }}
    >
      {/* Background Elements */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 60%),
            radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.08) 0%, transparent 60%),
            radial-gradient(circle at 50% 10%, rgba(244, 114, 182, 0.05) 0%, transparent 70%)
          `,
          zIndex: 0,
        }}
      />

      <Container size="xl" style={{ position: 'relative', zIndex: 1 }}>
        {/* Modern Header */}
        <Box ta="center" mb={isMobile ? rem(40) : rem(60)}>
          <Group
            justify="center"
            mb="xl"
            style={{
              background: `linear-gradient(135deg, ${colors.primary} 0%, #06b6d4 50%, #f472b6 100%)`,
              backdropFilter: 'blur(16px)',
              borderRadius: rem(30),
              padding: `${rem(12)} ${rem(28)}`,
              border: `1px solid ${colors.border}`,
              display: 'inline-flex',
              boxShadow: isDark 
                ? '0 20px 40px rgba(139, 92, 246, 0.4)' 
                : '0 20px 40px rgba(139, 92, 246, 0.25)',
            }}
          >
            <IconWand size={20} style={{ color: '#ffffff' }} />
            <Text 
              size="md" 
              fw={700}
              style={{ 
                color: '#ffffff',
                fontFamily: 'Quicksand, sans-serif',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
              }}
            >
              Neural AI Engine
            </Text>
          </Group>

          <Text
            component="h2"
            size={isMobile ? "2rem" : "2.5rem"}
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
            Advanced{' '}
            <Text
              component="span"
              inherit
              style={{
                background: `linear-gradient(135deg, ${colors.primary} 0%, #06b6d4 50%, #f472b6 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              AI Processing
            </Text>
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
            Watch our intelligent neural network transform your child's photo into a magical storybook character
          </Text>
        </Box>

        {/* Main Processing Grid */}
        <Grid gutter={isMobile ? "xl" : "3xl"} align="center">
          {/* Processing Steps */}
          <Grid.Col span={12}>
            <Paper
              style={{
                background: colors.cardBg,
                backdropFilter: 'blur(24px)',
                borderRadius: rem(24),
                padding: isMobile ? rem(24) : rem(40),
                border: `1px solid ${colors.border}`,
                boxShadow: isDark
                  ? '0 25px 50px rgba(0, 0, 0, 0.3)'
                  : '0 25px 50px rgba(139, 92, 246, 0.15)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Background Pattern */}
              <Box
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `
                    radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.08) 0%, transparent 60%),
                    radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.06) 0%, transparent 60%),
                    radial-gradient(circle at 50% 50%, rgba(244, 114, 182, 0.04) 0%, transparent 70%)
                  `,
                  borderRadius: rem(24),
                }}
              />

              {/* Modern Processing Flow */}
              <Stack gap="xl" style={{ position: 'relative', zIndex: 2 }}>
                
                {/* Processing Steps Row */}
                {isMobile ? (
                  // Mobile: Vertical Stack Layout
                  <Stack align="center" gap={rem(32)}>
                    {/* Step 1: Input Photo - Mobile */}
                    <Stack align="center" gap="sm">
                      <Box
                        style={{
                          position: 'relative',
                          width: rem(80),
                          height: rem(80),
                          borderRadius: rem(16),
                          overflow: 'hidden',
                          border: processingStage >= 1 
                            ? `2px solid ${colors.primary}` 
                            : `2px solid ${colors.border}`,
                          transition: 'all 0.8s ease',
                          transform: processingStage >= 1 ? 'scale(1.05)' : 'scale(0.95)',
                          boxShadow: processingStage >= 1 
                            ? `0 15px 30px ${colors.primary}40` 
                            : `0 8px 16px ${colors.border}30`,
                        }}
                      >
                        <img 
                          src={currentExample.original}
                          alt="Input Photo"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                        <Box
                          style={{
                            position: 'absolute',
                            bottom: rem(-4),
                            right: rem(-4),
                            background: `linear-gradient(135deg, ${colors.primary} 0%, #7c3aed 100%)`,
                            borderRadius: '50%',
                            width: rem(24),
                            height: rem(24),
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            opacity: processingStage >= 1 ? 1 : 0.6,
                            transition: 'all 0.6s ease',
                          }}
                        >
                          <IconPhoto size={12} style={{ color: '#ffffff' }} />
                        </Box>
                      </Box>
                      <Stack align="center" gap={2}>
                        <Text 
                          size="sm" 
                          fw={600}
                          style={{ 
                            color: processingStage >= 1 ? colors.primary : colors.textSecondary,
                            fontFamily: 'Quicksand, sans-serif',
                            transition: 'color 0.6s ease',
                          }}
                        >
                          Upload Photo
                        </Text>
                        <Text 
                          size="xs" 
                          style={{ 
                            color: colors.textSecondary,
                            fontFamily: 'Nunito, sans-serif',
                            textAlign: 'center',
                          }}
                        >
                          High-quality input
                        </Text>
                      </Stack>
                    </Stack>

                    {/* Mobile Arrow Down */}
                    <Box
                      style={{
                        width: rem(4),
                        height: rem(30),
                        background: processingStage >= 2 
                          ? `linear-gradient(180deg, ${colors.primary}, #06b6d4)` 
                          : colors.border,
                        borderRadius: rem(2),
                        position: 'relative',
                        transition: 'all 0.8s ease',
                        overflow: 'hidden',
                      }}
                    >
                      {processingStage >= 2 && (
                        <Box
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.4), transparent)',
                            animation: 'flowIndicatorVertical 2s ease-in-out infinite',
                          }}
                        />
                      )}
                    </Box>

                    {/* Step 2: AI Processing - Mobile */}
                    <Stack align="center" gap="sm">
                      <Box
                        style={{
                          position: 'relative',
                          width: rem(100),
                          height: rem(100),
                          background: processingStage >= 2 
                            ? `linear-gradient(135deg, ${colors.primary} 0%, #06b6d4 50%, #f472b6 100%)` 
                            : `linear-gradient(135deg, #6b7280 0%, #4b5563 100%)`,
                          borderRadius: rem(20),
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.8s ease',
                          transform: `scale(${processingStage >= 2 ? 1.1 : 1}) rotate(${processingStage * 15}deg)`,
                          boxShadow: processingStage >= 2 
                            ? `0 20px 40px ${colors.primary}40` 
                            : '0 12px 24px rgba(0,0,0,0.1)',
                        }}
                      >
                        <IconBrain 
                          size={40} 
                          style={{ 
                            color: '#ffffff',
                            transform: `rotate(-${processingStage * 15}deg)`,
                            transition: 'transform 0.8s ease',
                          }} 
                        />
                        {/* Smaller Neural Particles for mobile */}
                        {processingStage >= 2 && (
                          <>
                            {[0, 1, 2].map((index) => (
                              <Box
                                key={index}
                                style={{
                                  position: 'absolute',
                                  top: '50%',
                                  left: '50%',
                                  transform: `translate(-50%, -50%) rotate(${index * 120}deg) translateY(-${rem(30)})`,
                                  color: '#ffffff',
                                  animation: `neuralOrbit 3s linear infinite ${index * 1}s`,
                                }}
                              >
                                <IconStars size={8} />
                              </Box>
                            ))}
                          </>
                        )}
                        {processingStage >= 3 && (
                          <Box
                            style={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              color: '#ffffff',
                              animation: 'centerPulse 1.5s ease-in-out infinite',
                            }}
                          >
                            <IconBolt size={16} />
                          </Box>
                        )}
                      </Box>
                      <Stack align="center" gap={2}>
                        <Text 
                          size="sm" 
                          fw={600}
                          style={{ 
                            color: processingStage >= 2 ? '#06b6d4' : colors.textSecondary,
                            fontFamily: 'Quicksand, sans-serif',
                            transition: 'color 0.6s ease',
                          }}
                        >
                          AI Processing
                        </Text>
                        <Text 
                          size="xs" 
                          style={{ 
                            color: colors.textSecondary,
                            fontFamily: 'Nunito, sans-serif',
                            textAlign: 'center',
                          }}
                        >
                          Neural analysis
                        </Text>
                      </Stack>
                    </Stack>

                    {/* Mobile Arrow Down */}
                    <Box
                      style={{
                        width: rem(4),
                        height: rem(30),
                        background: processingStage >= 4 
                          ? `linear-gradient(180deg, #06b6d4, #f472b6)` 
                          : colors.border,
                        borderRadius: rem(2),
                        position: 'relative',
                        transition: 'all 0.8s ease',
                        overflow: 'hidden',
                      }}
                    >
                      {processingStage >= 4 && (
                        <Box
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.4), transparent)',
                            animation: 'flowIndicatorVertical 2s ease-in-out infinite 0.5s',
                          }}
                        />
                      )}
                    </Box>

                    {/* Step 3: Character Output - Mobile */}
                    <Stack align="center" gap="sm">
                      <Box
                        style={{
                          position: 'relative',
                          width: rem(80),
                          height: rem(80),
                          borderRadius: rem(16),
                          overflow: 'hidden',
                          border: processingStage >= 4 
                            ? `2px solid #06b6d4` 
                            : `2px solid ${colors.border}`,
                          transition: 'all 0.8s ease',
                          transform: processingStage >= 4 ? 'scale(1.05)' : 'scale(0.95)',
                          opacity: processingStage >= 4 ? 1 : 0.4,
                          boxShadow: processingStage >= 4 
                            ? '0 15px 30px rgba(6, 182, 212, 0.4)' 
                            : `0 8px 16px ${colors.border}30`,
                        }}
                      >
                        <img 
                          src={currentExample.character}
                          alt="Generated Character"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                        <Box
                          style={{
                            position: 'absolute',
                            bottom: rem(-4),
                            right: rem(-4),
                            background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
                            borderRadius: '50%',
                            width: rem(24),
                            height: rem(24),
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            opacity: processingStage >= 4 ? 1 : 0.6,
                            transition: 'all 0.6s ease',
                          }}
                        >
                          <IconSparkles size={12} style={{ color: '#ffffff' }} />
                        </Box>
                      </Box>
                      <Stack align="center" gap={2}>
                        <Text 
                          size="sm" 
                          fw={600}
                          style={{ 
                            color: processingStage >= 4 ? '#06b6d4' : colors.textSecondary,
                            fontFamily: 'Quicksand, sans-serif',
                            transition: 'color 0.6s ease',
                          }}
                        >
                          Magic Character
                        </Text>
                        <Text 
                          size="xs" 
                          style={{ 
                            color: colors.textSecondary,
                            fontFamily: 'Nunito, sans-serif',
                            textAlign: 'center',
                          }}
                        >
                          Ready for stories
                        </Text>
                      </Stack>
                    </Stack>
                  </Stack>
                ) : (
                  // Desktop: Horizontal Layout
                  <Group justify="space-between" align="center">
                  
                  {/* Step 1: Input Photo */}
                  <Stack align="center" gap="md">
                    <Box
                      style={{
                        position: 'relative',
                        width: rem(100),
                        height: rem(100),
                        borderRadius: rem(20),
                        overflow: 'hidden',
                        border: processingStage >= 1 
                          ? `3px solid ${colors.primary}` 
                          : `3px solid ${colors.border}`,
                        transition: 'all 0.8s ease',
                        transform: processingStage >= 1 ? 'scale(1.05)' : 'scale(0.95)',
                        boxShadow: processingStage >= 1 
                          ? `0 20px 40px ${colors.primary}40` 
                          : `0 10px 20px ${colors.border}30`,
                      }}
                    >
                      <img 
                        src={currentExample.original}
                        alt="Input Photo"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                      
                      {/* Processing Indicator */}
                      <Box
                        style={{
                          position: 'absolute',
                          bottom: rem(-6),
                          right: rem(-6),
                          background: `linear-gradient(135deg, ${colors.primary} 0%, #7c3aed 100%)`,
                          borderRadius: '50%',
                          width: rem(32),
                          height: rem(32),
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: processingStage >= 1 ? 1 : 0.6,
                          transition: 'all 0.6s ease',
                          transform: processingStage >= 1 ? 'scale(1)' : 'scale(0.8)',
                        }}
                      >
                        <IconPhoto size={16} style={{ color: '#ffffff' }} />
                      </Box>
                    </Box>
                    
                    <Stack align="center" gap={4}>
                      <Text 
                        size="sm" 
                        fw={600}
                        style={{ 
                          color: processingStage >= 1 ? colors.primary : colors.textSecondary,
                          fontFamily: 'Quicksand, sans-serif',
                          transition: 'color 0.6s ease',
                        }}
                      >
                        Upload Photo
                      </Text>
                      <Text 
                        size="xs" 
                        style={{ 
                          color: colors.textSecondary,
                          fontFamily: 'Nunito, sans-serif',
                        }}
                      >
                        High-quality input
                      </Text>
                    </Stack>
                  </Stack>
                  
                  {/* Arrow/Flow Indicator */}
                  {!isMobile && (
                    <Box
                      style={{
                        width: rem(60),
                        height: rem(4),
                        background: processingStage >= 2 
                          ? `linear-gradient(90deg, ${colors.primary}, #06b6d4)` 
                          : colors.border,
                        borderRadius: rem(2),
                        position: 'relative',
                        transition: 'all 0.8s ease',
                        overflow: 'hidden',
                      }}
                    >
                      {processingStage >= 2 && (
                        <Box
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                            animation: 'flowIndicator 2s ease-in-out infinite',
                          }}
                        />
                      )}
                    </Box>
                  )}
                  
                  {/* Step 2: AI Processing */}
                  <Stack align="center" gap="md">
                    <Box
                      style={{
                        position: 'relative',
                        width: rem(120),
                        height: rem(120),
                        background: processingStage >= 2 
                          ? `linear-gradient(135deg, ${colors.primary} 0%, #06b6d4 50%, #f472b6 100%)` 
                          : `linear-gradient(135deg, #6b7280 0%, #4b5563 100%)`,
                        borderRadius: rem(24),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.8s ease',
                        transform: `scale(${processingStage >= 2 ? 1.1 : 1}) rotate(${processingStage * 15}deg)`,
                        boxShadow: processingStage >= 2 
                          ? `0 25px 50px ${colors.primary}40` 
                          : '0 15px 30px rgba(0,0,0,0.1)',
                      }}
                    >
                      <IconBrain 
                        size={50} 
                        style={{ 
                          color: '#ffffff',
                          transform: `rotate(-${processingStage * 15}deg)`,
                          transition: 'transform 0.8s ease',
                        }} 
                      />
                      
                      {/* Neural Particles */}
                      {processingStage >= 2 && (
                        <>
                          {[0, 1, 2].map((index) => (
                            <Box
                              key={index}
                              style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: `translate(-50%, -50%) rotate(${index * 120}deg) translateY(-${rem(40)})`,
                                color: '#ffffff',
                                animation: `neuralOrbit 3s linear infinite ${index * 1}s`,
                              }}
                            >
                              <IconStars size={12} />
                            </Box>
                          ))}
                        </>
                      )}
                      
                      {/* Center Spark */}
                      {processingStage >= 3 && (
                        <Box
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            color: '#ffffff',
                            animation: 'centerPulse 1.5s ease-in-out infinite',
                          }}
                        >
                          <IconBolt size={20} />
                        </Box>
                      )}
                    </Box>
                    
                    <Stack align="center" gap={4}>
                      <Text 
                        size="sm" 
                        fw={600}
                        style={{ 
                          color: processingStage >= 2 ? '#06b6d4' : colors.textSecondary,
                          fontFamily: 'Quicksand, sans-serif',
                          transition: 'color 0.6s ease',
                        }}
                      >
                        AI Processing
                      </Text>
                      <Text 
                        size="xs" 
                        style={{ 
                          color: colors.textSecondary,
                          fontFamily: 'Nunito, sans-serif',
                        }}
                      >
                        Neural analysis
                      </Text>
                    </Stack>
                  </Stack>
                  
                  {/* Arrow/Flow Indicator */}
                  {!isMobile && (
                    <Box
                      style={{
                        width: rem(60),
                        height: rem(4),
                        background: processingStage >= 4 
                          ? `linear-gradient(90deg, #06b6d4, #f472b6)` 
                          : colors.border,
                        borderRadius: rem(2),
                        position: 'relative',
                        transition: 'all 0.8s ease',
                        overflow: 'hidden',
                      }}
                    >
                      {processingStage >= 4 && (
                        <Box
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                            animation: 'flowIndicator 2s ease-in-out infinite 0.5s',
                          }}
                        />
                      )}
                    </Box>
                  )}
                  
                  {/* Step 3: Character Output */}
                  <Stack align="center" gap="md">
                    <Box
                      style={{
                        position: 'relative',
                        width: rem(100),
                        height: rem(100),
                        borderRadius: rem(20),
                        overflow: 'hidden',
                        border: processingStage >= 4 
                          ? `3px solid #06b6d4` 
                          : `3px solid ${colors.border}`,
                        transition: 'all 0.8s ease',
                        transform: processingStage >= 4 ? 'scale(1.05)' : 'scale(0.95)',
                        opacity: processingStage >= 4 ? 1 : 0.4,
                        boxShadow: processingStage >= 4 
                          ? '0 20px 40px rgba(6, 182, 212, 0.4)' 
                          : `0 10px 20px ${colors.border}30`,
                      }}
                    >
                      <img 
                        src={currentExample.character}
                        alt="Generated Character"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                      
                      {/* Magic Indicator */}
                      <Box
                        style={{
                          position: 'absolute',
                          bottom: rem(-6),
                          right: rem(-6),
                          background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
                          borderRadius: '50%',
                          width: rem(32),
                          height: rem(32),
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: processingStage >= 4 ? 1 : 0.6,
                          transition: 'all 0.6s ease',
                          transform: processingStage >= 4 ? 'scale(1)' : 'scale(0.8)',
                        }}
                      >
                        <IconSparkles size={16} style={{ color: '#ffffff' }} />
                      </Box>
                    </Box>
                    
                    <Stack align="center" gap={4}>
                      <Text 
                        size="sm" 
                        fw={600}
                        style={{ 
                          color: processingStage >= 4 ? '#06b6d4' : colors.textSecondary,
                          fontFamily: 'Quicksand, sans-serif',
                          transition: 'color 0.6s ease',
                        }}
                      >
                        Magic Character
                      </Text>
                      <Text 
                        size="xs" 
                        style={{ 
                          color: colors.textSecondary,
                          fontFamily: 'Nunito, sans-serif',
                        }}
                      >
                        Ready for stories
                      </Text>
                    </Stack>
                  </Stack>
                </Group>
                )}

                {/* Status Display */}
                <Box ta="center" mt={rem(40)}>
                  <Text
                    size={isMobile ? "md" : "lg"}
                    fw={700}
                    style={{
                      color: processingStage >= 3 
                        ? 'transparent'
                        : colors.textSecondary,
                      background: processingStage >= 3 
                        ? `linear-gradient(135deg, ${colors.primary} 0%, #06b6d4 50%, #f472b6 100%)` 
                        : 'none',
                      WebkitBackgroundClip: processingStage >= 3 ? 'text' : 'initial',
                      WebkitTextFillColor: processingStage >= 3 ? 'transparent' : 'initial',
                      backgroundClip: processingStage >= 3 ? 'text' : 'initial',
                      fontFamily: 'Quicksand, sans-serif',
                      transition: 'all 0.8s ease',
                    }}
                  >
                    Processing: {currentExample.name}
                  </Text>
                  
                  {/* Progress Indicator */}
                  <Box
                    style={{
                      width: '100%',
                      maxWidth: rem(300),
                      height: rem(6),
                      background: colors.border,
                      borderRadius: rem(3),
                      margin: `${rem(16)} auto 0`,
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                  >
                    <Box
                      style={{
                        width: `${(processingStage + 1) * 20}%`,
                        height: '100%',
                        background: `linear-gradient(90deg, ${colors.primary} 0%, #06b6d4 50%, #f472b6 100%)`,
                        borderRadius: rem(3),
                        transition: 'width 0.8s ease',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                          animation: processingStage >= 1 ? 'progressShine 2s ease-in-out infinite' : 'none',
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Stack>

            </Paper>
          </Grid.Col>
        </Grid>
      </Container>

      {/* Modern Neural Animations */}
      <style jsx global>{`
        @keyframes neuralOrbit {
          0% { 
            transform: translate(-50%, -50%) rotate(0deg) translateY(-40px) scale(0.8);
            opacity: 0.6;
          }
          50% { 
            transform: translate(-50%, -50%) rotate(180deg) translateY(-40px) scale(1.2);
            opacity: 1;
          }
          100% { 
            transform: translate(-50%, -50%) rotate(360deg) translateY(-40px) scale(0.8);
            opacity: 0.6;
          }
        }
        
        @keyframes centerPulse {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
            opacity: 0.8;
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.3) rotate(180deg);
            opacity: 1;
          }
        }
        
        @keyframes flowIndicator {
          0% { 
            left: -100%;
            opacity: 0;
          }
          50% { 
            opacity: 1;
          }
          100% { 
            left: 100%;
            opacity: 0;
          }
        }
        
        @keyframes progressShine {
          0% { 
            left: -100%;
          }
          100% { 
            left: 100%;
          }
        }
        
        @keyframes flowIndicatorVertical {
          0% { 
            top: -100%;
            opacity: 0;
          }
          50% { 
            opacity: 1;
          }
          100% { 
            top: 100%;
            opacity: 0;
          }
        }
      `}</style>
    </Box>
  );
}

export default AINeuralProcessor;