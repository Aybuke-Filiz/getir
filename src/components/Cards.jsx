import { useEffect } from "react";
import { useState } from "react";
import cardsData from "../api/cards.json";


function Cards() {

  const [cards,setCards]=useState([]);

useEffect(()=>{
setCards(cardsData);
},[])


  return (
    <div className="bg-background-color ">
    <div className=" grid grid-cols-3 container mx-auto gap-x-4 pt-8">
      {cards.length&&cards.map(card=> (
        <div className=" bg-white p-14 rounded-lg shadow-sm flex flex-col items-center text-center"> 
          <img className="mb-6"src={card.image}/>
          <h6 className="font-semibold text-lg text-primary-brand-color">{card.title}</h6>
          <p className="mt-2 text-sm text-gray-700">{card.description}</p>
        </div>
      ))}
      </div>
      </div>
  )
}

export default Cards