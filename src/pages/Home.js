import React from 'react';
import Products from '../components/products/Products';
import data from '../data';

export default function Home() {
  return (
    <div>
      <Products products={data} />
    </div>
  );
}
