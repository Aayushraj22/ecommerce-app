import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'

const Header = () => {
  return (
  <>
    <header className="header-top-strip py-3">
        <div className="container-xxl text-center">
            <div className="row">
            {/* 1st column */}
                <div className="col-6">
                    <p className='text-white mb-0'>Free Shiping over $100 and Free Returns</p>
                </div>
            {/* 2nd column */}
                <div className="col-6">
                    <p className='text-white text-end mb-0'>Hotline: <a className='text-white' href='tel:+91 1234567890'>+91 1234567890</a></p>
                </div>
            </div>
        </div>
    </header>
    <header className="header-upper py-3">
        <div className="container-xxl text-center">
            <div className="row align-items-center">
                <div className="col-3 ">
                    <Link className='text-white fw-bold'>E com</Link>
                </div>
                <div className="col-5">
                  <div className="input-group">
                      <input type="text" className="form-control" placeholder="search here..." aria-label="search here..." aria-describedby="basic-addon2"/>
                      <span className="input-group-text" id="basic-addon2"><BsSearch/> </span>
                  </div>
                </div>
                <div className="col-4">
                    <div className="header-upper-links d-flex justify-content-between">
                        <div>
                        <Link className='d-flex text-white align-items-center  gap-10'>
                            <img src='\images\compare.svg' alt='image section'/>
                            <p>compare <br/>product</p>
                        </Link>
                        </div>
                        <div>
                        <Link className='d-flex text-white align-items-center gap-10'>
                            <img src='\images\wishlist.svg' alt='image section'/>
                            <p>Favourite <br/>Whishlist</p>
                        </Link>
                        </div>
                        <div>
                        <Link className='d-flex text-white align-items-center gap-10'>
                            <img src='\images\user.svg' alt='image section'/>
                            <p>Login <br/>Account</p>
                        </Link>
                        </div>
                        <div>
                        <Link className='d-flex text-white align-items-center gap-10'>
                            <img src='\images\cart.svg' alt='image section'/>
                            <div className='d-flex flex-column'>
                                <span className="badge bg-white text-dark">0</span>
                                <p>$ 100</p>
                            </div>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <header className="header-bottom py-3">
        <div className="container-xxl">
            <div className="col-12">
                <div className="menu-button d-flex align-items-center">
                    <div></div>
                    <div className="menu-links">
                        <div className="d-flex gap-15 align-items-center">
                            <NavLink to="/">home</NavLink>
                            <NavLink to="/">our store</NavLink>
                            <NavLink to="/">blogs</NavLink>
                            <NavLink to="/">contact</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  </>
  )
}

export default Header