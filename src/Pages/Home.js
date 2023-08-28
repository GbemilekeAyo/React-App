
import Navbar from '../Components/Navbar'
import Mainheader from '../Components/Mainheader'
import Header from '../Components/Header'
import About from '../Pages/About'
import Clients from '../Pages/Clients'
import Contact from '../Pages/Contact'
import Footer from '../Components/Footer'
import Milestone from '../Pages/Milestone'
import News from '../Pages/News'
import Portfolio from '../Pages/Portfolio'
import Price from '../Pages/Pricing'
import Service from '../Pages/Service'
import Skill from '../Pages/Skill'
import Team from '../Pages/Team'










  

const Home = () => {
  return (
    <>
    <div className='home' id='home'></div>
    <Navbar />
    <Mainheader/>
    <Header/>
    <Service /> 
    <About/> 
    <Clients/> 
    <News/>
    <Portfolio/>
    <Price/>
    <Team/>
    <Skill/>
    <Milestone/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home;
