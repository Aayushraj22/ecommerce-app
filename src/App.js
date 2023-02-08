import React from 'react';
import './App.css';
import { BrowserRouter as Router,
Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Layout from './Components/Layout';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
