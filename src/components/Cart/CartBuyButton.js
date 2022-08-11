import React from 'react';

export default function CartBuyButton() {
  const buy = () => {};

  return (
    <button
      onclick={buy}
      className="btn btn-success d-block w-100 fw-bold mt-3"
    >
      Buy now
    </button>
  );
}
