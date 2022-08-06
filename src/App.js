import { Routes, Route } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Home from './pages/Home';
import Single from './pages/Single';
import Cart from './pages/Cart';

export default function App() {
  return (
    <div className="wrapper bg-dark text-white">
      <Navbar title="Dynamic Title" />
      <div className="container mt-5 py-5 px-3 px-md-5">
        My app Body
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single/:id" element={<Single />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}
