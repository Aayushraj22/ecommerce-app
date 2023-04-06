import React from 'react'
import BreadCrumb from './BreadCrumb'
import Meta from './Meta'
import {IoHome} from 'react-icons/io5'
import {IoIosCall} from 'react-icons/io'
import {MdEmail} from 'react-icons/md'
import {FaInfo} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
  <>
    <Meta title="Contact" />
    <BreadCrumb title="Contact" />
    <div className=" container d-flex flex-wrap justify-content-center align-items-center flex-column bg-light p-4 rounded">
      {/* map here = first child*/}
      <div className='mb-3 '>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7217.191747473915!2d87.04385559999996!3d25.2505331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1679485729198!5m2!1sen!2sin" height="450" style={{border:0}} allowFullScreen="true" title="map" loading="lazy" referrerPolicy="no-referrer-when-downgrade"  ></iframe>
      </div>
      {/* footer = second child */}
      <div className='informationBox  bg-white rounded-2 w-100'>
        <div className=" p-3  " >
          <h5 className='mb-3'>Contact us</h5>
          <form >
            <input type="text" name="name" id='nothing' placeholder='Name' className='d-block w-100 mb-2 border-0 bg-secondary-subtle rounded p-2'/>
            <input type="email" name="email" id="nothing" placeholder='Email' className='d-block w-100 mb-2 border-0 bg-secondary-subtle rounded p-2'/>
            <input type="tel" name="Phone no" id="nothing" placeholder='Mob no' className='d-block w-100 mb-2 border-0 bg-secondary-subtle rounded p-2' />
            <textarea name="Comment" id="/" cols="50" rows="3" placeholder='Comment' className='d-block w-100 mb-2  border-0 bg-secondary-subtle rounded p-2'></textarea>
            <input type="submit" value="Send" style={{width:'150px', border: 'none', background: '#2525c4', color: 'whitesmoke'}} className="mb-2 ms-3 rounded-5 p-2"/>
          </form>
        </div>
        <div className=" p-3" >
          <h5 className='mb-3'>Get In Touch with Us</h5>
          <div>
            <Link to="/" className='text-secondary d-block p-1'><IoHome className='me-2'/>sabour, Bhagalpur, 813210</Link>
            <Link to="tel:+91 1234567890" className='text-secondary d-block p-1'><IoIosCall className='me-2'/>(+91)1234567890</Link>
            <Link to="mailto: demo@company.com" className='text-secondary d-block p-1'><MdEmail className='me-2'/>demo@company.com</Link>
            <p className='text-secondary d-block p-1'><FaInfo className='me-2'/>Mondar-Friday 10 AM - 8 PM</p>
          </div>
        </div>

      </div>
    </div>
  </>
  )
}

export default Contact