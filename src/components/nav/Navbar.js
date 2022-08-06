import React from 'react';
import CartButton from './CartButton';
import CategorySelector from './CategorySelector';
import SearchBar from './SearchBar';

export default function Navbar({ title }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top border-bottom">
      <div className="container-fluid px-5-md">
        <span id="name" className="navbar-brand fw-bold pointer">
          {title}
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <CategorySelector />
          <SearchBar />
          <CartButton />
        </div>
      </div>
    </nav>
  );
}
