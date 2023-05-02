import React from 'react'
import '../Main/Main.css'
import {cardlist} from '../Main/cardlist'

const Main = () => {
    
    //console.log(cardlist,"cardlist");
  return (
    <div className='Main'>
     {
     cardlist.map(card=>{
       return(
          <>
            <h1>{card.Name}</h1>
            <img src={card.imageUrl} alt="Profile Image"  />
          </>
       );
       
       }) 
    } ;
    </div>
  )
}

export default Main
