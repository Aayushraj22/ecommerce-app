import React from 'react'
import BreadCrumb from './BreadCrumb'
import Meta from './Meta'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

const Wishlist = () => {
  const wishlistState = useSelector((state) => state.wishlist);
  // if(wishlistState) {
  //   wishlistState.forEach(element => {
  //     console.log(element);
  //   });
  // }
  return (
<>
    <Meta title="wishlist" />
    <BreadCrumb title="wishlist" />

    <div className="container d-flex flex-wrap justify-content-around bg-light py-4">
    {wishlistState && wishlistState.map((prod) => {
              return <ProductCard url={prod.url} title={prod.title} desc={prod.description} price={prod.price} size={prod.size} id={prod.id} key={prod.id} isWishlist={true} />

            })}
    </div>
</>
  )
}

export default Wishlist