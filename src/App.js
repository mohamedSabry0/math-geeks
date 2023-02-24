/* eslint-disable import/extensions */
/*
reason for this is that I did try to change it several times
and it gave me contradicting rules
namely:
- Missing file extension for "./components/Calculator"  import/extensions
- Unexpected use of file extension "js" for "./components/home.js"   import/extensions
- Missing file extension for "./components/home"
*/
import {
  BrowserRouter, Routes, Route, Outlet, NavLink,
} from 'react-router-dom';
import './App.css';
import Calculator from './components/calculator';
import Home from './components/Home';
import Quote from './components/Quote';

/* eslint-disable import/extensions */

function Layout() {
  return (
    <>
      <nav>
        <h1 className="heading">Math Geeks</h1>
        <ul>
          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="calculator">
              Calculator
            </NavLink>
          </li>
          <li>
            <NavLink to="quote">
              Quote
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quote" element={<Quote />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="*" element={<div>page not found</div>} />
        </Route>

      </Routes>

    </BrowserRouter>

  );
}

export default App;
