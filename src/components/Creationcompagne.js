
import { useState }  from 'react'
import Sidebar from'./sidebar/Sidebar'
import {Link}from 'react-router-dom'
import Navbar from'./navbar/Navbar'
import './Creationcompagne.css'

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.9/jquery.datetimepicker.full.min.js"></script>







function   Creationcompagne()  {
 
  
 const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
   return (
    <div className="container">
   
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
      <div className="content">
       
      <div class="row">
      <div class="col-sm-6">
     
        <div class="box">
        <p>Create new company</p>
      <label className='form-label'>Name </label> 
      <input
          required
            className='form-input'
            type='text'
            name='name'
            placeholder='Enter a name'></input>
             <label className='form-label'>Email</label> <input
          required
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'>
              </input>
             <label className='form-label'>Date</label>
             <input type="date" id="start" name="date"
       value="2021-07-22"
       min="2021-01-01" max="2030-12-31"></input>
     
         <button className='form-input-btn' type='submit' href="./SendMsg.js">
     Next
      </button></div></div>
      </div></div>
    </div>
    
   
   );
 };
    <script></script>
  
  
export default Creationcompagne;