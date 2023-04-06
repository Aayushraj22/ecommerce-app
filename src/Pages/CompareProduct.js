import React from 'react'
import {BsFillStarFill,BsInfoCircle} from 'react-icons/bs'
// import { Scrollbars } from 'react-custom-scrollbars-2'; scrollbar use krna hai toh isko use kro

const CompareProduct = () => {
  function handleOnClick() {
    document.querySelector('.more-description').style.height = 'min-content'
  }
  function handleOnLike() {
    let likeColor = document.querySelector('.like')

    if(likeColor.getAttribute('fill') === '#fff')
      likeColor.setAttribute('fill','red')
    else
      likeColor.setAttribute('fill','#fff')

    alert('added to wishlist')
  }
  return (
  <>
    <div className='detail-card'>
      <div className="image-section">
        <div className='likeBox' onClick={handleOnLike}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" className="like" fill="#fff" stroke="#FFF" fillRule="evenodd" opacity=".9"></path></svg>
        </div>
        <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/y/0/5/s-bmrhenful-z14-blive-original-imaghau6cw8g3gjy.jpeg?q=70" alt="demoImage" target='_blank'/>
      </div>

      <div className="description-section">
        <h5 style={{color:'grey', margin: '5px 10px'}}>BLIVE</h5>
        <h3>Men Solid Henley Neck Maroon T-Shirt</h3>
        <div style={{display: 'flex',margin:'10px 0'}}>
          <button style={{width:'50px', color:'white', background: 'green', outline: 'none', border: 'none', borderRadius: '5px',fontWeight: 'bolder', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>4.2<BsFillStarFill/> </button>
          <span style={{margin:'0 10px'}}>44 Rating &amp; 22Reviews</span>
        </div>
        <div><b style={{color:'green'}}>Special price</b></div>
        <div style={{display:'flex', width:'fit-content', alignItems: 'center', justifyContent:'space-between',margin:'10px 0'}}>
            <h5>&#8377;278 </h5>
            <del style={{color: 'grey',margin:'0 10px'}}>&#8377;1,999</del>
            <span style={{fontWeight:'bolder', color:'green',margin: '0 10px 0 0'}}>86% Off</span>
          <div style={{position:'relative'}}>
            <BsInfoCircle style={{cursor:'pointer'}} className='infoIcons'/>
              <div className='tooltip-box'>
                <h6 style={{marginBottom:'6px'}}>Price details</h6>
                <hr color='grey' style={{margin:'0'}}/>
                <div style={{display:'flex',margin:'4px 0', justifyContent: 'space-between', color:'grey'}}>
                  <span>Maximum Retail Price</span>
                  <del style={{color: 'grey',margin:'0 10px'}}>&#8377;1999</del>
                </div>
                <div style={{display:'flex',margin:'4px 0', justifyContent: 'space-between', color:'grey'}}>
                  <span>Selling Price</span>
                  <del style={{color: 'grey',margin:'0 10px'}}>&#8377;368</del>
                </div>
                <hr color='grey' style={{margin:'0'}}/>
                <div style={{display:'flex', justifyContent: 'space-between',marginTop:'6px'}}>
                  <h6>Special Price</h6>
                  <span style={{color: 'grey',margin:'0 10px'}}>&#8377;278</span>
                </div>
              </div>
          </div>
        </div>

        <div className='more-description'>
          <h3 style={{padding:'20px', borderBottom:'1px solid rgb(236, 231, 231)'}}>Product Details</h3> 
          <div style={{display:'flex', flexDirection:'column', borderBottom:'1px solid rgb(236, 231, 231)'}}>
            <div style={{display:'flex'}}>
              <span className='child-l-30'>Type</span>
              <span className='child-l-70'>Henley Neck</span>
            </div>
            <div style={{display:'flex'}}>
              <span className='child-l-30'>Sleeve</span>
              <span className='child-l-70'>Full Sleeve</span>
            </div>
            <div style={{display:'flex'}}>
              <span className='child-l-30'>Fit</span>
              <span className='child-l-70'>Regular</span>
            </div>
            <div style={{display:'flex'}}>
              <span className='child-l-30'>Fabric</span>
              <span className='child-l-70'>Cotton Blend</span>
            </div>
            <div style={{display:'flex'}}>
              <span className='child-l-30'>Pack of</span>
              <span className='child-l-70'>1</span>
            </div>
            <div style={{display:'flex'}}>
              <span className='child-l-30'>Style Code</span>
              <span className='child-l-70'>BMRHENFUL-Z14</span>
            </div>
            <div style={{display:'flex'}}>
              <span className='child-l-30'>Neck Type</span>
              <span className='child-l-70'>Henley Neck</span>
            </div>
            <div style={{display:'flex'}}>
              <span className='child-l-30'>Ideal For</span>
              <span className='child-l-70'>Men</span>
            </div>
            <div style={{display:'flex'}}>
              <span className='child-l-30'>Size</span>
              <span className='child-l-70'>XXL</span>
            </div>
            <div style={{display:'flex'}}>
              <span className='child-l-30'>Pattern</span>
              <span className='child-l-70'>Solid</span>
            </div>
            <div style={{display:'flex'}}>
              <span className='child-l-30'>Suitable For</span>
              <span className='child-l-70'>Western wear</span>
            </div>
            <div style={{display:'flex'}}>
              <span className='child-l-30'>Reversible</span>
              <span className='child-l-70'>No</span>
            </div>
            <div style={{display:'flex'}}>
              <span className='child-l-30'>Fabric Care</span>
              <span className='child-l-70'>Regular Machine Wash</span>
            </div>
          </div>
        </div>
        <button onClick={handleOnClick} style={{border:'none', width:'fit-content',color:'blue',background:'transparent' }}>see more</button>
      </div>
    </div>
  </>
  )
}

export default CompareProduct