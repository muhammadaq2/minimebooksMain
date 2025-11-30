import React, { useState } from 'react';
import { 
  Container, 
  Text, 
  TextInput,
  PasswordInput,
  Button,
  Box,
  Group,
  Stack,
  Divider,
  Anchor,
  Checkbox,
  rem,
  useMantineColorScheme,
  Grid
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { 
  IconMail,
  IconLock,
  IconSparkles,
  IconStar,
  IconHeart,
  IconBrandGoogle,
  IconBrandFacebook,
  IconPlayerPlay,
  IconUser
} from '@tabler/icons-react';
import FloatingCircularHeader from '../../../components/layout/Header/FloatingCircularHeader';

// Signup Form Component - Moved outside to prevent re-rendering issues
const SignupForm = ({ formData, handleInputChange, handleSignup, handleSocialSignup, loading, isDark, isMobile }) => (
  <Box
    style={{
      width: '100%',
      maxWidth: rem(380), // Slightly bigger container
      background: isDark 
        ? 'rgba(15, 15, 35, 0.6)'
        : 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(24px)',
      borderRadius: rem(20), // Smaller border radius
      padding: rem(24), // Compact padding
      border: isDark 
        ? '1px solid rgba(139, 92, 246, 0.2)' 
        : '1px solid rgba(139, 92, 246, 0.15)',
      boxShadow: isDark
        ? '0 20px 40px rgba(0, 0, 0, 0.3)'
        : '0 20px 40px rgba(139, 92, 246, 0.15)',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Card Background Pattern */}
    <Box
      style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.05) 0%, transparent 60%),
          radial-gradient(circle at 80% 80%, rgba(244, 114, 182, 0.05) 0%, transparent 60%)
        `,
        borderRadius: rem(20),
      }}
    />

    <Stack gap="xs" style={{ position: 'relative', zIndex: 2 }}> {/* Very small gap */}
      
      {/* Header */}
      <Box ta="center" mb="xs"> {/* Smaller margin */}
        <Group
          justify="center"
          mb="xs"
          style={{
            background: 'linear-gradient(135deg, #8b5cf6 0%, #f472b6 100%)',
            backdropFilter: 'blur(12px)',
            borderRadius: rem(16), // Smaller border radius
            padding: `${rem(6)} ${rem(16)}`, // Smaller padding
            display: 'inline-flex',
            boxShadow: '0 4px 15px rgba(139, 92, 246, 0.25)',
          }}
        >
          <IconSparkles size={14} style={{ color: '#ffffff' }} />
          <Text 
            size="xs" 
            fw={700}
            style={{ 
              color: '#ffffff',
              fontFamily: 'Nunito, sans-serif',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
            }}
          >
            Join Us
          </Text>
        </Group>

        <Text
          size="lg"
          fw={800}
          mb="xs"
          style={{
            fontFamily: 'Quicksand, sans-serif',
            color: isDark ? '#ffffff' : '#1e293b',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
          }}
        >
          Create your{' '}
          <Text
            component="span"
            inherit
            style={{
              background: 'linear-gradient(135deg, #8b5cf6 0%, #f472b6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            account
          </Text>
        </Text>

        <Text
          size="xs"
          style={{
            color: isDark ? '#cbd5e1' : '#64748b',
            fontFamily: 'Nunito, sans-serif',
            lineHeight: 1.4,
          }}
        >
          Start creating magical stories
        </Text>
      </Box>

      {/* Social Signup Buttons */}
      <Stack gap="xs">
        <Button
          size="sm"
          radius="lg"
          variant="outline"
          leftSection={<IconBrandGoogle size={16} />}
          onClick={() => handleSocialSignup('google')}
          style={{
            border: isDark ? '1px solid rgba(219, 68, 55, 0.3)' : '1px solid rgba(219, 68, 55, 0.2)',
            color: '#db4437',
            background: isDark ? 'rgba(219, 68, 55, 0.1)' : 'rgba(219, 68, 55, 0.05)',
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 600,
            height: rem(32),
            fontSize: rem(11),
            transition: 'all 0.3s ease',
          }}
          styles={{
            root: {
              '&:hover': {
                background: isDark ? 'rgba(219, 68, 55, 0.15)' : 'rgba(219, 68, 55, 0.1)',
                transform: 'translateY(-1px)',
                boxShadow: '0 4px 15px rgba(219, 68, 55, 0.2)',
              }
            }
          }}
        >
          Continue with Google
        </Button>

        <Button
          size="sm"
          radius="lg"
          variant="outline"
          leftSection={<IconBrandFacebook size={16} />}
          onClick={() => handleSocialSignup('facebook')}
          style={{
            border: isDark ? '1px solid rgba(24, 119, 242, 0.3)' : '1px solid rgba(24, 119, 242, 0.2)',
            color: '#1877f2',
            background: isDark ? 'rgba(24, 119, 242, 0.1)' : 'rgba(24, 119, 242, 0.05)',
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 600,
            height: rem(32),
            fontSize: rem(11),
            transition: 'all 0.3s ease',
          }}
          styles={{
            root: {
              '&:hover': {
                background: isDark ? 'rgba(24, 119, 242, 0.15)' : 'rgba(24, 119, 242, 0.1)',
                transform: 'translateY(-1px)',
                boxShadow: '0 4px 15px rgba(24, 119, 242, 0.2)',
              }
            }
          }}
        >
          Continue with Facebook
        </Button>
      </Stack>

      {/* Divider */}
      <Divider 
        label="or use email" 
        labelPosition="center"
        my="xs"
        styles={{
          label: {
            color: isDark ? '#94a3b8' : '#64748b',
            fontFamily: 'Nunito, sans-serif',
            fontSize: rem(9),
            fontWeight: 500,
          },
          root: {
            borderColor: isDark ? 'rgba(139, 92, 246, 0.2)' : 'rgba(139, 92, 246, 0.15)',
          }
        }}
      />

      {/* Full Name Input */}
      <TextInput
        label="Full Name"
        placeholder="Enter your full name"
        leftSection={<IconUser size={14} />}
        value={formData.fullName}
        onChange={(e) => handleInputChange('fullName', e.target.value)}
        required
        size="sm"
        radius="lg"
        styles={{
          label: {
            color: isDark ? '#e2e8f0' : '#374151',
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 600,
            marginBottom: rem(3),
            fontSize: rem(11),
          },
          input: {
            background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
            border: isDark ? '1px solid rgba(139, 92, 246, 0.2)' : '1px solid rgba(139, 92, 246, 0.15)',
            color: isDark ? '#ffffff' : '#1e293b',
            fontFamily: 'Nunito, sans-serif',
            height: rem(32),
            fontSize: rem(12),
            '&:focus': {
              borderColor: '#8b5cf6',
              boxShadow: '0 0 0 2px rgba(139, 92, 246, 0.1)',
            },
            '&::placeholder': {
              color: isDark ? '#94a3b8' : '#6b7280',
            }
          }
        }}
      />

      {/* Email Input */}
      <TextInput
        label="Email"
        placeholder="your@email.com"
        leftSection={<IconMail size={14} />}
        value={formData.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
        required
        size="sm"
        radius="lg"
        styles={{
          label: {
            color: isDark ? '#e2e8f0' : '#374151',
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 600,
            marginBottom: rem(3),
            fontSize: rem(11),
          },
          input: {
            background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
            border: isDark ? '1px solid rgba(139, 92, 246, 0.2)' : '1px solid rgba(139, 92, 246, 0.15)',
            color: isDark ? '#ffffff' : '#1e293b',
            fontFamily: 'Nunito, sans-serif',
            height: rem(32),
            fontSize: rem(12),
            '&:focus': {
              borderColor: '#8b5cf6',
              boxShadow: '0 0 0 2px rgba(139, 92, 246, 0.1)',
            },
            '&::placeholder': {
              color: isDark ? '#94a3b8' : '#6b7280',
            }
          }
        }}
      />

      {/* Password Input */}
      <PasswordInput
        label="Password"
        placeholder="Create password"
        leftSection={<IconLock size={14} />}
        value={formData.password}
        onChange={(e) => handleInputChange('password', e.target.value)}
        required
        size="sm"
        radius="lg"
        styles={{
          label: {
            color: isDark ? '#e2e8f0' : '#374151',
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 600,
            marginBottom: rem(3),
            fontSize: rem(11),
          },
          input: {
            background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
            border: isDark ? '1px solid rgba(139, 92, 246, 0.2)' : '1px solid rgba(139, 92, 246, 0.15)',
            color: isDark ? '#ffffff' : '#1e293b',
            fontFamily: 'Nunito, sans-serif',
            height: rem(32),
            fontSize: rem(12),
            '&:focus': {
              borderColor: '#8b5cf6',
              boxShadow: '0 0 0 2px rgba(139, 92, 246, 0.1)',
            },
            '&::placeholder': {
              color: isDark ? '#94a3b8' : '#6b7280',
            }
          }
        }}
      />

      {/* Confirm Password Input */}
      <PasswordInput
        label="Confirm Password"
        placeholder="Confirm password"
        leftSection={<IconLock size={14} />}
        value={formData.confirmPassword}
        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
        required
        size="sm"
        radius="lg"
        styles={{
          label: {
            color: isDark ? '#e2e8f0' : '#374151',
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 600,
            marginBottom: rem(3),
            fontSize: rem(11),
          },
          input: {
            background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
            border: isDark ? '1px solid rgba(139, 92, 246, 0.2)' : '1px solid rgba(139, 92, 246, 0.15)',
            color: isDark ? '#ffffff' : '#1e293b',
            fontFamily: 'Nunito, sans-serif',
            height: rem(32),
            fontSize: rem(12),
            '&:focus': {
              borderColor: '#8b5cf6',
              boxShadow: '0 0 0 2px rgba(139, 92, 246, 0.1)',
            },
            '&::placeholder': {
              color: isDark ? '#94a3b8' : '#6b7280',
            }
          }
        }}
      />

      {/* Terms Checkbox */}
      <Checkbox
        checked={formData.agreeToTerms}
        onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
        label={
          <Text size="sm" style={{ color: isDark ? '#94a3b8' : '#64748b', fontFamily: 'Nunito, sans-serif', fontSize: rem(11) }}>
            I agree to the{' '}
            <Anchor size="sm" style={{ color: '#8b5cf6', fontWeight: 600, fontSize: rem(11) }}>
              Terms
            </Anchor>
            {' '}and{' '}
            <Anchor size="sm" style={{ color: '#8b5cf6', fontWeight: 600, fontSize: rem(11) }}>
              Privacy Policy
            </Anchor>
          </Text>
        }
        styles={{
          input: {
            '&:checked': {
              backgroundColor: '#8b5cf6',
              borderColor: '#8b5cf6',
            }
          }
        }}
        size="sm"
      />

      {/* Sign Up Button */}
      <Button
        onClick={handleSignup}
        size="sm"
        radius="lg"
        loading={loading}
        disabled={!formData.agreeToTerms}
        style={{
          background: 'linear-gradient(135deg, #8b5cf6 0%, #f472b6 100%)',
          border: 'none',
          fontFamily: 'Nunito, sans-serif',
          fontWeight: 700,
          height: rem(32),
          fontSize: rem(12),
          boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)',
          transition: 'all 0.3s ease',
          marginTop: rem(4),
          opacity: !formData.agreeToTerms ? 0.6 : 1,
        }}
        styles={{
          root: {
            '&:hover': {
              transform: formData.agreeToTerms ? 'translateY(-2px)' : 'none',
              boxShadow: formData.agreeToTerms ? '0 6px 20px rgba(139, 92, 246, 0.4)' : '0 4px 15px rgba(139, 92, 246, 0.3)',
            }
          }
        }}
      >
        Create Account
      </Button>

      {/* Sign In Link */}
      <Text 
        ta="center" 
        size="sm"
        style={{
          color: isDark ? '#cbd5e1' : '#64748b',
          fontFamily: 'Nunito, sans-serif',
          marginTop: rem(6),
          fontSize: rem(12),
        }}
      >
        Already have an account?{' '}
        <Anchor 
          style={{
            color: '#8b5cf6',
            fontWeight: 600,
            textDecoration: 'none',
            fontSize: rem(12),
          }}
          onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
          onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
        >
          Sign in
        </Anchor>
      </Text>
    </Stack>
  </Box>
);

function CompactSignupPage() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSignup = async () => {
    setLoading(true);
    console.log('Signup attempt:', formData);
    setTimeout(() => setLoading(false), 2000);
  };

  const handleSocialSignup = (provider) => {
    console.log(`Signup with ${provider}`);
  };

  return (
    <Box
      style={{
        minHeight: '100vh',
        position: 'relative',
        background: isDark 
          ? 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)'
          : 'linear-gradient(135deg, #fef3c7 0%, #fde68a 10%, #f3e8ff 30%, #e0e7ff 60%, #dbeafe 90%, #f0f9ff 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <Box style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <FloatingCircularHeader />
      </Box>

      {/* Mobile Layout - Just Signup Form with decorative elements */}
      {isTablet && (
        <>
          {/* Background Decorative Elements for Mobile */}
          <Box
            style={{
              position: 'absolute',
              top: '15%',
              right: '10%',
              color: isDark ? '#8b5cf6' : '#a855f7',
              animation: 'gentleFloat 6s ease-in-out infinite',
              opacity: 0.6,
              zIndex: 1,
            }}
          >
            <IconSparkles size={24} />
          </Box>
          <Box
            style={{
              position: 'absolute',
              top: '25%',
              left: '8%',
              color: isDark ? '#f472b6' : '#ec4899',
              animation: 'gentleFloat 7s ease-in-out infinite 1s',
              opacity: 0.5,
              zIndex: 1,
            }}
          >
            <IconStar size={20} />
          </Box>
          <Box
            style={{
              position: 'absolute',
              bottom: '20%',
              right: '15%',
              color: isDark ? '#facc15' : '#f59e0b',
              animation: 'gentleFloat 8s ease-in-out infinite 2s',
              opacity: 0.4,
              zIndex: 1,
            }}
          >
            <IconHeart size={18} />
          </Box>
          <Box
            style={{
              position: 'absolute',
              bottom: '30%',
              left: '12%',
              color: isDark ? '#10b981' : '#059669',
              animation: 'gentleFloat 9s ease-in-out infinite 3s',
              opacity: 0.5,
              zIndex: 1,
            }}
          >
            <IconStar size={16} />
          </Box>

          <Container 
            size="sm" 
            style={{ 
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 10,
              paddingTop: rem(100),
            }}
          >
            <SignupForm 
              formData={formData}
              handleInputChange={handleInputChange}
              handleSignup={handleSignup}
              handleSocialSignup={handleSocialSignup}
              loading={loading}
              isDark={isDark}
              isMobile={isMobile}
            />
          </Container>
        </>
      )}

      {/* Desktop Layout - Split Screen */}
      {!isTablet && (
        <Box
          style={{
            minHeight: '100vh',
            display: 'flex',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <Grid style={{ width: '100%', margin: 0 }} gutter={0}>
            
            {/* Left Side - Video */}
            <Grid.Col span={8} style={{ padding: 0 }}>
              <Box
                style={{
                  height: '100vh',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'rgba(0, 0, 0, 0.2)',
                }}
              >
                {/* Video */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                >
                  <source src="/images/20250818_0329_Magical Cartoon Transformation_simple_compose_01k2x2dwd8e8jtb42w81jc3tm4.mp4" type="video/mp4" />
                </video>
                
                {/* Video Overlay */}
                <Box
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: isDark 
                      ? 'linear-gradient(135deg, rgba(15, 15, 35, 0.7) 0%, rgba(26, 26, 46, 0.6) 50%, rgba(83, 52, 131, 0.7) 100%)'
                      : 'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(244, 114, 182, 0.2) 50%, rgba(139, 92, 246, 0.3) 100%)',
                  }}
                />
              </Box>
            </Grid.Col>

            {/* Right Side - Signup Form */}
            <Grid.Col span={4} style={{ padding: 0 }}>
              <Box
                style={{
                  height: '100vh',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: rem(20),
                  background: isDark 
                    ? 'rgba(15, 15, 35, 0.4)'
                    : 'rgba(255, 255, 255, 0.4)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <SignupForm 
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleSignup={handleSignup}
                  handleSocialSignup={handleSocialSignup}
                  loading={loading}
                  isDark={isDark}
                  isMobile={isMobile}
                />
              </Box>
            </Grid.Col>
          </Grid>
        </Box>
      )}

      {/* Animations */}
      <style jsx global>{`
        @keyframes gentleFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-8px) rotate(180deg) scale(1.1); 
            opacity: 0.8;
          }
        }
      `}</style>
    </Box>
  );
}

export default CompactSignupPage;