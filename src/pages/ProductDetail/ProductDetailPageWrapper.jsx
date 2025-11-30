import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductDetailPage from './ProductDetailPage';

function ProductDetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Convert string ID to number, default to 1 if not provided or invalid
  const productId = id ? parseInt(id, 10) : 1;
  const validProductId = isNaN(productId) ? 1 : productId;

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <ProductDetailPage 
      productId={validProductId} 
      onNavigate={handleNavigate}
    />
  );
}

export default ProductDetailPageWrapper;
