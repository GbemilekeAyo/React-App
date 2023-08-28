import './pricing.css'
import Header from '../Components/Header'
import { price } from '../Data'

const Pricing = () => {
  return (
    <section className='price' id='price'>
     <Header title="Pricing"></Header>

     <div className="price_container">
      
        {
            price.map(({id, largetxt , name , price , features}) =>{
                return <div key={id} className='price_row'>
                    <h1>{largetxt}</h1>
                     <h2>{name}</h2>
                     <h4><span>$</span>{`${price}`}</h4>
                     <small>per month</small>
                    
                     <div className='sub'>
                     {
                        features.map(({ feature , available , index}) =>{
                            return <p key={index} className={!available ? 'disabled': ""}>{feature}
                            </p>
                        })
                     }
                     </div>
                     <button className='btn'>choose plan</button>
                </div>
            })
        }
      </div>
    </section>
  )
}

export default Pricing
