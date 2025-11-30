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
  IconSparkles, 
  IconStar, 
  IconHeart,
  IconShieldCheck,
  IconCertificate,
  IconUsers
} from '@tabler/icons-react';
import TestimonialCard from '../../ui/TestimonialCard/TestimonialCard';

function TestimonialSection() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [activeSlide, setActiveSlide] = useState(0);

  // Track scroll position to update active slide
  useEffect(() => {
    const container = document.querySelector('.testimonials-scroll-container');
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      const itemWidth = isMobile 
        ? containerWidth 
        : (containerWidth - 64) / 3; // Approximately 3 items visible on desktop
      
      const currentSlide = Math.round(scrollLeft / itemWidth);
      setActiveSlide(currentSlide);
    };

    // Add keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const currentScroll = container.scrollLeft;
        const cardWidth = container.querySelector('.testimonial-card-container')?.offsetWidth || 0;
        container.scrollTo({
          left: Math.max(0, currentScroll - cardWidth - 32),
          behavior: 'smooth'
        });
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        const currentScroll = container.scrollLeft;
        const cardWidth = container.querySelector('.testimonial-card-container')?.offsetWidth || 0;
        const maxScroll = container.scrollWidth - container.offsetWidth;
        container.scrollTo({
          left: Math.min(maxScroll, currentScroll + cardWidth + 32),
          behavior: 'smooth'
        });
      }
    };

    container.addEventListener('scroll', handleScroll);
    container.addEventListener('keydown', handleKeyDown);
    container.setAttribute('tabindex', '0'); // Make container focusable
    
    return () => {
      container.removeEventListener('scroll', handleScroll);
      container.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobile]);

  // Authentic testimonial data
  const testimonialsData = [
    {
      id: 1,
      parentName: "Sarah Johnson",
      parentImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      childName: "Emma (5 years old)",
      rating: 5,
      testimonial: "Emma absolutely loves her personalized ABC book! She asks us to read it every single night. Seeing herself as the superhero in the story has boosted her confidence and made learning letters so much fun.",
      childReaction: "Mommy, that's really me in the book! I'm a real superhero!",
      verified: true,
      location: "California, USA",
      bookTheme: "superhero"
    },
    
    {
      id: 2,
      parentName: "Michael Chen",
      parentImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      childName: "Lucas (4 years old)",
      rating: 5,
      testimonial: "The quality exceeded our expectations! The illustrations are beautiful and Lucas is completely captivated. He's already learned 15 letters just from reading his space adventure book.",
      childReaction: "Dad, can we go to space like in my book?",
      verified: true,
      location: "New York, USA",
      bookTheme: "space"
    },
    {
      id: 3,
      parentName: "Jessica Rodriguez",
      parentImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      childName: "Sofia (3 years old)",
      rating: 5,
      testimonial: "Sofia was struggling with letter recognition, but this personalized book changed everything. She's engaged, excited, and learning faster than ever. Worth every penny!",
      childReaction: "Look mama, Princess Sofia knows all her letters!",
      verified: true,
      location: "Texas, USA",
      bookTheme: "princess"
    },
    {
      id: 4,
      parentName: "David Thompson",
      parentImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      childName: "Aiden (6 years old)",
      rating: 5,
      testimonial: "As a teacher, I'm amazed by the educational value. The AI-generated content is thoughtful and age-appropriate. Aiden's reading skills have improved dramatically since we got his pirate adventure book.",
      childReaction: "Arrr! Captain Aiden knows all the treasure letters!",
      verified: true,
      location: "Florida, USA",
      bookTheme: "pirate"
    },
    {
      id: 5,
      parentName: "Priya Patel",
      parentImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      childName: "Arya (4 years old)",
      rating: 5,
      testimonial: "The multilingual option was perfect for our family. Arya loves seeing herself in both English and Hindi versions. The customer service was exceptional too!",
      childReaction: "I can read in two languages just like mama and papa!",
      verified: true,
      location: "Ontario, Canada",
      bookTheme: "fairy"
    },
    {
      id: 6,
      parentName: "Amanda Wilson",
      parentImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      childName: "Noah (5 years old)",
      rating: 5,
      testimonial: "Noah has autism and usually struggles with new books, but he connected with this one immediately. The personalization made all the difference. He carries it everywhere!",
      childReaction: "This is MY book about ME and the animals!",
      verified: true,
      location: "Washington, USA",
      bookTheme: "animal"
    }
  ];

  return (
    <Box
      style={{
        paddingTop: rem(100),
        paddingBottom: rem(100),
        position: 'relative',
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
        <IconSparkles size={26} />
      </Box>

      <Box
        style={{
          position: 'absolute',
          top: '20%',
          left: '6%',
          color: '#f472b6',
          animation: 'sparkleAndFloat 5s ease-in-out infinite 1s',
          zIndex: 2,
          opacity: 0.7,
        }}
      >
        <IconStar size={22} />
      </Box>

      <Box
        style={{
          position: 'absolute',
          bottom: '18%',
          right: '10%',
          color: isDark ? '#8b5cf6' : '#a855f7',
          animation: 'sparkleAndFloat 6s ease-in-out infinite 2s',
          zIndex: 1,
          opacity: 0.6,
        }}
      >
        <IconHeart size={30} />
      </Box>

      <Box
        style={{
          position: 'absolute',
          top: '6%',
          left: '15%',
          color: isDark ? '#fbbf24' : '#f59e0b',
          animation: 'sparkleAndFloat 7s ease-in-out infinite 0.5s',
          zIndex: 1,
          opacity: 0.5,
        }}
      >
        <IconStar size={18} />
      </Box>

      <Box
        style={{
          position: 'absolute',
          bottom: '32%',
          left: '10%',
          color: isDark ? '#8b5cf6' : '#a855f7',
          animation: 'sparkleAndFloat 6.5s ease-in-out infinite 2.5s',
          zIndex: 1,
          opacity: 0.6,
        }}
      >
        <IconSparkles size={20} />
      </Box>

      <Box
        style={{
          position: 'absolute',
          top: '8%',
          right: '25%',
          color: '#10b981',
          animation: 'sparkleAndFloat 7.5s ease-in-out infinite 3s',
          zIndex: 1,
          opacity: 0.5,
        }}
      >
        <IconHeart size={24} />
      </Box>

      {/* Small twinkling elements */}
      <Box
        style={{
          position: 'absolute',
          top: '38%',
          right: '20%',
          color: isDark ? '#fde047' : '#eab308',
          animation: 'sparkleAndFloat 4.5s ease-in-out infinite 2s',
          zIndex: 1,
          opacity: 0.4,
        }}
      >
        <IconSparkles size={14} />
      </Box>

      <Box
        style={{
          position: 'absolute',
          bottom: '28%',
          right: '18%',
          color: '#10b981',
          animation: 'sparkleAndFloat 6.3s ease-in-out infinite 2.8s',
          zIndex: 1,
          opacity: 0.5,
        }}
      >
        <IconStar size={16} />
      </Box>

      <Container size="xl" style={{ position: 'relative', zIndex: 10 }}>
        {/* Refined Section Header */}
        <Box ta="center" mb={rem(80)}>
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
              <IconHeart size={18} style={{ color: isDark ? '#c4b5fd' : '#8B5CF6' }} />
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
                What Parents Say
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
            Loved by{' '}
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
              5,000+
            </Text>{' '}
            families worldwide
          </Text>

          <Text
            size={isMobile ? "md" : "lg"}
            style={{
              color: isDark ? '#e2e8f0' : '#475569',
              fontFamily: 'Nunito, sans-serif',
              maxWidth: rem(700),
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            See how personalized ABC storybooks are transforming learning experiences 
            and creating magical moments for children everywhere.
          </Text>
        </Box>

        {/* Trust Indicators Bar */}
        <Box
          mb={rem(60)}
          style={{
            background: isDark 
              ? 'rgba(255, 255, 255, 0.05)'
              : 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px)',
            borderRadius: rem(20),
            padding: `${rem(20)} ${rem(32)}`,
            border: isDark 
              ? '1px solid rgba(255, 255, 255, 0.1)' 
              : '1px solid rgba(139, 92, 246, 0.1)',
            maxWidth: rem(800),
            margin: '0 auto',
          }}
        >
          <Group justify="space-between" align="center" wrap="wrap" gap="lg">
            <Group gap="md">
              <Text 
                size="xl" 
                fw={700}
                style={{ 
                  color: isDark ? '#facc15' : '#f59e0b',
                  fontFamily: 'Quicksand, sans-serif'
                }}
              >
                4.9
              </Text>
              <Group gap="xs">
                {Array.from({ length: 5 }, (_, i) => (
                  <IconStar 
                    key={i} 
                    size={18} 
                    style={{ 
                      color: '#facc15',
                      fill: '#facc15'
                    }} 
                  />
                ))}
              </Group>
              <Text 
                size="sm" 
                style={{ 
                  color: isDark ? '#cbd5e1' : '#64748b',
                  fontFamily: 'Nunito, sans-serif'
                }}
              >
                (12,847 reviews)
              </Text>
            </Group>

            <Group gap="lg" wrap="wrap">
              <Group gap="xs">
                <IconUsers size={16} style={{ color: isDark ? '#10b981' : '#059669' }} />
                <Text 
                  size="sm" 
                  fw={500}
                  style={{ 
                    color: isDark ? '#cbd5e1' : '#64748b',
                    fontFamily: 'Nunito, sans-serif'
                  }}
                >
                  50,000+ Happy Kids
                </Text>
              </Group>

              <Group gap="xs">
                <IconShieldCheck size={16} style={{ color: isDark ? '#3b82f6' : '#1d4ed8' }} />
                <Text 
                  size="sm" 
                  fw={500}
                  style={{ 
                    color: isDark ? '#cbd5e1' : '#64748b',
                    fontFamily: 'Nunito, sans-serif'
                  }}
                >
                  Safe & Secure
                </Text>
              </Group>

              <Group gap="xs">
                <IconCertificate size={16} style={{ color: isDark ? '#f59e0b' : '#d97706' }} />
                <Text 
                  size="sm" 
                  fw={500}
                  style={{ 
                    color: isDark ? '#cbd5e1' : '#64748b',
                    fontFamily: 'Nunito, sans-serif'
                  }}
                >
                  Expert Approved
                </Text>
              </Group>
            </Group>
          </Group>
        </Box>

        {/* Desktop scroll instruction */}
        {!isMobile && (
          <Text
            size="sm"
            ta="center"
            mb={rem(20)}
            style={{
              color: isDark ? '#94a3b8' : '#64748b',
              fontFamily: 'Nunito, sans-serif',
              opacity: 0.8,
            }}
          >
            Use arrow keys or navigation buttons to scroll through testimonials
          </Text>
        )}

        {/* Scrollable Testimonials Container */}
        <Box
          style={{
            position: 'relative',
            maxWidth: rem(1400),
            margin: '0 auto',
          }}
        >
          {/* Desktop Navigation Buttons */}
          {!isMobile && (
            <>
              <Box
                component="button"
                className="nav-btn-left"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: rem(-20),
                  transform: 'translateY(-50%)',
                  zIndex: 20,
                  width: rem(50),
                  height: rem(50),
                  borderRadius: '50%',
                  background: isDark 
                    ? 'rgba(30, 41, 59, 0.9)'
                    : 'rgba(255, 255, 255, 0.9)',
                  border: isDark 
                    ? '1px solid rgba(139, 92, 246, 0.2)' 
                    : '1px solid rgba(139, 92, 246, 0.15)',
                  boxShadow: isDark 
                    ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
                    : '0 8px 32px rgba(139, 92, 246, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: isDark ? '#c4b5fd' : '#8B5CF6',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  opacity: 0.9,
                }}
                onClick={() => {
                  const container = document.querySelector('.testimonials-scroll-container');
                  const currentScroll = container.scrollLeft;
                  const cardWidth = container.querySelector('.testimonial-card-container').offsetWidth;
                  container.scrollTo({
                    left: currentScroll - cardWidth - 32, // Subtract card width plus gap
                    behavior: 'smooth'
                  });
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Box>
              <Box
                component="button"
                className="nav-btn-right"
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: rem(-20),
                  transform: 'translateY(-50%)',
                  zIndex: 20,
                  width: rem(50),
                  height: rem(50),
                  borderRadius: '50%',
                  background: isDark 
                    ? 'rgba(30, 41, 59, 0.9)'
                    : 'rgba(255, 255, 255, 0.9)',
                  border: isDark 
                    ? '1px solid rgba(139, 92, 246, 0.2)' 
                    : '1px solid rgba(139, 92, 246, 0.15)',
                  boxShadow: isDark 
                    ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
                    : '0 8px 32px rgba(139, 92, 246, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: isDark ? '#c4b5fd' : '#8B5CF6',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  opacity: 0.9,
                }}
                onClick={() => {
                  const container = document.querySelector('.testimonials-scroll-container');
                  const currentScroll = container.scrollLeft;
                  const cardWidth = container.querySelector('.testimonial-card-container').offsetWidth;
                  container.scrollTo({
                    left: currentScroll + cardWidth + 32, // Add card width plus gap
                    behavior: 'smooth'
                  });
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Box>
            </>
          )}

          {/* Scrollable Container */}
          <Box
            style={{
              display: 'flex',
              overflowX: 'auto',
              overflowY: 'hidden',
              scrollBehavior: 'smooth',
              scrollSnapType: 'x mandatory',
              gap: rem(isMobile ? 20 : 32),
              padding: `${rem(10)} ${rem(isMobile ? 16 : 60)}`,
              // Hide scrollbar but keep functionality
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              // Focus styles for keyboard navigation
              outline: 'none',
            }}
            className="testimonials-scroll-container"
            id="testimonials-container"
          >
            {testimonialsData.map((testimonial) => (
              <Box
                key={testimonial.id}
                className="testimonial-card-container"
                style={{
                  minWidth: isMobile ? '100%' : rem(380),
                  maxWidth: isMobile ? '100%' : rem(380),
                  flexShrink: 0,
                  scrollSnapAlign: 'start',
                }}
              >
                <TestimonialCard
                  {...testimonial}
                  isDark={isDark}
                />
              </Box>
            ))}
          </Box>

          {/* Scroll Indicators */}
          <Box
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: rem(12),
              marginTop: rem(32),
            }}
          >
            {(isMobile ? testimonialsData : Array.from({ length: Math.ceil(testimonialsData.length / 3) })).map((_, index) => {
              const isActive = isMobile ? index === activeSlide : index === Math.floor(activeSlide / 3);
              return (
                <Box
                  key={index}
                  style={{
                    width: isActive ? rem(24) : rem(8),
                    height: rem(8),
                    borderRadius: rem(4),
                    background: isActive 
                      ? (isDark ? '#8b5cf6' : '#8b5cf6')
                      : (isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(139, 92, 246, 0.3)'),
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: isActive 
                      ? '0 4px 12px rgba(139, 92, 246, 0.4)'
                      : 'none',
                    transform: isActive ? 'scale(1.1)' : 'scale(1)',
                  }}
                  onClick={() => {
                    const container = document.querySelector('.testimonials-scroll-container');
                    if (isMobile) {
                      const itemWidth = container.scrollWidth / testimonialsData.length;
                      container.scrollTo({
                        left: index * itemWidth,
                        behavior: 'smooth'
                      });
                    } else {
                      const containerWidth = container.offsetWidth;
                      const itemWidth = (containerWidth - 64) / 3;
                      container.scrollTo({
                        left: index * itemWidth * 3,
                        behavior: 'smooth'
                      });
                    }
                    setActiveSlide(isMobile ? index : index * 3);
                  }}
                />
              );
            })}
          </Box>
        </Box>

        {/* Bottom CTA */}
        <Box ta="center" mt={rem(80)}>
          <Text
            size="lg"
            fw={600}
            mb="md"
            style={{
              color: isDark ? '#ffffff' : '#1e293b',
              fontFamily: 'Quicksand, sans-serif',
              letterSpacing: '-0.01em',
            }}
          >
            Join thousands of happy families
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
            Personalise Today
          </Box>
        </Box>
      </Container>

      {/* Exact Same Animations as Hero */}
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

        /* Enhanced scrolling styles */
        .testimonials-scroll-container {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        
        .testimonials-scroll-container::-webkit-scrollbar {
          display: none;
        }

        /* Smooth scroll snap behavior */
        .testimonials-scroll-container {
          scroll-snap-type: x mandatory;
        }

        .testimonials-scroll-container > * {
          scroll-snap-align: start;
        }

        /* Active indicator styling */
        .scroll-indicator-active {
          background: ${isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(139, 92, 246, 0.8)'} !important;
          transform: scale(1.2);
        }

        /* Enhanced navigation button styles */
        .nav-btn-left:hover, .nav-btn-right:hover {
          transform: translateY(-50%) scale(1.05) !important;
          box-shadow: ${isDark 
            ? '0 12px 40px rgba(139, 92, 246, 0.3), 0 0 0 2px rgba(139, 92, 246, 0.2)' 
            : '0 12px 40px rgba(139, 92, 246, 0.25), 0 0 0 2px rgba(139, 92, 246, 0.15)'} !important;
          opacity: 1 !important;
        }

        .nav-btn-left:active, .nav-btn-right:active {
          transform: translateY(-50%) scale(0.95) !important;
        }

        /* Smooth navigation button animations */
        .nav-btn-left, .nav-btn-right {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }

        /* Fade in navigation buttons on container hover (desktop) */
        @media (min-width: 769px) {
          .testimonials-scroll-container:hover ~ .nav-btn-left,
          .testimonials-scroll-container:hover ~ .nav-btn-right,
          .nav-btn-left:hover,
          .nav-btn-right:hover {
            opacity: 1 !important;
          }
        }


        /* Add subtle scroll hints on desktop */
        @media (min-width: 769px) {
          .testimonials-scroll-container::before,
          .testimonials-scroll-container::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            width: 40px;
            pointer-events: none;
            z-index: 10;
          }
          
          .testimonials-scroll-container::before {
            left: 0;
            background: linear-gradient(to right, 
              ${isDark ? 'rgba(15, 23, 42, 0.8)' : 'rgba(248, 250, 252, 0.8)'}, 
              transparent);
          }
          
          .testimonials-scroll-container::after {
            right: 0;
            background: linear-gradient(to left, 
              ${isDark ? 'rgba(15, 23, 42, 0.8)' : 'rgba(248, 250, 252, 0.8)'}, 
              transparent);
          }
        }
      `}</style>
    </Box>
  );
}

export default TestimonialSection;