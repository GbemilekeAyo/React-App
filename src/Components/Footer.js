import BrandImage from '../Images/brand_logo.png'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import './footer.css'




const Footer = () => {
  return (
   <footer>
    <div className="footer_container">
    <img src={BrandImage} alt="brand image" />
    <div className="line"></div>
    <h1>hello@cocobasics.com</h1>

    <span>
      <div className="line1"></div>
      <div className="line2"></div>
    </span>

    <div className="footer_media">
         <BsFacebook/>
        <BsInstagram/>
        <BsLinkedin/>
        <BsTwitter/>
     </div>
    <small>© 2023 Seppo HTML Template by CocoBasic</small>
    </div>
   </footer>
  )
}

export default Footer
