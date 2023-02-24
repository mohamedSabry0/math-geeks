/* eslint-disable import/extensions */

import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom';
import './App.css';
import Calculator from './components/calculator';
import Home from './components/home';
import Quote from './components/quote';

/* eslint-disable import/extensions */

function Layout() {
  return (
    <>
      <nav>
        <h1 className="heading">Math Geeks</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="calculator">Calculator</a></li>
          <li><a href="quote">Quote</a></li>
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
