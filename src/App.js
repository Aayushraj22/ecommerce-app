import React from 'react'
import './App.css'
import { BrowserRouter as Router,
Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Components/Layout'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Blogs from './Pages/Blogs'
import OurStore from './Pages/OurStore'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import CompareProduct from './Pages/CompareProduct'
import Signup from './Pages/Signup'
import ForgetPassword from './Pages/ForgetPassword'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='Blogs' element={<Blogs />} />
          <Route path='store' element={<OurStore />} />
          <Route path='wishlist' element={<Wishlist/>} />
          <Route path='compareProduct' element={<CompareProduct/>} />
          <Route path='login' element={<Login/>} />
          <Route path='cart' element={<Cart/>} />
          <Route path='forgetPassword' element={<ForgetPassword/>} />
        </Route>
        <Route path='signUp' element={<Signup/>} />
      </Routes>
    </Router>
  );
}

export default App;
