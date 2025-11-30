import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  // Mock cart data - will be replaced with backend API calls
  const [cartItems, setCartItems] = useState([
    
  ]);

  // Shipping information state
  const [shippingInfo, setShippingInfo] = useState({
    email: '',
    country: 'Canada',
    fullName: '',
    phone: '',
    street: '',
    city: '',
    postalCode: '',
    province: '',
    shippingMethod: 'standard', // 'standard' or 'express'
    saveShippingDetails: false
  });

  // Coupon state
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  // Mock coupon codes - will be replaced with backend validation
  const mockCoupons = {
    'SAVE10': { discount: 0.10, type: 'percentage' },
    'WELCOME5': { discount: 5.00, type: 'fixed' },
    'FIRST20': { discount: 0.20, type: 'percentage' }
  };

  // Shipping costs
  const shippingCosts = {
    standard: 13.00,
    express: 31.00
  };

  // Calculate subtotal
  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.currentPrice, 0);
  };

  // Calculate shipping cost
  const getShippingCost = () => {
    return shippingCosts[shippingInfo.shippingMethod] || 0;
  };

  // Calculate discount
  const getDiscountAmount = () => {
    if (!appliedCoupon) return 0;
    
    const subtotal = getSubtotal();
    if (appliedCoupon.type === 'percentage') {
      return subtotal * appliedCoupon.discount;
    }
    return appliedCoupon.discount;
  };

  // Calculate total
  const getTotal = () => {
    const subtotal = getSubtotal();
    const shipping = getShippingCost();
    const discount = getDiscountAmount();
    return subtotal + shipping - discount;
  };

  // Add item to cart
  const addToCart = (item) => {
    setCartItems(prev => [...prev, { ...item, id: Date.now().toString() }]);
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  // Update item in cart
  const updateCartItem = (itemId, updates) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === itemId ? { ...item, ...updates } : item
      )
    );
  };

  // Apply coupon code
  const applyCoupon = (code) => {
    const coupon = mockCoupons[code.toUpperCase()];
    if (coupon) {
      setAppliedCoupon({ ...coupon, code: code.toUpperCase() });
      setCouponCode('');
      return { success: true, message: 'Coupon applied successfully!' };
    }
    return { success: false, message: 'Invalid coupon code' };
  };

  // Remove coupon
  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  // Update shipping information
  const updateShippingInfo = (updates) => {
    setShippingInfo(prev => ({ ...prev, ...updates }));
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
    setAppliedCoupon(null);
    setCouponCode('');
  };

  // Get cart summary
  const getCartSummary = () => {
    return {
      itemCount: cartItems.length,
      subtotal: getSubtotal(),
      shipping: getShippingCost(),
      discount: getDiscountAmount(),
      total: getTotal(),
      appliedCoupon
    };
  };

  // Persist shipping info to localStorage (temporary until backend)
  useEffect(() => {
    const savedShipping = localStorage.getItem('shippingInfo');
    if (savedShipping) {
      setShippingInfo(JSON.parse(savedShipping));
    }
  }, []);

  useEffect(() => {
    if (shippingInfo.saveShippingDetails) {
      localStorage.setItem('shippingInfo', JSON.stringify(shippingInfo));
    }
  }, [shippingInfo]);

  const value = {
    // State
    cartItems,
    shippingInfo,
    couponCode,
    appliedCoupon,
    shippingCosts,
    
    // Actions
    addToCart,
    removeFromCart,
    updateCartItem,
    applyCoupon,
    removeCoupon,
    setCouponCode,
    updateShippingInfo,
    clearCart,
    
    // Calculations
    getSubtotal,
    getShippingCost,
    getDiscountAmount,
    getTotal,
    getCartSummary
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
