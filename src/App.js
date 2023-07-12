import React from 'react';
import Resturant from './component/Basics/Resturant';


const App = () => {
  return (
    <>
        <h1 className='head'>The Grand Restro...</h1>
        
        <nav className='navbar'>
          <button className='btn-group__item'>Home</button>
          <button className='btn-group__item'>Your Order</button>
        </nav> 

   
      <Resturant/>
      
      

    </>
    
  )
};

export default App;