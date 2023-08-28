import { milestone } from "../Data"
import Header from "../Components/Header"
import './milestone.css'


const Milestone = () => {
  return (
   <section className="milestone" id="milestone">
     <Header title="milestone"></Header>
     <div className="milestone_container">
        {
            milestone.map(({id , rate , title , description})=> {
                return <div key={id} className="milestone_row">
                    <span>{rate}k</span>
                    <div className="milestone_txt">
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                  </div>
            })
        }
     </div>
   </section>
  )
}

export default Milestone
