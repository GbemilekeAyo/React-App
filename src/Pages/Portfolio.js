import './portfolio.css'
import Header from '../Components/Header'
import ImageOne from '../Images/portfolio_01.jpg'
import ImageTwo from '../Images/portfolio_02.jpg'
import ImageThree from '../Images/portfolio_03.jpg'
import ImageFour from '../Images/portfolio_04.jpg'


const Portfolio = () => {
  return (
    
    
    <section className='portfolio' id='portfolio'>
         <Header title="portfolio"></Header>
         <div className="portfolio_flex">

         <div className="portfolio_row row1" >
                    <img src={ImageOne} alt="Image One" />
                    <div className="portfolio_layer">
                        <span>
                          <small>Interior</small>
                          <h1>Living ROOM</h1>
                        </span>
                    </div>
                </div>
            

                <div className="portfolio_row row2" >
                    <img src={ImageTwo} alt="Image Two" />
                    <div className="portfolio_layer">
                    <span>
                          <small>fashion</small>
                          <h1>Modelling</h1>
                        </span>
                    </div>
                </div>
                
   
                  <span className='portfolio_grid-aside row3'>
                  <div className="portfolio_row ">
                    <img src={ImageThree} alt="Image Three" />
                    <div className="portfolio_layer">
                    <span>
                          <small>Creative</small>
                          <h1>PSD Mockup</h1>
                        </span>
                    </div>
                </div>

                <div className="portfolio_row">
                    <img src={ImageFour} alt="Image Four" />
                    <div className="portfolio_layer">
                    <span>
                          <small>architecture</small>
                          <h1>Pillars</h1>
                        </span>
                        </div>
                   </div>
                  </span>


                  </div>
               
    </section>
  )
}

export default Portfolio;
