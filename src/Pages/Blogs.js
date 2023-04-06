import React from 'react'
import BlogCard from './BlogCard'
import BreadCrumb from './BreadCrumb'
import Meta from './Meta'

const Blogs = () => {
  return (
  <>
    <Meta title="blogs" />
    <BreadCrumb title="Blogs" />
    <div className="box p-3 border border-1 border-success m-2 ">
      <div className=" cardBox d-flex justify-content-center p-2">
        <BlogCard url="logo192.png" title="picture" desc="some word related to above picture"/>
      </div>
      <div className="cardBox d-flex justify-content-center p-2">
        <BlogCard url="logo192.png" title="picture" desc="some word related to above picture"/>
      </div>
      <div className="cardBox d-flex justify-content-center p-2">
        <BlogCard url="logo192.png" title="picture" desc="some word related to above picture"/>
      </div>
      <div className="cardBox d-flex justify-content-center p-2">
        <BlogCard url="logo192.png" title="picture" desc="some word related to above picture"/>
      </div>
      <div className="cardBox d-flex justify-content-center p-2">
        <BlogCard url="logo192.png" title="picture" desc="some word related to above picture"/>
      </div>
      <div className="cardBox d-flex justify-content-center p-2">
        <BlogCard url="logo192.png" title="picture" desc="some word related to above picture"/>
      </div>
      <div className="cardBox d-flex justify-content-center p-2">
        <BlogCard url="logo192.png" title="picture" desc="some word related to above picture"/>
      </div>
      
      
      
    </div>

  </>
  )
}

export default Blogs