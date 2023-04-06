import React, { useState } from 'react'
import ProductCard from './ProductCard'
import BreadCrumb from './BreadCrumb'
import Meta from './Meta'
import { MdViewColumn } from "react-icons/md"
import {RxRows} from 'react-icons/rx'

const OurStore = () => {

  // let product = [
  //   {
  //     id: 1,
  //     title: 'Hats',
  //     routeName: 'hats',
  //     items: [
  //     {
  //     id: 1,
  //     name: 'Brown Brim',
  //     imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
  //     price: 25
  //     },
  //     {
  //     id: 2,
  //     name: 'Blue Beanie',
  //     imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
  //     price: 18
  //     },
  //     {
  //     id: 3,
  //     name: 'Brown Cowboy',
  //     imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
  //     price: 35
  //     },
  //     {
  //     id: 4,
  //     name: 'Grey Brim',
  //     imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
  //     price: 25
  //     },
  //     {
  //     id: 5,
  //     name: 'Green Beanie',
  //     imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
  //     price: 18
  //     },
  //     {
  //     id: 6,
  //     name: 'Palm Tree Cap',
  //     imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
  //     price: 14
  //     },
  //     {
  //     id: 7,
  //     name: 'Red Beanie',
  //     imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
  //     price: 18
  //     },
  //     {
  //     id: 8,
  //     name: 'Wolf Cap',
  //     imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
  //     price: 14
  //     },
  //     {
  //     id: 9,
  //     name: 'Blue Snapback',
  //     imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
  //     price: 16
  //     }
  //     ]
  //     },
  //     {
  //     id: 2,
  //     title: 'Sneakers',
  //     routeName: 'sneakers',
  //     items: [
  //     {
  //     id: 10,
  //     name: 'Adidas NMD',
  //     imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
  //     price: 220
  //     },
  //     {
  //     id: 11,
  //     name: 'Adidas Yeezy',
  //     imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
  //     price: 280
  //     },
  //     {
  //     id: 12,
  //     name: 'Black Converse',
  //     imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
  //     price: 110
  //     },
  //     {
  //     id: 13,
  //     name: 'Nike White AirForce',
  //     imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
  //     price: 160
  //     },
  //     {
  //     id: 14,
  //     name: 'Nike Red High Tops',
  //     imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
  //     price: 160
  //     },
  //     {
  //     id: 15,
  //     name: 'Nike Brown High Tops',
  //     imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
  //     price: 160
  //     },
  //     {
  //     id: 16,
  //     name: 'Air Jordan Limited',
  //     imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
  //     price: 190
  //     },
  //     {
  //     id: 17,
  //     name: 'Timberlands',
  //     imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
  //     price: 200
  //     }
  //     ]
  //     },
  //     {
  //     id: 3,
  //     title: 'Jackets',
  //     routeName: 'jackets',
  //     items: [
  //     {
  //     id: 18,
  //     name: 'Black Jean Shearling',
  //     imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
  //     price: 125
  //     },
  //     {
  //     id: 19,
  //     name: 'Blue Jean Jacket',
  //     imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
  //     price: 90
  //     },
  //     {
  //     id: 20,
  //     name: 'Grey Jean Jacket',
  //     imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
  //     price: 90
  //     },
  //     {
  //     id: 21,
  //     name: 'Brown Shearling',
  //     imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
  //     price: 165
  //     },
  //     {
  //     id: 22,
  //     name: 'Tan Trench',
  //     imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
  //     price: 185
  //     }
  //     ]
  //     },
  //     {
  //     id: 4,
  //     title: 'Womens',
  //     routeName: 'womens',
  //     items: [
  //     {
  //     id: 23,
  //     name: 'Blue Tanktop',
  //     imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
  //     price: 25
  //     },
  //     {
  //     id: 24,
  //     name: 'Floral Blouse',
  //     imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
  //     price: 20
  //     },
  //     {
  //     id: 25,
  //     name: 'Floral Dress',
  //     imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
  //     price: 80
  //     },
  //     {
  //     id: 26,
  //     name: 'Red Dots Dress',
  //     imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
  //     price: 80
  //     },
  //     {
  //     id: 27,
  //     name: 'Striped Sweater',
  //     imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
  //     price: 45
  //     },
  //     {
  //     id: 28,
  //     name: 'Yellow Track Suit',
  //     imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
  //     price: 135
  //     },
  //     {
  //     id: 29,
  //     name: 'White Blouse',
  //     imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
  //     price: 20
  //     }
  //     ]
  //     },
  //     {
  //     id: 5,
  //     title: 'Mens',
  //     routeName: 'mens',
  //     items: [
  //     {
  //     id: 30,
  //     name: 'Camo Down Vest',
  //     imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
  //     price: 325
  //     },
  //     {
  //     id: 31,
  //     name: 'Floral T-shirt',
  //     imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
  //     price: 20
  //     },
  //     {
  //     id: 32,
  //     name: 'Black & White Longsleeve',
  //     imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
  //     price: 25
  //     },
  //     {
  //     id: 33,
  //     name: 'Pink T-shirt',
  //     imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
  //     price: 25
  //     },
  //     {
  //     id: 34,
  //     name: 'Jean Long Sleeve',
  //     imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
  //     price: 40
  //     },
  //     {
  //     id: 35,
  //     name: 'Burgundy T-shirt',
  //     imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
  //     price: 25
  //     }
  //     ]
  //     }
  // ]

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
            <ProductCard url={'images/laptop.jpg'} title='Havells' desc="nothing can be told for this product" price={200} size={element} id={1} isWishlist={false}/>
            <ProductCard url={'images/laptop.jpg'} title='Havells' desc="nothing can be told for this product" price={200} size={element} id={2} isWishlist={false}/>
            <ProductCard url={'images/laptop.jpg'} title='Havells' desc="nothing can be told for this product" price={200} size={element} id={3} isWishlist={false}/> 
            <ProductCard url={'images/laptop.jpg'} title='Havells' desc="nothing can be told for this product" price={200} size={element} id={4} isWishlist={false}/>
            <ProductCard url={'images/laptop.jpg'} title='Havells' desc="nothing can be told for this product" price={200} size={element} id={5} isWishlist={false}/>
            <ProductCard url={'images/laptop.jpg'} title='Havells' desc="nothing can be told for this product" price={200} size={element} id={6} isWishlist={false}/>  
          </div>     
        </div>
      </div>
    </div>
</>
  )
}

export default OurStore