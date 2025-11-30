import React from 'react';
import { Box, useMantineColorScheme } from '@mantine/core';
import FloatingCircularHeader from '../../components/layout/Header/FloatingCircularHeader';
import FloatingVideoHero from '../../components/sections/FloatingVideoHero/FloatingVideoHero';
import SplitScreenCinemaHero from '../../components/sections/SplitScreenCinemaHero/SplitScreenCinemaHero';
import ProductGrid from '../../components/ui/ProductGrid/ProductGrid';
import TestimonialSection from '../../components/sections/TestimonialSection/TestimonialSection';
import ProfessionalFAQSection from '../../components/sections/ProfessionalFAQSection/ProfessionalFAQSection';
import ProfessionalFooter from '../../components/layout/Footer/ProfessionalFooter';

// Import the transformation and feature components
import AINeuralProcessor from '../../components/sections/AINeuralProcessor/AINeuralProcessor';

function HomePage() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Box
      style={{
        background: isDark 
          ? 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)'
          : 'linear-gradient(135deg, #fef3c7 0%, #fde68a 10%, #f3e8ff 30%, #e0e7ff 60%, #dbeafe 90%, #f0f9ff 100%)',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      }}
    >
      {/* Header */}
      <FloatingCircularHeader />
      
      {/* 1. HOOK: Main Live Transformation Hero - Grab attention with AI magic */}
      <FloatingVideoHero />
      
      {/* 2. PRODUCT: Available Books - Show what they can buy after trust is built */}
      <ProductGrid />
      {/* 3. CREDIBILITY: Testimonials - Build trust with social proof early */}
      <TestimonialSection />
    
      {/* 6. IMMERSION: Split Screen Cinema - Cinematic experience for engagement */}
      <SplitScreenCinemaHero />
      
      {/* 7. TECHNOLOGY: Neural Processor - Advanced tech for final confidence */}
      <AINeuralProcessor />
      
      {/* 8. OBJECTIONS: FAQ Section - Remove final barriers to purchase */}
      <ProfessionalFAQSection />
      
      {/* 9. Footer - Final call-to-action and conversion */}
      <ProfessionalFooter />
    </Box>
  );
}

export default HomePage;