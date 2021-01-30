import '../stylesheets/_ChefList.scss';
import Chef from './Chef';
import React from 'react';



const ChefList=(props)=>{
const htmlCode=props.chefs.map(

(chef)=>{

  return (
  <div>
    <li key={chef.id}>
    <Chef name={chef.name} restaurant={chef.restaurant}/>
    </li>
  </div>);
}

);
  return (
  <div>
    <ul className="grid__container">{htmlCode}</ul>
  </div>);
}

export default ChefList;
