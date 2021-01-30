import '../stylesheets/App.scss';
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
    <ul>{htmlCode}</ul>
  </div>);
}

export default ChefList;
