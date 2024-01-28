import React from 'react';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import { data } from '@/data';

const Ballon = () => {
  return (
    <ProductDetails el = {data.products[3]} />
  );
};

export default Ballon;