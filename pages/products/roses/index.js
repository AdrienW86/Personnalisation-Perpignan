import React from 'react';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import { data } from '@/data';

const Roses = () => {
  return (
    <ProductDetails el = {data.products[5]} />
  );
};

export default Roses;