"use client"
import Link from 'next/link'
import React, { useState } from 'react'

export default function Header() {
    let [showcatlog, setShowCatlog] = useState(false)
    let [showlang, setShowlang] = useState(false)
    let [showNav, setShowNav] = useState(false)

    let showlenguage = () => {
        setShowlang(!showlang)

    }
    const showCat = () => {
        setShowCatlog(true);
    };

    const hideCat = () => {
        setShowCatlog(false);
    };
    const showNavbar=()=>{
        setShowNav(!showNav);
    }
    return (
        <>
            <section className='mistryHeader bg-white px-3'>
                <nav className='navbar navbar-expand-lg navbar-light'>
                    <div className="me-3 d-lg-none" onClick={showNavbar}>
                        <img src="https://mistry.store/images/left-menu.svg" alt="Menu" width="23" />
                    </div>
                    <span className='me-auto navbar-brand '>
                        <img src="https://mistry.store/images/logo.svg" className="img-fluid main-logo" alt="Logo" />
                    </span>
                    <div className="position-relative d-lg-none align-items-center me-3 cursor-pointer">
                        <a href="tel:+91 80708 80707" className="fs-14 text-decoration-none label-color-2 fw-500">
                            <img src="https://mistry.store/images/call-calling-mobile.svg" alt="icon" className="img-fluid" width="32" />
                        </a>
                    </div>
                    <button className="primary-button fs-12 py-2 h-auto d-lg-none px-3">Login or Signup</button>
                    <button aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation" className="d-none navbar-toggler collapsed">
                        <span className="navbar-toggler-icon">
                        </span>
                    </button>
                    <div className="w-100 ms-lg-4 navbar-collapse collapse" id="basic-navbar-nav">
                        <div className="w-100 navbar-nav">
                            <div className="nav-item">
                                <a className="nav-link active" href="/">Home</a>
                            </div>
                            <div className="nav-item">
                                <Link className="nav-link" href="/about-us">About Us</Link>
                            </div>
                            <div className="position-relative nav-item">
                                <img src="https://mistry.store/images/new-flag.svg" alt="Icon" className="img-fluid end-0 position-absolute" style={{ top: '5px' }} />
                                <a className="nav-link cursor-pointer" href="/pdf-catalog">PDF Catalog</a>
                            </div>
                            <div className="nav-item">
                                <a className="nav-link" href="/contact-us">Contact Us</a>
                            </div>
                            <div className="nav-item">
                                <a className="nav-link" href="https://blog.mistry.store">Blogs</a>
                            </div>
                            <div className="search-bar-box position-relative ms-auto me-2">
                                <div className="d-flex justify-content-center catalogs-search">
                                    <div className="d-flex catalogs-search-input">
                                        <div className="position-relative w-100">
                                            <div className="radius-input input-search w-100 bg-white position-relative">
                                                <input type="search" className="bg-transparent outline-none fs-17 w-100 " placeholder="Search wires, plywood, paints..etc." value="" onClick={showCat}
                                                />
                                                <img src="https://mistry.store/images/home/cross-icon.svg" alt="" className="position-absolute me-3 cross-icon cursor-pointer"
                                                    onClick={hideCat}
                                                    style={{ display: showcatlog ? 'block' : 'none' }} />
                                                <div className="px-4 pb-2 pt-4 search-menu position-absolute start-0" style={{ display: showcatlog ? 'block' : 'none' }}>
                                                    <h6 className="fs-14 fw-600 text-center mb-3">Search from India's Largest Collection of Building Material Catalogues</h6>
                                                    <div className="row">
                                                        <div className="col-4 text-center mb-2">
                                                            <div className="cursor-pointer">
                                                                <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Plug.png" alt="Image" className="mb-2 img-fluid" height="48" />
                                                                <p className="label-color-2 fs-12 fw-400">Electricals</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-4 text-center mb-2">
                                                            <div className="cursor-pointer">
                                                                <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Paint+Roller.png" alt="Image" className="mb-2 img-fluid" height="48" />
                                                                <p className="label-color-2 fs-12 fw-400">Paints</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-4 text-center mb-2">
                                                            <div className="cursor-pointer">
                                                                <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Wood.png" alt="Image" className="mb-2 img-fluid" height="48" />
                                                                <p className="label-color-2 fs-12 fw-400">Wood Materials</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-4 text-center mb-2">
                                                            <div className="cursor-pointer">
                                                                <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Group.png" alt="Image" className="mb-2 img-fluid" height="48" />
                                                                <p className="label-color-2 fs-12 fw-400">Hardware</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-4 text-center mb-2">
                                                            <div className="cursor-pointer">
                                                                <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Plumbing.png" alt="Image" className="mb-2 img-fluid" height="48" /><p className="label-color-2 fs-12 fw-400">Plumbing</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-4 text-center mb-2">
                                                            <div className="cursor-pointer">
                                                                <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Floor.png" alt="Image" className="mb-2 img-fluid" height="48" />
                                                                <p className="label-color-2 fs-12 fw-400">Floorings</p>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-dropdown language-dropdown d-flex align-items-center dropdown">
                                <button type="button" id="react-aria2474927847-1" aria-expanded="false" className="p-0 bg-transparent label-color-2 fw-500 shadow-none border-0 text-center dropdown-toggle btn btn-primary">
                                    <img src="https://mistry.store/images/lang-switch.svg" alt="Icon" className="img-fluid" width="32" onClick={showlenguage} />
                                </button>
                                <div aria-labelledby="react-aria2474927847-1" data-bs-popper="static" className="shadow-none border-0 dropdown-menu show" style={{ background: '#f1f1f1', display: showlang ? 'block' : 'none' }}>
                                    <button value="en" data-rr-ui-dropdown-item="" className="fs-16 fw-500 color-dark py-1 d-block dropdown-item">English - EN</button>
                                    <button value="hi" data-rr-ui-dropdown-item="" className="fs-16 fw-500 color-dark py-1 d-block dropdown-item">हिन्दी - HI</button>
                                </div>
                            </div>
                            <div className="position-relative d-lg-flex d-none align-items-center ms-3 cursor-pointer">
                                <a href="tel:+91 80708 80707" className="fs-14 text-decoration-none label-color-2 fw-500">
                                    <img src="https://mistry.store/images/call-calling-mobile.svg" alt="icon" className="img-fluid" width="32" />
                                </a>
                            </div>
                            <div className="position-relative d-lg-flex d-none align-items-center ms-3 cursor-pointer">
                                <img src="https://mistry.store/images/cart-icon.svg" alt="icon" className="img-fluid" width="32" />
                            </div>
                            <button className="primary-button ms-3">Login or Signup</button>
                        </div>
                    </div>
                </nav>
            </section>

            <div className={`mistryHeader bg-white mobile-menu position-fixed end-100 overflow-hidden ${ showNav ? 'navbar-collapse' : '' }`}>

                <div className="pt-3 nav">
                    <div className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </div>
                    <div className="nav-item">
                        <a className="nav-link" href="/about-us">About Us</a>
                    </div>
                    <div className="nav-item">
                        <div className="w-max-content position-relative">
                            <img src="https://mistry.store/images/new-flag.svg" alt="Icon" className="img-fluid end-0 position-absolute" style={{ top: '-2px' }} />
                            <a className="nav-link" href="/pdf-catalog">PDF Catalog</a>
                        </div>
                    </div>
                    <div className="nav-item">
                        <a className="nav-link" href="/partner">Partner with Us</a>
                    </div>
                    <div className="nav-item">
                        <a className="nav-link" href="https://blog.mistry.store">Blogs</a>
                    </div>
                    <div className="nav-item">
                        <a className="nav-link" href="/contact-us">Contact Us</a>
                    </div>
                    <div className="nav-item">
                        <div className="profile-dropdown language-dropdown d-flex mt-2 mx-3 d-lg-none align-items-center dropdown">
                            <a className="p-0 bg-transparent fw-500 shadow-none border-0 text-center nav-link color-light dropdown-toggle" id="react-aria1267701742-2" aria-expanded="false">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe" className="svg-inline--fa fa-globe fa-w-16 d-inline fs-14 me-1 globe color-light" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="14">
                                    <path fill="currentColor" d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z">
                                    </path>
                                </svg>EN
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" className="svg-inline--fa fa-chevron-down fa-w-14 d-inline fs-12 color-light" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="12">
                                    <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="login-btn text-center">
                    <button className="primary-button ms-2 d-none">Login or Signup</button>
                </div>
            </div>
        </>
    )
}
