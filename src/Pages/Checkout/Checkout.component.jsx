import React from 'react'
import {TiTick} from 'react-icons/ti'
import {AiOutlineSafety} from 'react-icons/ai'
import {TbTruckDelivery,TbBell,TbStar} from 'react-icons/tb'
import './Checkout.styles.scss'
import { Link } from 'react-router-dom'


function boxUiChange() {
    document.querySelector('.cfContent').style.display = 'none'
    document.querySelector('.containerOnChange').style.display = 'block'
    document.querySelector('.addressOnChange').style.display = 'none'
    document.querySelector('.uiAddress').style.display = 'flex'

}

function backToUi() {
    document.querySelector('.cfContent').style.display ='flex'
    document.querySelector('.containerOnChange').style.display = 'none'
    document.querySelector('.addressOnChange').style.display = 'flex'
    document.querySelector('.uiAddress').style.display = 'none'
}

function handleOnEditAddress() {
    console.log('comes soon')
}

function handleOnConfirmAddress() {
    console.log('comes soon')
}
function onClick(event) {
    console.log(event.target.innerHTML)
    if(event.target.id === 'address1') {
        document.getElementById('address1_btn').style.display = 'block'
        document.getElementById('address2_btn').style.display = 'none'
        document.getElementById('edit_address1').style.display = 'block'
        document.getElementById('edit_address2').style.display = 'none'
    } else if(event.target.id === 'address2'){
        document.getElementById('address1_btn').style.display = 'none'
        document.getElementById('address2_btn').style.display = 'block'
        document.getElementById('edit_address1').style.display = 'none'
        document.getElementById('edit_address2').style.display = 'block'

    }
}


const name = "User Name"
const phone = "1234567890"
const address = "user address"


