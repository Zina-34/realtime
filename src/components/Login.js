import React from 'react'
import "./Login.css";
import pic from './office.jpg';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';

export default function Login() {
   
     return (
        <>
            <Navbar/>
            
            <div className="containers">
                <div className="conatainer ctn1">
                     <img src={pic} className=" img" alt="pic" />
                </div>
                <div className="conatainer ctn2">
                    <form>
                        <div className="frm">
                            <div>
                                <label className="Login">LogIn</label>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                                
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" required/>
                            </div>
                            
                            <Link to='/Layout'> <button  className="btn1">Submit</button></Link>
                            <div className="btn2">
                             <h6>Create one?<a href='/Sign'>Sign Up</a></h6>
                            </div>
                        </div>
                    </form>

                    </div>
                </div>
                
        </>
      )
}
