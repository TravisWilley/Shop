import React from 'react';

export default function CartNumbers() {
  const cartNumbers = {
    subtotal: 119,
    shipping: 2.0,
    salestax: 11.9,
    total: 132.9,
  };
  const rows = [
    { title: 'Subtotal', price: cartNumbers.subtotal },
    { title: 'Shipping', price: cartNumbers.shipping },
    { title: 'Sales Tax', price: cartNumbers.salestax },
    { title: 'Total (USD)', price: cartNumbers.total },
  ];
  return (
    <div id="cart-numbers">
      {rows.map(({ title, price }) => (
        <li
          key={title}
          className="list-group-item d-flex justify-content-between"
        >
          <span>{title}</span>
          <span className="text-muted">{price}</span>
        </li>
      ))}
    </div>
  );
}
