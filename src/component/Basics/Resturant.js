import React, { useState } from 'react'
import './style.css'
import Menu from './menuApi.js'
import MenuCard from './MenuCard'


const uniqueList = [
    ...new Set(Menu.map((curElem) =>{

        return curElem.category
}))]


console.log(uniqueList)

const Resturant = () => {

    const [menuData, setMenuData] = useState(Menu)
    
    const filteritem = (category) =>{

        const updatedList = Menu.filter((curElem) => {
             return curElem.category == category;
        })
            setMenuData(updatedList)
    } 

  return (
    <>
        <nav className='navbar'>
            <div className='btn-group'>
            
                <button className='btn-group__item' onClick={() =>filteritem('breakfast')}>BreakFast</button>
                <button className='btn-group__item' onClick={() =>filteritem('lunch')}>Lunch</button>
                <button className='btn-group__item' onClick={() =>filteritem('evening')}>Evening</button>
                <button className='btn-group__item' onClick={() =>filteritem('dinner')}>Dinner</button>
                <button className='btn-group__item' onClick={() => setMenuData(Menu)}>All</button>
                
            </div>
        </nav>
        <MenuCard menuData={menuData} />
    </>
  )
}

export default Resturant