import React from 'react'
import { Link } from 'react-router-dom'
import {BiHide} from 'react-icons/bi'

const Signup = () => {
  return (
  <>
    <section className="container-1 bg-light">
      <div className="signupBox text-dark">
        <header >
          <h3>Create a new Account</h3>
          <h6>It's quick and easy.</h6>
        </header>

        <form action="" className='my-2'>
          <div>
            <input type="email" name="email" placeholder='Email' required/>
          </div>
          <div className='position-relative'>
            <input type="password" name="password" placeholder='password' required/>
            <BiHide className='hideIcon' />
            {/* <BiShow className='showIcon'/> */}
          </div>
          <div>
            <input type="password" name="password2" placeholder='Rewrite Password' required />
          </div>
          <div className='text-center'>
            <button type="submit" className='btn btn-primary px-4' >Signup</button>
          </div>
        </form>
        <div className="line"></div>
        <p className='text-center'>Already have an account?</p>
        <p className='text-center'>go to <Link to='/login'>Login</Link> page</p>
      </div>
    </section>
  </>
  )
}

export default Signup