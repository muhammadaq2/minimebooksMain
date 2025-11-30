import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Container, 
  Text, 
  Box,
  Group,
  Stack,
  Button,
  Select,
  TextInput,
  rem,
  useMantineColorScheme,
  Grid,
  Image,
  Badge,
  Card,
  Paper,
  ActionIcon,
  Tooltip,
  Stepper,
  Progress,
  Transition
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { 
  IconChevronLeft, 
  IconChevronRight, 
  IconCheck, 
  IconBook, 
  IconUser, 
  IconEye, 
  IconShoppingCart,
  IconWorld,
  IconCalendar
} from '@tabler/icons-react';

// Import header and footer components
import FloatingCircularHeader from '../../components/layout/Header/FloatingCircularHeader';
import ProfessionalFooter from '../../components/layout/Footer/ProfessionalFooter';

// Import step components
import BookSelectionStep from './components/BookSelectionStep';
import ChildInformationStep from './components/ChildInformationStep';
import BookPreviewStep from './components/BookPreviewStep';

function PersonalizationPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const isSmallMobile = useMediaQuery('(max-width: 480px)');
  const isMediumMobile = useMediaQuery('(max-width: 640px)');
  
  // State management
  const [currentStep, setCurrentStep] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Form data state
  const [formData, setFormData] = useState({
    selectedBook: null,
    childName: '',
    childAge: '',
    language: 'english'
  });

  useEffect(() => {
    setMounted(true);
    // Load book data based on ID
    loadBookData();
  }, [id]);

  const loadBookData = () => {
    // Mock book data - in real implementation, this would fetch from API
    const bookData = {
      id: id || 1,
      title: "Boy Explores the World of Jobs",
      description: "What do people do when they grow up? From doctors and farmers to zookeepers and firefighters, this little kid is determined to figure out the important roles that people play in the big wide world.",
      ageRange: "4-8 Years",
      coverImage: "https://storage.wonderwraps.com/c94b3c35-fb0e-448f-85f1-3968004417b4/sRLuayulk8mSEEOpfXQGKgAKaAumsC-metaSTVyUzlmMURxZWxwQkM3eUpHdEhnNWV3bXVScW1uM2E0U0FhRGhpRS1wcmV2aWV3LmpwZw==-.jpg",
      pages: 32
    };
    
    setFormData(prev => ({
      ...prev,
      selectedBook: bookData
    }));
  };

  // Theme colors matching ProductDetailPage
  const colors = isDark ? {
    primary: '#a855f7',
    background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)',
    text: '#f8fafc',
    textSecondary: '#cbd5e1',
    textMuted: '#94a3b8',
    border: 'rgba(255, 255, 255, 0.1)',
    cardBg: 'rgba(255, 255, 255, 0.05)',
  } : {
    primary: '#8B5CF6',
    background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 10%, #f3e8ff 30%, #e0e7ff 60%, #dbeafe 90%, #f0f9ff 100%)',
    text: '#1e293b',
    textSecondary: '#475569',
    textMuted: '#9ca3af',
    border: 'rgba(0, 0, 0, 0.08)',
    cardBg: 'rgba(255, 255, 255, 0.6)',
  };

  const steps = [
    {
      label: 'Book',
      icon: IconBook,
      title: 'Selected Book',
      description: 'Confirm your book choice'
    },
    {
      label: 'Child Info',
      icon: IconUser,
      title: 'Child Information',
      description: 'Tell us about your child'
    },
    {
      label: 'Preview',
      icon: IconEye,
      title: 'Book Preview',
      description: 'Preview your personalized book'
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFormDataUpdate = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  const handleContinueToPayment = () => {
    setIsLoading(true);
    // Simulate adding to cart
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to payment/checkout page
      navigate('/checkout', { state: { bookData: formData } });
    }, 1500);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return formData.selectedBook !== null;
      case 1:
        return formData.childName.trim() !== '' && 
               formData.childAge.trim() !== '' && 
               formData.language !== '';
      case 2:
        return true;
      default:
        return false;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <BookSelectionStep 
            bookData={formData.selectedBook}
            colors={colors}
            isMobile={isMobile}
            isDark={isDark}
          />
        );
      case 1:
        return (
          <ChildInformationStep 
            formData={formData}
            onDataUpdate={handleFormDataUpdate}
            colors={colors}
            isMobile={isMobile}
            isDark={isDark}
          />
        );
      case 2:
        return (
          <BookPreviewStep 
            formData={formData}
            colors={colors}
            isMobile={isMobile}
            isDark={isDark}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Box
      style={{
        minHeight: '100vh',
        background: colors.background,
        width: '100%',
        position: 'relative',
        backgroundAttachment: isMobile ? 'initial' : 'fixed',
        backgroundSize: 'cover',
      }}
    >
      {/* Header */}
      <FloatingCircularHeader />
      
      {/* Main Content */}
      <Transition mounted={mounted} transition="slide-up" duration={600}>
        {(styles) => (
          <div style={styles}>
            <Container 
              size={isMobile ? "sm" : "lg"} 
              pt={rem(140)} 
              pb={rem(80)} 
              px={isMobile ? rem(16) : rem(24)}
            >
              {/* Page Header */}
              <Stack gap="xl" mb="xl">
                <Box ta="center">
                  <Text
                    size={isMobile ? "2rem" : "2.5rem"}
                    fw={700}
                    style={{
                      color: colors.text,
                      fontFamily: 'Quicksand, sans-serif',
                      lineHeight: 1.2,
                      marginBottom: rem(8),
                    }}
                  >
                    Start Personalisation
                  </Text>
                  <Text
                    size={isMobile ? "md" : "lg"}
                    style={{
                      color: colors.textSecondary,
                      fontFamily: 'Nunito, sans-serif',
                      maxWidth: rem(600),
                      margin: '0 auto',
                    }}
                  >
                    Create a magical, personalized story just for your child
                  </Text>
                </Box>

                {/* Progress Stepper */}
                <Card
                  style={{
                    background: colors.cardBg,
                    backdropFilter: 'blur(15px)',
                    border: `1px solid ${colors.border}`,
                    borderRadius: rem(16),
                  }}
                  p={isMobile ? "md" : "lg"}
                >
                  <Stepper 
                    active={currentStep} 
                    breakpoint="sm"
                    size={isMobile ? "xs" : "sm"}
                    styles={{
                      step: {
                        '&[data-completed]': {
                          '& .mantine-Stepper-stepIcon': {
                            backgroundColor: colors.primary,
                            borderColor: colors.primary,
                          }
                        },
                        '&[data-progress]': {
                          '& .mantine-Stepper-stepIcon': {
                            backgroundColor: colors.primary,
                            borderColor: colors.primary,
                          }
                        }
                      },
                      stepLabel: {
                        color: colors.text,
                        fontFamily: 'Nunito, sans-serif',
                        fontWeight: 500,
                      },
                      stepDescription: {
                        color: colors.textMuted,
                        fontFamily: 'Nunito, sans-serif',
                      },
                      separator: {
                        backgroundColor: colors.border,
                      }
                    }}
                  >
                    {steps.map((step, index) => {
                      const StepIcon = step.icon;
                      return (
                        <Stepper.Step
                          key={index}
                          label={step.label}
                          description={isMobile ? undefined : step.description}
                          icon={<StepIcon size={16} />}
                          completedIcon={<IconCheck size={16} />}
                        />
                      );
                    })}
                  </Stepper>
                </Card>
              </Stack>

              {/* Step Content */}
              <Card
                style={{
                  background: colors.cardBg,
                  backdropFilter: 'blur(15px)',
                  border: `1px solid ${colors.border}`,
                  borderRadius: rem(20),
                  minHeight: isMobile ? rem(400) : rem(500),
                }}
                p={isMobile ? "lg" : "xl"}
              >
                <Transition
                  mounted={true}
                  transition="slide-right"
                  duration={300}
                  key={currentStep}
                >
                  {(transitionStyles) => (
                    <div style={transitionStyles}>
                      {renderStepContent()}
                    </div>
                  )}
                </Transition>
              </Card>

              {/* Navigation Controls */}
              <Group 
                justify="space-between" 
                mt="xl"
                style={{
                  flexDirection: isMobile && currentStep === 0 ? 'column' : 'row',
                  gap: isMobile ? rem(12) : rem(16),
                }}
              >
                {currentStep > 0 ? (
                  <Button
                    leftSection={<IconChevronLeft size={18} />}
                    variant="light"
                    size={isMobile ? "md" : "lg"}
                    onClick={handlePrevious}
                    style={{
                      background: colors.cardBg,
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${colors.border}`,
                      color: colors.text,
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 500,
                      width: isMobile ? '100%' : 'auto',
                    }}
                  >
                    Previous
                  </Button>
                ) : <div />}

                {currentStep < steps.length - 1 ? (
                  <Button
                    rightSection={<IconChevronRight size={18} />}
                    size={isMobile ? "md" : "lg"}
                    onClick={handleNext}
                    disabled={!canProceed()}
                    style={{
                      background: canProceed() 
                        ? `linear-gradient(135deg, ${colors.primary} 0%, #6366f1 100%)`
                        : colors.cardBg,
                      border: 'none',
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 600,
                      boxShadow: canProceed() ? '0 4px 15px 0 rgba(139, 92, 246, 0.3)' : 'none',
                      width: isMobile ? '100%' : 'auto',
                    }}
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button
                    rightSection={<IconShoppingCart size={18} />}
                    size={isMobile ? "md" : "lg"}
                    onClick={handleContinueToPayment}
                    loading={isLoading}
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary} 0%, #6366f1 100%)`,
                      border: 'none',
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 600,
                      boxShadow: '0 4px 15px 0 rgba(139, 92, 246, 0.3)',
                      width: isMobile ? '100%' : 'auto',
                    }}
                  >
                    {isLoading ? 'Adding to Cart...' : 'Continue to Checkout'}
                  </Button>
                )}
              </Group>
            </Container>
          </div>
        )}
      </Transition>
      
      {/* Footer */}
      <ProfessionalFooter />
    </Box>
  );
}

export default PersonalizationPage;
