import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToWishlist, delFromWishlist } from '../redux/action/action';
// import {AiOutlineHeart} from 'react-icons/ai'
const ProductCard = (props) => {
  const dispatch = useDispatch();
  let n = 1
  if(props.size === 12)
    n = 2
  else
    n = 1
  
    const [color,setColor] = useState('white')

    const addProductToWishlist = (product) => {

      // console.log("add", product)
      dispatch(addToWishlist(product));

      if(color === 'white')
        setColor('red')  
      else 
        setColor('white')
    };

    const delProductFromWishlist = (product) => {
      // console.log(product.id)
      dispatch(delFromWishlist(product));
    }
    
    // function handleOnLike() {
    //   if(color === 'white')
    //     setColor('red')  
    //   else 
    //     setColor('white')
    //   alert(props.title)
    // }
  return (
  <>
    <div className={`card-${n} col-${props.size} border border-4 border-secondary rounded-3`} >
        <div className=' position-relative d-flex align-items-center'>
          <img src={props.url} className="card-img-top" alt="blog"/>
          {/* <AiOutlineHeart className='position-absolute top-0 end-0 fs-4 likeIcons' style={{cursor:'pointer'}} onClick={handleOnLike}/>
           */}
          
            {props.isWishlist ? 
          <div className="likeBox" style={{cursor: "pointer"}} onClick={() => delProductFromWishlist(props)}>X</div>  
          :
          <div className='likeBox' onClick={() => addProductToWishlist(props)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" className="like" fill={color} stroke="#FFF" fillRule="evenodd" opacity=".9"></path>
            </svg>
            </div>
          }
            
          
        </div>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.desc} </p>
            <h6>${props.price}</h6>    
            <h6>${props.id}</h6>    
        </div>
    </div>
  </>  
  )
}

export default ProductCard