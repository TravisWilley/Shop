import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NoContent({ text = 'abc', btnText = 'xyz' }) {
  const nav = useNavigate();
  return (
    <div className="text-white text-center mx-auto p-0 p-md-5 my-5">
      <h2>{text}</h2>
      <button onClick={() => nav('/')} className="btn btn-success btn-lg mt-3">
        {btnText}
      </button>
    </div>
  );
}
