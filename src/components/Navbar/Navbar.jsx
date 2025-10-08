import React from 'react';
import './Navbar.css';
import Profileimg from './../../assets/profileimg.jpg';


const Navbar = () => {
  return (
  <>
  <div className='navbar-container'>

  <div>
      <img className='profile-image' src={Profileimg} alt="Logo"/>
  </div>
  <hr className='break-line'></hr>

   <div className='nav-items'>
    
        <p><i class="fa-solid fa-user"></i> About</p>
        <p><i class="fa-solid fa-chart-simple"></i> Skills</p>
        <p><i class="fa-solid fa-diagram-project"></i> Projects</p>
        <p><i class="fa-solid fa-briefcase"></i> Services</p>
        <p><i class="fa-solid fa-briefcase"></i> Experience</p>
        <p><i class="fa-solid fa-certificate"></i> Certificate</p>
        <p><i class="fa-solid fa-envelope"></i> Contact</p>

   </div>
  
  </div>
  </>
  )
}

export default Navbar
