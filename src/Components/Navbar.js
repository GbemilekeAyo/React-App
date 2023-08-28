import { useState } from 'react'
import './navbar.css'
import BrandImage from '../Images/brand_logo.png'
import { HashLink as Link } from 'react-router-hash-link'
 
const Navbar = () => {  
  const [active , setActive] = useState('nav_menu');
  const [toggleIcon, setToggleIcon] = useState('nav_toggler');

  

  //Navbar toggle function
     const navtoggle = () => {
      active === 'nav_menu' ? setActive('nav_menu nav_active')  
      :setActive("nav_menu");

      //Toggler Icon
        toggleIcon === 'nav_toggler' 
      ? setToggleIcon("nav_toggler toggle")
      : setToggleIcon("nav_toggler")
     }

  return (
    <nav>
      <div className='nav-container'>
        <img className='brand' src={BrandImage} alt="Brand Image" />
        <ul className={active}>
           <Link to="#home" smooth ><li className='nav_item'>Home</li></Link>
            <Link to="#services" smooth><li className='nav_item'>Services</li></Link>
           <Link to="#about" smooth><li  className='nav_item'>About</li></Link>
           <Link to="#client" smooth><li  className='nav_item'>Client</li></Link>
           <Link to="#news" smooth><li  className='nav_item'>News</li></Link>
           <Link to="#portfolio" smooth><li  className='nav_item'>Portfolio</li></Link>
           <Link to="#price" smooth><li  className='nav_item'>Pricing</li></Link>
           <Link to="#team" smooth><li  className='nav_item'>Team</li></Link>
           <Link to="#skill" smooth><li  className='nav_item'>Skill</li></Link>
           <Link to="#milestone" smooth><li  className='nav_item'>Milestone</li></Link>
           <Link to="#contact" smooth><li  className='nav_item'>Contact</li></Link>
        </ul>
        <div onClick={navtoggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
