import React from 'react'

const Home = () => {
  return (
  <>
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
  </>
  )
}

export default Home