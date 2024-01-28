import React from 'react';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import { data } from '@/data';

const Moumoute = () => {
  return (
    <ProductDetails el = {data.productsColor[1]} />
  );
};

export default Moumoute;