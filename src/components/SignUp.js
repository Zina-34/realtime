import React from 'react'
import Navbar from './Navbar';
import './SignUp.css'
import image from './signup.png';

export default function SignUp() {
  return (
    <>
    <Navbar />
    <div className='containerse'>
        <div className='image img-fluid'>
            <img src={image} alt='searching' className='signimg'/>
        </div> 
        <div className='form-content'>
            <form>
                <div className="form-title">
                    <label>Sign Up</label>
                </div>
                <div className="mb-3">
                    <label for="exampleInputName" className="form-label">Your name</label>
                    <input type="name" className="form-control" placeholder='Your name' id="exampleInputName" required/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" placeholder='youremail@gmail.com' id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder='hgtY54#1' id="exampleInputPassword1"required/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
                    <label className="form-check-label" for="exampleCheck1">By creating an account, you agree to our terms and privacy policy.</label>
                </div>
                <button  className="btn btn-primary">Create Account</button>
                <div className="mb-3">
                    <label className="Account">Already have an account?<a href='/login'>Log in</a></label>
                </div>      
           </form>
        </div>
    </div>
    </>
  )
}
   