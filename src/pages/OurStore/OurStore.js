import React, { useState } from 'react'
import './OurStore.scss'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import Meta from '../../components/Meta'
import ReactStars from 'react-rating-stars-component'
import ProductCard from '../../components/ProductCard/ProductCard'
import Head from '../../components/Header/Head'
import Footer from '../../components/Footer/Footer'

const OurStore = () => {
    const [grid, setGrid]= useState(4);
  return (
    <>
    <Head />
    <Meta title={'Our Store'}/>
    <BreadCrumb title='Our Store'/>
    <div className='store-wrapper home-wrapper-2 py-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-3'>
                    <div className='filter-card' mb-3>
                        <h3 className='filter-title'>
                            Shop By Categories
                        </h3>
                        <div>
                            <ul className='ps-0'>
                                <li>Watch</li>
                                <li>Tablets</li>
                                <li>Laptops</li>
                                <li>Smart Phones</li>

                            </ul>
                        </div>
                    </div>
                    <div className='filter-card' mb-3>
                        <h3 className='filter-title'>
                            Filter By
                        </h3>
                        <h5 className='sub-title'>Availability</h5>
                        <div>
                        <div className='form-check'>
                            <input className='form-check-input' type='checkbox'/>
                            <label className='form-check-label' htmlFor=''>
                                In Stock (1)
                            </label>
                        </div>
                        <div className='form-check'>
                            <input className='form-check-input' type='checkbox'/>
                            <label className='form-check-label' htmlFor=''>
                                Out of Stock (0)
                            </label>
                        </div>
                        </div>
                        <h5 className='sub-title'>Price</h5>
                        <div className='d-flex align-items-center gap-10'>
                            <div className='form-floating mb-3'>
                                <input type='email' className='form-control' 
                                id='floatingInput' placeholder='From'/>
                                {/* <label htmlFor='floatingInput'>From</label> */}
                            </div>
                            <div className='form-floating mb-3'>
                                <input type='email' className='form-control'
                                id='floatingInput1' placeholder='To'/>
                                {/* <label htmlFor='floatingInput1'>To</label> */}
                            </div>
                        </div>                        
                    </div>
                    <div className='filter-card' mb-3>
                        <h3 className='filter-title'>
                            Product Tags
                        </h3>
                        <div>
                            <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                                <span className='badge bg-light  text-secondary rounded-3 py-2 px-3'>Headphone</span>
                                <span className='badge bg-light  text-secondary rounded-3 py-2 px-3'>Laptop</span>
                                <span className='badge bg-light  text-secondary rounded-3 py-2 px-3'>Mobile</span>
                                <span className='badge bg-light  text-secondary rounded-3 py-2 px-3'>Tablet</span>
                                <span className='badge bg-light  text-secondary rounded-3 py-2 px-3'>Speaker</span>
                            </div>
                        </div>
                    </div>
                    <div className='filter-card' mb-3>
                        <h3 className='filter-title'> 
                            Random Product
                        </h3>
                        <div>
                            <div className='random-products mb-3 d-flex'>
                                <div className='w-50'>
                                    <img src='image/digitalwatch.jpg' alt='watch' className='img-fluid'/>
                                </div>
                                <div className='w-50'>
                                    <h5>
                                        la lalallal alalala lala laaiiihcsdj hf
                                    </h5>
                                    <ReactStars
                                    count={5}
                                    size={24}
                                    value={4}
                                    edit={false}
                                    activeColor={'#ffd700'}
                                    />
                                    <b>$300</b>
                                </div>

                            </div>
                            <div className='random-products d-flex'>
                                <div className='w-50'>
                                    <img src='image/watch.jpg' alt='watch' className='img-fluid'/>
                                </div>
                                <div className='w-50'>
                                    <h5>
                                        la lalallal alalala lala laaiiihcsdj hf
                                    </h5>
                                    <ReactStars
                                    count={5}
                                    size={24}
                                    value={4}
                                    edit={false}
                                    activeColor={'#ffd700'}
                                    />
                                    <b>$300</b>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className='col-9'>
                    <div className='filter-sort-grid mb-4'>
                        
                        <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center gap-10'>
                            <p className='mb-0 d-block' style={{'width':'100px'}}>Sort By:</p>
                            <select className='form-control form-select'>
                                <option value='manual'>Featured</option>
                                <option value='best-selling' selected='selected'>Best Selling</option>
                                <option value='title-ascending'>Alphabetically, A-Z</option>
                                <option value='title-descending'>Alphabetically, Z-A</option>
                                <option value='created-ascending'>Date, old to new</option>
                                <option value='created-decending'>Date, new to old</option>


                            </select>
                        </div>
                        <div className='d-flex align-item-center gap-10'>
                            <p className='totalproducts mb-0'>20 products</p>
                            <div className='d-flex gap-10 align-items-center grid'>
                                <img onClick={()=>{
                                    setGrid(3);
                                }} src='image/gr4.svg' alt='grid' className='d-block img-fluid'/>
                                <img onClick={()=>{
                                    setGrid(4);
                                }} src='image/gr3.svg' alt='grid' className='d-block img-fluid'/>
                                <img onClick={()=>{
                                    setGrid(6);
                                }} src='image/gr2.svg' alt='grid' className='d-block img-fluid'/>
                                <img onClick={()=>{
                                    setGrid(12);
                                }} 
                                src='image/gr.svg' alt='grid' className='d-block img-fluid'/>
                            </div>
                        </div>
                        </div>
                        <div className='products-list pb-5'>
                            <div className='d-flex gap-10 flex-wrap'>
                            <ProductCard grid={grid}/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    <Footer/>
    </>
  )
}

export default OurStore
