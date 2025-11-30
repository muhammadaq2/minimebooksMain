import React, { useState } from 'react';
import { 
  Container, 
  Group, 
  Text, 
  ActionIcon, 
  useMantineColorScheme,
  Stack,
  Box,
  TextInput,
  Divider,
  rem,
  Anchor,
  Image
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { 
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconMail,
  IconSend,
  IconHeart
} from '@tabler/icons-react';

function SimpleModernFooter() {
  const { colorScheme } = useMantineColorScheme();
  const [email, setEmail] = useState('');
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isDark = colorScheme === 'dark';

  // Consistent color palette
  const colors = isDark ? {
    primary: '#a855f7',
    secondary: '#facc15',
    footerBg: 'rgba(30, 27, 75, 0.95)',
    text: '#f8fafc',
    textSecondary: '#cbd5e1',
    border: 'rgba(168, 85, 247, 0.2)',
    glassBg: 'rgba(255, 255, 255, 0.1)',
  } : {
    primary: '#8B5CF6',
    secondary: '#facc15',
    footerBg: 'rgba(139, 92, 246, 0.95)',
    text: '#ffffff',
    textSecondary: '#e2e8f0',
    border: 'rgba(255, 255, 255, 0.2)',
    glassBg: 'rgba(255, 255, 255, 0.15)',
  };

  // Essential links only
  const footerLinks = [
    { label: 'About', href: '/about' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Support', href: '/help' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' }
  ];

  const socialLinks = [
    { icon: IconBrandInstagram, href: '#', label: 'Instagram' },
    { icon: IconBrandFacebook, href: '#', label: 'Facebook' },
    { icon: IconBrandTwitter, href: '#', label: 'Twitter' },
    { icon: IconBrandYoutube, href: '#', label: 'YouTube' }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <Box
      component="footer"
      style={{
        background: colors.footerBg,
        backdropFilter: 'blur(20px)',
        borderTop: `1px solid ${colors.border}`,
        marginTop: rem(80),
      }}
    >
      <Container size="xl" style={{ padding: isMobile ? rem(24) : rem(48) }}>
        
        {/* Main Footer Content */}
        <Stack gap={isMobile ? "xl" : "2xl"}>
          
          {/* Top Section */}
          <Group 
            justify="space-between" 
            align={isMobile ? "flex-start" : "center"}
            wrap={isMobile ? "wrap" : "nowrap"}
            gap="xl"
          >
            
            {/* Logo & Description */}
            <Box style={{ flex: isMobile ? '1 1 100%' : '1 1 auto', maxWidth: isMobile ? '100%' : rem(400) }}>
              {/* Logo Image */}
              <Box mb="sm">
                <Image
                  src="/images%20kids/logo.png"
                  alt="KidsBookWonder Logo"
                  height={isMobile ? 35 : 45}
                  width="auto"
                  fit="contain"
                  style={{
                    maxWidth: rem(200),
                  }}
                />
              </Box>
              
              <Text
                size="sm"
                style={{
                  color: colors.textSecondary,
                  fontFamily: 'Nunito, sans-serif',
                  lineHeight: 1.6,
                }}
              >
                Creating magical, personalized storybooks that transform your child into the hero of their own adventure.
              </Text>
            </Box>

            {/* Newsletter Signup */}
            {!isMobile && (
              <Box style={{ minWidth: rem(300) }}>
                <Text
                  size="sm"
                  fw={600}
                  mb="xs"
                  style={{
                    color: colors.text,
                    fontFamily: 'Quicksand, sans-serif',
                  }}
                >
                  Stay Updated
                </Text>

                <form onSubmit={handleNewsletterSubmit}>
                  <Group gap="xs" wrap="nowrap">
                    <TextInput
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ flex: 1 }}
                      styles={{
                        input: {
                          backgroundColor: colors.glassBg,
                          border: `1px solid ${colors.border}`,
                          color: colors.text,
                          borderRadius: rem(25),
                          '&::placeholder': {
                            color: colors.textSecondary,
                          },
                        }
                      }}
                      size="sm"
                    />
                    <ActionIcon
                      type="submit"
                      size="md"
                      radius="xl"
                      style={{
                        backgroundColor: colors.secondary,
                        color: '#1a202c',
                        border: 'none',
                      }}
                    >
                      <IconSend size={16} />
                    </ActionIcon>
                  </Group>
                </form>
              </Box>
            )}
          </Group>

          {/* Mobile Newsletter */}
          {isMobile && (
            <Box>
              <Text
                size="sm"
                fw={600}
                mb="xs"
                style={{
                  color: colors.text,
                  fontFamily: 'Quicksand, sans-serif',
                }}
              >
                Stay Updated
              </Text>

              <form onSubmit={handleNewsletterSubmit}>
                <Group gap="xs" wrap="nowrap">
                  <TextInput
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ flex: 1 }}
                    styles={{
                      input: {
                        backgroundColor: colors.glassBg,
                        border: `1px solid ${colors.border}`,
                        color: colors.text,
                        borderRadius: rem(25),
                        '&::placeholder': {
                          color: colors.textSecondary,
                        },
                      }
                    }}
                    size="sm"
                  />
                  <ActionIcon
                    type="submit"
                    size="md"
                    radius="xl"
                    style={{
                      backgroundColor: colors.secondary,
                      color: '#1a202c',
                      border: 'none',
                    }}
                  >
                    <IconSend size={16} />
                  </ActionIcon>
                </Group>
              </form>
            </Box>
          )}

          <Divider style={{ borderColor: colors.border }} />

          {/* Bottom Section */}
          <Stack gap="lg">
            
            {/* Links & Social */}
            <Group justify="space-between" align="center" wrap="wrap" gap="md">
              
              {/* Essential Links */}
              <Group gap={isMobile ? "md" : "lg"} wrap="wrap">
                {footerLinks.map((link) => (
                  <Anchor
                    key={link.label}
                    href={link.href}
                    size="sm"
                    style={{
                      color: colors.textSecondary,
                      fontFamily: 'Nunito, sans-serif',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = colors.primary;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = colors.textSecondary;
                    }}
                  >
                    {link.label}
                  </Anchor>
                ))}
              </Group>

              {/* Social Links */}
              <Group gap="xs">
                {socialLinks.map((social) => (
                  <ActionIcon
                    key={social.label}
                    component="a"
                    href={social.href}
                    size="sm"
                    radius="xl"
                    style={{
                      backgroundColor: colors.glassBg,
                      border: `1px solid ${colors.border}`,
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = colors.primary;
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = colors.glassBg;
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    <social.icon size={16} style={{ color: colors.text }} />
                  </ActionIcon>
                ))}
              </Group>
            </Group>

            {/* Copyright & Contact */}
            <Group justify="space-between" align="center" wrap="wrap" gap="md">
              
              {/* Copyright */}
              <Text
                size="xs"
                style={{
                  color: colors.textSecondary,
                  fontFamily: 'Nunito, sans-serif',
                }}
              >
                © 2025 minimebooks. Made with{' '}
                <IconHeart 
                  size={12} 
                  style={{ 
                    color: colors.secondary, 
                    display: 'inline',
                    marginBottom: rem(-2),
                  }} 
                />{' '}
                for families.
              </Text>

              {/* Simple Contact */}
              <Group gap="md" wrap="wrap">
                <Group gap="xs">
                  <IconMail size={14} style={{ color: colors.primary }} />
                  <Text 
                    size="xs" 
                    style={{ 
                      color: colors.textSecondary, 
                      fontFamily: 'Nunito, sans-serif' 
                    }}
                  >
                    support@minimebooks.com
                  </Text>
                </Group>
              </Group>
            </Group>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default SimpleModernFooter;