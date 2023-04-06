import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import {BsSearch,BsFillCartPlusFill,BsFillHeartFill} from 'react-icons/bs'
import {FaUserCircle} from 'react-icons/fa'

const Header = () => {
  return (
  <>
    <header className="header-top-strip py-3">
        <div className="container d-flex flex-wrap text-center">
            {/* 1st column */}
            <div className="col-6">
                <p className='text-white mb-0'>Free Shiping over $100 and Free Returns</p>
            </div>
            {/* 2nd column */}
            <div className="col-6">
                <p className='text-white text-end mb-0'>Hotline: <a className='text-white' href='tel:+91 1234567890'>+91 1234567890</a></p>
            </div>
        </div>
    </header>
    <header className="header-upper py-3">
        <div className="container d-flex flex-wrap justify-content-between text-center align-items-center">
                <div className="col-3 ">
                    <Link className='text-white fw-bold'>E com</Link>
                </div>
                <div className="col-4">
                  <div className="input-group">
                      <input type="text" className="form-control" placeholder="search here..." aria-label="search here..." aria-describedby="basic-addon2"/>
                      <span className="input-group-text" id="basic-addon2"><BsSearch/> </span>
                  </div>
                </div>
                <div className="col-4">
                    <div className="header-upper-links d-flex justify-content-around">
                        <div>
                        <Link to='/compareProduct' className='d-flex text-white align-items-center  gap-10'>
                            <img src='\images\compare.svg' alt='compare'/>
                            <p>compare <br/>product</p>
                        </Link>
                        </div>
                        <div>
                        <Link to='/wishlist' className='d-flex text-white align-items-center gap-10'>
                            <BsFillHeartFill style={{fontSize:'24px'}}/>
                            <p>Favourite <br/>Whishlist</p>
                        </Link>
                        </div>
                        <div>
                        <Link to='login' className='d-flex text-white align-items-center gap-10'>
                            <FaUserCircle style={{fontSize:'24px'}}/>
                            <p>Login <br/>Account</p>
                        </Link>
                        </div>
                        <div>
                        <Link to='cart' className='d-flex text-white align-items-center gap-10'>
                            <div className='position-relative'>
                                <BsFillCartPlusFill style={{fontSize:'24px'}}/>
                                {/* selectedItems is a class which will increases if you have some items selected */}
                                <span className="badge bg-white text-dark position-absolute selectedItems" style={{top:'-40%', right:'-40%',fontSize:'10px'}}>0</span> 
                            </div>
                            <p>Cart</p>
                        </Link>
                        </div>
                    </div>
                </div>

        </div>
    </header>
    <header className="header-bottom py-1">
        <div className="container d-flex">
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
                            <NavLink to="/store">our store</NavLink>
                            <NavLink to="/Blogs">Blogs</NavLink>
                            <NavLink to="/contact">contact</NavLink>
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