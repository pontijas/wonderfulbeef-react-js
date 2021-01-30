import React, { useState } from 'react';
import ChefList from './ChefList';
import '../stylesheets/App.scss';
import chefData from '../data/chefdata';





const App=()=>{
  const [chefs] = useState(chefData);

  return (
    <div>
        <ChefList chefs={chefs}/>
    </div> 
  );
}

export default App;
