import React from 'react';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import { data } from '@/data';

const Couverture = () => {
  return (
    <ProductDetails el = {data.products[4]} />
  );
};

export default Couverture;