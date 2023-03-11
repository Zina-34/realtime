import React from 'react'
import './Contact.scss'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import {BiHome,BiPhoneCall,BiMailSend} from 'react-icons/bi'
import {BsInfoCircle} from 'react-icons/bs'
import Meta from '../../components/Meta'
import Head from '../../components/Header/Head'
import Footer from '../../components/Footer/Footer'

const Contacts = () => {
  return (
    <>
      <Head />
      <Meta title={'Contact Us'}/>
      <BreadCrumb title='Contact Us'/>
      <div className='contact-wrapper py-5 home-wrapper-2'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28248.56913775753!2d85.32115757990746!3d27.74595161903446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb195e08ae4dfb%3A0x6399fb614e4ef6c!2sKhusibu%20nayabazar!5e0!3m2!1sen!2snp!4v1678203673349!5m2!1sen!2snp" width="600" height="450"  className='border-0 w-100' loading
            ='lazy' allowFullScreen='' referrerPolicy='no-referrer-when-downgrade'></iframe>            
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'>Contact</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input type='text' className='form-control' placeholder='Your Name'/>
                    </div>
                    <div>
                      <input type='email' className='form-control' placeholder='Your Email'/>
                    </div>
                    <div>
                      <input type='tel' className='form-control' placeholder='Mobile No.'/>
                    </div>
                    <div>
                      <textarea name='' id='' className='w-100 form-control' placeholder='Comments' cols='30' rows='4'></textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title mb-4'>Get in touch with us</h3>
                  <div> 
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiHome className='fs-5'/>
                        <address className='mb-0'>NewRoad, Kathmandu-opposite to peanuts</address>
                        </li>
                        <li className='mb-3 d-flex gap-15 align-items-center'>
                          <BiPhoneCall className='fs-5'/>
                          <a href='tel:+977 9865214560'>+977 9865214560</a>
                          </li>
                        <li className='mb-3 d-flex gap-15 align-items-center'>
                          <BiMailSend className='fs-5'/>
                          <a href='mailto:smritimaharjan99@gmail.com'>smritimaharjan99@gmail.com</a>
                          </li>
                        <li className='mb-3 d-flex gap-15 align-items-center'>
                          <BsInfoCircle className='fs-5'/>
                          <p className='mb-0'>Monday - Friday 10AM - 7PM</p>
                          </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      < Footer/>
    </>
  )
}

export default Contacts




