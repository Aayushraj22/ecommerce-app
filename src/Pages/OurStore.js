import React, { useState } from 'react'
import ProductCard from './ProductCard'
import BreadCrumb from './BreadCrumb'
import Meta from './Meta'
import { MdViewColumn } from "react-icons/md"
import {RxRows} from 'react-icons/rx'
import  ApiFileData from './OurStore.data.js'

const OurStore = () => {
    let apifile=ApiFileData;
  const [element,setElement] = useState(3);

  function handleOnClickRow() {
    if(element === 12) {
      setElement(3);
    }
  }
  function handleOnClickColumn() {
    if(element === 3) {
      setElement(12);
    }
  }
  return (
<>
    <Meta title="Our Store"/>
    <BreadCrumb title = 'Store' />

    <div className="container bg-secondary" >
      <div className="row justify-content-center py-3">
        {/* first columns  have 4 row */}
        <div className="col-3 d-flex flex-column">  
          <div className="container mb-3 py-2" style={{backgroundColor:"white", borderRadius:'5px'}}>
            <h6 className='mb-2'>Shop by Categories</h6>
            <ul style={{listStyleType: 'none', margin:'0', padding:'0'}}>
              <li>Electronics</li>
               <li>Appreal</li>
               <li>Footwear</li>
               <li>Food</li>
            </ul>
          </div>
          <div className="container mb-3 py-2" style={{backgroundColor:"white", borderRadius:'5px'}}>
            <h6 className='mb-2'> Filter By</h6>
            <div>
              <h6 className='mb-2' style={{fontSize:'14px'}}>Availability</h6>
              <div>
                <input type="checkbox" name="Instock" id="input-1" />&nbsp;&nbsp;<label htmlFor='input-1'>Instock</label>
              </div>
              <div>
                <input type="checkbox" name="outOfBox" id="input-2" />&nbsp;&nbsp;<label htmlFor='input-2'>Out of stock</label>
              </div>
            </div>
            </div>
          {/* start from here */}
          <div className="container py-2" style={{backgroundColor:"white", borderRadius:'5px'}}>
            <h6 className='mb-2'>Product tags</h6>
            <div className=" d-flex flex-wrap">
              <span className='badge text-light bg-secondary m-1'>Headphone</span>
              <span className='badge bg-secondary m-1'>Laptop</span>
              <span className='badge bg-secondary m-1'>Mobile</span>
              <span className='badge bg-secondary m-1'>Tablet</span>
              <span className='badge bg-secondary m-1'>Wire</span>
            </div>
          </div>


        </div>
        {/* second column */}
        <div className="col-9 d-flex flex-column ps-2">
          <div className="d-flex justify-content-between align-items-center bg-light rounded mb-2 p-2" >
            <div>
              <label htmlFor="sortBy"> Sort By&nbsp;:&nbsp;</label>
              <select name="choose" id="sortBy" >
                <option value="bestSelling">Best Selling</option>
                <option value="title-ascending">Alphabetically A-Z</option>
                <option value="title-descending">Alphabetically Z-A</option>
                <option value="price-ascending">Price, low to high</option>
                <option value="price-descending">Price, high to low</option>
                <option value="created-ascending">Date, old to new</option>
                <option value="created-descending">Date, new to old</option>
              </select>
            </div>
            <div className='d-flex align-items-center gap-10'>
              {/* <img src="images/gr.svg" alt="column" /> */}
              {/* <img src="images/gr2.svg" alt="row" /> */}
              <RxRows style={{width: '20px', height: '20px', cursor:'pointer'}} onClick={handleOnClickRow}/>
              <MdViewColumn style={{width: '30px', height: '30px', cursor:'pointer'}} onClick={handleOnClickColumn} />
            </div>
          </div>   
          <div className="d-flex flex-wrap justify-content-between">

         { apifile.map((ele)=> {
           return < ProductCard image={ele.image} title={ele.title} description={ele.description.slice(0,20)} price={ele.price} size={element} id={ele.id} isWishlist={false}/>
          } ) }
            
          </div>     
        </div>
      </div>
    </div>
</>
  )
}

export default OurStore