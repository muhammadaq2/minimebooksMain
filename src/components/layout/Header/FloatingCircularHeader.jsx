import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import { Image } from '@mantine/core';

import { 
  Group, 
  Text, 
  Button, 
  ActionIcon, 
  useMantineColorScheme,
  Burger,
  Drawer,
  Stack,
  Box,
  Menu,
  Avatar,
  Divider,
  Badge,
  UnstyledButton,
  rem
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { 
  IconSun, 
  IconMoonStars, 
  IconShoppingCart, 
  IconLogin,
  IconUserPlus,
  IconLogout,
  IconChevronDown,
  IconWorld,
  IconHome
} from '@tabler/icons-react';

function FloatingCircularHeader() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [opened, { toggle, close }] = useDisclosure(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get cart data from context
  const { cartItems } = useCart();
  
  // Enhanced responsive breakpoints
  const isMobile = useMediaQuery('(max-width: 480px)');
  const isSmallMobile = useMediaQuery('(max-width: 360px)');
  const isTablet = useMediaQuery('(max-width: 768px)');
  const isSmallTablet = useMediaQuery('(max-width: 640px)');
  const isLaptop = useMediaQuery('(max-width: 1200px)');
  const isLargeDesktop = useMediaQuery('(min-width: 1440px)');
  const isUltraWide = useMediaQuery('(min-width: 1920px)');
  
  const isDark = colorScheme === 'dark';

  // Authentication state - you can replace this with your actual auth logic
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if we're on auth pages
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  const isHomePage = location.pathname === '/';

  // Sample user data
  const user = {
    name: 'Taimur Khan',
    email: 'taimur@example.com',
    avatar: null,
  };

  // Navigation items
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'My Books', href: '/my-books' },
    { label: 'Support', href: '/support' },
  ];

  // Currency options
  const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'British Pound', symbol: '£' },
  ];

  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  // Navigation handlers
  const handleNavigation = (path) => {
    navigate(path);
    close(); // Close mobile menu if open
  };

  const handleLogin = () => {
    if (location.pathname === '/login') {
      // If already on login page, do nothing or show message
      return;
    }
    navigate('/login');
    close();
  };

  const handleSignup = () => {
    if (location.pathname === '/signup') {
      // If already on signup page, do nothing or show message
      return;
    }
    navigate('/signup');
    close();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
    close();
  };

  // ✨ NEW: Smooth Theme Toggle with Page Reload
  const handleThemeToggle = () => {
    // Add fade-out transition
    document.body.style.transition = 'opacity 0.3s ease';
    document.body.style.opacity = '0';
    
    // Toggle the color scheme (this saves to localStorage)
    toggleColorScheme();
    
    // Wait for fade-out animation, then reload
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  const getResponsiveSizes = () => {
    if (isSmallMobile) {
      return {
        containerPadding: `${rem(6)} ${rem(12)}`,
        borderRadius: rem(20),
        logoSize: 'md',
        actionSize: 'xs',
        iconSize: 14,
        gap: rem(4),
        topOffset: rem(8),
        width: '98%',
        maxWidth: '100%'
      };
    } else if (isMobile) {
      return {
        containerPadding: `${rem(8)} ${rem(16)}`,
        borderRadius: rem(25),
        logoSize: 'lg',
        actionSize: 'sm',
        iconSize: 16,
        gap: rem(6),
        topOffset: rem(12),
        width: '95%',
        maxWidth: '100%'
      };
    } else if (isSmallTablet) {
      return {
        containerPadding: `${rem(10)} ${rem(20)}`,
        borderRadius: rem(28),
        logoSize: 'xl',
        actionSize: 'sm',
        iconSize: 18,
        gap: rem(8),
        topOffset: rem(16),
        width: '92%',
        maxWidth: rem(700)
      };
    } else if (isTablet) {
      return {
        containerPadding: `${rem(12)} ${rem(24)}`,
        borderRadius: rem(30),
        logoSize: 'xl',
        actionSize: 'md',
        iconSize: 18,
        gap: rem(10),
        topOffset: rem(18),
        width: '90%',
        maxWidth: rem(800)
      };
    } else if (isLaptop) {
      return {
        containerPadding: `${rem(16)} ${rem(32)}`,
        borderRadius: rem(35),
        logoSize: 'xl',
        actionSize: 'md',
        iconSize: 20,
        gap: rem(16),
        topOffset: rem(20),
        width: 'fit-content',
        maxWidth: rem(1400),
        minWidth: rem(1100)
      };
    } else if (isLargeDesktop) {
      return {
        containerPadding: `${rem(18)} ${rem(40)}`,
        borderRadius: rem(40),
        logoSize: 'xl',
        actionSize: 'lg',
        iconSize: 20,
        gap: rem(20),
        topOffset: rem(24),
        width: 'fit-content',
        maxWidth: rem(1600),
        minWidth: rem(1200)
      };
    } else if (isUltraWide) {
      return {
        containerPadding: `${rem(20)} ${rem(48)}`,
        borderRadius: rem(45),
        logoSize: 'xl',
        actionSize: 'lg',
        iconSize: 22,
        gap: rem(24),
        topOffset: rem(28),
        width: 'fit-content',
        maxWidth: rem(1800),
        minWidth: rem(1300)
      };
    } else {
      return {
        containerPadding: `${rem(16)} ${rem(32)}`,
        borderRadius: rem(35),
        logoSize: 'xl',
        actionSize: 'md',
        iconSize: 20,
        gap: rem(16),
        topOffset: rem(24),
        width: 'fit-content',
        maxWidth: rem(1500),
        minWidth: rem(1100)
      };
    }
  };
  
  const sizes = getResponsiveSizes();

  // Floating header colors
  const colors = isDark ? {
    primary: '#a855f7',
    secondary: '#facc15',
    accent: '#14b8a6',
    headerBg: 'rgba(30, 27, 75, 0.95)',
    text: '#f8fafc',
    border: 'rgba(168, 85, 247, 0.3)',
    glassBg: 'rgba(255, 255, 255, 0.1)',
  } : {
    primary: '#8B5CF6',
    secondary: '#facc15',
    accent: '#14b8a6',
    headerBg: 'rgba(139, 92, 246, 0.95)',
    text: '#ffffff',
    border: 'rgba(255, 255, 255, 0.2)',
    glassBg: 'rgba(255, 255, 255, 0.15)',
  };

  // Currency Selector with responsive design
  const CurrencySelector = () => (
    <Menu position="bottom-end" withinPortal closeOnItemClick={true} zIndex={3000}>
      <Menu.Target>
        <UnstyledButton
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: rem(4),
            padding: isSmallMobile ? `${rem(4)} ${rem(8)}` : `${rem(6)} ${rem(12)}`,
            borderRadius: rem(20),
            backgroundColor: colors.glassBg,
            border: `1px solid ${colors.border}`,
            backdropFilter: 'blur(10px)',
            transition: 'all 0.2s ease',
            minWidth: isSmallMobile ? rem(50) : rem(60),
          }}
        >
          <IconWorld size={isSmallMobile ? 12 : 14} style={{ color: colors.text }} />
          {!isSmallMobile && (
            <Text size="sm" fw={500} style={{ color: colors.text }}>
              {selectedCurrency.code}
            </Text>
          )}
          <IconChevronDown size={isSmallMobile ? 8 : 10} style={{ color: colors.text }} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown
        style={{
          backgroundColor: isDark ? '#1a1d29' : '#ffffff',
          border: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`,
          borderRadius: rem(12),
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        }}
      >
        {currencies.map((currency) => (
          <Menu.Item
            key={currency.code}
            onClick={() => setSelectedCurrency(currency)}
            style={{
              color: isDark ? '#f3f4f6' : '#1f2937',
              borderRadius: rem(6),
            }}
          >
            {currency.code} - {currency.name}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );

  // User Menu with responsive avatar size
  const UserMenu = () => (
    <Menu width={220} position="bottom-end" withinPortal zIndex={3000}>
      <Menu.Target>
        <UnstyledButton
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: rem(6),
            padding: rem(4),
            borderRadius: rem(20),
            backgroundColor: colors.glassBg,
            backdropFilter: 'blur(10px)',
            transition: 'all 0.2s ease',
          }}
        >
          <Avatar
            src={user.avatar}
            size={isSmallMobile ? 24 : isTablet ? 28 : 32}
            radius="xl"
            style={{
              backgroundColor: colors.secondary,
              color: '#1a202c',
              fontWeight: 600,
            }}
          >
            {user.name.split(' ').map(n => n[0]).join('')}
          </Avatar>
          {!isTablet && (
            <>
              <Text 
                size="sm" 
                fw={500} 
                style={{ 
                  color: colors.text, 
                  maxWidth: isLaptop ? rem(80) : rem(100),
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}
              >
                {user.name}
              </Text>
              <IconChevronDown size={12} style={{ color: colors.text }} />
            </>
          )}
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown
        style={{
          backgroundColor: isDark ? '#1a1d29' : '#ffffff',
          border: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`,
          borderRadius: rem(12),
        }}
      >
        <Menu.Item>My Account</Menu.Item>
        <Menu.Item>My Orders</Menu.Item>
        <Menu.Item>Settings</Menu.Item>
        <Menu.Divider />
        <Menu.Item color="red" onClick={handleLogout}>
          Log Out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );

  return (
    <>
      {/* Google Fonts */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700;800&family=Nunito:wght@400;500;600;700;800&display=swap');
      `}</style>

      {/* Floating Circular Header */}
      <Box
        component="header"
        style={{
          position: 'fixed',
          top: sizes.topOffset,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2000,
          width: sizes.width,
          maxWidth: sizes.maxWidth,
          minWidth: sizes.minWidth || 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Circular Container */}
        <Box
          style={{
            background: colors.headerBg,
            backdropFilter: 'blur(20px)',
            borderRadius: sizes.borderRadius,
            border: `1px solid ${colors.border}`,
            padding: sizes.containerPadding,
            boxShadow: isDark 
              ? '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)'
              : '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
            transition: 'all 0.3s ease',
          }}
        >
          <Group justify="space-between" align="center" gap={sizes.gap} wrap="nowrap">
            
            {/* Logo with responsive sizing */}
            <Box
              onClick={() => handleNavigation('/')}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
              style={{
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                height: isSmallMobile ? rem(24) : isMobile ? rem(28) : isTablet ? rem(32) : rem(40),
                width: 'auto',
              }}
            >
              <Image
                src="/images%20kids/logo.png"
                alt="KidsBookWonder Logo"
                height={isSmallMobile ? 24 : isMobile ? 28 : isTablet ? 32 : 40}
                width="auto"
                fit="contain"
                style={{
                  maxWidth: isSmallMobile ? rem(120) : isMobile ? rem(140) : isTablet ? rem(160) : rem(180),
                  objectFit: 'contain',
                }}
              />
            </Box>
            
            {/* Desktop Navigation - Hidden on tablet and below */}
            {!isLaptop && (
              <Group 
                gap={isUltraWide ? "lg" : isLargeDesktop ? "md" : "sm"} 
                style={{ 
                  flexShrink: 0, 
                  overflow: 'visible',
                  whiteSpace: 'nowrap',
                  minWidth: 'fit-content'
                }}
                wrap="nowrap"
              >
                {navItems.map((item, index) => (
                  <Button 
                    key={item.label}
                    variant="subtle" 
                    size={isUltraWide ? "md" : "sm"}
                    onClick={() => handleNavigation(item.href)}
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 500,
                      color: colors.text,
                      borderRadius: rem(18),
                      backgroundColor: (index === 0 && isHomePage) ? colors.secondary : 'transparent',
                      ...((index === 0 && isHomePage) && {
                        color: '#1a202c',
                        fontWeight: 700,
                      }),
                      padding: isUltraWide ? `${rem(8)} ${rem(16)}` : `${rem(6)} ${rem(12)}`,
                      transition: 'all 0.2s ease',
                      fontSize: isUltraWide ? rem(14) : rem(13),
                      flexShrink: 0,
                      whiteSpace: 'nowrap',
                    }}
                    styles={{
                      root: {
                        '&:hover': {
                          backgroundColor: (index === 0 && isHomePage) ? '#fbbf24' : colors.glassBg,
                          transform: 'translateY(-1px)',
                        }
                      }
                    }}
                  >
                    {item.label}
                    {item.dropdown && (
                      <IconChevronDown 
                        size={12} 
                        style={{ 
                          marginLeft: rem(4),
                          color: (index === 0 && isHomePage) ? '#1a202c' : colors.text 
                        }} 
                      />
                    )}
                  </Button>
                ))}
              </Group>
            )}

            {/* Actions Group */}
            <Group gap={sizes.gap} align="center" wrap="nowrap" style={{ flexShrink: 0 }}>
              
              {/* Currency - Desktop and Tablet */}
              {!isMobile && <CurrencySelector />}

              {/* Cart with responsive badge */}
              <Box style={{ position: 'relative' }}>
                <ActionIcon
                  size={sizes.actionSize}
                  radius="xl"
                  onClick={() => handleNavigation('/cart')}
                  style={{
                    backgroundColor: colors.glassBg,
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${colors.border}`,
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                  }}
                  styles={{
                    root: {
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        transform: 'translateY(-1px)',
                      }
                    }
                  }}
                >
                  <IconShoppingCart 
                    size={sizes.iconSize} 
                    style={{ color: colors.text }} 
                  />
                </ActionIcon>
                
                {/* Cart Badge - Only show if cart has items */}
                {cartItems && cartItems.length > 0 && (
                  <Badge
                    size="xs"
                    style={{
                      position: 'absolute',
                      top: -2,
                      right: -2,
                      backgroundColor: colors.secondary,
                      color: '#1a202c',
                      fontSize: isSmallMobile ? rem(8) : rem(9),
                      fontWeight: 700,
                      minWidth: isSmallMobile ? rem(14) : rem(16),
                      height: isSmallMobile ? rem(14) : rem(16),
                      border: `2px solid ${colors.headerBg}`,
                    }}
                  >
                    {cartItems.length}
                  </Badge>
                )}
              </Box>

              {/* Theme Toggle - ✨ UPDATED WITH RELOAD FUNCTION */}
              <ActionIcon
                onClick={handleThemeToggle}
                size={sizes.actionSize}
                radius="xl"
                style={{
                  backgroundColor: colors.glassBg,
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${colors.border}`,
                  transition: 'all 0.3s ease',
                }}
                styles={{
                  root: {
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      transform: 'translateY(-1px) rotate(180deg)',
                    }
                  }
                }}
              >
                {isDark ? (
                  <IconSun size={sizes.iconSize} style={{ color: colors.text }} />
                ) : (
                  <IconMoonStars size={sizes.iconSize} style={{ color: colors.text }} />
                )}
              </ActionIcon>

              {/* User Menu - Desktop and Laptop */}
              {!isTablet && (isLoggedIn ? <UserMenu /> : (
                <Group gap="xs" wrap="nowrap">
                  {/* Show Home button on auth pages */}
                  {isAuthPage && (
                    <Button
                      variant="subtle"
                      size="xs"
                      onClick={() => handleNavigation('/')}
                      leftSection={<IconHome size={12} />}
                      style={{
                        fontFamily: 'Nunito, sans-serif',
                        color: colors.text,
                        backgroundColor: colors.glassBg,
                        borderRadius: rem(16),
                        fontWeight: 500,
                        fontSize: rem(12),
                        padding: `${rem(4)} ${rem(12)}`,
                      }}
                    >
                      Home
                    </Button>
                  )}
                  
                  {/* Show Login button when not on login page and not logged in */}
                  {location.pathname !== '/login' && (
                    <Button
                      variant="subtle"
                      size="xs"
                      onClick={handleLogin}
                      style={{
                        fontFamily: 'Nunito, sans-serif',
                        color: colors.text,
                        backgroundColor: colors.glassBg,
                        borderRadius: rem(16),
                        fontWeight: 500,
                        fontSize: rem(12),
                        padding: `${rem(4)} ${rem(12)}`,
                      }}
                    >
                      Login
                    </Button>
                  )}
                  
                  {/* Show Signup button when not on signup page */}
                  {location.pathname !== '/signup' && (
                    <Button
                      size="xs"
                      onClick={handleSignup}
                      style={{
                        fontFamily: 'Nunito, sans-serif',
                        backgroundColor: colors.secondary,
                        color: '#1a202c',
                        borderRadius: rem(16),
                        fontWeight: 600,
                        border: 'none',
                        fontSize: rem(12),
                        padding: `${rem(4)} ${rem(12)}`,
                      }}
                    >
                      {location.pathname === '/login' ? 'Sign Up' : 'Contact us'}
                    </Button>
                  )}
                </Group>
              ))}

              {/* Mobile Burger */}
              {isTablet && (
                <Burger
                  opened={opened}
                  onClick={toggle}
                  size={isSmallMobile ? "xs" : "sm"}
                  color={colors.text}
                />
              )}
            </Group>
          </Group>
        </Box>
      </Box>

      {/* Mobile Drawer with enhanced responsiveness */}
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size={isSmallMobile ? "95%" : isMobile ? "85%" : "75%"}
        title={
          <Text 
            fw={700} 
            size={isSmallMobile ? "md" : "lg"} 
            style={{ 
              color: isDark ? colors.text : '#1a202c',
              fontFamily: 'Quicksand, sans-serif'
            }}
          >
            Menu
          </Text>
        }
        overlayProps={{ backgroundOpacity: 0.6, blur: 6 }}
        styles={{
          content: {
            backgroundColor: isDark ? '#1e1b4b' : '#ffffff',
            borderTopLeftRadius: rem(20),
            borderBottomLeftRadius: rem(20),
          },
          header: {
            backgroundColor: isDark ? '#1e1b4b' : '#ffffff',
            borderBottom: `1px solid ${isDark ? '#4c1d95' : '#e5e7eb'}`,
            padding: isSmallMobile ? rem(12) : rem(16),
          },
          body: {
            padding: isSmallMobile ? rem(12) : rem(16),
          }
        }}
        zIndex={2500}
      >
        <Stack gap={isSmallMobile ? "sm" : "md"}>
          
          {/* User Profile in Mobile */}
          {isLoggedIn && (
            <Box
              p={isSmallMobile ? "sm" : "md"}
              style={{
                background: isDark 
                  ? 'linear-gradient(135deg, #312e81 0%, #a855f7 100%)'
                  : 'linear-gradient(135deg, #8B5CF6 0%, #9333ea 100%)',
                borderRadius: rem(16),
                marginBottom: rem(12),
              }}
            >
              <Group align="center" gap="sm">
                <Avatar
                  src={user.avatar}
                  size={isSmallMobile ? 32 : 40}
                  radius="xl"
                  style={{
                    backgroundColor: colors.secondary,
                    color: '#1a202c',
                    fontWeight: 600,
                  }}
                >
                  {user.name.split(' ').map(n => n[0]).join('')}
                </Avatar>
                <Box>
                  <Text 
                    size={isSmallMobile ? "xs" : "sm"} 
                    fw={600} 
                    style={{ color: '#ffffff' }}
                  >
                    {user.name}
                  </Text>
                  <Text 
                    size={isSmallMobile ? "xs" : "xs"} 
                    style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                  >
                    {user.email}
                  </Text>
                </Box>
              </Group>
            </Box>
          )}

          {/* Auth Buttons for non-logged users */}
          {!isLoggedIn && (
            <Stack gap="sm" mb="md">
              {/* Show Home button on auth pages */}
              {isAuthPage && (
                <Button 
                  variant="outline"
                  fullWidth
                  leftSection={<IconHome size={isSmallMobile ? 16 : 18} />}
                  onClick={() => handleNavigation('/')}
                  style={{ 
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 500,
                    borderRadius: rem(20),
                  }}
                  size={isSmallMobile ? "sm" : "md"}
                >
                  Home
                </Button>
              )}
              
              {/* Show Signup button when not on signup page */}
              {location.pathname !== '/signup' && (
                <Button 
                  size={isSmallMobile ? "sm" : "md"}
                  fullWidth
                  leftSection={<IconUserPlus size={isSmallMobile ? 16 : 18} />}
                  onClick={handleSignup}
                  style={{ 
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 600,
                    backgroundColor: colors.secondary,
                    color: '#1a202c',
                    borderRadius: rem(20),
                    border: 'none',
                  }}
                >
                  {location.pathname === '/login' ? 'Sign Up' : 'Contact us'}
                </Button>
              )}
              
              {/* Show Login button when not on login page */}
              {location.pathname !== '/login' && (
                <Button 
                  variant="outline"
                  fullWidth
                  leftSection={<IconLogin size={isSmallMobile ? 16 : 18} />}
                  onClick={handleLogin}
                  style={{ 
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 500,
                    borderRadius: rem(20),
                  }}
                  size={isSmallMobile ? "sm" : "md"}
                >
                  Login
                </Button>
              )}
            </Stack>
          )}

          <Divider />

          {/* Navigation */}
          {navItems.map((item, index) => (
            <Button 
              key={item.label}
              variant="subtle" 
              fullWidth
              justify="flex-start"
              size={isSmallMobile ? "sm" : "md"}
              onClick={() => handleNavigation(item.href)}
              style={{ 
                fontFamily: 'Nunito, sans-serif',
                fontWeight: (index === 0 && isHomePage) ? 600 : 500,
                borderRadius: rem(12),
                backgroundColor: (index === 0 && isHomePage) ? colors.primary : 'transparent',
                color: (index === 0 && isHomePage) ? '#ffffff' : (isDark ? colors.text : '#1a202c'),
              }}
            >
              {item.label}
            </Button>
          ))}
          
          <Divider />

          {/* Currency Mobile */}
          <Group justify="space-between" px="sm">
            <Text size={isSmallMobile ? "xs" : "sm"} fw={500}>Currency</Text>
            <CurrencySelector />
          </Group>

          {/* Logout for logged in users */}
          {isLoggedIn && (
            <>
              <Divider />
              <Button 
                variant="subtle" 
                fullWidth
                justify="flex-start"
                size={isSmallMobile ? "sm" : "md"}
                leftSection={<IconLogout size={isSmallMobile ? 16 : 18} />}
                onClick={handleLogout}
                color="red"
                style={{ 
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 500,
                  borderRadius: rem(12),
                }}
              >
                Log Out
              </Button>
            </>
          )}
        </Stack>
      </Drawer>
    </>
  );
}

export default FloatingCircularHeader;