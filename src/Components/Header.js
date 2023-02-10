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
                            <img src='\images\compare.svg' alt='compaer'/>
                            <p>compare <br/>product</p>
                        </Link>
                        </div>
                        <div>
                        <Link className='d-flex text-white align-items-center gap-10'>
                            <img src='\images\wishlist.svg' alt='wishlist'/>
                            <p>Favourite <br/>Whishlist</p>
                        </Link>
                        </div>
                        <div>
                        <Link className='d-flex text-white align-items-center gap-10'>
                            <img src='\images\user.svg' alt='user'/>
                            <p>Login <br/>Account</p>
                        </Link>
                        </div>
                        <div>
                        <Link className='d-flex text-white align-items-center gap-10'>
                            <img src='\images\cart.svg' alt='cart'/>
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
    <header className="header-bottom py-1">
        <div className="container-xxl">
            <div className="col-12">
                <div className="menu-button d-flex align-items-center gap-30 ">
                    <div>
                    <div className="dropdown">
                        <button className="btn btn-secondary bg-transparent border-0 dropdown-toggle d-flex align-items-center gap-10" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="/images/menu.svg" alt="menu"/>
                        <span className='d-inline-block me-3'>Shop Categories</span>
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item text-white" to="#">Action</Link></li>
                            <li><Link className="dropdown-item text-white" to="#">Another action</Link></li>
                            <li><Link className="dropdown-item text-white" to="#">Something else here</Link></li>
                        </ul>
                    </div>
                    </div>
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