import React from 'react';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import { data } from '@/data';

const Panneau = () => {
  return (
    <ProductDetails el = {data.products[8]} />
  );
};

export default Panneau;