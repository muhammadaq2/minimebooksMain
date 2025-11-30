import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';

// Import your existing components
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/Auth/LoginPage/LoginPage';
import SignupPage from './pages/Auth/SignupPage/SignupPage';
import ProfessionalShopPage from './pages/Shop/ShopPage';
import ProfessionalSupportPage from './pages/support/support';
import MyBooksPage from './pages/mybooks/mybookspage';
import ProductDetailPageWrapper from './pages/ProductDetail/ProductDetailPageWrapper';
import PersonalizationPage from './pages/Personalization/PersonalizationPage';

// Import checkout components
import CartPage from './pages/Checkout/CartPage';
import DeliveryPage from './pages/Checkout/DeliveryPage';
import CheckoutPage from './pages/Checkout/CheckoutPage';

// Import Cart Context
import { CartProvider } from './context/CartContext';

const theme = createTheme({
  fontFamily: 'Nunito, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  headings: { 
    fontFamily: 'Quicksand, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
    fontWeight: '700'
  },
  primaryColor: 'violet',
  other: {
    fontFamilyHeadings: 'Quicksand, sans-serif',
    fontFamilyBody: 'Nunito, sans-serif'
  }
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <CartProvider>
        <Router>
          <Routes>
            {/* Home Page Route */}
            <Route path="/" element={<HomePage />} />
            
            {/* Authentication Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            
            {/* Shop Route */}
            <Route path="/shop" element={<ProfessionalShopPage />} />
            
            {/* Product Detail Routes */}
            <Route path="/product/:id" element={<ProductDetailPageWrapper />} />
            <Route path="/personalise/:id" element={<ProductDetailPageWrapper />} />
            <Route path="/personalize-steps/:id" element={<PersonalizationPage />} />
            
            {/* Checkout Routes */}
            <Route path="/cart" element={<CartPage />} />
            <Route path="/delivery" element={<DeliveryPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            
            {/* Support Route */}
            <Route path="/support" element={<ProfessionalSupportPage />} />
            
            {/* My Books Route */}
            <Route path="/my-books" element={<MyBooksPage />} />
            
            {/* Future Routes - Add these as you create more pages */}
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            {/* <Route path="/create-book" element={<CreateBook />} /> */}
            {/* <Route path="/profile" element={<Profile />} /> */}
            
            {/* 404 Fallback - redirects to home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Router>
      </CartProvider>
    </MantineProvider>
  );
}

export default App;