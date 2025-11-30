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
  IconPlayerPlay
} from '@tabler/icons-react';
import FloatingCircularHeader from '../../../components/layout/Header/FloatingCircularHeader';

// Login Form Component - Moved outside to prevent re-rendering issues
const LoginForm = ({ formData, handleInputChange, handleLogin, handleSocialLogin, loading, isDark, isMobile }) => (
  <Box
    style={{
      width: '100%',
      maxWidth: rem(380), // Slightly bigger container
      background: isDark 
        ? 'rgba(15, 15, 35, 0.6)'
        : 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(24px)',
      borderRadius: rem(20), // Smaller border radius
      padding: rem(24), // Much smaller padding
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

    <Stack gap="sm" style={{ position: 'relative', zIndex: 2 }}> {/* Smaller gap */}
      
      {/* Header */}
      <Box ta="center" mb="sm"> {/* Smaller margin */}
        <Group
          justify="center"
          mb="sm"
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
            Welcome Back
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
          Sign in to your{' '}
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
          Continue creating magical stories
        </Text>
      </Box>

      {/* Social Login Buttons */}
      <Stack gap="xs">
        <Button
          size="sm"
          radius="lg"
          variant="outline"
          leftSection={<IconBrandGoogle size={16} />}
          onClick={() => handleSocialLogin('google')}
          style={{
            border: isDark ? '1px solid rgba(219, 68, 55, 0.3)' : '1px solid rgba(219, 68, 55, 0.2)',
            color: '#db4437',
            background: isDark ? 'rgba(219, 68, 55, 0.1)' : 'rgba(219, 68, 55, 0.05)',
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 600,
            height: rem(36),
            fontSize: rem(12),
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
          onClick={() => handleSocialLogin('facebook')}
          style={{
            border: isDark ? '1px solid rgba(24, 119, 242, 0.3)' : '1px solid rgba(24, 119, 242, 0.2)',
            color: '#1877f2',
            background: isDark ? 'rgba(24, 119, 242, 0.1)' : 'rgba(24, 119, 242, 0.05)',
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 600,
            height: rem(36),
            fontSize: rem(12),
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
            fontSize: rem(10),
            fontWeight: 500,
          },
          root: {
            borderColor: isDark ? 'rgba(139, 92, 246, 0.2)' : 'rgba(139, 92, 246, 0.15)',
          }
        }}
      />

      {/* Email Input */}
      <TextInput
        label="Email"
        placeholder="Enter your email"
        leftSection={<IconMail size={16} />}
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
            marginBottom: rem(4),
            fontSize: rem(12),
          },
          input: {
            background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
            border: isDark ? '1px solid rgba(139, 92, 246, 0.2)' : '1px solid rgba(139, 92, 246, 0.15)',
            color: isDark ? '#ffffff' : '#1e293b',
            fontFamily: 'Nunito, sans-serif',
            height: rem(36),
            fontSize: rem(13),
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
        placeholder="Enter your password"
        leftSection={<IconLock size={16} />}
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
            marginBottom: rem(4),
            fontSize: rem(12),
          },
          input: {
            background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
            border: isDark ? '1px solid rgba(139, 92, 246, 0.2)' : '1px solid rgba(139, 92, 246, 0.15)',
            color: isDark ? '#ffffff' : '#1e293b',
            fontFamily: 'Nunito, sans-serif',
            height: rem(36),
            fontSize: rem(13),
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

      {/* Forgot Password */}
      <Group justify="flex-end" mt="xs">
        <Anchor 
          size="xs"
          style={{
            color: '#8b5cf6',
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 500,
            textDecoration: 'none',
            fontSize: rem(10),
          }}
          onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
          onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
        >
          Forgot password?
        </Anchor>
      </Group>

      {/* Sign In Button */}
      <Button
        onClick={handleLogin}
        size="sm"
        radius="lg"
        loading={loading}
        style={{
          background: 'linear-gradient(135deg, #8b5cf6 0%, #f472b6 100%)',
          border: 'none',
          fontFamily: 'Nunito, sans-serif',
          fontWeight: 700,
          height: rem(36),
          fontSize: rem(13),
          boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)',
          transition: 'all 0.3s ease',
          marginTop: rem(4),
        }}
        styles={{
          root: {
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(139, 92, 246, 0.4)',
            }
          }
        }}
      >
        Sign In
      </Button>

      {/* Sign Up Link */}
      <Text 
        ta="center" 
        size="sm"
        style={{
          color: isDark ? '#cbd5e1' : '#64748b',
          fontFamily: 'Nunito, sans-serif',
          marginTop: rem(8),
          fontSize: rem(12),
        }}
      >
        Don't have an account?{' '}
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
          Sign up here
        </Anchor>
      </Text>
    </Stack>
  </Box>
);

function EnhancedLoginPage() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogin = async () => {
    setLoading(true);
    // Add your login logic here
    console.log('Login attempt:', formData);
    setTimeout(() => setLoading(false), 2000);
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Add your social login logic here
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

      {/* Mobile Layout - Just Login Form with decorative elements */}
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
            <LoginForm 
              formData={formData}
              handleInputChange={handleInputChange}
              handleLogin={handleLogin}
              handleSocialLogin={handleSocialLogin}
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

            {/* Right Side - Login Form */}
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
                <LoginForm 
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleLogin={handleLogin}
                  handleSocialLogin={handleSocialLogin}
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

export default EnhancedLoginPage;