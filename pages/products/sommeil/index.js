import React from 'react';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import { data } from '@/data';

const Sommeil = () => {
  return (
    <ProductDetails el = {data.products[2]} />
  );
};

export default Sommeil;