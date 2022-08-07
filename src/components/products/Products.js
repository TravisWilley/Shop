import React from 'react';
import Product from './Product';

export default function Products({ products = [] }) {
  return (
    <div>
      <ul className="px-5">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}
