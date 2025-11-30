import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Text, 
  Box,
  Group,
  rem,
  useMantineColorScheme 
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { 
  IconBrain,
  IconPhoto,
  IconSparkles,
  IconCpu
} from '@tabler/icons-react';

function AITransformationFlow() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [currentStep, setCurrentStep] = useState(0);

  // Your transformation examples
  const examples = [
    {
      original: "https://storage.wonderwraps.com/09e96f12-f7d1-48d3-8ba5-24b528c98e16/iyzbgYw3ox8YwgNJDRYvZ4zzffZHIA-metaVGhlby5qcGc=-.jpg",
      character: "https://storage.wonderwraps.com/6eeca8a8-3a46-4995-bb9a-d97bfdaa8dad/kYlYjXM9qyld2nhVqtkjoFMsYzkWgj-metaVGhlby5wbmc=-.png",
      name: "Theo"
    },
    {
      original: "https://storage.wonderwraps.com/f9a1516b-670b-4018-adb0-76b89e7f99ac/2ii4qGLXmYbewYkPgUDxINvarDAU3d-metaSmFtZXMuanBn-.jpg",
      character: "https://storage.wonderwraps.com/0707e8b3-ecd7-43d5-9bd7-8678e99b371a/EmQKu5WF25s0bDzekEnErUZJwJuKlJ-metaSmFtZXMxLmpwZWc=-.jpeg",
      name: "James"
    },
    {
      original: "https://storage.wonderwraps.com/c9f696fc-a817-44a9-87a1-45f96e13b030/qUl8juS5TDUP2gFBa9fYVTpU2IB6nZ-metaQ2hhcmxpZS5qcGc=-.jpg",
      character: "https://storage.wonderwraps.com/18827642-5c78-49fd-9bc8-3b740f178665/dsv9FAxZO4VNxrrZI8yK1vGoqAu14n-metaYWlfaW1hZ2UuanBlZw==-.jpeg",
      name: "Charlie"
    }
  ];

  const [activeExample, setActiveExample] = useState(0);

  // Auto-cycle through steps and examples
  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 4);
    }, 1500);

    const exampleInterval = setInterval(() => {
      setActiveExample((prev) => (prev + 1) % examples.length);
    }, 6000);

    return () => {
      clearInterval(stepInterval);
      clearInterval(exampleInterval);
    };
  }, [examples.length]);

  const currentExample = examples[activeExample];

  return (
    <Box
      style={{
        paddingTop: rem(50),
        paddingBottom: rem(50),
        position: 'relative',
      }}
    >
      <Container size="lg">
        {/* Header */}
        <Box ta="center" mb={rem(30)}>
          <Group
            justify="center"
            mb="sm"
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              backdropFilter: 'blur(12px)',
              borderRadius: rem(20),
              padding: `${rem(6)} ${rem(16)}`,
              display: 'inline-flex',
              boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
            }}
          >
            <IconBrain size={16} style={{ color: '#ffffff' }} />
            <Text 
              size="xs" 
              fw={600}
              style={{ 
                color: '#ffffff',
                fontFamily: 'Nunito, sans-serif',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
              }}
            >
              Powered by AI
            </Text>
          </Group>
        </Box>

        {/* AI Processing Flow */}
        <Box
          style={{
            background: isDark 
              ? 'rgba(255, 255, 255, 0.02)'
              : 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(20px)',
            borderRadius: rem(20),
            padding: rem(24),
            border: isDark 
              ? '1px solid rgba(255, 255, 255, 0.08)' 
              : '1px solid rgba(139, 92, 246, 0.1)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* AI Background Pattern */}
          <Box
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
                          radial-gradient(circle at 70% 30%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)`,
              borderRadius: rem(20),
            }}
          />

          <Group justify="space-between" align="center" wrap="nowrap" style={{ position: 'relative', zIndex: 2 }}>
            
            {/* Input Photo */}
            <Box style={{ flex: 1, textAlign: 'center' }}>
              <Box
                style={{
                  position: 'relative',
                  width: rem(90),
                  height: rem(90),
                  margin: '0 auto',
                  marginBottom: rem(8),
                  transform: currentStep >= 1 ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.5s ease',
                }}
              >
                <Box
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: rem(16),
                    overflow: 'hidden',
                    border: currentStep >= 1 ? '3px solid #3b82f6' : '3px solid #e5e7eb',
                    transition: 'all 0.5s ease',
                    boxShadow: currentStep >= 1 ? '0 10px 30px rgba(59, 130, 246, 0.3)' : 'none',
                  }}
                >
                  <img 
                    src={currentExample.original}
                    alt="Original"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                
                <Box
                  style={{
                    position: 'absolute',
                    bottom: rem(-6),
                    right: rem(-6),
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                    borderRadius: '50%',
                    width: rem(24),
                    height: rem(24),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: currentStep >= 1 ? 1 : 0.5,
                    transition: 'opacity 0.5s ease',
                  }}
                >
                  <IconPhoto size={12} style={{ color: '#ffffff' }} />
                </Box>
              </Box>
              
              <Text 
                size="xs" 
                fw={500}
                style={{ 
                  color: currentStep >= 1 ? '#3b82f6' : (isDark ? '#64748b' : '#94a3b8'),
                  fontFamily: 'Nunito, sans-serif',
                  transition: 'color 0.5s ease',
                }}
              >
                Photo Input
              </Text>
            </Box>

            {/* AI Brain Center */}
            <Box style={{ flex: 2, textAlign: 'center', margin: `0 ${rem(16)}` }}>
              <Box
                style={{
                  position: 'relative',
                  width: rem(120),
                  height: rem(120),
                  margin: '0 auto',
                  marginBottom: rem(8),
                  background: currentStep >= 2 
                    ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #f472b6 100%)'
                    : 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.5s ease',
                  transform: currentStep >= 2 ? 'scale(1.1) rotateY(180deg)' : 'scale(1)',
                  boxShadow: currentStep >= 2 
                    ? '0 20px 40px rgba(59, 130, 246, 0.4)' 
                    : '0 5px 15px rgba(0,0,0,0.1)',
                  animation: currentStep >= 2 ? 'aiPulse 2s ease-in-out infinite' : 'none',
                }}
              >
                <IconBrain 
                  size={40} 
                  style={{ 
                    color: '#ffffff',
                    transform: currentStep >= 2 ? 'rotateY(180deg)' : 'none',
                    transition: 'transform 0.5s ease',
                  }} 
                />
                
                {/* AI Processing Particles */}
                {currentStep >= 2 && (
                  <>
                    <Box
                      style={{
                        position: 'absolute',
                        top: '10%',
                        right: '15%',
                        color: '#ffffff',
                        animation: 'aiParticle 1.5s ease-in-out infinite',
                      }}
                    >
                      <IconCpu size={12} />
                    </Box>
                    <Box
                      style={{
                        position: 'absolute',
                        bottom: '15%',
                        left: '20%',
                        color: '#ffffff',
                        animation: 'aiParticle 1.5s ease-in-out infinite 0.5s',
                      }}
                    >
                      <IconSparkles size={10} />
                    </Box>
                    <Box
                      style={{
                        position: 'absolute',
                        top: '30%',
                        left: '10%',
                        color: '#ffffff',
                        animation: 'aiParticle 1.5s ease-in-out infinite 1s',
                      }}
                    >
                      <IconCpu size={8} />
                    </Box>
                  </>
                )}
              </Box>

              <Text 
                size="sm" 
                fw={600}
                style={{ 
                  color: currentStep >= 2 
                    ? 'transparent'
                    : (isDark ? '#64748b' : '#94a3b8'),
                  background: currentStep >= 2 
                    ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
                    : 'none',
                  WebkitBackgroundClip: currentStep >= 2 ? 'text' : 'initial',
                  WebkitTextFillColor: currentStep >= 2 ? 'transparent' : 'initial',
                  backgroundClip: currentStep >= 2 ? 'text' : 'initial',
                  fontFamily: 'Quicksand, sans-serif',
                  transition: 'all 0.5s ease',
                }}
              >
                AI Processing
              </Text>
            </Box>

            {/* Character Output */}
            <Box style={{ flex: 1, textAlign: 'center' }}>
              <Box
                style={{
                  position: 'relative',
                  width: rem(90),
                  height: rem(90),
                  margin: '0 auto',
                  marginBottom: rem(8),
                  transform: currentStep >= 3 ? 'scale(1.05) rotateY(360deg)' : 'scale(0.9)',
                  transition: 'transform 0.8s ease',
                  opacity: currentStep >= 3 ? 1 : 0.3,
                }}
              >
                <Box
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: rem(16),
                    overflow: 'hidden',
                    border: currentStep >= 3 ? '3px solid #f59e0b' : '3px solid #e5e7eb',
                    transition: 'all 0.5s ease',
                    boxShadow: currentStep >= 3 ? '0 10px 30px rgba(245, 158, 11, 0.3)' : 'none',
                  }}
                >
                  <img 
                    src={currentExample.character}
                    alt="Character"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                
                <Box
                  style={{
                    position: 'absolute',
                    bottom: rem(-6),
                    right: rem(-6),
                    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                    borderRadius: '50%',
                    width: rem(24),
                    height: rem(24),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: currentStep >= 3 ? 1 : 0.5,
                    transition: 'opacity 0.5s ease',
                  }}
                >
                  <IconSparkles size={12} style={{ color: '#ffffff' }} />
                </Box>
              </Box>
              
              <Text 
                size="xs" 
                fw={500}
                style={{ 
                  color: currentStep >= 3 ? '#f59e0b' : (isDark ? '#64748b' : '#94a3b8'),
                  fontFamily: 'Nunito, sans-serif',
                  transition: 'color 0.5s ease',
                }}
              >
                AI Character
              </Text>
            </Box>
          </Group>

          {/* Progress Bar */}
          <Box
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              height: rem(3),
              background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #f59e0b 100%)',
              borderRadius: `0 0 ${rem(20)} ${rem(20)}`,
              width: `${((currentStep + 1) / 4) * 100}%`,
              transition: 'width 0.5s ease',
            }}
          />
        </Box>

        {/* Example Name */}
        <Box ta="center" mt={rem(16)}>
          <Text
            size="sm"
            fw={600}
            style={{
              color: isDark ? '#ffffff' : '#1e293b',
              fontFamily: 'Quicksand, sans-serif',
              opacity: currentStep >= 3 ? 1 : 0.5,
              transition: 'opacity 0.5s ease',
            }}
          >
            {currentExample.name}'s AI Transformation
          </Text>
        </Box>
      </Container>

      {/* Advanced AI Animations */}
      <style jsx global>{`
        @keyframes aiPulse {
          0%, 100% { 
            box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4), 0 0 0 0 rgba(59, 130, 246, 0.7);
          }
          50% { 
            box-shadow: 0 20px 40px rgba(59, 130, 246, 0.6), 0 0 0 10px rgba(59, 130, 246, 0);
          }
        }
        
        @keyframes aiParticle {
          0%, 100% { 
            transform: translateY(0px) scale(1);
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-8px) scale(1.2);
            opacity: 1;
          }
        }
      `}</style>
    </Box>
  );
}

export default AITransformationFlow;