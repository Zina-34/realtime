import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom';
import {BsSearch,BsMenuUp, BsFillCartFill} from 'react-icons/bs'
import {BiLogOut} from 'react-icons/bi'
import { NavLink } from 'react-router-dom';

const Head = () => {
  return (
    <> 
     
      <header className='header-upper'>
        <div className='containerr'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h2>
                <Link to='/Layout' className='title'>TechTops</Link>
                </h2>
            </div>
            <div className='col-5'>
              <div className='input-group'>
                <input type='text' className='form-control py-2' placeholder='Search your preferred products' aria-describedby='basic-addon2'/>
                <span className='input-group-text ' id="basic-addon2"><BsSearch /></span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper d-flex align-item-center two-item'>
               <div className="cartlog">
               <div>
                  <a href='/cart' className='d-flex align-items-center  '>
                    <BsFillCartFill className='cart'/>
                  <p className='mb-0 cart clog'>Cart
                   </p>
                  </a>
                </div>
                <div>
                  <a href="/"className='d-flex align-items-center gap-10 text-black'>
                    <BiLogOut className='logout'/>
                  <p className='mb-0 logout'>Logout
                   </p>
                  </a>
                </div>
               </div>
              </div>
            </div>

          </div>
        </div>
      </header>
      <header className='header-bottom py-2 '>
        <div className='contain'>
              <div className='col-12'>
                <div className='menu-bottom d-flex align-item-center gap-30'>
                  <div className="dropdiv">                    
                  <div className="dropdown">
                      <button className="btn btn-secondary dropdown-toggle border-0 gap- d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <BsMenuUp/>Shop Categories
                      </button>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item text-black" to='/Layout'>Laptops</Link></li>
                        <li><Link className="dropdown-item text-black" to='/Layout'>Digital Watch</Link></li>
                        <li><Link className="dropdown-item text-black" to='/Layout'>Smart Phones</Link></li>
                      </ul>
                  </div>
                  </div>
                  <div className="navhome">
                  <div className='menu-links'>
                    <div className='d-flex algn-items-between gap-30'>
                      <NavLink to='/Layout'className='home'>Home</NavLink>
                      <NavLink to='/product' className='store'>Our Store</NavLink>
                      <NavLink to='/contact' className='contact'>Contact</NavLink>
                      {/* <NavLink to='' className='blog'>Blog</NavLink> */}
                    </div>
                  </div>
                  </div>
                </div> 
              </div>
        </div>
      </header>
    </>
  )
}

export default Head

