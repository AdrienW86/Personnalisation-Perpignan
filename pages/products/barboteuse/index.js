import React from 'react';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import { data } from '@/data';

const Barboteuse = () => { 
  return (
    <ProductDetails el = {data.products[7]} />
  );
};

export default Barboteuse;