import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Text, 
  Box,
  Group,
  Stack,
  rem,
  useMantineColorScheme 
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { 
  IconSparkles, 
  IconCamera,
  IconWand
} from '@tabler/icons-react';

function SimpleTransformationDemo() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [activeDemo, setActiveDemo] = useState(0);

  // Your actual character transformation examples
  const transformationExamples = [
    {
      id: 1,
      childName: "Theo",
      originalPhoto: "https://storage.wonderwraps.com/09e96f12-f7d1-48d3-8ba5-24b528c98e16/iyzbgYw3ox8YwgNJDRYvZ4zzffZHIA-metaVGhlby5qcGc=-.jpg",
      characterResult: "https://storage.wonderwraps.com/6eeca8a8-3a46-4995-bb9a-d97bfdaa8dad/kYlYjXM9qyld2nhVqtkjoFMsYzkWgj-metaVGhlby5wbmc=-.png"
    },
    {
      id: 2,
      childName: "James",
      originalPhoto: "https://storage.wonderwraps.com/f9a1516b-670b-4018-adb0-76b89e7f99ac/2ii4qGLXmYbewYkPgUDxINvarDAU3d-metaSmFtZXMuanBn-.jpg",
      characterResult: "https://storage.wonderwraps.com/0707e8b3-ecd7-43d5-9bd7-8678e99b371a/EmQKu5WF25s0bDzekEnErUZJwJuKlJ-metaSmFtZXMxLmpwZWc=-.jpeg"
    },
    {
      id: 3,
      childName: "Charlie",
      originalPhoto: "https://storage.wonderwraps.com/c9f696fc-a817-44a9-87a1-45f96e13b030/qUl8juS5TDUP2gFBa9fYVTpU2IB6nZ-metaQ2hhcmxpZS5qcGc=-.jpg",
      characterResult: "https://storage.wonderwraps.com/18827642-5c78-49fd-9bc8-3b740f178665/dsv9FAxZO4VNxrrZI8yK1vGoqAu14n-metaYWlfaW1hZ2UuanBlZw==-.jpeg"
    },
    {
      id: 4,
      childName: "Preview",
      originalPhoto: "https://storage.wonderwraps.com/c94b3c35-fb0e-448f-85f1-3968004417b4/sRLuayulk8mSEEOpfXQGKgAKaAumsC-metaSTVyUzlmMURxZWxwQkM3eUpHdEhnNWV3bXVScW1uM2E0U0FhRGhpRS1wcmV2aWV3LmpwZw==-.jpg",
      characterResult: "https://storage.wonderwraps.com/9c1c5eae-1770-42b9-96ec-0072b0d836be/LYTRfP8C5j8nZ5Wshz4norg4IfQKGH-metaYWlfaW1hZ2UgKDEpLmpwZWc=-.jpeg"
    }
  ];

  // Auto-cycle through examples
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % transformationExamples.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [transformationExamples.length]);

  const currentExample = transformationExamples[activeDemo];

  return (
    <Box
      style={{
        paddingTop: isMobile ? rem(40) : rem(60),
        paddingBottom: isMobile ? rem(40) : rem(60),
        position: 'relative',
      }}
    >
      <Container size="lg" px={isMobile ? rem(16) : rem(0)}>
        {/* Compact Header */}
        <Box ta="center" mb={isMobile ? rem(32) : rem(40)}>
          <Group
            justify="center"
            mb="md"
            style={{
              background: isDark 
                ? 'rgba(139, 92, 246, 0.1)' 
                : 'rgba(139, 92, 246, 0.1)',
              backdropFilter: 'blur(12px)',
              borderRadius: rem(20),
              padding: `${rem(6)} ${rem(16)}`,
              border: `1px solid ${isDark ? 'rgba(139, 92, 246, 0.2)' : 'rgba(139, 92, 246, 0.2)'}`,
              display: 'inline-flex',
            }}
          >
            <IconWand size={16} style={{ color: isDark ? '#c4b5fd' : '#8B5CF6' }} />
            <Text 
              size="xs" 
              fw={600}
              style={{ 
                color: isDark ? '#c4b5fd' : '#8B5CF6',
                fontFamily: 'Nunito, sans-serif',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
              }}
            >
              AI Magic
            </Text>
          </Group>

          <Text
            size={isMobile ? "lg" : "xl"}
            fw={700}
            ta="center"
            mb="sm"
            style={{
              fontFamily: 'Quicksand, sans-serif',
              color: isDark ? '#ffffff' : '#1e293b',
              letterSpacing: '-0.01em',
            }}
          >
            From Photo to Character in Seconds
          </Text>
        </Box>

        {/* Compact Transformation Flow */}
        <Box
          style={{
            background: isDark 
              ? 'rgba(255, 255, 255, 0.02)'
              : 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(20px)',
            borderRadius: rem(24),
            padding: isMobile ? rem(20) : rem(32),
            border: isDark 
              ? '1px solid rgba(255, 255, 255, 0.08)' 
              : '1px solid rgba(139, 92, 246, 0.1)',
            maxWidth: isMobile ? '100%' : rem(800),
            margin: '0 auto',
          }}
        >
          {isMobile ? (
            // Mobile Layout: Vertical Stack
            <Stack align="center" gap={rem(24)}>
              {/* Step 1: Original Photo */}
              <Box style={{ textAlign: 'center', width: '100%' }}>
                <Box
                  style={{
                    position: 'relative',
                    width: rem(100),
                    height: rem(100),
                    margin: '0 auto',
                    marginBottom: rem(12),
                  }}
                >
                  <Box
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: `3px solid ${isDark ? '#374151' : '#e5e7eb'}`,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <img 
                      src={currentExample.originalPhoto}
                      alt="Original Photo"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                  
                  {/* Camera Icon */}
                  <Box
                    style={{
                      position: 'absolute',
                      top: rem(-4),
                      right: rem(-4),
                      background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
                      borderRadius: '50%',
                      width: rem(26),
                      height: rem(26),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconCamera size={14} style={{ color: '#ffffff' }} />
                  </Box>
                </Box>
                
                <Text 
                  size="sm" 
                  fw={600} 
                  style={{ 
                    color: isDark ? '#cbd5e1' : '#64748b',
                    fontFamily: 'Nunito, sans-serif'
                  }}
                >
                  Upload Photo
                </Text>
              </Box>

              {/* Vertical Arrow Down */}
              <Box style={{ display: 'flex', justifyContent: 'center' }}>
                <svg 
                  width="30" 
                  height="40" 
                  viewBox="0 0 30 40" 
                  style={{ 
                    color: isDark ? '#8b5cf6' : '#a855f7',
                    filter: 'drop-shadow(0 2px 4px rgba(139, 92, 246, 0.2))',
                    transform: 'rotate(90deg)'
                  }}
                >
                  <path 
                    d="M5 15 Q20 5, 35 15 Q50 25, 55 15" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none"
                    strokeLinecap="round"
                    transform="scale(0.5) translate(5, 5)"
                  />
                  <polygon 
                    points="55,15 50,12 50,18" 
                    fill="currentColor"
                    transform="scale(0.5) translate(5, 5)"
                  />
                </svg>
              </Box>

              {/* Step 2: AI Processing */}
              <Box style={{ textAlign: 'center', width: '100%' }}>
                <Box
                  style={{
                    position: 'relative',
                    width: rem(100),
                    height: rem(100),
                    margin: '0 auto',
                    marginBottom: rem(12),
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #f472b6 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'pulseGlow 2s ease-in-out infinite',
                  }}
                >
                  <IconWand 
                    size={36} 
                    style={{ 
                      color: '#ffffff',
                      animation: 'gentleRotate 3s ease-in-out infinite',
                    }} 
                  />
                  
                  {/* Sparkle Effect */}
                  <Box
                    style={{
                      position: 'absolute',
                      top: '15%',
                      right: '15%',
                      color: '#ffffff',
                      animation: 'sparkleGlow 1.5s ease-in-out infinite',
                    }}
                  >
                    <IconSparkles size={12} />
                  </Box>
                </Box>

                <Text 
                  size="sm" 
                  fw={600} 
                  style={{ 
                    color: isDark ? '#c4b5fd' : '#8B5CF6',
                    fontFamily: 'Nunito, sans-serif'
                  }}
                >
                  AI Magic
                </Text>
              </Box>

              {/* Vertical Arrow Down */}
              <Box style={{ display: 'flex', justifyContent: 'center' }}>
                <svg 
                  width="30" 
                  height="40" 
                  viewBox="0 0 30 40" 
                  style={{ 
                    color: isDark ? '#f59e0b' : '#d97706',
                    filter: 'drop-shadow(0 2px 4px rgba(245, 158, 11, 0.2))',
                    transform: 'rotate(90deg)'
                  }}
                >
                  <path 
                    d="M5 15 Q20 5, 35 15 Q50 25, 55 15" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none"
                    strokeLinecap="round"
                    transform="scale(0.5) translate(5, 5)"
                  />
                  <polygon 
                    points="55,15 50,12 50,18" 
                    fill="currentColor"
                    transform="scale(0.5) translate(5, 5)"
                  />
                </svg>
              </Box>

              {/* Step 3: Character Result */}
              <Box style={{ textAlign: 'center', width: '100%' }}>
                <Box
                  style={{
                    position: 'relative',
                    width: rem(100),
                    height: rem(100),
                    margin: '0 auto',
                    marginBottom: rem(12),
                  }}
                >
                  <Box
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: `3px solid #f59e0b`,
                      transition: 'all 0.3s ease',
                      boxShadow: '0 8px 25px rgba(245, 158, 11, 0.3)',
                    }}
                  >
                    <img 
                      src={currentExample.characterResult}
                      alt="Character Result"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                  
                  {/* Success Icon */}
                  <Box
                    style={{
                      position: 'absolute',
                      top: rem(-4),
                      right: rem(-4),
                      background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                      borderRadius: '50%',
                      width: rem(26),
                      height: rem(26),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconSparkles size={14} style={{ color: '#ffffff' }} />
                  </Box>
                </Box>

                <Text 
                  size="sm" 
                  fw={600} 
                  style={{ 
                    color: isDark ? '#fbbf24' : '#d97706',
                    fontFamily: 'Nunito, sans-serif'
                  }}
                >
                  Your Character
                </Text>
              </Box>
            </Stack>
          ) : (
            // Desktop Layout: Horizontal Group
            <Group justify="space-between" align="center" wrap="nowrap">
              
              {/* Step 1: Original Photo */}
              <Box style={{ flex: 1, textAlign: 'center' }}>
                <Box
                  style={{
                    position: 'relative',
                    width: rem(100),
                    height: rem(100),
                    margin: '0 auto',
                    marginBottom: rem(12),
                  }}
                >
                  <Box
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: `3px solid ${isDark ? '#374151' : '#e5e7eb'}`,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <img 
                      src={currentExample.originalPhoto}
                      alt="Original Photo"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                  
                  {/* Camera Icon */}
                  <Box
                    style={{
                      position: 'absolute',
                      top: rem(-4),
                      right: rem(-4),
                      background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
                      borderRadius: '50%',
                      width: rem(24),
                      height: rem(24),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconCamera size={12} style={{ color: '#ffffff' }} />
                  </Box>
                </Box>
                
                <Text 
                  size="xs" 
                  fw={600} 
                  style={{ 
                    color: isDark ? '#cbd5e1' : '#64748b',
                    fontFamily: 'Nunito, sans-serif'
                  }}
                >
                  Upload Photo
                </Text>
              </Box>

              {/* Curly Arrow 1 */}
              <Box style={{ flex: 0, margin: `0 ${rem(8)}` }}>
                <svg 
                  width="60" 
                  height="30" 
                  viewBox="0 0 60 30" 
                  style={{ 
                    color: isDark ? '#8b5cf6' : '#a855f7',
                    filter: 'drop-shadow(0 2px 4px rgba(139, 92, 246, 0.2))'
                  }}
                >
                  <path 
                    d="M5 15 Q20 5, 35 15 Q50 25, 55 15" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none"
                    strokeLinecap="round"
                  />
                  <polygon 
                    points="55,15 50,12 50,18" 
                    fill="currentColor"
                  />
                </svg>
              </Box>

              {/* Step 2: AI Processing */}
              <Box style={{ flex: 1, textAlign: 'center' }}>
                <Box
                  style={{
                    position: 'relative',
                    width: rem(100),
                    height: rem(100),
                    margin: '0 auto',
                    marginBottom: rem(12),
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #f472b6 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'pulseGlow 2s ease-in-out infinite',
                  }}
                >
                  <IconWand 
                    size={32} 
                    style={{ 
                      color: '#ffffff',
                      animation: 'gentleRotate 3s ease-in-out infinite',
                    }} 
                  />
                  
                  {/* Sparkle Effect */}
                  <Box
                    style={{
                      position: 'absolute',
                      top: '15%',
                      right: '15%',
                      color: '#ffffff',
                      animation: 'sparkleGlow 1.5s ease-in-out infinite',
                    }}
                  >
                    <IconSparkles size={10} />
                  </Box>
                </Box>

                <Text 
                  size="xs" 
                  fw={600} 
                  style={{ 
                    color: isDark ? '#c4b5fd' : '#8B5CF6',
                    fontFamily: 'Nunito, sans-serif'
                  }}
                >
                  AI Magic
                </Text>
              </Box>

              {/* Curly Arrow 2 */}
              <Box style={{ flex: 0, margin: `0 ${rem(8)}` }}>
                <svg 
                  width="60" 
                  height="30" 
                  viewBox="0 0 60 30"
                  style={{ 
                    color: isDark ? '#f59e0b' : '#d97706',
                    filter: 'drop-shadow(0 2px 4px rgba(245, 158, 11, 0.2))'
                  }}
                >
                  <path 
                    d="M5 15 Q20 5, 35 15 Q50 25, 55 15" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none"
                    strokeLinecap="round"
                  />
                  <polygon 
                    points="55,15 50,12 50,18" 
                    fill="currentColor"
                  />
                </svg>
              </Box>

              {/* Step 3: Character Result */}
              <Box style={{ flex: 1, textAlign: 'center' }}>
                <Box
                  style={{
                    position: 'relative',
                    width: rem(100),
                    height: rem(100),
                    margin: '0 auto',
                    marginBottom: rem(12),
                  }}
                >
                  <Box
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: `3px solid #f59e0b`,
                      transition: 'all 0.3s ease',
                      boxShadow: '0 8px 25px rgba(245, 158, 11, 0.3)',
                    }}
                  >
                    <img 
                      src={currentExample.characterResult}
                      alt="Character Result"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                  
                  {/* Success Icon */}
                  <Box
                    style={{
                      position: 'absolute',
                      top: rem(-4),
                      right: rem(-4),
                      background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                      borderRadius: '50%',
                      width: rem(24),
                      height: rem(24),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconSparkles size={12} style={{ color: '#ffffff' }} />
                  </Box>
                </Box>

                <Text 
                  size="xs" 
                  fw={600} 
                  style={{ 
                    color: isDark ? '#fbbf24' : '#d97706',
                    fontFamily: 'Nunito, sans-serif'
                  }}
                >
                  Your Character
                </Text>
              </Box>
            </Group>
          )}

          {/* Character Name Display */}
          <Box ta="center" mt={rem(20)}>
            <Text
              size="sm"
              fw={600}
              style={{
                color: isDark ? '#ffffff' : '#1e293b',
                fontFamily: 'Quicksand, sans-serif',
              }}
            >
              Meet {currentExample.childName}!
            </Text>
          </Box>
        </Box>

        {/* Simple Example Dots */}
        <Group justify="center" mt={rem(24)} gap="xs">
          {transformationExamples.map((_, index) => (
            <Box
              key={index}
              style={{
                width: rem(8),
                height: rem(8),
                borderRadius: '50%',
                background: index === activeDemo 
                  ? 'linear-gradient(135deg, #8B5CF6 0%, #f472b6 100%)' 
                  : isDark ? '#374151' : '#e5e7eb',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onClick={() => setActiveDemo(index)}
            />
          ))}
        </Group>
      </Container>

      {/* Compact Animations */}
      <style jsx global>{`
        @keyframes pulseGlow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
            transform: scale(1.05);
          }
        }
        
        @keyframes gentleRotate {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(10deg); }
        }
        
        @keyframes sparkleGlow {
          0%, 100% { 
            opacity: 0.6; 
            transform: scale(1);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.3);
          }
        }
      `}</style>
    </Box>
  );
}

export default SimpleTransformationDemo;