const Checkout = () => ( 
<>
    <div className="container-scss">
        {/* first column  size 60%*/}
        <div className="columnFirst gap-3">

        {/* login section */}
            <div className="cfContent gap-3">
                <div className="smallBox">1</div>
                <div className="cfcDetail">
                    <span className='d-flex align-items-center gap-2'>
                        <h6 className='m-0 text-secondary'>LOGIN</h6>
                        <TiTick />
                    </span>
                    <span> <span className='fw-medium'>User Name</span>  &nbsp; <span>+911234567890</span></span>
                </div>
                <div>
                    <button className='btn btn-outline-secondary' onClick={boxUiChange}>Change</button>
                </div>    
            </div>

        {/* login section when change button is clicked */}
        <div className="containerOnChange bg-light" style={{fontSize:'14px'}}>
            <div className='bg-primary p-3'>
                <span className="smallBox me-3 rounded-1 bg-light">1</span>
                <span className='m-0 text-light fw-medium'>LOGIN</span>
            </div>
            <div className='bg-light p-2 gap-2 d-flex columnAt600'>
                <div className="d-flex flex-column p-2 " style={{width: '50%'}}>
                    <div className='d-flex p-1 gap-3' style={{width: 'fitContent'}}>
                        <span className='text-secondary'>Name</span>
                        <span className='fw-medium'>User name</span>
                    </div>
                    <div className='d-flex p-1 gap-3' style={{width: 'fitContent'}}>
                        <span className='text-secondary'>Phone</span>
                        <span className='fw-medium'>User number</span>
                    </div>
                    <div className='d-flex p-1 gap-3' style={{width: 'fitContent'}}>
                        {/* have to work on it */}
                        <Link to="/" > <span className='text-primary fw-medium'>Logout &amp; Sign in to another account</span></Link>
                    </div>
                    <div>
                        <button className='btn btn-outline-primary' style={{width: '90%'}} onClick={backToUi}>Continue Checkout</button>
                    </div>
                </div>
                <div className="d-flex flex-column p-2 " style={{width: '50%'}}>
                    <p className='p-1 text-secondary'>Advantages of our secure login</p>
                    <div className='d-flex p-1 gap-3 align-items-center' style={{width: 'fitContent'}}>
                        <TbTruckDelivery className='text-primary ' style={{fontSize: '20px'}}/>
                        <span style={{fontWeight:'400'}}>Easily Track Orders, Hassle free Returns</span>
                    </div>
                    <div className='d-flex p-1 gap-3 align-items-center' style={{width: 'fitContent'}}>
                        <TbBell className='text-primary ' style={{fontSize: '20px'}}/>
                        <span style={{fontWeight:'400'}}>Get Relevant Alerts and Recommendation</span>
                    </div>
                    <div className='d-flex p-1 gap-3 align-items-center' style={{width: 'fitContent'}}>
                        <TbStar className='text-primary ' style={{fontSize: '20px'}}/>
                        <span style={{fontWeight:'400'}}>Wishlist, Reviews, Rating and More</span>
                    </div>
                </div>
            </div>
            <p className='p-2 text-secondary mb-1'>Please note that upon clicking "Logout" you will lose all items in cart and will be redirected to Home page</p>
        </div>

        {/* address section */}
            
            <div className="gap-3 bg-light uiAddress" style={{padding: '10px 30px'}}>
                <div className="smallBox">2</div>
                <div className="flex-grow-1 text-secondary" style={{fontSize: '16px',fontWeight:'500'}}>
                    DELIVERY ADDRESS
                </div>
            </div>

        {/* add new address */}

        <div className="addressOnChange bg-light " style={{fontSize:'14px'}}>
            <div className='bg-primary p-3'>
                <span className="smallBox me-3 rounded-1 bg-light">2</span>
                <span className='m-0 text-light fw-medium'>DELIVERY ADDRESS</span>
            </div>
            <div className="d-flex gap-3 bg-light " style={{padding: '10px 30px'}}>
                <div>
                    <input type="radio" name="selectAddress" id="address1" onClick={onClick}/>
                </div>
                <label htmlFor= "address1" className="flex-grow-1 text-secondary d-flex flex-column justify-content-center" style={{fontSize: '16px',fontWeight:'500'}}>
                    <span><span>{name}</span> <span>{phone}</span></span>
                    <span>{address}</span>
                    <button className='btn btn-outline-success' id='address1_btn' onClick={handleOnConfirmAddress}>DELIVERY HERE</button>
                </label>
                <div id='edit_address1' style={{display:'none'}}>
                    <span style={{fontWeight: '400', color:'blue', cursor:'pointer'}} onClick={handleOnEditAddress}>EDIT</span>
                </div>
            </div>
            <div className="d-flex gap-3 bg-light " style={{padding: '10px 30px'}}>
                <div>
                    <input type="radio" name="selectAddress" id="address2" onClick={onClick}/>
                </div>
                <label htmlFor= "address2" className="flex-grow-1 text-secondary d-flex flex-column justify-content-center gap-2" style={{fontSize: '16px',fontWeight:'500'}}>
                    <span><span>{name}</span> <span>{phone}</span></span>
                    <span>{address}</span>
                    <button className='btn btn-outline-success' id='address2_btn' onClick={handleOnConfirmAddress}>DELIVERY HERE</button>
                </label>
                <div id='edit_address2' style={{display:'none'}}>
                    <span style={{fontWeight: '400', color:'blue', cursor:'pointer'}} onClick={handleOnEditAddress}>EDIT</span>
                </div>
            </div>    
        </div>

        {/* order summary */}
            <div className="d-flex gap-3 align-items-center bg-light " style={{padding: '10px 30px'}}>
                <div className="smallBox">3</div>
                <div className="flex-grow-1 text-secondary" style={{fontSize: '16px',fontWeight:'500'}}>
                    ORDER SUMMARY
                </div>
            </div>

        {/* PAYMENT OPTION*/}
            <div className="d-flex gap-3 align-items-center bg-light " style={{padding: '10px 30px'}}>
                <div className="smallBox">4</div>
                <div className="flex-grow-1 text-secondary" style={{fontSize: '16px',fontWeight:'500'}}>
                    PAYMENT OPTION
                </div>
            </div>

        </div>

        {/* second column size 30% */}
        <div className="columnSecond">
            <div className="d-flex flex-column bg-light flex-wrap">
                <div style={{padding:'10px', color: 'grey', fontSize:'16px', fontWeight:'500'}}><span>PRICE DETAILS</span></div>
                <div className="d-flex flex-column  border-top border-bottom border-secondary border-opacity-50 p-1 ">
                    <div className='d-flex justify-content-between p-2'>
                        <span>Price (3 items)</span>
                        <span>&#8377;1234</span>
                    </div>
                    <div className='d-flex justify-content-between p-2'>
                        <span>Delivery Charges</span>
                        <span className='text-success fw-medium'>FREE</span>
                    </div>
                    <hr color='grey' style={{margin:'0 auto',width:'95%'}}/>
                    <div className='d-flex justify-content-between p-2 fw-bolder'>
                        <span>Total Payable</span>
                        <span>	&#8377;1234</span>
                    </div>
                </div>
                <div style={{padding:'15px'}}>
                    <span className='text-success fw-medium'>Your total saving on this order 	&#8377;1234</span>
                </div>
            </div>
            <div className='d-flex p-2 gap-3 align-items-center mt-2'>
                <AiOutlineSafety style={{fontSize:'60px'}}/>
                <span className='text-secondary fw-medium' style={{fontSize:'14px'}}>Safe and Secure Payments. Easy Returns. 100% Authentic Products</span>
            </div>
            
        </div>
    </div>



</>
)
export default Checkout


