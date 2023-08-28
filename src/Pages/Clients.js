import {ImQuotesLeft} from 'react-icons/im';
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io';
import { useState } from "react";
import { clients } from "../Data";
import './client.css'

   const Clients = () => {
   const [index, setIndex] = useState(0)
   const { name , quote , job , avatar} = clients[index];


   const prevClientHandler = () =>{
    setIndex(prev => prev - 1)
    if( index <= 0){
     setIndex(clients.length -1);
    }
   }
   
   const nextClientHandler = () =>{
    setIndex(prev => prev + 1)  
    if( index >= clients.length - 1){
     setIndex(0)
    }
   }
   

  return (
    <section className="client"  id="client">
        <div className="client_container">

            <div className="client_inner-container">
        <div className="client_quote"><ImQuotesLeft/></div>
        <p>{quote}</p>
         <div className="client_flex">
            <div className="client_txt">
                <img src={avatar} alt={name} />
                <h2>{name}</h2>
               <small>{job}</small>
            </div>
            <div className="clients_btn-container">
            <button className="clients_btn" onClick={prevClientHandler} ><IoIosArrowDropleftCircle/></button>
            <button className="clients_btn" onClick={nextClientHandler}><IoIosArrowDroprightCircle/></button>
           </div>
           </div>
           </div>
        </div>
    </section>
  )
}


    export default Clients;
 