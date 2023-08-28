import Header from '../Components/Header'
import './service.css'
import { service } from '../Data'


const Service = () => {
  return (

    <section className='service_container' id='services'>
     <Header title="Service"></Header>

     <div className="service">
      <div className="service set">
      {
        service.map(({id, largetxt, title, info, path }) =>{
           return <div key={id} className='service_row'>
             <h1>{largetxt}</h1>
             <p>{title}</p>
             <small>{info}</small>
             <a href="/" className='service_btn'>Learn More</a>
           </div>
        })
      }
     </div>
     </div>
    </section>
    
    
  )
}

export default Service
