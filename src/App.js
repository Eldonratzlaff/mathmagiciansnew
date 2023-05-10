import './App.css';
import { Route, Link, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import Quotes from './components/quotes';

const App = () => (
  <>
    <nav className="navbar">
      <div className="logo"><Link to="/">Math Magicians</Link></div>
      <ul className="navbarItems">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quotes">Quote</Link>
        </li>
      </ul>
    </nav>
    <div className="routes">
      <Routes>
        <Route path="/" element={<Quotes />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </div>
  </>
);

export default App;
