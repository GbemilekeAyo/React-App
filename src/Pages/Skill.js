import Header from "../Components/Header"
import './skill.css'

const Skill = () => {
  return (
   <section className="skill" id="skill">
    <Header title="Skill"></Header>
    <div className="skill_container">
     <div className="skill_flex">
       <div className="flex1">
        <h1>Our numbers</h1>
        <h2>Check Our Skills</h2>
        <p>
        Code the energy hidden in matter citizens 
        of distant epochs from which we spring 
        drake equation perga inconspicuous motespatch
        clean designed code and energy matter.
       </p>

       <button className="btn">Learn More</button>
       </div>
       <div className="flex2">
       <div className="skill_row">
            <small>75%</small>
            <div className="progress">
                <h1>Ceativity</h1>
                <span>
                  <div className="progress1"></div>
                </span>
            </div>
         </div>

         <div className="skill_row">
            <small>45%</small>
            <div className="progress">
                <h1>Cooking</h1>
                <span>
                  <div className="progress2"></div>
                </span>
            </div>
         </div>

         <div className="skill_row">
            <small>90%</small>
            <div className="progress">
                <h1>Php</h1>
                <span>
                  <div className="progress3"></div>
                </span>
            </div>
         </div>


         <div className="skill_row">
            <small>65%</small>
            <div className="progress">
                <h1>Marketing</h1>
                <span>
                  <div className="progress4"></div>
                </span>
            </div>
         </div>
      
         <div className="skill_row">
            <small>85%</small>
            <div className="progress">
                <h1>Design</h1>
                <span>
                  <div className="progress5"></div>
                </span>
            </div>
         </div>
       </div>
     </div>
     </div>
   </section>
  )
}

export default Skill
