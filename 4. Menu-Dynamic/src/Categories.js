import React from 'react';

const Categories = ({ render, filter }) => {
 
  return <div className="btn-container">

    {render.map((i,at) => {
      

      return <button key={at} type='button' className='filter-btn' onClick={() => filter(i)}>{i}</button>
    })}
  </div>
};

export default Categories;
