import React from 'react'
import { Link } from 'react-router-dom'
const BreadCrumb = (props) => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12 text-center py-2'>
                <p><Link to='/'>Home</Link>/{props.title}</p>
            </div>
        </div>
    </div>
  )
}

export default BreadCrumb