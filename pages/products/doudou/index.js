import React from 'react';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import { data } from '@/data';

const Carnet = () => {


  return (
    <ProductDetails el = {data.productsColor[3]} />
  );
};

export default Carnet;