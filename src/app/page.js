"use client"
import React, { useState } from 'react'
import ReactInstaStories from 'react-insta-stories';
import Stories from 'react-insta-stories'
import Slider from 'react-slick';
export default function page() {
  let [instaStory, setInstastory] = useState(false)
  let [showModal, setShowModal] = useState(false)
  let [showOfferModal, setShowOfferModal] = useState(false)
  let [showloginModal, setShowLoginModal] = useState(false)
  let [videoModal, setVideoModal] = useState(false)

  let instaCheck = () => {
    setInstastory(true)
  }
  let handleModal = () => {
    setShowModal(!showModal)
  }

  let handleOfferModal = () => {
    setShowOfferModal(!showOfferModal)
  }

  let loginModal = () => {
    setShowLoginModal(!showloginModal)
  }
  let videoPlay = () => {
    setVideoModal(!videoModal)
  }

  var priceSlider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  };


  const stories = [
    // "https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/moistureResistance.jpg",
    // "https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/applications.jpg",
    // "https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/moistureResistance.jpg",
    // "https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/applications.jpg"
    {
      url: 'https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/moistureResistance.jpg',
      header: {
        heading: 'Mistry.Store',
        profileImage: 'https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/Mistry+Store+(1).png'
      }
    },
    {
      url:
        'https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/applications.jpg',
      header: {
        heading: 'Mistry.Store',
        profileImage: 'https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/Mistry+Store+(1).png'
      }
    }, {
      url: 'https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/moistureResistance.jpg',
      header: {
        heading: 'Mistry.Store',
        profileImage: 'https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/Mistry+Store+(1).png'
      }
    },
    {
      url:
        'https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/applications.jpg',
      header: {
        heading: 'Mistry.Store',
        profileImage: 'https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/Mistry+Store+(1).png'
      }
    },
    {
      url: 'https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/moistureResistance.jpg',
      header: {
        heading: 'Mistry.Store',
        profileImage: 'https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/Mistry+Store+(1).png'
      }
    },
    {
      url:
        'https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/applications.jpg',
      header: {
        heading: 'Mistry.Store',
        profileImage: 'https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/Mistry+Store+(1).png'
      }
    }
  ];
  return (

    <>

      <section className='home-stories px-3 px-lg-5 pb-3 pt-2'>
        <div className="d-flex mobile-stories-row justify-content-center ">

          <div onClick={instaCheck} className="text-center mx-2 cursor-pointer">
            <div className={`story-list-item rounded-circle mb-2 mx-auto  ${instaStory ? 'read' : 'unread'}`}>
              <div className="story-image rounded-circle">
                <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/Mistry+Store+(1).png" alt="Image" className="w-100 h-100 rounded-circle" />
              </div>
            </div>
            <p className="fs-15 label-color-2 fw-600 m-0 line-clamp-2">Mistry.Store</p>
          </div>
          {/* <section class="home-stories-feed d-flex align-items-center justify-content-center w-100 vh-100 position-fixed top-0 start-0 p-lg-3">
            <div class="d-none d-lg-block">
              <button class="border-0 outline-none bg-transparent position-absolute top-0 end-0 p-3 points-close">
                <img src="https://mistry.store/images/close-black-circle.svg" alt="Close" class="img-fluid" width="30" />
              </button>
            </div>
            <div class="d-lg-none story-close-mobile position-absolute end-0">
              <button class="border-0 outline-none bg-transparent p-3 points-close">
                <img src="https://mistry.store/images/cross-icon-cir-white.svg" alt="Close" class="img-fluid" width="24" />
              </button>

            </div>
            <ReactInstaStories
              stories={stories}
              defaultInterval={1500}
              width={432}
              height={768}
            />
          </section> */}


          <div className="text-center mx-2 cursor-pointer">
            <div className="story-list-item rounded-circle mb-2 mx-auto unread">
              <div className="story-image rounded-circle">
                <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/Plywood+%26+Boards+(1).png" alt="Image" className="w-100 h-100 rounded-circle" />
              </div>

            </div>
            <p className="fs-15 label-color-2 fw-600 m-0 line-clamp-2">Plywood &amp; Boards</p>
          </div>

          <div className="text-center mx-2 cursor-pointer">
            <div className="story-list-item rounded-circle mb-2 mx-auto unread">
              <div className="story-image rounded-circle">
                <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/Sanitary+%26+Plumbing+(1).png" alt="Image" className="w-100 h-100 rounded-circle" />
              </div>
            </div>
            <p className="fs-15 label-color-2 fw-600 m-0 line-clamp-2">Sanitary &amp; Plumbing</p>
          </div>


          <div className="text-center mx-2 cursor-pointer">
            <div className="story-list-item rounded-circle mb-2 mx-auto unread">
              <div className="story-image rounded-circle">
                <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/Electricals+%26+Lights+(2).png" alt="Image" className="w-100 h-100 rounded-circle" />
              </div>
            </div>
            <p className="fs-15 label-color-2 fw-600 m-0 line-clamp-2">Electricals &amp; Lights</p>
          </div>


          <div className="text-center mx-2 cursor-pointer">
            <div className="story-list-item rounded-circle mb-2 mx-auto unread">
              <div className="story-image rounded-circle">
                <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/Hardware+%26+Tools+(2).png" alt="Image" className="w-100 h-100 rounded-circle" />
              </div>
            </div>
            <p className="fs-15 label-color-2 fw-600 m-0 line-clamp-2">Hardware &amp; Tools</p>
          </div>





        </div>

      </section>

      <section className='container-fluid py-5 '>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 bg-white brand-partners-box p-3 p-lg-4">
              <h2 className="fs-16 fw-600 lh-24 label-color-2 mb-0 d-flex align-items-start"><span>Explore Our Prices</span></h2>
              <div className="col-lg-12 pt-4 ">
                <Slider {...priceSlider}>
                  <div className="brand-partner px-3 py-lg-4 py-3 mb-3 text-center" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                    <div className="b-image mb-3">
                      <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/partners/Tesla.png" alt="Icon" className="img-fluid m-auto" />
                    </div>
                    <h3 className="fs-15 label-color-2 fw-600 mb-2 line-clamp-1">HDHMR 16.75 mm</h3>
                    <p className="fs-14 label-color-1 fw-500 mb-2 text-capitalize">Starting From</p>
                    <div>
                      <p className="fs-24 color-primary fw-700 mb-0">₹76/-</p>
                      <span className="fs-12 label-color-2 fw-600">per sqft</span>
                    </div>
                  </div>
                  <div className="brand-partner px-3 py-lg-4 py-3 mb-3 text-center" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                    <div className="b-image mb-3">
                      <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/partners/Tesla.png" alt="Icon" className="img-fluid m-auto" />
                    </div>
                    <h3 className="fs-15 label-color-2 fw-600 mb-2 line-clamp-1">HDHMR 16.75 mm</h3>
                    <p className="fs-14 label-color-1 fw-500 mb-2 text-capitalize">Starting From</p>
                    <div>
                      <p className="fs-24 color-primary fw-700 mb-0">₹76/-</p>
                      <span className="fs-12 label-color-2 fw-600">per sqft</span>
                    </div>
                  </div><div className="brand-partner px-3 py-lg-4 py-3 mb-3 text-center" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                    <div className="b-image mb-3">
                      <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/partners/Tesla.png" alt="Icon" className="img-fluid m-auto" />
                    </div>
                    <h3 className="fs-15 label-color-2 fw-600 mb-2 line-clamp-1">HDHMR 16.75 mm</h3>
                    <p className="fs-14 label-color-1 fw-500 mb-2 text-capitalize">Starting From</p>
                    <div>
                      <p className="fs-24 color-primary fw-700 mb-0">₹76/-</p>
                      <span className="fs-12 label-color-2 fw-600">per sqft</span>
                    </div>
                  </div><div className="brand-partner px-3 py-lg-4 py-3 mb-3 text-center" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                    <div className="b-image mb-3">
                      <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/partners/Tesla.png" alt="Icon" className="img-fluid m-auto" />
                    </div>
                    <h3 className="fs-15 label-color-2 fw-600 mb-2 line-clamp-1">HDHMR 16.75 mm</h3>
                    <p className="fs-14 label-color-1 fw-500 mb-2 text-capitalize">Starting From</p>
                    <div>
                      <p className="fs-24 color-primary fw-700 mb-0">₹76/-</p>
                      <span className="fs-12 label-color-2 fw-600">per sqft</span>
                    </div>
                  </div><div className="brand-partner px-3 py-lg-4 py-3 mb-3 text-center" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                    <div className="b-image mb-3">
                      <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/partners/Tesla.png" alt="Icon" className="img-fluid m-auto" />
                    </div>
                    <h3 className="fs-15 label-color-2 fw-600 mb-2 line-clamp-1">HDHMR 16.75 mm</h3>
                    <p className="fs-14 label-color-1 fw-500 mb-2 text-capitalize">Starting From</p>
                    <div>
                      <p className="fs-24 color-primary fw-700 mb-0">₹76/-</p>
                      <span className="fs-12 label-color-2 fw-600">per sqft</span>
                    </div>
                  </div><div className="brand-partner px-3 py-lg-4 py-3 mb-3 text-center" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                    <div className="b-image mb-3">
                      <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/partners/Tesla.png" alt="Icon" className="img-fluid m-auto" />
                    </div>
                    <h3 className="fs-15 label-color-2 fw-600 mb-2 line-clamp-1">HDHMR 16.75 mm</h3>
                    <p className="fs-14 label-color-1 fw-500 mb-2 text-capitalize">Starting From</p>
                    <div>
                      <p className="fs-24 color-primary fw-700 mb-0">₹76/-</p>
                      <span className="fs-12 label-color-2 fw-600">per sqft</span>
                    </div>
                  </div><div className="brand-partner px-3 py-lg-4 py-3 mb-3 text-center" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                    <div className="b-image mb-3">
                      <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/partners/Tesla.png" alt="Icon" className="img-fluid m-auto" />
                    </div>
                    <h3 className="fs-15 label-color-2 fw-600 mb-2 line-clamp-1">HDHMR 16.75 mm</h3>
                    <p className="fs-14 label-color-1 fw-500 mb-2 text-capitalize">Starting From</p>
                    <div>
                      <p className="fs-24 color-primary fw-700 mb-0">₹76/-</p>
                      <span className="fs-12 label-color-2 fw-600">per sqft</span>
                    </div>
                  </div><div className="brand-partner px-3 py-lg-4 py-3 mb-3 text-center" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                    <div className="b-image mb-3">
                      <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/partners/Tesla.png" alt="Icon" className="img-fluid m-auto" />
                    </div>
                    <h3 className="fs-15 label-color-2 fw-600 mb-2 line-clamp-1">HDHMR 16.75 mm</h3>
                    <p className="fs-14 label-color-1 fw-500 mb-2 text-capitalize">Starting From</p>
                    <div>
                      <p className="fs-24 color-primary fw-700 mb-0">₹76/-</p>
                      <span className="fs-12 label-color-2 fw-600">per sqft</span>
                    </div>
                  </div><div className="brand-partner px-3 py-lg-4 py-3 mb-3 text-center" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                    <div className="b-image mb-3">
                      <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/partners/Tesla.png" alt="Icon" className="img-fluid m-auto" />
                    </div>
                    <h3 className="fs-15 label-color-2 fw-600 mb-2 line-clamp-1">HDHMR 16.75 mm</h3>
                    <p className="fs-14 label-color-1 fw-500 mb-2 text-capitalize">Starting From</p>
                    <div>
                      <p className="fs-24 color-primary fw-700 mb-0">₹76/-</p>
                      <span className="fs-12 label-color-2 fw-600">per sqft</span>
                    </div>
                  </div><div className="brand-partner px-3 py-lg-4 py-3 mb-3 text-center" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                    <div className="b-image mb-3">
                      <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/partners/Tesla.png" alt="Icon" className="img-fluid m-auto" />
                    </div>
                    <h3 className="fs-15 label-color-2 fw-600 mb-2 line-clamp-1">HDHMR 16.75 mm</h3>
                    <p className="fs-14 label-color-1 fw-500 mb-2 text-capitalize">Starting From</p>
                    <div>
                      <p className="fs-24 color-primary fw-700 mb-0">₹76/-</p>
                      <span className="fs-12 label-color-2 fw-600">per sqft</span>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='container-fluid '>
        <div className="row pt-5 pb-4 ">
          <div className="col-lg-4">
            <figure onClick={handleModal}>
              <img className='img-fluid ' src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/homeBanner/images/deliveryPackageBanner.jpg" alt="" />
            </figure>
          </div>
          <div className="col-lg-4">
            <figure>
              <img className='img-fluid ' src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/homeBanner/images/deliveryPackageBanner.jpg" alt="" />
            </figure>
          </div>
          <div className="col-lg-4">
            <figure>
              <img className='img-fluid ' src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/homeBanner/images/deliveryPackageBanner.jpg" alt="" />
            </figure>
          </div>
        </div>

        <div style={{ top: showModal ? '0' : '100%' }} className="image-preview">
          <button onClick={handleModal} style={{ top: showModal ? '100%' : '0' }} className="border-0 p-3 bg-transparent outline-none position-absolute top-0 end-0">
            <img src="https://mistry.store/images/close-icon.svg" className="img-fluid modal-close" alt="Logo" width="40" />
          </button>
          <div className="p-4 d-flex align-items-center">
            <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/homeBanner/images/deliveryPackageDetails.png" alt="image" className="img-fluid" />
          </div>
        </div>
      </section>

      <section className="pt-5 d-lg-block d-none">
        <div className="container">
          <div onClick={handleOfferModal} className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="home-offer-card p-2 d-flex align-items-center cursor-pointer">
                <div className="offer-icon-home h-100">
                  <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/offers/image+253.png" alt="Icon" className="img-fluid" />
                </div>
                <div className="ms-2">
                  <h3 className="label-color-2 fs-16 fw-600">FREE DELIVERY</h3>
                  <h3 className="label-color-1 fs-12 fw-400 m-0 line-clamp-1">Subscribe to our delivery package to enjoy free shipping</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="home-offer-card p-2 d-flex align-items-center cursor-pointer">
                <div className="offer-icon-home h-100">
                  <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/offers/image+253.png" alt="Icon" className="img-fluid" />
                </div>
                <div className="ms-2">
                  <h3 className="label-color-2 fs-16 fw-600">WELCOME500</h3>
                  <h3 className="label-color-1 fs-12 fw-400 m-0 line-clamp-1">Save Rs 500</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fade modal-backdrop blur-backdrop show" style={{ display: showOfferModal ? 'block' : 'none' }}></div>
        <div role="dialog" aria-modal="true" className="fade offer-modal modal show" tabindex="-1" style={{ paddingRight: '7px', display: showOfferModal ? 'block' : 'none' }}>
          <div className="modal-dialog bg-transparent modal-md modal-dialog-centered">
            <div className="modal-content border-0 bg-transparent">
              <div className="bg-transparent py-0 px-2 px-lg-4 modal-body">
                <div className="bg-white offer-modal-box">
                  <div className="d-flex align-items-center border-bottom position-relative justify-content-between p-3 position-relative">
                    <h5 className="label-color-2 fs-16 fw-600 m-0">Offer Details</h5>
                    <button onClick={handleOfferModal} className="border-0 outline-none bg-transparent ms-auto offers-close position-absolute" title="Close">
                      <img src="https://mistry.store/images/close-black-circle.svg" alt="Close" className="img-fluid" width="26" />
                    </button>
                  </div>
                  <div className="px-3">
                    <div className="py-3 border-bottom">
                      <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/offers/image+253.png" alt="icon" className="img-fluid mb-3" />
                      <h6 className="label-color-2 fs-13 fw-500 m-0">Subscribe to our delivery package and get your orders delivered with no extra delivery charges. You can subscribe to our delivery packages based on your order frequency. We offer 3 packages for 1,999 Rs, 3,799 Rs and 6,999 Rs providing 5, 10 and 20 deliveries respectively.</h6>
                    </div>
                  </div>
                  <div className="p-3">
                    <h6 className="label-color-2 fs-14 fw-600 mb-3">T&amp;Cs</h6>
                    <ul className="p-0 list-unstyled">
                      <li className="label-color-1 fs-11 fw-400 mb-2 d-flex align-items-start">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" className="svg-inline--fa fa-check-circle fa-w-16 text-success fs-14 me-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                          </path>
                        </svg>
                        <span>Prices mentioned are exclusive of gst</span>
                      </li>
                      <li className="label-color-1 fs-11 fw-400 mb-2 d-flex align-items-start">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" className="svg-inline--fa fa-check-circle fa-w-16 text-success fs-14 me-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                          </path>
                        </svg>
                        <span>Each delivery package is valid for 3 months only</span>
                      </li>
                      <li className="label-color-1 fs-11 fw-400 mb-2 d-flex align-items-start">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" className="svg-inline--fa fa-check-circle fa-w-16 text-success fs-14 me-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                          </path>
                        </svg>
                        <span>Mistry.Store reserves the right to discard the offer in case of any discrepancy </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <section className="home-marquee mb-4 mt-5 p-3">
          <div className="marquee-tag">
            <div className="inner-marquee">
              <div className="d-inline-block align-middle me-4 me-lg-5 pe-lg-5 fs-15 fw-600 color-primary">
                <img src="https://mistry.store/images/currency-rupee.svg" alt="Icon" className="img-fluid me-2 me-lg-3" />
                <p className="m-0 d-inline-block">Always Low Prices</p>
              </div>
              <div className="d-inline-block align-middle me-4 me-lg-5 pe-lg-5 fs-15 fw-600 color-primary">
                <img src="https://mistry.store/images/contact-phone.svg" alt="Icon" className="img-fluid me-2 me-lg-3" />
                <p className="m-0 d-inline-block">Dedicated Relationship manager</p>
              </div>
              <div className="d-inline-block align-middle me-4 me-lg-5 pe-lg-5 fs-15 fw-600 color-primary">
                <img src="https://mistry.store/images/multi-cat-store.svg" alt="Icon" className="img-fluid me-2 me-lg-3" />
                <p className="m-0 d-inline-block">Multi Category Store</p>
              </div>
              <div className="d-inline-block align-middle me-4 me-lg-5 pe-lg-5 fs-15 fw-600 color-primary">
                <img src="https://mistry.store/images/logistics-icon.svg" alt="Icon" className="img-fluid me-2 me-lg-3" />
                <p className="m-0 d-inline-block">Simplified Logistics</p>
              </div>
            </div>
          </div>

          <div className="fade modal-backdrop blur-backdrop show" style={{ display: showloginModal ? 'block' : 'none' }}></div>
          <div role="dialog" aria-modal="true" className="fade login-modal modal show" tabindex="-1" style={{ display: showloginModal ? 'block' : 'none', paddingLeft: '7px' }}>
            <div className="modal-dialog modal-xl modal-dialog-centered">
              <div className="modal-content border-0">
                <div className="modal-body">
                  <div className="d-flex align-items-center justify-content-between w-100 mb-4 mb-lg-5">
                    <img src="https://mistry.store/images/logo.svg" className="img-fluid modal-logo" alt="Logo" width="170" />
                    <button onClick={loginModal} className="border-0 p-0 bg-transparent outline-none">
                      <img src="https://mistry.store/images/close-icon.svg" className="img-fluid modal-close" alt="Logo" width="35" />
                    </button>
                  </div>
                  <div className="row">
                    <div className="col-lg-7 pe-lg-5">
                      <h2 className="color-dark mb-lg-3 mb-2">Hey there !</h2>
                      <p className="color-medium fs-20 lh-32 pe-lg-5 mb-lg-5 mb-3">We are thrilled to welcome you on-board with Mistry</p>
                    </div>
                    <div className="col-lg-5">
                      <div className="login-detail-box h-100">
                        <form className="d-flex flex-column h-100">
                          <div>
                            <h3 className="color-dark fs-26">Register with us</h3>
                            <p className="color-dark fs-15 lh-26">Login/Signup using your phone number &amp; experience a simplified way of purchasing building materials</p>
                          </div>
                          <div className="row pt-lg-3">
                            <div className="col-12 mb-5 mb-lg-4">
                              <label className="color-light fs-15 mb-2" for="moNumber">Phone no.</label>
                              <div className="login-mobile-input overflow-hidden">
                                <input type="number" className="form-control login-input" placeholder="Phone number" id="moNumber" maxlength="10" value="" />
                              </div>
                            </div>
                          </div>
                          <div className="mt-auto text-center">
                            <button className="primary-button outline-none w-100" type="submit" disabled="">CONTINUE</button>
                            <p className="label-color-1 m-0 fs-13 mt-2 color-fixed">By proceeding, you agree to our <a className="label-color-2 fw-600" href="https://mistry.store//terms-and-conditions" target="blank">Terms &amp; Conditions</a>
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="row">
            <div className="col-12">
              <div className="requirements-box mt-4 mb-5">
                <div className="row">
                  <div className="col-6 text-center d-flex align-items-center d-lg-block">
                    <img src="https://mistry.store/images/engineer.png" alt="Image" className="img-fluid" />
                  </div>
                  <div className="col-6 d-flex align-items-center justify-content-lg-start justify-content-end">
                    <div className="d-flex align-items-center flex-column justify-content-end pe-3 pe-lg-0 py-lg-0 py-3">
                      <p className="label-color-1 fs-28 fw-500 text-end mb-4 ms-auto">
                        <span className="color-primary fw-600">Share your requirements</span> &amp; <br /> get your Estimate<br />within<span className="color-primary fw-600"> 4 hrs</span>
                      </p>
                      <button onClick={loginModal} className="primary-button ms-auto fs-14 fw-600 px-5">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="building-section p-60 d-none d-lg-block works-mistry-section">
        <div className="container position-relative">
          <div className="mb-lg-5 py-3 mb-lg-4 mb-2 mt-4 mt-lg-0 text-start">
            <h6 className="label-color-2 fs-40 fw-400 m-0">Here’s how Mistry.Store works</h6>
            <p className="fs-20 fw-400 m-0">All your home building materials, just a few steps away!</p>
          </div>
          <div className="row">
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="d-flex align-items-start mb-lg-5 mb-md-4 mb-2 how-works-box">
                <div className="px-2 me-md-3 me-1">
                  <img src="https://mistry.store/images/send-req-home.svg" alt="Icon" className="img-fluid" style={{ minWidth: '64px' }} />
                </div>
                <div className="">
                  <h5 className="fw-600 label-color-2">Search &amp; send your requirements</h5>
                  <p className="fs-17 fw-400 label-color-1">Send your product requirements by sharing images, adding items from our master list, call your RM or Whatsapp</p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-lg-5 mb-md-4 mb-2 how-works-box"><div className="px-2 me-md-3 me-1">
                <img src="https://mistry.store/images/rev-quote-home.svg" alt="Icon" className="img-fluid" style={{ minWidth: '64px' }} />
              </div>
                <div className="">
                  <h5 className="fw-600 label-color-2">Review &amp; confirm order</h5>
                  <p className="fs-17 fw-400 label-color-1">Review the quote and confirm your order</p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-lg-5 mb-md-4 mb-2 how-works-box">
                <div className="px-2 me-md-3 me-1">
                  <img src="https://mistry.store/images/del-support-home.svg" alt="Icon" className="img-fluid" style={{ minWidth: '64px' }} />
                </div>
                <div className="">
                  <h5 className="fw-600 label-color-2">Get delivery support</h5>
                  <p className="fs-17 fw-400 label-color-1">See realtime status and get end-to-end support for delivery onsite</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 videos-section mb-3 mb-lg-0">
              <div className="m-auto position-relative video-box">
                <div className="d-flex align-items-start justify-content-between p-lg-4 p-3">
                  <h3 className="text-white fs-20 line-clamp-1">
                    <img src="https://mistry.store/images/mystry-red-logo.jpg" alt="icon" className="img-fluid rounded-circle me-2" width="40" />Mistry.Store | One-stop Shop for All Building Material Purchases | Exclusive For Professionals Only</h3>
                  <a className="cursor-pointer text-decoration-none text-nowrap text-center copy-link">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="copy" className="svg-inline--fa fa-copy fa-w-14 text-white fs-28" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="28">
                      <path fill="currentColor" d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z">
                      </path>
                    </svg>
                    <p className="text-white mt-2 fs-16 fw-600">Copy Link</p>
                  </a>
                </div>
                <button className="bg-transparent border-0 shadow-none outline-none position-absolute start-0 end-0 m-auto yt-play-video" title="Play">
                  <img src="https://mistry.store/images/yt-play-btn.svg" alt="Youtube Play" className="img-fluid" width="90" />
                </button>
                <a href="https://www.youtube.com/watch?v=D9GGU4f7Ttk" target="blank" className="watch-yt-btn">Watch on <img src="https://mistry.store/images/yt-icon.svg" alt="Icon" className="ms-1 img-fluid" />
                </a>
              </div>
            </div>
          </div>
          <img src="https://mistry.store/images/home/dot-grid-gray.png" alt="" className="position-absolute mistry-store-works " />
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="refer-ad-box mt-5 mb-0 mb-lg-5">
              <div className="row">
                <div className="col-6 text-center d-flex align-items-center d-lg-block">
                  <img src="https://mistry.store/images/three-painters.png" alt="Image" className="img-fluid" />
                </div>
                <div className="col-6 d-flex align-items-center justify-content-lg-start justify-content-end">
                  <div className="d-flex align-items-center flex-column justify-content-end p-3 p-lg-0">
                    <p className="label-color-1 fs-28 fw-500 text-end mb-lg-4 mb-3 ms-auto">
                      <span className="color-primary fw-600">Refer Fellow Professionals</span>
                      <br />&amp; Earn Referral Benefits</p>
                    <button onClick={loginModal} className="primary-button ms-auto fs-14 fw-600 px-lg-5 px-4 mb-2 text-nowrap">Refer Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="p-60 register-section d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-3 pt-lg-0 d-flex align-items-center">
              <div className="text-center text-lg-start">
                <h6 className="fs-36 fw-700 text-white">Register with us and get access to a world of exclusive <span className="color-primary">PRO Benefits</span>
                </h6>
                <img src="https://mistry.store/images/home/underline.png" alt="" className="img-fluid d-none d-lg-inline" />
                <div className="mt-lg-5 mt-2 pt-lg-3">
                  <button onClick={loginModal} className="primary-button px-lg-5 px-4 py-2 py-lg-3 h-auto fw-500">Register with us</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pt-lg-0 pt-4 red-dot-bg">
              <div className="row benifits-row ms-lg-auto mx-auto">
                <div className="col-6 mb-4">
                  <div className="pro-benefits-box case-back p-3 d-flex justify-content-start align-items-center flex-column">
                    <div className="me-auto">
                      <img src="https://mistry.store/images/excl-network.svg" alt="Icon" className="img-fluid mb-2" />
                    </div>
                    <h4 className="label-color-2 fs-13 mb-2 fw-600 mt-auto me-auto">Networking Event Invites</h4>
                    <p className="fs-11 label-color-1 fw-400 mb-0 me-auto">Exclusive Access to Premier Industry Events</p>
                  </div>
                </div>
                <div className="col-6 mb-4">
                  <div className="pro-benefits-box case-back p-3 d-flex justify-content-start align-items-center flex-column">
                    <div className="me-auto">
                      <img src="https://mistry.store/images/excl-loyality.svg" alt="Icon" className="img-fluid mb-2" />
                    </div>
                    <h4 className="label-color-2 fs-13 mb-2 fw-600 mt-auto me-auto">Loyalty Points on Every Purchase</h4>
                    <p className="fs-11 label-color-1 fw-400 mb-0 me-auto">Shop more!<br />Earn more!</p>
                  </div>
                </div>
                <div className="col-6 mb-4">
                  <div className="pro-benefits-box case-back p-3 d-flex justify-content-start align-items-center flex-column">
                    <div className="me-auto">
                      <img src="https://mistry.store/images/excl-refer.svg" alt="Icon" className="img-fluid mb-2" />
                    </div>
                    <h4 className="label-color-2 fs-13 mb-2 fw-600 mt-auto me-auto">Refer &amp; Earn Schemes</h4>
                    <p className="fs-11 label-color-1 fw-400 mb-0 me-auto">Share and save with our referral program.</p>
                  </div>
                </div>
                <div className="col-6 mb-4">
                  <div className="pro-benefits-box case-back p-3 d-flex justify-content-start align-items-center flex-column">
                    <div className="me-auto">
                      <img src="https://mistry.store/images/excl-disc.svg" alt="Icon" className="img-fluid mb-2" />
                    </div>
                    <h4 className="label-color-2 fs-13 mb-2 fw-600 mt-auto me-auto">Additional Discounts on Every Purchase</h4>
                    <p className="fs-11 label-color-1 fw-400 mb-0 me-auto">Save more on every buy with exclusive discounts!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-60 pt-5 trusted-box">
        <div className="container">
          <div className="trusted-brands-container p-lg-4">
            <div className="d-flex align-items-center justify-content-between mb-lg-4 mb-4">
              <span className="label-color-2 fs-40 fw-500">Trusted by <span className="fw-600 color-primary">75+ Brands</span>
              </span>
            </div>
            <div className="trusted-nav">
              <ul className="list-unstyled d-flex mb-0 pb-2 pb-lg-0"><li className="me-2 me-lg-3"><a className="cursor-pointer text-decoration-none fs-16 color-medium active">Electricals</a>
              </li>
                <li className="me-2 me-lg-3">
                  <a className="cursor-pointer text-decoration-none fs-16 color-medium ">Paints</a>
                </li>
                <li className="me-2 me-lg-3">
                  <a className="cursor-pointer text-decoration-none fs-16 color-medium ">Wood Materials</a>
                </li>
                <li className="me-2 me-lg-3">
                  <a className="cursor-pointer text-decoration-none fs-16 color-medium ">Hardware &amp; Plumbing</a>
                </li>
              </ul>
            </div>
            <div className="pt-lg-5 pb-3 pb-lg-0 pt-4">
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start">
                <div className="text-center trusted-brand-item me-3 mb-lg-4 mb-3 d-flex align-items-center justify-content-center">
                  <img src="https://mistry.store//images/electricals/elctricals1.svg" alt="Icon" className="img-fluid m-auto" />
                </div>
                <div className="text-center trusted-brand-item me-3 mb-lg-4 mb-3 d-flex align-items-center justify-content-center">
                  <img src="https://mistry.store//images/electricals/elctricals2.svg" alt="Icon" className="img-fluid m-auto" />
                </div>
                <div className="text-center trusted-brand-item me-3 mb-lg-4 mb-3 d-flex align-items-center justify-content-center">
                  <img src="https://mistry.store//images/electricals/elctricals3.svg" alt="Icon" className="img-fluid m-auto" />
                </div>
                <div className="text-center trusted-brand-item me-3 mb-lg-4 mb-3 d-flex align-items-center justify-content-center">
                  <img src="https://mistry.store//images/electricals/elctricals4.svg" alt="Icon" className="img-fluid m-auto" />
                </div>
                <div className="text-center trusted-brand-item me-3 mb-lg-4 mb-3 d-flex align-items-center justify-content-center">
                  <img src="https://mistry.store//images/electricals/elctricals5.svg" alt="Icon" className="img-fluid m-auto" />
                </div>
                <div className="text-center trusted-brand-item me-3 mb-lg-4 mb-3 d-flex align-items-center justify-content-center">
                  <img src="https://mistry.store//images/electricals/elctricals6.svg" alt="Icon" className="img-fluid m-auto" />
                </div>
                <div className="text-center trusted-brand-item me-3 mb-lg-4 mb-3 d-flex align-items-center justify-content-center">
                  <img src="https://mistry.store//images/electricals/elctricals7.svg" alt="Icon" className="img-fluid m-auto" />
                </div>
                <div className="text-center trusted-brand-item me-3 mb-lg-4 mb-3 d-flex align-items-center justify-content-center">
                  <img src="https://mistry.store//images/electricals/elctricals8.svg" alt="Icon" className="img-fluid m-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flash-deals-box building-section p-60 d-none d-lg-block">
        <div className="container">
          <div className="row platform-row">
            <div className="col-lg-6 building-content mb-3 mb-lg-0">
              <div className="mb-lg-0 mb-3 position-relative">
                <h6 className="label-color-2 fs-40 fw-300 m-0">Exclusive platform for all</h6>
                <p className="fs-40 fw-700 m-0">Home Building Professionals</p>
                <img src="https://mistry.store/images/home/bg-gray-block-left-72.png" alt="" className="position-absolute gray-bg d-lg-block d-none" />
              </div>
              <p className="fw-400 fs-18 label-color-2 pe-lg-4">Introducing Mistry.Store, India's first organized platform that simplifies building material purchases for home-building professionals like Architects, Interior Decorators, Contractors &amp; Skilled workers.</p>
              <p className="fw-400 fs-18 label-color-2 pe-lg-4">A comprehensive platform dealing in over 100+ brands across Plywood &amp; Boards, Hardware &amp; Tools, Electricals &amp; Lights, Paints &amp; Chemicals, Sanitary &amp; Plumbing.</p>
            </div>
            <div className="col-lg-6 d-flex flex-wrap justify-content-end">
              <div className="mb-3 building-box p-4 text-center d-flex flex-column mx-2">
                <img src="https://mistry.store//images/currency-rupee.svg" alt="Icon" className="img-fluid mb-3" style={{ height: '62px' }} />
                <h6 className="fs-16 label-color-2 fw-600 mb-2 mt-auto">Always Low Prices</h6>
                <p className="fs-14 fw-400 label-color-1 m-0">We offer low prices everyday on quality and original products</p>
              </div>
              <div className="mb-3 building-box p-4 text-center d-flex flex-column mx-2">
                <img src="https://mistry.store/images/logistics-icon.svg" alt="Icon" className="img-fluid mb-3" style={{ height: '55px' }} />
                <h6 className="fs-16 label-color-2 fw-600 mb-2 mt-auto">Simplified Logistics</h6>
                <p className="fs-14 fw-400 label-color-1 m-0">We take care of the entire process from placing the order to its delivery</p>
              </div>
              <div className="mb-3 building-box p-4 text-center d-flex flex-column mx-2">
                <img src="https://mistry.store/images/dedecate-rm.svg" alt="Icon" className="img-fluid mb-3" style={{ height: '58px' }} />
                <h6 className="fs-16 label-color-2 fw-600 mb-2 mt-auto">Dedicated Relationship manager</h6>
                <p className="fs-14 fw-400 label-color-1 m-0">A dedicated RM who takes care of placing the order to its delivery</p>
              </div>
              <div className="mb-3 building-box p-4 text-center d-flex flex-column mx-2">
                <img src="https://mistry.store/images/multi-cat-store.svg" alt="Icon" className="img-fluid mb-3" style={{ height: '64px' }} />
                <h6 className="fs-16 label-color-2 fw-600 mb-2 mt-auto">Multi Category Store</h6>
                <p className="fs-14 fw-400 label-color-1 m-0">We offer products from 10+ categories, providing end to end solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-60 d-none d-lg-block">
        <div className="container growing-community-section">
          <div className="mb-md-5 mb-3">
            <h6 className="fs-40 label-color-2 text-center fw-400">Be a part of <span className="fw-600">Mistry’s Growing Community</span>
            </h6>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="row professionals-row mx-auto">
                <a className="professionals-box px-0 m-3 text-center d-block text-decoration-none rounded overflow-hidden">
                  <div className="overflow-hidden">
                    <img src="https://mistry.store/images/architect.png" alt="Architects" className="img-fluid" />
                  </div>
                  <h3 className="color-dark py-lg-3 py-2 m-0 fs-20">Architects</h3>
                </a>
                <a className="professionals-box px-0 m-3 text-center d-block text-decoration-none rounded overflow-hidden">
                  <div className="overflow-hidden">
                    <img src="https://mistry.store/images/decorators.png" alt="Interior Decorators" className="img-fluid" />
                  </div>
                  <h3 className="color-dark py-lg-3 py-2 m-0 fs-20">Interior Decorators</h3>
                </a>
                <a className="professionals-box px-0 m-3 text-center d-block text-decoration-none rounded overflow-hidden">
                  <div className="overflow-hidden">
                    <img src="https://mistry.store/images/contractors.png" alt="Contractors" className="img-fluid" />
                  </div>
                  <h3 className="color-dark py-lg-3 py-2 m-0 fs-20">Contractors</h3>
                </a>
                <a className="professionals-box px-0 m-3 text-center d-block text-decoration-none rounded overflow-hidden"><div className="overflow-hidden">
                  <img src="https://mistry.store/images/builders.png" alt="Builders" className="img-fluid" />
                </div>
                  <h3 className="color-dark py-lg-3 py-2 m-0 fs-20">Builders</h3>
                </a>
                <a className="professionals-box px-0 m-3 text-center d-block text-decoration-none rounded overflow-hidden">
                  <div className="overflow-hidden">
                    <img src="https://mistry.store/images/electricians.png" alt="Electrical Experts" className="img-fluid" />
                  </div>
                  <h3 className="color-dark py-lg-3 py-2 m-0 fs-20">Electrical Experts</h3>
                </a>
                <a className="professionals-box px-0 m-3 text-center d-block text-decoration-none rounded overflow-hidden">
                  <div className="overflow-hidden">
                    <img src="https://mistry.store/images/carpenters.png" alt="Carpentry Experts" className="img-fluid" />
                  </div>
                  <h3 className="color-dark py-lg-3 py-2 m-0 fs-20">Carpentry Experts</h3>
                </a>
                <a className="professionals-box px-0 m-3 text-center d-block text-decoration-none rounded overflow-hidden">
                  <div className="overflow-hidden">
                    <img src="https://mistry.store/images/plumbers.png" alt="Plumbing Experts" className="img-fluid" />
                  </div>
                  <h3 className="color-dark py-lg-3 py-2 m-0 fs-20">Plumbing Experts</h3>
                </a>
                <a className="professionals-box px-0 m-3 text-center d-block text-decoration-none rounded overflow-hidden">
                  <div className="overflow-hidden">
                    <img src="https://mistry.store/images/painters.png" alt="Paint Experts" className="img-fluid" />
                  </div>
                  <h3 className="color-dark py-lg-3 py-2 m-0 fs-20">Paint Experts</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 py-lg-5 download-section">
        <div className="container">
          <div className="row align-items-center reverse-row">
            <div className="col-lg-7">
              <div className="text-center text-lg-start">
                <h6 className="fs-40 fw-600 mb-lg-4 mb-3">Mistry.Store Download the App Now!</h6>
                <img src="https://mistry.store/images/home/mobile-img.png" alt="" className="d-lg-none m-auto mb-3" />
                <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                  <div className="px-2 px-xl-0">
                    <a href="https://play.google.com/store/apps/details?id=com.mistrystore.app" target="blank">
                      <img src="https://mistry.store/images/home/google-play.png" alt="" className="me-0 me-lg-3 img-fluid" /></a>
                  </div>
                  <div className="px-2 px-xl-0"><a href="https://apps.apple.com/in/app/mistry-store/id1670617517" target="blank">
                    <img src="https://mistry.store/images/home/app-store.png" alt="" className="img-fluid" />
                  </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <img src="https://mistry.store/images/home/mobile-img.png" alt="" className="d-none d-lg-block m-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className='p-60 professional-section'>
        <div className="container">
          <div className='d-flex align-items-center justify-content-between mb-4'>
            <h6 className="color-light-white fs-40 m-0 d-none d-lg-block">What our Professionals say about us!</h6>
            <h6 className="text-white fs-16 m-0 d-lg-none">What our Professionals say about us!</h6>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="border-0 pb-2 h-100 card" style={{ padding: '12px' }}>
                <div className="play-image-box position-relative">
                  <img className="card-img-top rounded" src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/proreviews/Tanu+Gupta+Thumbnail+(2)+1.png" />
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <img onClick={videoPlay} src="https://mistry.store/images/home/play-circle-outline.svg" alt="" className="cursor-pointer" />
                  </div>
                </div>
                <div className="px-0 pb-0 card-body">
                  <div>
                    <div className="d-flex align-items-center mb-2">
                      <div className="">
                        <img src="https://mistry.store/images/home/avatar.png" alt="" />
                      </div>
                      <div className="ms-2">
                        <h6 className="fs-14 p-0 fw-600 m-0 label-color-2 line-clamp-1">Tanu Gupta</h6>
                        <p className="fs-10 fw-400 label-color-2 m-0">Interior Designer </p>
                      </div>
                    </div>
                    <p className="fs-12 fw-400 label-colo-2 line-clamp-4">Mistry.Store is offering all building material under one roof which makes my life easier. I recommend them to all people I know. I hope they keep up with the good work and keep providing us with good service.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="border-0 pb-2 h-100 card" style={{ padding: '12px' }}>
                <div className="play-image-box position-relative">
                  <img className="card-img-top rounded" src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/proreviews/Tanu+Gupta+Thumbnail+(2)+1.png" />
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <img src="https://mistry.store/images/home/play-circle-outline.svg" alt="" className="cursor-pointer" />
                  </div>
                </div>
                <div className="px-0 pb-0 card-body">
                  <div>
                    <div className="d-flex align-items-center mb-2">
                      <div className="">
                        <img src="https://mistry.store/images/home/avatar.png" alt="" />
                      </div>
                      <div className="ms-2">
                        <h6 className="fs-14 p-0 fw-600 m-0 label-color-2 line-clamp-1">Tanu Gupta</h6>
                        <p className="fs-10 fw-400 label-color-2 m-0">Interior Designer </p>
                      </div>
                    </div>
                    <p className="fs-12 fw-400 label-colo-2 line-clamp-4">Mistry.Store is offering all building material under one roof which makes my life easier. I recommend them to all people I know. I hope they keep up with the good work and keep providing us with good service.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="border-0 pb-2 h-100 card" style={{ padding: '12px' }}>
                <div className="play-image-box position-relative">
                  <img className="card-img-top rounded" src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/proreviews/Tanu+Gupta+Thumbnail+(2)+1.png" />
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <img src="https://mistry.store/images/home/play-circle-outline.svg" alt="" className="cursor-pointer" />
                  </div>
                </div>
                <div className="px-0 pb-0 card-body">
                  <div>
                    <div className="d-flex align-items-center mb-2">
                      <div className="">
                        <img src="https://mistry.store/images/home/avatar.png" alt="" />
                      </div>
                      <div className="ms-2">
                        <h6 className="fs-14 p-0 fw-600 m-0 label-color-2 line-clamp-1">Tanu Gupta</h6>
                        <p className="fs-10 fw-400 label-color-2 m-0">Interior Designer </p>
                      </div>
                    </div>
                    <p className="fs-12 fw-400 label-colo-2 line-clamp-4">Mistry.Store is offering all building material under one roof which makes my life easier. I recommend them to all people I know. I hope they keep up with the good work and keep providing us with good service.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="border-0 pb-2 h-100 card" style={{ padding: '12px' }}>
                <div className="play-image-box position-relative">
                  <img className="card-img-top rounded" src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/proreviews/Tanu+Gupta+Thumbnail+(2)+1.png" />
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <img src="https://mistry.store/images/home/play-circle-outline.svg" alt="" className="cursor-pointer" />
                  </div>
                </div>
                <div className="px-0 pb-0 card-body">
                  <div>
                    <div className="d-flex align-items-center mb-2">
                      <div className="">
                        <img src="https://mistry.store/images/home/avatar.png" alt="" />
                      </div>
                      <div className="ms-2">
                        <h6 className="fs-14 p-0 fw-600 m-0 label-color-2 line-clamp-1">Tanu Gupta</h6>
                        <p className="fs-10 fw-400 label-color-2 m-0">Interior Designer </p>
                      </div>
                    </div>
                    <p className="fs-12 fw-400 label-colo-2 line-clamp-4">Mistry.Store is offering all building material under one roof which makes my life easier. I recommend them to all people I know. I hope they keep up with the good work and keep providing us with good service.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fade modal-backdrop blur-backdrop video-index show" style={{ display: videoModal ? 'block' : 'none' }}></div>
        <div role="dialog" aria-modal="true" className="fade video-modal-index modal show" tabindex="-1" style={{ display: videoModal ? 'block' : 'none' }}>
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content bg-transparent border-0">
              <div className="text-center d-flex align-items-center justify-content-center bg-transparent border-0 video-iframe modal-body">
                <button onClick={videoPlay} style={{ display: videoModal ? 'block' : 'none' }} className="border-0 outline-none bg-transparent position-fixed top-0 end-0 p-4">
                  <img src="https://mistry.store/images/close-icon.svg" alt="Close" className="img-fluid" width="40" />
                </button>
                <video width="100%" height="600" controls>
                  <source src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/proreviews/Tanu.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-60 pb-0 industry-section mistry-news-section bg-grey">
        <div className="container position-relative">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <span className="label-color-2 fs-40">
              <span className="label-color-2 fs-40 fw-400">
                <span className="fw-700">Mistry.Store</span> in News</span>
            </span>
          </div>
          <div className="row ">
            <div className="col-lg-3 col-md-6 col-6 mb-lg-4 mb-4">
              <div className="border-0 h-100 card">
                <img className="card-img-top img-fluid inds-news-img" src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/flash_deals/Untitled-design-168.jpeg" />
                <div className="card-body">
                  <div className="fs-18 fw-600 mb-2">
                    <p className="m-0 block-ellipsis m-0 line-clamp-4">Mistry.Store Launches Indias First Building Material Sampling Van </p>
                  </div>
                  <a className="color-primary fs-14 fw-600 cursor-pointer text-decoration-none download-color news-read-more" target="blank" href="https://helloentrepreneurs.com/startup-news/mistry-store-launches-indias-first-building-material-sampling-van-for-professionals-18208/">Read more<img src="/images/home/arrow-01.svg" alt="" className="ms-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6 mb-lg-4 mb-4">
              <div className="border-0 h-100 card">
                <img className="card-img-top img-fluid inds-news-img" src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/flash_deals/1.jpg" />
                <div className="card-body">
                  <div className="fs-18 fw-600 mb-2">
                    <p className="m-0 block-ellipsis m-0 line-clamp-4">Mistry Store to quadruple home interior professionals to 10,000, with an aim...</p>
                  </div>
                  <a className="color-primary fs-14 fw-600 cursor-pointer text-decoration-none download-color news-read-more" target="blank" href="https://economictimes.indiatimes.com/industry/indl-goods/svs/construction/mistry-store-to-quadruple-home-interior-professionals-to-10000-with-an-aim-to-cash-on-indias-urbanization/articleshow/97448219.cms?utm_source=whatsapp_pwa&amp;utm_medium=social&amp;utm_camp">Read more<img src="https://mistry.store/images/home/arrow-01.svg" alt="" className="ms-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6 mb-lg-4 mb-4">
              <div className="border-0 h-100 card">
                <img className="card-img-top img-fluid inds-news-img" src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/flash_deals/luxury-home-design-on-budget-sixteen_nine.jpg" />
                <div className="card-body">
                  <div className="fs-18 fw-600 mb-2">
                    <p className="m-0 block-ellipsis m-0 line-clamp-4">This start-up is trying to organise the home interiors segment; here's how</p>
                  </div>
                  <a className="color-primary fs-14 fw-600 cursor-pointer text-decoration-none download-color news-read-more" target="blank" href="https://www.businesstoday.in/latest/corporate/story/this-start-up-is-trying-to-organise-the-home-interiors-segment-heres-how-369452-2023-02-08">Read more<img src="https://mistry.store/images/home/arrow-01.svg" alt="" className="ms-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-0 pb-0 industry-section mistry-news-section bg-white ">
        <div className="container position-relative">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <span className="label-color-2 fs-40">
              <span className="label-color-2 fs-40 fw-400">
                <span className="fw-700">Mistry.Store</span> Blogs</span>
            </span>
          </div>
          <div className="row mb-3 mb-lg-5">
            <div className="col-lg-3 col-md-6 col-6 mb-lg-4 mb-4">
              <div className="border-0 h-100 card">
                <img className="card-img-top img-fluid inds-news-img" src="https://static.wixstatic.com/media/d64c34_7b5f3945050c4419b690b8966f93e795~mv2.jpg/v1/fill/w_767,h_493,al_c,lg_1,q_85,enc_auto/d64c34_7b5f3945050c4419b690b8966f93e795~mv2.jpg" />
                <div className="card-body">
                  <div className="fs-18 fw-600 mb-2"><p className="m-0 block-ellipsis m-0 line-clamp-4">How ‘Select my Designer’ simplifies your search for an ideal interior designer?</p>
                  </div>
                  <a className="color-primary fs-14 fw-600 cursor-pointer text-decoration-none download-color news-read-more" target="blank" href="https://www.blog.mistry.store/post/how-select-my-designer-simplifies-your-search-for-an-ideal-interior-designer">Read more<img src="https://mistry.store/images/home/arrow-01.svg" alt="" className="ms-1" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6 mb-lg-4 mb-4">
              <div className="border-0 h-100 card">
                <img className="card-img-top img-fluid inds-news-img" src="https://static.wixstatic.com/media/d64c34_761761e3f2914190b6e3ee4a1f9b1197~mv2.jpg/v1/fill/w_768,h_512,al_c,lg_1,q_85,enc_auto/d64c34_761761e3f2914190b6e3ee4a1f9b1197~mv2.jpg" />
                <div className="card-body">
                  <div className="fs-18 fw-600 mb-2">
                    <p className="m-0 block-ellipsis m-0 line-clamp-4">How can one effectively select an ideal interior designer?</p>
                  </div>
                  <a className="color-primary fs-14 fw-600 cursor-pointer text-decoration-none download-color news-read-more" target="blank" href="https://www.blog.mistry.store/post/how-can-one-effectively-select-an-ideal-interior-designer">Read more<img src="https://mistry.store/images/home/arrow-01.svg" alt="" className="ms-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6 mb-lg-4 mb-4">
              <div className="border-0 h-100 card">
                <img className="card-img-top img-fluid inds-news-img" src="https://static.wixstatic.com/media/d64c34_1599acee435f46109ea70cb6da4662ac~mv2.jpg/v1/fill/w_768,h_512,al_c,lg_1,q_85,enc_auto/d64c34_1599acee435f46109ea70cb6da4662ac~mv2.jpg" />
                <div className="card-body">
                  <div className="fs-18 fw-600 mb-2">
                    <p className="m-0 block-ellipsis m-0 line-clamp-4">Challenges in Choosing an Interior Designer for Your Home</p>
                  </div>
                  <a className="color-primary fs-14 fw-600 cursor-pointer text-decoration-none download-color news-read-more" target="blank" href="https://www.blog.mistry.store/post/challenges-in-choosing-an-interior-designer-for-your-home">Read more<img src="https://mistry.store/images/home/arrow-01.svg" alt="" className="ms-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-none d-lg-flex align-items-center justify-content-between m-auto bg-dark-blue text-white footer-contact-box mb-lg-5 mb-4 position-absolute w-100">
            <div className="col-md-6">
              <h4 className="m-0">Find Building Material for your next construction project!</h4>
            </div>
            <div className="col-md-6 mt-3 mt-md-0 text-center text-md-end">
              <a className="primary-button text-decoration-none px-lg-5 px-4 py-lg-3 py-2 fw-500 fs-16" href="/contact-us">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}