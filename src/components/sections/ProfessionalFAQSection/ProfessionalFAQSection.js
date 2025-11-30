import React, { useState } from 'react';
import { 
  Container, 
  Text, 
  Box,
  Group,
  Stack,
  Collapse,
  rem,
  useMantineColorScheme 
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { 
  IconQuestionMark,
  IconChevronDown,
  IconChevronUp,
  IconShield,
  IconClock,
  IconPalette,
  IconUsers,
  IconHeart,
  IconBrain
} from '@tabler/icons-react';

function ProfessionalFAQSection() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [openedFAQ, setOpenedFAQ] = useState(null);

  const faqData = [
    {
      id: 1,
      icon: IconBrain,
      question: "How does the AI transformation work?",
      answer: "AI analyzes your child's photo and creates a personalized cartoon character in under 60 seconds.",
      color: "#8b5cf6"
    },
    {
      id: 2,
      icon: IconShield,
      question: "Is it safe to upload my child's photo?",
      answer: "Your privacy is our priority. All photos are encrypted, never stored permanently, and automatically deleted after processing. We're COPPA compliant and follow strict data protection standards.",
      color: "#10b981"
    },
    {
      id: 3,
      icon: IconClock,
      question: "How long does it take to create a personalized book?",
      answer: "Character creation takes under 60 seconds, complete storybooks ready in 2-3 minutes. Digital versions download instantly, physical books ship in 3-5 days.",
      color: "#f59e0b"
    },
    {
      id: 4,
      icon: IconPalette,
      question: "Can I customize the story themes and characters?",
      answer: "Yes! Choose from 50+ themes (superheroes, princesses, animals, etc.) and multiple art styles. Customize expressions, poses, and add siblings to stories.",
      color: "#f472b6"
    },
    {
      id: 5,
      icon: IconUsers,
      question: "What age groups are the books suitable for?",
      answer: "Designed for ages 2-8 with focus on early literacy. We also create books for ages 9-12 with advanced vocabulary and storylines. All content is age-appropriate.",
      color: "#3b82f6"
    }
  ];

  const toggleFAQ = (faqId) => {
    setOpenedFAQ(openedFAQ === faqId ? null : faqId);
  };

  return (
    <Box
      style={{
        paddingTop: rem(100),
        paddingBottom: rem(100),
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Professional Decorative Elements */}
      <Box
        style={{
          position: 'absolute',
          top: '10%',
          right: '8%',
          color: isDark ? '#facc15' : '#8B5CF6',
          animation: 'sparkleAndFloat 4s ease-in-out infinite',
          zIndex: 2,
          opacity: 0.8,
        }}
      >
        <IconQuestionMark size={24} />
      </Box>

      <Box
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '6%',
          color: '#f472b6',
          animation: 'sparkleAndFloat 5s ease-in-out infinite 1s',
          zIndex: 2,
          opacity: 0.7,
        }}
      >
        <IconHeart size={20} />
      </Box>

      <Container size="lg" style={{ position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <Box ta="center" mb={rem(60)}>
          <Group
            justify="center"
            mb="xl"
            style={{
              background: isDark 
                ? 'rgba(139, 92, 246, 0.1)' 
                : 'rgba(139, 92, 246, 0.1)',
              backdropFilter: 'blur(16px)',
              borderRadius: rem(30),
              padding: `${rem(10)} ${rem(24)}`,
              border: `1px solid ${isDark ? 'rgba(139, 92, 246, 0.2)' : 'rgba(139, 92, 246, 0.2)'}`,
              display: 'inline-flex',
              boxShadow: isDark 
                ? '0 8px 32px rgba(139, 92, 246, 0.1)' 
                : '0 8px 32px rgba(139, 92, 246, 0.08)',
            }}
          >
            <Group gap="xs">
              <IconQuestionMark size={18} style={{ color: isDark ? '#c4b5fd' : '#8B5CF6' }} />
              <Text 
                size="sm" 
                fw={600}
                style={{ 
                  color: isDark ? '#c4b5fd' : '#8B5CF6',
                  fontFamily: 'Nunito, sans-serif',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}
              >
                Frequently Asked Questions
              </Text>
            </Group>
          </Group>

          <Text
            component="h2"
            size={isMobile ? "2.2rem" : "3rem"}
            fw={800}
            ta="center"
            mb="xl"
            style={{
              fontFamily: 'Quicksand, sans-serif',
              color: isDark ? '#ffffff' : '#1e293b',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              textShadow: isDark ? '0 2px 4px rgba(255,255,255,0.1)' : '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Got{' '}
            <Text
              component="span"
              inherit
              style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #f472b6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Questions?
            </Text>{' '}
            We've Got Answers
          </Text>

          <Text
            size={isMobile ? "md" : "lg"}
            style={{
              color: isDark ? '#e2e8f0' : '#475569',
              fontFamily: 'Nunito, sans-serif',
              maxWidth: rem(600),
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Everything you need to know about personalising storybooks for your child
          </Text>
        </Box>

        {/* FAQ Accordion */}
        <Stack gap="md" style={{ maxWidth: rem(800), margin: '0 auto' }}>
          {faqData.map((faq) => (
            <Box
              key={faq.id}
              style={{
                background: isDark 
                  ? 'rgba(255, 255, 255, 0.03)'
                  : 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(20px)',
                borderRadius: rem(20),
                border: openedFAQ === faq.id
                  ? `2px solid ${faq.color}40`
                  : `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(139, 92, 246, 0.1)'}`,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: openedFAQ === faq.id
                  ? `0 8px 25px ${faq.color}20`
                  : '0 4px 12px rgba(0,0,0,0.1)',
                transform: openedFAQ === faq.id ? 'translateY(-2px)' : 'translateY(0)',
              }}
            >
              {/* Question Header */}
              <Group
                justify="space-between"
                align="center"
                p={rem(24)}
                style={{ cursor: 'pointer' }}
                onClick={() => toggleFAQ(faq.id)}
                wrap="nowrap"
              >
                <Group gap="md" style={{ flex: 1 }}>
                  {/* Icon */}
                  <Box
                    style={{
                      width: rem(50),
                      height: rem(50),
                      borderRadius: rem(12),
                      background: openedFAQ === faq.id 
                        ? `linear-gradient(135deg, ${faq.color} 0%, ${faq.color}80 100%)`
                        : (isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(139, 92, 246, 0.1)'),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      flexShrink: 0,
                    }}
                  >
                    <faq.icon 
                      size={24} 
                      style={{ 
                        color: openedFAQ === faq.id 
                          ? '#ffffff' 
                          : (isDark ? '#c4b5fd' : faq.color),
                        transition: 'color 0.3s ease',
                      }} 
                    />
                  </Box>

                  {/* Question */}
                  <Text
                    size={isMobile ? "md" : "lg"}
                    fw={700}
                    style={{
                      color: openedFAQ === faq.id 
                        ? faq.color 
                        : (isDark ? '#ffffff' : '#1e293b'),
                      fontFamily: 'Quicksand, sans-serif',
                      transition: 'color 0.3s ease',
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.question}
                  </Text>
                </Group>

                {/* Chevron */}
                <Box
                  style={{
                    color: openedFAQ === faq.id 
                      ? faq.color 
                      : (isDark ? '#94a3b8' : '#64748b'),
                    transition: 'all 0.3s ease',
                    transform: openedFAQ === faq.id ? 'rotate(180deg)' : 'rotate(0deg)',
                    flexShrink: 0,
                  }}
                >
                  <IconChevronDown size={24} />
                </Box>
              </Group>

              {/* Answer */}
              <Collapse in={openedFAQ === faq.id}>
                <Box
                  px={rem(24)}
                  pb={rem(24)}
                  style={{
                    borderTop: `1px solid ${openedFAQ === faq.id ? `${faq.color}20` : 'transparent'}`,
                    marginTop: rem(-1),
                  }}
                >
                  <Group gap="md" align="flex-start">
                    {/* Spacer for alignment */}
                    <Box style={{ width: rem(50), flexShrink: 0 }} />
                    
                    {/* Answer Content */}
                    <Box style={{ flex: 1 }}>
                      <Text
                        size="md"
                        style={{
                          color: isDark ? '#cbd5e1' : '#475569',
                          fontFamily: 'Nunito, sans-serif',
                          lineHeight: 1.6,
                          marginTop: rem(8),
                        }}
                      >
                        {faq.answer}
                      </Text>
                    </Box>
                  </Group>
                </Box>
              </Collapse>
            </Box>
          ))}
        </Stack>

        {/* Bottom CTA */}
        <Box ta="center" mt={rem(60)}>
          <Text
            size="lg"
            fw={600}
            mb="md"
            style={{
              color: isDark ? '#ffffff' : '#1e293b',
              fontFamily: 'Quicksand, sans-serif',
            }}
          >
            Still have questions?
          </Text>
          
          <Text
            size="md"
            mb="lg"
            style={{
              color: isDark ? '#cbd5e1' : '#64748b',
              fontFamily: 'Nunito, sans-serif',
            }}
          >
            Our support team is here to help 24/7
          </Text>

          <Box
            component="button"
            style={{
              background: 'linear-gradient(135deg, #8B5CF6 0%, #9333ea 100%)',
              color: '#ffffff',
              border: 'none',
              borderRadius: rem(30),
              padding: `${rem(16)} ${rem(32)}`,
              fontSize: rem(16),
              fontWeight: 600,
              fontFamily: 'Nunito, sans-serif',
              cursor: 'pointer',
              boxShadow: '0 8px 25px rgba(139, 92, 246, 0.3)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              letterSpacing: '0.2px',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px) scale(1.02)';
              e.target.style.boxShadow = '0 12px 35px rgba(139, 92, 246, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.3)';
            }}
          >
            Contact Support
          </Box>
        </Box>
      </Container>

      {/* Animations */}
      <style jsx global>{`
        @keyframes sparkleAndFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.8;
          }
          25% { 
            transform: translateY(-8px) rotate(90deg) scale(1.1); 
            opacity: 1;
          }
          50% { 
            transform: translateY(-15px) rotate(180deg) scale(1.2); 
            opacity: 0.9;
          }
          75% { 
            transform: translateY(-8px) rotate(270deg) scale(1.1); 
            opacity: 1;
          }
        }
      `}</style>
    </Box>
  );
}

export default ProfessionalFAQSection;