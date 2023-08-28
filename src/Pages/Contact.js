import Header from "../Components/Header"
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import './contact.css'

const Contact = () => {
  return (
   <section className="contact" id="contact">
    <Header title="contact"></Header>
    <div className="contact_container">
      <div className="contact_flex">
        <div className="contact1">
            <h1>Contact us</h1>
            <h2>Let's start working</h2>
            <p>Because they are hard, because that goal will
             serve to organize and measure the best of our 
             energies and skills, because that challenge is 
             one that we are willing to accept one we are.</p>
             <div className="contact_media">
                <BsFacebook/>
                <BsInstagram/>
                <BsLinkedin/>
                <BsTwitter/>
             </div>
          </div>
        <div className="contact2">
            <form>
             <input type="text" placeholder="Name" required min="5"/> <br />
             <input type="email" placeholder="Email" required /> <br />
             <input type="text" placeholder="Subject" required min="30" /> <br />
             <textarea name="Message" placeholder="Message" id="" cols="30" rows="10"></textarea> <br />
             <button className="btn">SSend</button>
            </form>
        </div>
      </div>
      <div className="contact_map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13086647.
      505393049!2d-129.90730737411616!3d36.794974744570496!2m3!1f0!2f0!3f0!3m2!1i1024
      !2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA
      !5e0!3m2!1sen!2sng!4v1692981730862!5m2!1sen!2sng" width="100%" height="450" 
       allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
   </section>
  )
}

export default Contact
