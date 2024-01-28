import React from 'react';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import { data } from '@/data';

const Coffret = () => {
  return (
    <ProductDetails el = {data.products[1]} />
  );
};

export default Coffret;