import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Text, 
  Box,
  Group,
  Stack,
  Button,
  Select,
  Textarea,
  TextInput,
  rem,
  useMantineColorScheme,
  Grid,
  Paper,
  Badge,
  Divider,
  ActionIcon
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { 
  IconSparkles,
  IconSend,
  IconStar,
  IconHeart,
  IconStarFilled,
  IconMessageCircle,
  IconMail,
  IconPhone,
  IconClock,
  IconCheck,
  IconUser,
  IconHelp,
  IconLifebuoy,
  IconFileText,
  IconBulb,
  IconMapPin,
  IconWorld
} from '@tabler/icons-react';
import FloatingCircularHeader from '../../components/layout/Header/FloatingCircularHeader';
import ProfessionalFooter from '../../components/layout/Footer/ProfessionalFooter';

function ProfessionalSupportPage() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');

  // Your consistent color palette
  const colors = isDark ? {
    primary: '#a855f7',
    secondary: '#facc15',
    accent: '#14b8a6',
    background: '#0f0f23', // Clean dark blue background
    text: '#f8fafc',
    textSecondary: '#cbd5e1',
    glassBg: 'rgba(255, 255, 255, 0.1)',
    border: 'rgba(168, 85, 247, 0.3)',
    cardBg: 'rgba(30, 27, 75, 0.6)',
  } : {
    primary: '#8B5CF6',
    secondary: '#facc15',
    accent: '#14b8a6',
    background: '#ffffff', // Clean white background
    text: '#1e293b',
    textSecondary: '#475569',
    glassBg: 'rgba(255, 255, 255, 0.7)',
    border: 'rgba(139, 92, 246, 0.2)',
    cardBg: '#ffffff',
  };

  // Form state with enhanced fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    priority: 'normal',
    message: ''
  });
  const [loading, setLoading] = useState(false);


  // Support categories with subcategories
  const supportCategories = [
    {
      value: 'order-issues',
      label: 'Order Issues',
      description: 'I Can\'t Find My Order, I Didn\'t Receive Order Confirmation, Check Order Status, Cancel My Order'
    },
    {
      value: 'product-concerns',
      label: 'Product Concerns',
      description: 'I\'m Not Happy With My Book, Change Book Language'
    },
    {
      value: 'shipping-delivery',
      label: 'Shipping & Delivery',
      description: 'Order Not Received, Order Delayed, Update Shipping Address, Lost or Damaged Package'
    },
    {
      value: 'account-technical',
      label: 'Account & Technical Issues',
      description: 'Unable to Login, Website or Technical Problem'
    },
    {
      value: 'other',
      label: 'Other',
      description: 'Other inquiries and general questions'
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    setLoading(true);
    console.log('Support request:', formData);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Show success message or redirect
    }, 2000);
  };

  // Mobile decorative elements
  const MobileDecorativeElements = () => (
    <>
      <Box
        style={{
          position: 'absolute',
          top: '12%',
          right: '8%',
          color: colors.secondary,
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
          top: '20%',
          left: '6%',
          color: '#f472b6',
          animation: 'gentleFloat 7s ease-in-out infinite 1s',
          opacity: 0.5,
          zIndex: 1,
        }}
      >
        <IconStarFilled size={20} />
      </Box>
      <Box
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          color: colors.accent,
          animation: 'gentleFloat 8s ease-in-out infinite 2s',
          opacity: 0.5,
          zIndex: 1,
        }}
      >
        <IconHeart size={22} />
      </Box>
      <Box
        style={{
          position: 'absolute',
          bottom: '25%',
          left: '8%',
          color: colors.primary,
          animation: 'gentleFloat 9s ease-in-out infinite 3s',
          opacity: 0.4,
          zIndex: 1,
        }}
      >
        <IconStar size={18} />
      </Box>
    </>
  );

  return (
    <Box
      style={{
        minHeight: '100vh',
        background: colors.background,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <FloatingCircularHeader />

      {/* Mobile Decorative Elements */}
      {isMobile && <MobileDecorativeElements />}

      {/* Main Content */}
      <Container size="xl" pt={rem(160)} pb={rem(60)}>
        
        {/* Page Header */}
        <Box ta="center" mb={rem(60)}>
          <Text
            component="h1"
            size={isMobile ? "2.5rem" : "3.5rem"}
            fw={800}
            ta="center"
            mb="md"
            style={{
              fontFamily: 'Quicksand, sans-serif',
              color: colors.text,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            How can we{' '}
            <Text
              component="span"
              inherit
              style={{
                background: `linear-gradient(135deg, ${colors.primary} 0%, #f472b6 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              help?
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
            Let us know if there is anything we can do for you
          </Text>
        </Box>

        <Grid align="stretch" gutter={isMobile ? "lg" : isTablet ? "xl" : "4xl"}>
          
          {/* Left Side - Enhanced Support Form */}
          <Grid.Col 
            span={isMobile ? 12 : isTablet ? 12 : 8} 
            order={isMobile ? 1 : isTablet ? 1 : 1}
            style={{
              paddingRight: !isTablet ? rem(16) : 0,
              marginBottom: isMobile ? rem(24) : 0,
            }}
          >
            <Stack gap="xl">
              {/* Main Form Card */}
              <Paper
                style={{
                  background: colors.cardBg,
                  backdropFilter: 'blur(24px)',
                  borderRadius: rem(24),
                  padding: isMobile ? rem(20) : isTablet ? rem(28) : rem(40),
                  border: `1px solid ${colors.border}`,
                  boxShadow: isDark
                    ? '0 25px 50px rgba(0, 0, 0, 0.3)'
                    : '0 25px 50px rgba(139, 92, 246, 0.15)',
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
                      radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 60%),
                      radial-gradient(circle at 80% 80%, rgba(244, 114, 182, 0.06) 0%, transparent 60%)
                    `,
                    borderRadius: rem(24),
                  }}
                />

                <Stack gap="xl" style={{ position: 'relative', zIndex: 2 }}>
                  {/* Form Header */}
                  <Box>
                    <Group mb="md">
                      <Box
                        style={{
                          width: rem(40),
                          height: rem(40),
                          borderRadius: rem(12),
                          background: `linear-gradient(135deg, ${colors.primary} 0%, #f472b6 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <IconMessageCircle size={20} style={{ color: '#ffffff' }} />
                      </Box>
                      <Box>
                        <Text
                          size="lg"
                          fw={700}
                          style={{
                            color: colors.text,
                            fontFamily: 'Quicksand, sans-serif',
                          }}
                        >
                          Send us a message
                        </Text>
                        <Text
                          size="sm"
                          style={{
                            color: colors.textSecondary,
                            fontFamily: 'Nunito, sans-serif',
                          }}
                        >
                          We'll get back to you within 2-4 hours
                        </Text>
                      </Box>
                    </Group>
                  </Box>

                  {/* Personal Info Row */}
                  <Grid gutter={isMobile ? "md" : "lg"}>
                    <Grid.Col span={isMobile ? 12 : 6}>
                      <Box>
                        <Text
                          fw={600}
                          mb="sm"
                          style={{
                            color: colors.text,
                            fontFamily: 'Nunito, sans-serif',
                            fontSize: rem(14),
                          }}
                        >
                          Your Name *
                        </Text>
                        <TextInput
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          size="lg"
                          radius="lg"
                          leftSection={<IconUser size={18} style={{ color: colors.textSecondary }} />}
                          styles={{
                            input: {
                              background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.9)',
                              border: `1px solid ${colors.border}`,
                              color: colors.text,
                              fontFamily: 'Nunito, sans-serif',
                              height: rem(48),
                              fontSize: rem(15),
                              '&:focus': {
                                borderColor: colors.primary,
                                boxShadow: `0 0 0 2px ${colors.primary}20`,
                              },
                              '&::placeholder': {
                                color: colors.textSecondary,
                              }
                            }
                          }}
                        />
                      </Box>
                    </Grid.Col>
                    <Grid.Col span={isMobile ? 12 : 6}>
                      <Box>
                        <Text
                          fw={600}
                          mb="sm"
                          style={{
                            color: colors.text,
                            fontFamily: 'Nunito, sans-serif',
                            fontSize: rem(14),
                          }}
                        >
                          Email Address *
                        </Text>
                        <TextInput
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          size="lg"
                          radius="lg"
                          type="email"
                          leftSection={<IconMail size={18} style={{ color: colors.textSecondary }} />}
                          styles={{
                            input: {
                              background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.9)',
                              border: `1px solid ${colors.border}`,
                              color: colors.text,
                              fontFamily: 'Nunito, sans-serif',
                              height: rem(48),
                              fontSize: rem(15),
                              '&:focus': {
                                borderColor: colors.primary,
                                boxShadow: `0 0 0 2px ${colors.primary}20`,
                              },
                              '&::placeholder': {
                                color: colors.textSecondary,
                              }
                            }
                          }}
                        />
                      </Box>
                    </Grid.Col>
                  </Grid>
                  
                  {/* Category and Priority Row */}
                  <Grid gutter={isMobile ? "md" : "lg"}>
                    <Grid.Col span={isMobile ? 12 : 8}>
                      <Box>
                        <Text
                          fw={600}
                          mb="sm"
                          style={{
                            color: colors.text,
                            fontFamily: 'Nunito, sans-serif',
                            fontSize: rem(14),
                          }}
                        >
                          Category *
                        </Text>
                        
                        <Select
                          placeholder="What can we help you with?"
                          value={formData.category}
                          onChange={(value) => handleInputChange('category', value)}
                          data={supportCategories}
                          size="lg"
                          radius="lg"
                          styles={{
                            input: {
                              background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.9)',
                              border: `1px solid ${colors.border}`,
                              color: colors.text,
                              fontFamily: 'Nunito, sans-serif',
                              height: rem(48),
                              fontSize: rem(15),
                              '&:focus': {
                                borderColor: colors.primary,
                                boxShadow: `0 0 0 2px ${colors.primary}20`,
                              },
                              '&::placeholder': {
                                color: colors.textSecondary,
                              }
                            },
                            dropdown: {
                              background: isDark ? colors.cardBg : '#ffffff',
                              border: `1px solid ${colors.border}`,
                            },
                            option: {
                              color: colors.text,
                              '&[data-selected]': {
                                backgroundColor: colors.primary,
                              },
                              '&:hover': {
                                backgroundColor: `${colors.primary}20`,
                              }
                            }
                          }}
                        />
                      </Box>
                    </Grid.Col>
                    <Grid.Col span={isMobile ? 12 : 4}>
                      <Box>
                        <Text
                          fw={600}
                          mb="sm"
                          style={{
                            color: colors.text,
                            fontFamily: 'Nunito, sans-serif',
                            fontSize: rem(14),
                          }}
                        >
                          Priority
                        </Text>
                        <Select
                          value={formData.priority}
                          onChange={(value) => handleInputChange('priority', value)}
                          data={[
                            { value: 'low', label: 'Low Priority' },
                            { value: 'normal', label: 'Normal Priority' },
                            { value: 'high', label: 'High Priority' },
                            { value: 'urgent', label: 'Urgent Priority' }
                          ]}
                          size="lg"
                          radius="lg"
                          styles={{
                            input: {
                              background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.9)',
                              border: `1px solid ${colors.border}`,
                              color: colors.text,
                              fontFamily: 'Nunito, sans-serif',
                              height: rem(48),
                              fontSize: rem(15),
                              '&:focus': {
                                borderColor: colors.primary,
                                boxShadow: `0 0 0 2px ${colors.primary}20`,
                              }
                            },
                            dropdown: {
                              background: isDark ? colors.cardBg : '#ffffff',
                              border: `1px solid ${colors.border}`,
                            },
                            option: {
                              color: colors.text,
                              '&[data-selected]': {
                                backgroundColor: colors.primary,
                              },
                              '&:hover': {
                                backgroundColor: `${colors.primary}20`,
                              }
                            }
                          }}
                        />
                      </Box>
                    </Grid.Col>
                  </Grid>

                  {/* Enhanced Message Textarea */}
                  <Box>
                    <Group justify="space-between" mb="sm">
                      <Text
                        fw={600}
                        style={{
                          color: colors.text,
                          fontFamily: 'Nunito, sans-serif',
                          fontSize: rem(14),
                        }}
                      >
                        Message *
                      </Text>
                      <Badge
                        size="sm"
                        variant="light"
                        color={formData.message.length > 20 ? 'green' : 'yellow'}
                        style={{
                          fontFamily: 'Nunito, sans-serif',
                        }}
                      >
                        {formData.message.length} chars
                      </Badge>
                    </Group>
                    
                    <Box style={{ position: 'relative' }}>
                      <Textarea
                        placeholder="Please describe your issue in detail. Include any relevant order numbers, error messages, or specific questions. The more information you provide, the better and faster we can assist you."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={8}
                        radius="lg"
                        styles={{
                          input: {
                            background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.9)',
                            border: `2px solid ${colors.border}`,
                            color: colors.text,
                            fontFamily: 'Nunito, sans-serif',
                            fontSize: rem(15),
                            lineHeight: 1.6,
                            padding: rem(16),
                            '&:focus': {
                              borderColor: colors.primary,
                              boxShadow: `0 0 0 3px ${colors.primary}15`,
                              background: isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.95)',
                            },
                            '&::placeholder': {
                              color: colors.textSecondary,
                            }
                          }
                        }}
                      />
                      
                      {/* Character counter and tips overlay */}
                      {formData.message.length > 10 && (
                        <Box
                          style={{
                            position: 'absolute',
                            bottom: rem(8),
                            right: rem(12),
                            background: colors.glassBg,
                            backdropFilter: 'blur(8px)',
                            borderRadius: rem(8),
                            padding: `${rem(4)} ${rem(8)}`,
                            border: `1px solid ${colors.border}`,
                          }}
                        >
                          <Group gap="xs">
                            <IconCheck size={12} style={{ color: colors.primary }} />
                            <Text size="xs" style={{ color: colors.textSecondary }}>
                              Looking good!
                            </Text>
                          </Group>
                        </Box>
                      )}
                    </Box>
                  </Box>

                  {/* Enhanced Submit Button */}
                  <Button
                    onClick={handleSubmit}
                    loading={loading}
                    disabled={!formData.category || !formData.message.trim() || !formData.name.trim() || !formData.email.trim()}
                    size="lg"
                    radius="xl"
                    rightSection={!loading && <IconSend size={20} />}
                    fullWidth
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary} 0%, #f472b6 100%)`,
                      border: 'none',
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 700,
                      height: rem(56),
                      fontSize: rem(16),
                      boxShadow: `0 8px 25px ${colors.primary}40`,
                      transition: 'all 0.3s ease',
                      marginTop: rem(16),
                      opacity: (!formData.category || !formData.message.trim() || !formData.name.trim() || !formData.email.trim()) ? 0.6 : 1,
                    }}
                    styles={{
                      root: {
                        '&:hover': {
                          transform: (formData.category && formData.message.trim() && formData.name.trim() && formData.email.trim()) ? 'translateY(-3px)' : 'none',
                          boxShadow: (formData.category && formData.message.trim() && formData.name.trim() && formData.email.trim()) ? `0 15px 40px ${colors.primary}50` : `0 8px 25px ${colors.primary}40`,
                        }
                      }
                    }}
                  >
                    {loading ? 'Sending your message...' : 'Send Support Request'}
                  </Button>

                  {/* Pro Tips Card */}
                  <Box
                    p="lg"
                    style={{
                      background: `linear-gradient(135deg, ${colors.glassBg} 0%, rgba(139, 92, 246, 0.08) 100%)`,
                      borderRadius: rem(16),
                      border: `1px solid ${colors.border}`,
                    }}
                  >
                    <Group mb="sm">
                      <Box
                        style={{
                          width: rem(32),
                          height: rem(32),
                          borderRadius: '50%',
                          background: colors.secondary,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <IconBulb size={18} style={{ color: '#1a202c' }} />
                      </Box>
                      <Text
                        size="sm"
                        fw={700}
                        style={{
                          color: colors.text,
                          fontFamily: 'Nunito, sans-serif',
                        }}
                      >
                        Pro Tips for Faster Support:
                      </Text>
                    </Group>
                    <Stack gap="xs">
                      <Group gap="xs">
                        <IconMail size={14} style={{ color: colors.primary }} />
                        <Text size="sm" style={{ color: colors.textSecondary, fontFamily: 'Nunito, sans-serif' }}>
                          Include your <strong>order number</strong> for order-related issues
                        </Text>
                      </Group>
                      <Group gap="xs">
                        <IconPhone size={14} style={{ color: colors.accent }} />
                        <Text size="sm" style={{ color: colors.textSecondary, fontFamily: 'Nunito, sans-serif' }}>
                          Mention your <strong>device type</strong> for technical problems
                        </Text>
                      </Group>
                      <Group gap="xs">
                        <IconClock size={14} style={{ color: colors.secondary }} />
                        <Text size="sm" style={{ color: colors.textSecondary, fontFamily: 'Nunito, sans-serif' }}>
                          Average response time: <strong>24 hours</strong> during business hours
                        </Text>
                      </Group>
                    </Stack>
                  </Box>
                </Stack>
              </Paper>
            </Stack>
          </Grid.Col>

          {/* Right Side - Contact Info & Location */}
          <Grid.Col 
            span={isMobile ? 12 : isTablet ? 12 : 4} 
            order={isMobile ? 2 : isTablet ? 2 : 2}
            style={{
              paddingLeft: !isTablet ? rem(16) : 0,
              marginTop: isMobile ? rem(20) : isTablet ? rem(24) : 0,
            }}
          >
            <Stack gap="xl">
              
              {/* Location & Map Card */}
              <Paper
                style={{
                  background: colors.cardBg,
                  backdropFilter: 'blur(24px)',
                  borderRadius: rem(20),
                  padding: isMobile ? rem(16) : isTablet ? rem(18) : rem(20),
                  border: `1px solid ${colors.border}`,
                  boxShadow: isDark
                    ? '0 20px 40px rgba(0, 0, 0, 0.25)'
                    : '0 20px 40px rgba(139, 92, 246, 0.12)',
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
                      radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.08) 0%, transparent 60%),
                      radial-gradient(circle at 70% 70%, rgba(244, 114, 182, 0.06) 0%, transparent 60%)
                    `,
                    borderRadius: rem(20),
                  }}
                />

                <Stack gap={isMobile ? "md" : "lg"} style={{ position: 'relative', zIndex: 2 }}>
                  {/* Location Header */}
                  <Box ta="center">
                    <Group justify="center" mb="sm">
                      <Box
                        style={{
                          width: rem(40),
                          height: rem(40),
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${colors.primary} 0%, #f472b6 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <IconMapPin size={20} style={{ color: '#ffffff' }} />
                      </Box>
                    </Group>
                    <Text
                      size={isMobile ? "md" : "lg"}
                      fw={700}
                      mb="xs"
                      style={{
                        color: colors.text,
                        fontFamily: 'Quicksand, sans-serif',
                      }}
                    >
                      Our Location
                    </Text>
                    <Text
                      size="sm"
                      style={{
                        color: colors.textSecondary,
                        fontFamily: 'Nunito, sans-serif',
                        lineHeight: 1.5,
                      }}
                    >
                      Based in Ontario, Canada
                    </Text>
                  </Box>

                  {/* Embedded Map */}
                  <Box
                    style={{
                      width: '100%',
                      height: isMobile ? rem(180) : rem(200),
                      borderRadius: rem(12),
                      overflow: 'hidden',
                      border: `2px solid ${colors.border}`,
                      position: 'relative',
                    }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943398.542909937!2d-81.99168168359375!3d44.24133095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x70f8425629621e09!2sOntario%2C%20Canada!5e0!3m2!1sen!2sus!4v1642678901234!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{
                        border: 0,
                        filter: isDark ? 'invert(90%) hue-rotate(180deg)' : 'none',
                      }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ontario, Canada Location"
                    />
                  </Box>

                  {/* Location Details */}
                  <Stack gap="xs">
                    <Group gap="sm">
                      <IconWorld size={16} style={{ color: colors.primary }} />
                      <Text
                        size="sm"
                        fw={600}
                        style={{
                          color: colors.text,
                          fontFamily: 'Nunito, sans-serif',
                        }}
                      >
                        Serving customers worldwide
                      </Text>
                    </Group>
                    <Group gap="sm">
                      <IconMapPin size={16} style={{ color: colors.accent }} />
                      <Text
                        size="sm"
                        style={{
                          color: colors.textSecondary,
                          fontFamily: 'Nunito, sans-serif',
                        }}
                      >
                        Ontario, Canada
                      </Text>
                    </Group>
                  </Stack>
                </Stack>
              </Paper>

              {/* Alternative Contact Methods */}
              <Paper
                style={{
                  background: colors.cardBg,
                  backdropFilter: 'blur(24px)',
                  borderRadius: rem(16),
                  padding: isMobile ? rem(14) : rem(18),
                  border: `1px solid ${colors.border}`,
                  boxShadow: isDark
                    ? '0 15px 30px rgba(0, 0, 0, 0.2)'
                    : '0 15px 30px rgba(139, 92, 246, 0.1)',
                }}
              >
                <Stack gap="md">
                  <Text
                    size="md"
                    fw={600}
                    mb="xs"
                    style={{
                      color: colors.text,
                      fontFamily: 'Quicksand, sans-serif',
                    }}
                  >
                    Other ways to reach us
                  </Text>

                  {/* Email */}
                  <Group>
                    <Box
                      style={{
                        width: rem(36),
                        height: rem(36),
                        borderRadius: rem(8),
                        background: `${colors.primary}20`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <IconMail size={18} style={{ color: colors.primary }} />
                    </Box>
                    <Box>
                      <Text
                        size="sm"
                        fw={600}
                        style={{
                          color: colors.text,
                          fontFamily: 'Nunito, sans-serif',
                        }}
                      >
                        Email Support
                      </Text>
                      <Text
                        size="xs"
                        style={{
                          color: colors.textSecondary,
                          fontFamily: 'Nunito, sans-serif',
                        }}
                      >
                        support@kidsbookwonder.com
                      </Text>
                    </Box>
                  </Group>

                  <Divider style={{ borderColor: colors.border }} />

                  {/* Phone */}
                  <Group>
                    <Box
                      style={{
                        width: rem(36),
                        height: rem(36),
                        borderRadius: rem(8),
                        background: `${colors.secondary}20`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <IconPhone size={18} style={{ color: colors.secondary }} />
                    </Box>
                    <Box>
                      <Text
                        size="sm"
                        fw={600}
                        style={{
                          color: colors.text,
                          fontFamily: 'Nunito, sans-serif',
                        }}
                      >
                        Phone Support
                      </Text>
                      <Text
                        size="xs"
                        style={{
                          color: colors.textSecondary,
                          fontFamily: 'Nunito, sans-serif',
                        }}
                      >
                        1-800-KIDBOOK (Mon-Fri 9AM-6PM EST)
                      </Text>
                    </Box>
                  </Group>

                  <Divider style={{ borderColor: colors.border }} />

                  {/* Business Hours */}
                  <Group>
                    <Box
                      style={{
                        width: rem(36),
                        height: rem(36),
                        borderRadius: rem(8),
                        background: `${colors.accent}20`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <IconClock size={18} style={{ color: colors.accent }} />
                    </Box>
                    <Box>
                      <Text
                        size="sm"
                        fw={600}
                        style={{
                          color: colors.text,
                          fontFamily: 'Nunito, sans-serif',
                        }}
                      >
                        Business Hours
                      </Text>
                      <Text
                        size="xs"
                        style={{
                          color: colors.textSecondary,
                          fontFamily: 'Nunito, sans-serif',
                        }}
                      >
                        Mon-Fri: 9AM-6PM EST
                        <br />Weekend: 10AM-4PM EST
                      </Text>
                    </Box>
                  </Group>
                </Stack>
              </Paper>

              {/* Social Links */}
              <Paper
                style={{
                  background: colors.cardBg,
                  backdropFilter: 'blur(24px)',
                  borderRadius: rem(12),
                  padding: isMobile ? rem(12) : rem(14),
                  border: `1px solid ${colors.border}`,
                  boxShadow: isDark
                    ? '0 10px 20px rgba(0, 0, 0, 0.15)'
                    : '0 10px 20px rgba(139, 92, 246, 0.08)',
                }}
              >
                  <Text
                    size={isMobile ? "xs" : "sm"}
                    fw={600}
                    mb="xs"
                    style={{
                      color: colors.text,
                      fontFamily: 'Nunito, sans-serif',
                    }}
                  >
                    Quick Support Resources
                  </Text>
                  <Group gap={isMobile ? "xs" : "sm"} justify={isMobile ? "center" : "flex-start"}>
                    <ActionIcon
                      size={isMobile ? "md" : "lg"}
                      radius="md"
                      style={{
                        background: colors.primary,
                        color: '#ffffff',
                      }}
                      title="Help Center"
                    >
                      <IconHelp size={isMobile ? 16 : 18} />
                    </ActionIcon>
                    <ActionIcon
                      size={isMobile ? "md" : "lg"}
                      radius="md"
                      style={{
                        background: colors.accent,
                        color: '#ffffff',
                      }}
                      title="Live Support"
                    >
                      <IconLifebuoy size={isMobile ? 16 : 18} />
                    </ActionIcon>
                    <ActionIcon
                      size={isMobile ? "md" : "lg"}
                      radius="md"
                      style={{
                        background: colors.secondary,
                        color: '#1a202c',
                      }}
                      title="Documentation"
                    >
                      <IconFileText size={isMobile ? 16 : 18} />
                    </ActionIcon>
                </Group>
              </Paper>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>

      {/* Footer */}
      <ProfessionalFooter />

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
        
        @keyframes gentlePulse {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.3;
          }
          50% { 
            transform: scale(1.1); 
            opacity: 0.5;
          }
        }
      `}</style>
    </Box>
  );
}

export default ProfessionalSupportPage;