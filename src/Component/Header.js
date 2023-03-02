import React from 'react'
import img from "../Images/search.png";
import css from "../style.css"
function Header() {
  return (
    <div className='headerouterdiv'>
        <div>
        <h1 id="logo">M</h1>
        </div>
        <div className='linkTab'>
            <ul className='unorderlist'>
                <li>Sample</li>
                <li>Features</li>
                <li>Layouts</li>
                <li>Shop</li>
                <li>Theme</li>
                <img id="searchimage"src={img} alt="error" />
            </ul>
        </div>
    </div>
  )
}

export default Header