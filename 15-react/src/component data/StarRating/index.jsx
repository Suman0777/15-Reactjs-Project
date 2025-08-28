import React, { useState } from 'react'
import {FaStar} from "react-icons/fa"

export default function index({noOfstar = 5}) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleclick(getcurrentIndex){
        setRating(getcurrentIndex);
    }

    function handleMouseEntere(getcurrentIndex){
        setHover(getcurrentIndex);
    }

    function handleMouseLeve(getcurrentIndex){
        setHover(0);
    }

  return (
    <div className='Star-rating'>
        {
            [...Array(noOfstar)].map((_,index)=>{
                index += 1;

                return <FaStar
                key={index}
                onClick={() => handleclick(index)}
                onMouseMove={() =>handleMouseEntere(index)}
                onMouseLeave={ () => handleMouseLeve(index)}
                size={40}
                color={index <= (hover|| rating) ? "gold" : "grey"}
                />
            })
        }
    </div>
  )
}
