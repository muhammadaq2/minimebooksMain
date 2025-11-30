import React, { useState } from 'react';
import { 
  Text, 
  Box,
  Group,
  Stack,
  Select,
  TextInput,
  rem,
  Card,
  Grid,
  Alert,
  SimpleGrid,
  Center,
  FileInput,
  Image
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { 
  IconUser, 
  IconWorld, 
  IconCalendar,
  IconInfoCircle,
  IconPhoto
} from '@tabler/icons-react';

function ChildInformationStep({ formData, onDataUpdate, colors, isMobile, isDark }) {
  // Enhanced mobile breakpoints
  const isSmallMobile = useMediaQuery('(max-width: 480px)');
  const isMediumMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const [errors, setErrors] = useState({});
  const [previewImage, setPreviewImage] = useState(formData.childImagePreview || null);

  const languageOptions = [
    { value: 'english', label: 'English' },
    { value: 'french', label: 'French' },
    { value: 'spanish', label: 'Spanish' }
  ];

  const handleInputChange = (field, value) => {
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }

    onDataUpdate({ [field]: value });
  };

  const validateField = (field, value) => {
    switch (field) {
      case 'childName': {
        if (!value || value.trim().length < 2) {
          return "Please enter your child's first name (at least 2 characters)";
        }
        if (value.length > 20) {
          return 'Name should be 20 characters or less';
        }
        if (!/^[a-zA-Z\s'-]+$/.test(value)) {
          return 'Name should only contain letters, spaces, apostrophes, and hyphens';
        }
        break;
      }
      case 'childAge': {
        const age = parseInt(value, 10);
        if (!value || Number.isNaN(age)) {
          return "Please enter your child's age";
        }
        if (age < 1 || age > 12) {
          return 'Age should be between 1 and 12 years';
        }
        break;
      }
      case 'language': {
        if (!value) {
          return 'Please select a language';
        }
        break;
      }
      case 'childImage': {
        if (!value) {
          return 'Please upload a clear photo of your child';
        }
        break;
      }
      default:
        break;
    }
    return null;
  };

  const handleBlur = (field, value) => {
    const error = validateField(field, value);
    if (error) {
      setErrors(prev => ({ ...prev, [field]: error }));
    }
  };

  const handleImageChange = (file) => {
    if (!file) {
      setPreviewImage(null);
      onDataUpdate({ childImage: null, childImagePreview: null });
      setErrors(prev => ({ ...prev, childImage: 'Please upload a clear photo of your child' }));
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result;
      setPreviewImage(result);
      onDataUpdate({ childImage: file, childImagePreview: result });
      setErrors(prev => ({ ...prev, childImage: null }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <Stack 
      gap={isMobile ? "lg" : "xl"} 
      style={{ 
        height: '100%',
        maxWidth: '100%',
        overflow: 'hidden'
      }}
    >
      {/* Header */}
      <Box ta="center">
        <Group 
          justify="center" 
          gap={isSmallMobile ? "xs" : "sm"} 
          mb={isMobile ? "sm" : "md"}
          style={{
            flexDirection: isSmallMobile ? 'column' : 'row'
          }}
        >
          <Box
            style={{
              background: `linear-gradient(135deg, ${colors.primary} 0%, #6366f1 100%)`,
              borderRadius: '50%',
              padding: isSmallMobile ? rem(6) : rem(8),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: isSmallMobile ? rem(32) : rem(36),
              minHeight: isSmallMobile ? rem(32) : rem(36),
            }}
          >
            <IconUser size={isSmallMobile ? 16 : 20} color="white" />
          </Box>
          <Text
            size={isSmallMobile ? "md" : isMobile ? "lg" : "xl"}
            fw={700}
            style={{
              color: colors.text,
              fontFamily: 'Quicksand, sans-serif',
              textAlign: 'center',
              lineHeight: 1.2
            }}
          >
            Child Information
          </Text>
        </Group>
        <Text
          size={isSmallMobile ? "sm" : "md"}
          style={{
            color: colors.textSecondary,
            fontFamily: 'Nunito, sans-serif',
            maxWidth: isMobile ? '100%' : rem(500),
            margin: '0 auto',
            textAlign: 'center',
            lineHeight: 1.4,
            padding: isSmallMobile ? `0 ${rem(8)}` : '0'
          }}
        >
          Tell us about your child so we can create the perfect personalized story
        </Text>
      </Box>

      {/* Information Alert */}
      <Alert
        icon={<IconInfoCircle size={isSmallMobile ? 14 : 16} />}
        color="blue"
        variant="light"
        styles={{
          root: {
            background: colors.cardBg,
            backdropFilter: 'blur(10px)',
            border: `1px solid ${colors.border}`,
            borderRadius: isSmallMobile ? rem(8) : rem(12),
            padding: isSmallMobile ? rem(12) : rem(16),
            margin: isSmallMobile ? `0 ${rem(4)}` : '0'
          },
          icon: { 
            color: colors.primary,
            minWidth: isSmallMobile ? rem(20) : rem(24)
          },
          message: { 
            color: colors.text, 
            fontFamily: 'Nunito, sans-serif',
            fontSize: isSmallMobile ? rem(13) : rem(14),
            lineHeight: 1.4
          }
        }}
      >
        This information helps us personalize the story and ensure age-appropriate content
      </Alert>

      {/* Form Fields */}
      <Grid 
        gutter={isSmallMobile ? "sm" : isMediumMobile ? "md" : "lg"}
        style={{ margin: isSmallMobile ? `0 ${rem(4)}` : '0' }}
      >
        {/* Language Selection */}
        <Grid.Col span={12}>
          <Card
            style={{
              background: colors.cardBg,
              backdropFilter: 'blur(10px)',
              border: errors.language ? '2px solid #ff6b6b' : `1px solid ${colors.border}`,
              borderRadius: isSmallMobile ? rem(12) : rem(16),
              boxShadow: isSmallMobile ? '0 2px 8px rgba(0,0,0,0.05)' : '0 4px 12px rgba(0,0,0,0.1)'
            }}
            p={isSmallMobile ? "sm" : isMobile ? "md" : "lg"}
          >
            <Group 
              mb={isSmallMobile ? "xs" : "sm"} 
              gap="xs"
              style={{
                flexWrap: 'nowrap',
                alignItems: 'center'
              }}
            >
              <Box
                style={{
                  background: `${colors.primary}20`,
                  borderRadius: '50%',
                  padding: isSmallMobile ? rem(4) : rem(6),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: isSmallMobile ? rem(24) : rem(28),
                  minHeight: isSmallMobile ? rem(24) : rem(28)
                }}
              >
                <IconWorld size={isSmallMobile ? 14 : 16} color={colors.primary} />
              </Box>
              <Text
                size={isSmallMobile ? "sm" : "md"}
                fw={600}
                style={{
                  color: colors.text,
                  fontFamily: 'Quicksand, sans-serif',
                  lineHeight: 1.2
                }}
              >
                Language
              </Text>
            </Group>
            
            <Select
              placeholder="Select language for your book"
              data={languageOptions}
              value={formData.language}
              onChange={(value) => handleInputChange('language', value)}
              onBlur={() => handleBlur('language', formData.language)}
              size="md"
              radius="md"
              styles={{
                input: {
                  background: 'transparent',
                  border: 'none',
                  color: colors.text,
                  fontFamily: 'Nunito, sans-serif',
                  fontSize: rem(16),
                  height: rem(48),
                  '&::placeholder': {
                    color: colors.textMuted,
                  }
                },
                dropdown: {
                  background: colors.cardBg,
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${colors.border}`,
                  borderRadius: rem(12),
                },
                option: {
                  color: colors.text,
                  fontFamily: 'Nunito, sans-serif',
                  '&[data-selected]': {
                    background: `${colors.primary}20`,
                  },
                  '&:hover': {
                    background: `${colors.primary}10`,
                  }
                }
              }}
              error={errors.language}
            />
          </Card>
        </Grid.Col>

        {/* Child's Name */}
        <Grid.Col span={isMediumMobile ? 12 : 6}>
          <Card
            style={{
              background: colors.cardBg,
              backdropFilter: 'blur(10px)',
              border: errors.childName ? '2px solid #ff6b6b' : `1px solid ${colors.border}`,
              borderRadius: isSmallMobile ? rem(12) : rem(16),
              boxShadow: isSmallMobile ? '0 2px 8px rgba(0,0,0,0.05)' : '0 4px 12px rgba(0,0,0,0.1)'
            }}
            p={isSmallMobile ? "sm" : isMobile ? "md" : "lg"}
          >
            <Group 
              mb={isSmallMobile ? "xs" : "sm"} 
              gap="xs"
              style={{
                flexWrap: 'nowrap',
                alignItems: 'center'
              }}
            >
              <Box
                style={{
                  background: `${colors.primary}20`,
                  borderRadius: '50%',
                  padding: isSmallMobile ? rem(4) : rem(6),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: isSmallMobile ? rem(24) : rem(28),
                  minHeight: isSmallMobile ? rem(24) : rem(28)
                }}
              >
                <IconUser size={isSmallMobile ? 14 : 16} color={colors.primary} />
              </Box>
              <Text
                size={isSmallMobile ? "sm" : "md"}
                fw={600}
                style={{
                  color: colors.text,
                  fontFamily: 'Quicksand, sans-serif',
                  lineHeight: 1.2
                }}
              >
                Child's First Name
              </Text>
            </Group>
            
            <TextInput
              placeholder={isSmallMobile ? "First name" : "Enter your child's first name"}
              value={formData.childName}
              onChange={(event) => handleInputChange('childName', event.currentTarget.value)}
              onBlur={(event) => handleBlur('childName', event.currentTarget.value)}
              size={isSmallMobile ? "sm" : "md"}
              radius="md"
              styles={{
                input: {
                  background: 'transparent',
                  border: 'none',
                  color: colors.text,
                  fontFamily: 'Nunito, sans-serif',
                  fontSize: isSmallMobile ? rem(14) : rem(16),
                  height: isSmallMobile ? rem(40) : rem(48),
                  '&::placeholder': {
                    color: colors.textMuted,
                  }
                },
                error: {
                  fontSize: isSmallMobile ? rem(11) : rem(12),
                  marginTop: rem(4)
                }
              }}
              error={errors.childName}
            />
          </Card>
        </Grid.Col>

        {/* Child's Age */}
        <Grid.Col span={isMediumMobile ? 12 : 6}>
          <Card
            style={{
              background: colors.cardBg,
              backdropFilter: 'blur(10px)',
              border: errors.childAge ? '2px solid #ff6b6b' : `1px solid ${colors.border}`,
              borderRadius: isSmallMobile ? rem(12) : rem(16),
              boxShadow: isSmallMobile ? '0 2px 8px rgba(0,0,0,0.05)' : '0 4px 12px rgba(0,0,0,0.1)'
            }}
            p={isSmallMobile ? "sm" : isMobile ? "md" : "lg"}
          >
            <Group 
              mb={isSmallMobile ? "xs" : "sm"} 
              gap="xs"
              style={{
                flexWrap: 'nowrap',
                alignItems: 'center'
              }}
            >
              <Box
                style={{
                  background: `${colors.primary}20`,
                  borderRadius: '50%',
                  padding: isSmallMobile ? rem(4) : rem(6),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: isSmallMobile ? rem(24) : rem(28),
                  minHeight: isSmallMobile ? rem(24) : rem(28)
                }}
              >
                <IconCalendar size={isSmallMobile ? 14 : 16} color={colors.primary} />
              </Box>
              <Text
                size={isSmallMobile ? "sm" : "md"}
                fw={600}
                style={{
                  color: colors.text,
                  fontFamily: 'Quicksand, sans-serif',
                  lineHeight: 1.2
                }}
              >
                Child's Age
              </Text>
            </Group>
            
            <TextInput
              placeholder={isSmallMobile ? "Age (1-12)" : "Age (1-12 years)"}
              value={formData.childAge}
              onChange={(event) => handleInputChange('childAge', event.currentTarget.value)}
              onBlur={(event) => handleBlur('childAge', event.currentTarget.value)}
              type="number"
              min={1}
              max={12}
              size={isSmallMobile ? "sm" : "md"}
              radius="md"
              styles={{
                input: {
                  background: 'transparent',
                  border: 'none',
                  color: colors.text,
                  fontFamily: 'Nunito, sans-serif',
                  fontSize: isSmallMobile ? rem(14) : rem(16),
                  height: isSmallMobile ? rem(40) : rem(48),
                  '&::placeholder': {
                    color: colors.textMuted,
                  }
                },
                error: {
                  fontSize: isSmallMobile ? rem(11) : rem(12),
                  marginTop: rem(4)
                }
              }}
              error={errors.childAge}
            />
          </Card>
        </Grid.Col>

        {/* Child's Photo (required) */}
        <Grid.Col span={12}>
          <Card
            style={{
              background: colors.cardBg,
              backdropFilter: 'blur(10px)',
              border: errors.childImage ? '2px solid #ff6b6b' : `1px solid ${colors.border}`,
              borderRadius: isSmallMobile ? rem(12) : rem(16),
              boxShadow: isSmallMobile ? '0 2px 8px rgba(0,0,0,0.05)' : '0 4px 12px rgba(0,0,0,0.1)'
            }}
            p={isSmallMobile ? "sm" : isMobile ? "md" : "lg"}
          >
            <Group 
              mb={isSmallMobile ? "xs" : "sm"} 
              gap="xs"
              style={{
                flexWrap: 'nowrap',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Group gap="xs" style={{ flexWrap: 'nowrap', alignItems: 'center' }}>
                <Box
                  style={{
                    background: `${colors.primary}20`,
                    borderRadius: '50%',
                    padding: isSmallMobile ? rem(4) : rem(6),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: isSmallMobile ? rem(24) : rem(28),
                    minHeight: isSmallMobile ? rem(24) : rem(28)
                  }}
                >
                  <IconPhoto size={isSmallMobile ? 14 : 16} color={colors.primary} />
                </Box>
                <Box>
                  <Text
                    size={isSmallMobile ? "sm" : "md"}
                    fw={600}
                    style={{
                      color: colors.text,
                      fontFamily: 'Quicksand, sans-serif',
                      lineHeight: 1.2
                    }}
                  >
                    Upload Your Child's Photo
                  </Text>
                  <Text
                    size={isSmallMobile ? "xs" : "sm"}
                    style={{
                      color: colors.textSecondary,
                      fontFamily: 'Nunito, sans-serif',
                      marginTop: rem(2)
                    }}
                  >
                    Required for AI face personalization (clear, front-facing photo)
                  </Text>
                </Box>
              </Group>
              <Text
                size={isSmallMobile ? "xs" : "sm"}
                fw={600}
                style={{
                  color: errors.childImage ? '#ff6b6b' : colors.primary,
                  fontFamily: 'Nunito, sans-serif'
                }}
              >
                Required
              </Text>
            </Group>

            <Group align="flex-start" gap={isSmallMobile ? "sm" : "md"}>
              <Box style={{ flex: 1 }}>
                <FileInput
                  placeholder="Upload a clear photo of your child"
                  accept="image/*"
                  value={null}
                  onChange={handleImageChange}
                  size={isSmallMobile ? "sm" : "md"}
                  radius="md"
                  styles={{
                    input: {
                      background: 'transparent',
                      border: 'none',
                      color: colors.text,
                      fontFamily: 'Nunito, sans-serif',
                      fontSize: isSmallMobile ? rem(14) : rem(16),
                      height: isSmallMobile ? rem(40) : rem(48),
                      '&::placeholder': {
                        color: colors.textMuted,
                      }
                    }
                  }}
                  error={errors.childImage}
                />
                {errors.childImage && (
                  <Text
                    size={isSmallMobile ? "xs" : "sm"}
                    style={{
                      color: '#ff6b6b',
                      fontFamily: 'Nunito, sans-serif',
                      marginTop: rem(4)
                    }}
                  >
                    {errors.childImage}
                  </Text>
                )}
              </Box>

              <Box
                style={{
                  width: isSmallMobile ? rem(120) : rem(160),
                  height: isSmallMobile ? rem(120) : rem(160),
                  borderRadius: isSmallMobile ? rem(10) : rem(12),
                  border: `1px dashed ${colors.border}`,
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: previewImage ? `${colors.primary}05` : 'transparent'
                }}
              >
                {previewImage ? (
                  <Image
                    src={previewImage}
                    alt="Child preview"
                    fit="cover"
                    h="100%"
                    w="100%"
                  />
                ) : (
                  <Text
                    size={isSmallMobile ? "xs" : "sm"}
                    ta="center"
                    style={{
                      color: colors.textSecondary,
                      fontFamily: 'Nunito, sans-serif',
                      padding: rem(8)
                    }}
                  >
                    Your child's photo preview will appear here
                  </Text>
                )}
              </Box>
            </Group>
          </Card>
        </Grid.Col>
      </Grid>

      {/* Preview Info */}
      {formData.childName && formData.childAge && formData.language && (
        <Card
          style={{
            background: `${colors.primary}10`,
            border: `1px solid ${colors.primary}30`,
            borderRadius: isSmallMobile ? rem(12) : rem(16),
            margin: isSmallMobile ? `0 ${rem(4)}` : '0',
            boxShadow: isSmallMobile ? '0 2px 8px rgba(0,0,0,0.05)' : '0 4px 12px rgba(0,0,0,0.1)'
          }}
          p={isSmallMobile ? "sm" : isMobile ? "md" : "lg"}
        >
          <Text
            size={isSmallMobile ? "sm" : "md"}
            fw={600}
            mb={isSmallMobile ? "xs" : "sm"}
            style={{
              color: colors.text,
              fontFamily: 'Quicksand, sans-serif',
              textAlign: 'center',
              lineHeight: 1.2
            }}
          >
            Preview
          </Text>
          <Text
            ta="center"
            size={isSmallMobile ? "sm" : "md"}
            style={{
              color: colors.text,
              fontFamily: 'Nunito, sans-serif',
              lineHeight: 1.5,
              padding: isSmallMobile ? `0 ${rem(4)}` : '0'
            }}
          >
            We'll create a personalized story for{' '}
            <Text
              component="span"
              fw={700}
              style={{ color: colors.primary }}
            >
              {formData.childName}
            </Text>
            {' '}(age {formData.childAge}) in{' '}
            <Text
              component="span"
              fw={700}
              style={{ color: colors.primary }}
            >
              {languageOptions.find(lang => lang.value === formData.language)?.label}
            </Text>
          </Text>
        </Card>
      )}

      {/* Tips */}
      <Box
        style={{
          background: colors.cardBg,
          backdropFilter: 'blur(10px)',
          border: `1px solid ${colors.border}`,
          borderRadius: isSmallMobile ? rem(8) : rem(12),
          padding: isSmallMobile ? rem(12) : rem(16),
          margin: isSmallMobile ? `0 ${rem(4)}` : '0'
        }}
      >
        <Text
          size={isSmallMobile ? "xs" : "sm"}
          fw={500}
          mb={isSmallMobile ? "xs" : "xs"}
          style={{
            color: colors.text,
            fontFamily: 'Nunito, sans-serif',
            lineHeight: 1.3
          }}
        >
          💡 Tips:
        </Text>
        <Text
          size={isSmallMobile ? "xs" : "xs"}
          style={{
            color: colors.textSecondary,
            fontFamily: 'Nunito, sans-serif',
            lineHeight: isSmallMobile ? 1.3 : 1.4,
            fontSize: isSmallMobile ? rem(11) : rem(12)
          }}
        >
          • Use your child's preferred name or nickname<br />
          • Age helps us adjust the story complexity<br />
          • All languages feature professional translations
        </Text>
      </Box>
    </Stack>
  );
}

export default ChildInformationStep;
