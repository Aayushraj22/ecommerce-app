import React from 'react'
import { Link } from 'react-router-dom'

const ForgetPassword = () => {
  return (
  <>
    <section className="container-1 bg-light">
      <div className="resetPasswordBox bg-white">
        <header className='text-center'>
          <h3>Reset your password</h3>
          <h6 className='mt-1'>We'll send a link to your email</h6>
        </header>
        <form action="" className='my-3'>
          <div>
            <input type="email" name='email' placeholder='Email address' />
          </div>
          <div className="d-flex flex-column align-items-center choice">
            <button type="submit">Done</button>
            <Link to="/login"><button >Cancel</button></Link>
          </div>
        </form>
      </div>
    </section>
  
  </>
  )
}

export default ForgetPassword