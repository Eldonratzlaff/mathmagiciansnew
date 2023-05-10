import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Calculator from './calculator';
import Quotes from './quotes';

function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-title"> Math Magicians </div>
        <div className="nav-links">
          <div className="nav-link">
            <Link to="/">Home</Link>
          </div>
          <div className="nav-link">
            <Link to="Calculator">Calculator</Link>
          </div>
          <div className="nav-link">
            <Link to="Quotes">Quotes</Link>
          </div>

        </div>
      </nav>
      <div>
        <Routes>
          {/* <Route path="/" element={Home} /> */}
          <Route path="/Calculator" element={Calculator} />
          <Route path="/Quotes" element={Quotes} />
        </Routes>
      </div>
    </div>
  );
}
export default NavBar;
