import React from 'react';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import { data } from '@/data';

const Tapis = () => {
  return (
    <ProductDetails el = {data.productsColor[0]} />
  );
};

export default Tapis;