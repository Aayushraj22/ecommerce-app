import React from 'react'
// import BlogCard from './BlogCard'
import Marquee from 'react-fast-marquee'
import Meta from './Meta'

const Home = () => {
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

  return (
  <>
  <Meta title="Home" />
  <section className="home-wrapper-1 py-3">
    <div className="container my-2 p-0">
      <div className="row ">
      {/* first column */}
        <div className="col-6 pe-1">
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active position-relative">
                <img src="\images\main-banner-1.jpg" className="image-fluid .img-thumbnail"style={{maxWidth: '100%'}} alt="main-banner-1"/>
                <div className="image-text d-flex flex-column position-absolute align-items-start">
                <p className='property m-0'>SUPER CHARGED FOR PROS</p>
                <p className='product m-0 h2'>IPadS13+Pro</p>
                <p className='m-0'>From $999.0<br/>or $41.62/mo</p>
                <button className="btn btn-primary border rounded-5">Buy Now</button>
              </div>
              </div>
              <div className="carousel-item">
                <img src="\images\main-banner.jpg" style={{maxWidth: '100%'}}className="image-fluid .img-thumbnail" alt="main-banner"/>
                <div className="image-text d-flex flex-column position-absolute align-items-start">
                <p className='property m-0'>SUPER NOISECANCELATION FOR PROS</p>
                <p className='product m-0 h2'>Bluetooth Noise</p>
                <p className='m-0'>From $999.0<br/>or $41.62/mo</p>
                <button className="btn btn-primary border rounded-5">Buy Now</button>
              </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      {/* second column */}
        <div className="col-6 d-flex justify-content-evenly flex-wrap align-items-center ps-1">

          <div className="col-6 position-relative">
            <img src="\images\catbanner-01.jpg" className="img-fluid border rounded-2" alt="Responsive_image" style={{maxWidth: '100%'}}/>
            <div className="image-text d-flex flex-column position-absolute">
              <p className='property m-0'>Best Sale</p>
              <p className='product m-0 h5'>Macbook</p>
              <p className='m-0'>from $999.0<br/>or $41.62/mo</p>
            </div>
          </div>

          <div className="col-6 position-relative">
            <img src="\images\catbanner-02.jpg" className="img-fluid border rounded-2" alt="Responsive_image" style={{maxWidth: '100%'}}/>
            <div className="image-text d-flex flex-column position-absolute">
              <p className='property m-0'>New Arrival</p>
              <p className='product m-0 h5'>SmartWatch</p>
              <p className='m-0'>from $999.0<br/>or $41.62/mo</p>
              </div>
            </div>

            <div className="col-6 position-relative">
              <img src="\images\catbanner-03.jpg" className="img-fluid border rounded-2" alt="Responsive_image" style={{maxWidth: '100%'}}/>
              <div className="image-text d-flex flex-column position-absolute">
                <p className='property m-0'>Best Sale</p>
                <p className='product m-0 h5'>iPadS13+Pro</p>
                <p className='m-0'>from $999.0<br/>or $41.62/mo</p>
              </div>
            </div>

            <div className="col-6 position-relative">
              <img src="\images\catbanner-04.jpg" className="img-fluid border rounded-2" alt="Responsive_image" style={{maxWidth: '100%'}}/>
              <div className="image-text d-flex flex-column position-absolute">
                <p className='property m-0'>Best Sale</p>
                <p className='product m-0 h5'>BluetoothHeadPhone</p>
                <p className='m-0'>from $999.0<br/>or $41.62/mo</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
  <section className="home-wrapper-2 py-3">
    <div className="container">
      <div className="services d-flex justify-content-between align-items-center flex-wrap my-5">

        <div className="d-flex align-items-center gap-10">
          <img src="\images\service.png" alt="service" />
          <div className="d-flex flex-column">
            <p className='h4'>Free Shipping</p>
            <p>From all order over $100</p>
          </div>
        </div>

        <div className="d-flex align-items-center gap-10">
          <img src="\images\service-02.png" alt="service-02" />
          <div className="d-flex flex-column">
            <p className='h4'>Daily Surprise Offers</p>
            <p>Save upto 25% OFF</p>
          </div>
        </div>

        <div className="d-flex align-items-center gap-10">
          <img src="\images\service-03.png" alt="service-03" />
          <div className="d-flex flex-column">
            <p className='h4'>Support 24/7</p>
            <p>Shop with an expert</p>
          </div>
        </div>

        <div className="d-flex align-items-center gap-10">
          <img src="\images\service-04.png" alt="service-04" />
          <div className="d-flex flex-column">
            <p className='h4'>Affordable Price</p>
            <p>Get factory direct price</p>
          </div>
        </div>

        <div className="d-flex align-items-center gap-10">
          <img src="\images\service-05.png" alt="service-05" />
          <div className="d-flex flex-column">
            <p className='h4'>Secure Payment</p>
            <p>100% Protected Payment</p>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-around align-items-center flex-wrap bg-white ">
        <div className="d-flex justify-content-center align-items-center bg-white">
          <div className='d-flex flex-column'>
            <p>Camera and Videos</p>
            <p>10 items</p>
          </div>
          <img src="images\camera.jpg" alt="camera" />
        </div>

        <div className="d-flex justify-content-center align-items-center bg-white">
          <div className='d-flex flex-column'>
            <p>Computer &amp; Laptop</p>
            <p>8 items</p>
          </div>
          <img src="images\laptop.jpg" alt="laptop" />
        </div>

        <div className="d-flex justify-content-center align-items-center bg-white">
          <div className='d-flex flex-column'>
            <p>Smart Television</p>
            <p>12 items</p>
          </div>
          <img src="images\tv.jpg" alt="television" />
        </div>

        <div className="d-flex justify-content-center align-items-center bg-white">
          <div className='d-flex flex-column'>
            <p>Smart WAtches</p>
            <p>13 items</p>
          </div>
          <img src="images\watch.jpg" alt="watch" style={{height: '110px', width: '110px'}} />
        </div>

        <div className="d-flex justify-content-center align-items-center bg-white">
          <div className='d-flex flex-column'>
            <p>Music &amp; Gaming</p>
            <p>4 items</p>
          </div>
          <img src="images\gamingPad.webp" alt="gamingPad" style={{height: '110px', width: '110px'}} />
        </div>

        <div className="d-flex justify-content-center align-items-center bg-white">
          <div className='d-flex flex-column'>
            <p>HeadPhones</p>
            <p>6 items</p>
          </div>
          <img src="images\headphone.jpg" alt="headphone" style={{height: '110px', width: '110px'}} />
        </div>

        <div className="d-flex justify-content-center align-items-center bg-white">
          <div className='d-flex flex-column'>
            <p>Mobile &amp; Tablets</p>
            <p>5 items</p>
          </div>
          <img src="images\apple-iphone-11.png" alt="mobiles" style={{height: '110px', width: '110px'}} />
        </div>

        <div className="d-flex justify-content-center align-items-center bg-white">
          <div className='d-flex flex-column'>
            <p>Home Appliances</p>
            <p>4 items</p>
          </div>
          <img src="images\homeapp.jpg" alt="homeAppliances" style={{height: '110px', width: '110px'}} />
        </div>
      </div>
    </div>
  </section>
  <section className='home-wrapper-brands py-1'>
    <div className="container">
      <Marquee pauseOnHover={true} gradientColor={[256,150,100]} gradientWidth={500} style={{margin: '0'}} >
        <img src="images\brand-01.png" alt="brand-0" />
        <img src="images\brand-02.png" alt="brand-0" />
        <img src="images\brand-03.png" alt="brand-0" />
        <img src="images\brand-04.png" alt="brand-0" />
        <img src="images\brand-05.png" alt="brand-0" />
        <img src="images\brand-06.png" alt="brand-0" />
        <img src="images\brand-07.png" alt="brand-0" />
        <img src="images\brand-08.png" alt="brand-0" />
      </Marquee>
    </div>
  </section>

  </>
  )
}

export default Home