import Header from "../Components/Header"
import { team } from "../Data"
import './team.css'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'






const Team = () => {
  return (
    <section className="team" id="team">
      <Header title="Team"></Header>
      <div className="team_container">
        {
            team.map(({id , name, position , image , description }) =>{
                return <div key={id} className="team_flex">
                    <div className="team_img">
                    <img src={image} alt={name} />
                    </div>
                    <div className="team_info">
                        <h1>{position}</h1>
                        <h2>{name}</h2>
                        <p>{description}</p>
                        <div className="team_socials">
                        <BsFacebook/>
                        <BsInstagram/>
                        <BsLinkedin/>
                        <BsTwitter/>
                    </div>
                    </div>
                    </div>
            })
        }
      </div> 
    </section>
  )
}

export default Team
