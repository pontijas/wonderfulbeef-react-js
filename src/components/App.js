import React, { useState } from 'react';
import ChefList from './ChefList';
import '../stylesheets/_App.scss';
import chefData from '../data/chefdata';





const App=()=>{
  const [chefs] = useState(chefData);

  return (
    <div>
      <header className="header__container">
      <h1 className="header__title">
        ¿Qué les pasa <br />
        a nuestros chefs?
      </h1>
      <div className="div-iframe">
        <div className="header__container-iframe">
          <iframe title="teaser" className="iframe" src="https://www.youtube.com/embed/w30CXuqioVY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
      <div className="header__bar-container">
        <div className="header__bar-grey"></div>
        <div className="header__bar-red"></div>
      </div>
    </header>

      <main className="main__container">
        <h2 className="main__title">Se niegan a cocinar sin ella</h2>
      <ChefList chefs={chefs}/>
      </main>
      
      <footer></footer>
    </div> 
  );
}

export default App;
