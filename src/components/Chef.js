import '../stylesheets/App.scss';
import React from 'react';




const Chef=(props)=>{

  return (
  <div>
    <h3>{props.name}</h3>
    <h4>{props.restaurant}</h4>
  </div>);
}

export default Chef;
