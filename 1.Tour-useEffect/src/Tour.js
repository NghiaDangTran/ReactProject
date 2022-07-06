import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name,removeTour }) => {
 
  const [dispaly,setDisplay]=useState(true)

 
  return (<article className='single-tour'>
    <img src={image} alt={name}></img>
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className='tour-price'>{price}</h4>

      </div>
      <p>{dispaly? info.substring(0,200):info}
      <button onClick={()=>setDisplay(false)}>{dispaly && "...Read more"}</button>
      </p>
      <button onClick={()=>removeTour(id)} className='delete-btn'>not interted</button>
    </footer>
  </article>)
};

export default Tour;
