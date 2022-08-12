import React from 'react';
import { useSelector } from 'react-redux';

export default function SearchBar() {
  const {} = useSelector((state) => state.products);

  return (
    <form onSubmit={(e) => e.preventDefault()} className="d-flex ms-0 ms-lg-3">
      <input
        type="text"
        placeholder="Search Products"
        className="form-control ms-md-auto me-2"
        onChange={(e) => {}}
        value="Hello World"
      />
    </form>
  );
}
