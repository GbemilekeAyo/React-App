import Header from "../Components/Header"
import AboutImage from "../Images/aboutlogo.jpg"
import './about.css'




const About = () => {
  return (
    <section className="about"  id="about">
    <Header title="About"></Header>

  
      <div className="about_flex">
      <div className="about_txt">
        <h1>WHO WE ARE</h1>
        <p>Live up to your creative potential</p>
        <small>
        Code the energy hidden in matter citizens of distant epochs
        from which we spring drake equation perga inconspicuous 
        motespatch  clean designed code and energy matter.
        </small>
        <div className="about_link">
        <button className="btn">Learn More</button>
        </div>
      </div>

        <img src={AboutImage} alt="about image" />
      </div>
    </section>
  )
}

export default About
