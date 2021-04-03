import React from 'react';


import './Form.css';

import {Link}  from "react-router-dom"; 


function  Login () {

 return (
    <div className='form-container'>
  
    <div className='form-content-left'>
      
      
      </div>
      
    <div className='form-content-right'>
     <form className='form'>
        
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
      
            
          />
          
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
         
          
          />
          
        </div>
        
        <button className='form-input-btn' type='submit'>
        <Link to="/FormSuccess"> Login</Link>
        </button>
        
        <span className='form-input-login'>
        don't have an account? <Link to="/FormSignup"> Sign-up</Link></span>
        </form>
    </div>
    
    </div>
 
    
  );
};

export default Login ;
