import React from 'react'
import {Link} from 'react-router-dom'
import {BsLinkedin,BsInstagram,BsYoutube,BsGithub,BsPinterest} from 'react-icons/bs'
import './Footer.styles.scss'




const Footer = () =>  (
 
  <div className="d-flex flex-column w-100">
  {/* first footer */}
    <div className="footer row p-2  justify-content-between">
      <div className="col-5 d-flex gap-15 justify-content-center align-items-center p-2">
        <img src="\images\newsletter.png" alt="newsletter" style={{width: '30px', height: '30px'}}/>
        <p className="h2 mb-0">Sign Up for Newsletter</p>
      </div>
      <div className="col-5 gap-15 d-flex justify-content-center align-items-center p-2">
        <div className="input-group mx-5">
          <input type="email" className="form-control" placeholder="Your Email.." aria-label="Your Email.." aria-describedby="basic-addon2" />
          <button className="input-group-text" id="basic-addon2">Subscribe</button>
        </div>
      </div>
    </div>


  {/* second footer */}
    <div className="footer row py-3 px-4">
      <div className="col-12 d-flex justify-content-evenly align-items-start">
      {/* first column  */}
        <div className="d-flex flex-column gap-10">
          <h4 className="py-1">Contact Us</h4>
          {/* <ul className="d-flex flex-column m-0 p-0" style={{listStyleType: 'none'}}>
            <li>Demo Store</li>
            <li>No. 1259 Freedom, New York, 11111</li>
            <li>United States</li>
          </ul> */}
          <address className='m-0'>
            Demo Store <br/>No. 1259 Freedom,New York, 111111<br/> United States
          <Link to='tel: +91 1234567890' className="py-1 d-block text-white">+91 1234567890</Link>
          <Link to='mailto: Demo@example.com' className="py-1 text-white">Demo@example.com</Link>
          </address>
          <div className="d-flex gap-15 fs-4 social-icons">
            <Link to="/linkedIn" className='text-white'><BsLinkedin /></Link>
            <Link to="/github" className='text-white'><BsGithub /></Link>
            <Link to="/youtube" className='text-white'><BsYoutube /></Link>
            <Link to="/instagram" className='text-white'><BsInstagram /></Link>
            <Link to="/pinterest" className='text-white'><BsPinterest /></Link>
          </div>
        </div>


      {/* second column */}
        <div className="d-flex flex-column gap-10">
          <h4 className="py-1"><Link to='/information' className='text-white'>Information</Link></h4>
          <p className='py-1'><Link to='/privacyPolicy' className='text-white'>Privacy Policy</Link></p>
          <p className='py-1'><Link to='/refundPolicy' className='text-white'>Refund Policy</Link></p>
          <p className='py-1'><Link to='/shippingPolicy' className='text-white'>Shipping Policy</Link></p>
          <p className='py-1'><Link to='/termsOfService' className='text-white'>Terms of Service</Link></p>
          <p className='py-1'><Link to='/blogs' className='text-white'>Blogs</Link></p>
        </div>


      {/* third column */}
        <div className="d-flex flex-column gap-10">
          <h4 className="py-1"><Link to='/account' className='text-white'>Account</Link></h4>
          <p className='py-1'><Link to='/search' className='text-white'>Search</Link></p>
          <p className='py-1'><Link to='/aboutUs' className='text-white'>About Us Policy</Link></p>
          <p className='py-1'><Link to='/faq' className='text-white'>FAQ</Link></p>
          <p className='py-1'><Link to='/sizeChart' className='text-white'>Size Chart</Link></p>
          <p className='py-1'><Link to='/contact' className='text-white'>contact</Link></p>
        </div>


      {/* fourth column */}
        <div className="d-flex flex-column gap-10">
          <h4 className="py-1">Quick Links</h4>
          <p className='py-1'><Link to='/accessories' className='text-white'> Accessories</Link></p>
          <p className='py-1'><Link to='/laptop' className='text-white'>Laptops</Link></p>
          <p className='py-1'><Link to='/headphones' className='text-white'>Headphones</Link></p>
          <p className='py-1'><Link to='/smartWatch' className='text-white'>Smart Watches</Link></p>
          <p className='py-1'><Link to='/tablets' className='text-white'>Tablets</Link></p>
        </div>


      {/* fifth column */}
      <div className="d-flex flex-column gap-10">
          <h4 className="py-1">Our App</h4>
          <p className='py-1'>Download our app and get extra 15% on your first order</p>
          <div className="d-flex justify-content-center">
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>


  {/* third footer */}
    <div className="footer row py-3 d-flex">
      <div className="col d-flex align-items-center justify-content-center">
      <p className='h2 mb-0'>&copy; {new Date().getFullYear()} Developed by a learner</p>
      </div>
    </div>
  </div>  
  
  )





export default Footer