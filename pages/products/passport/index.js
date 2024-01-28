import React from 'react';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import { data } from '@/data';

const Passport = () => {
  return (
    <ProductDetails el = {data.products[0]} />
  );
};

export default Passport;