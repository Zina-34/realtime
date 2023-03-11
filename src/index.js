import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './pages/HomePage/HomePage';
import Layout from './components/Layout/Layout';
import SignUp from './components/SignUp';
import OurStore from './pages/OurStore/OurStore';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Contacts from './pages/Contact/Contacts';
import Cart from "./components/Cart";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <React.StrictMode>
    
    <Router>
      <Routes>
      <Route exact path='/login' element={<Login />} /> 
      <Route path='/Sign' element={<SignUp />} /> 
        <Route path='/' element={<App />} >
          </Route>
          
          <Route path= '/layout' element={<Layout />} > 
          
        
          <Route index element={<HomePage/>} /> 
          
        </Route>
        <Route exact path='/product' element={<OurStore/>} /> 
          <Route exact path='/product/:id' element={<SingleProduct/>} /> 
        <Route path='/contact' element={<Contacts />} /> 
         <Route path='/cart' element={<Cart/>} /> 

        
    </Routes>
    </Router>
    
  </React.StrictMode>
  
);


