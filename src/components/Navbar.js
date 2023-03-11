import React, {useState} from 'react'
import "./Navbar.css";
import {FiMenu, FiX} from "react-icons/fi"

import {Link} from 'react-router-dom';

// const navbarLinks=[
//     {url:"/" , title: "Home"},
//     {url:"/logIn" , title: "Login"},
//     {url:"#" , title: "SignUp"},
  
//   ];

const Navbar = ({navbarLinks}) => {

  const[menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick =() => {
    setMenuClicked(!menuClicked);
  };
  return (
    <>
      
      <nav className="navbar">
        <span className="navbar_logo">TechTop</span>

        {menuClicked ? (<FiX size ={25} className="navbar_menu" onClick={toggleMenuClick} />
        ) :(<FiMenu size ={25} className="navbar_menu" onClick={toggleMenuClick} />

        )}

        <ul className="navbar_list">
          <li className="navbar_item" >
              <Link to="/" className='navbar_link'>Home</Link>
          </li>
          <li className="navbar_item" >
              <Link to="/login" className='navbar_link' >LogIn</Link>
          </li>
          <li className="navbar_item" >
              <Link to="/SignUp" className='navbar_link' >SignUp</Link>
          </li>
       
        </ul>
        
      </nav>
    </>
  )
}

export default Navbar
