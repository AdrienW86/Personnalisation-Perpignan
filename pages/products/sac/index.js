import React from 'react';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import { data } from '@/data';

const Sac = () => {
  return (
    <ProductDetails el = {data.products[6]} />
  );
};

export default Sac;