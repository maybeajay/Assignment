import './HeaderStyles.css';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import Cake from '../Assets/cake.png'
const Header =()=>{
    return(
        <div>
            <header className="header">
            <h2>Calculator</h2>
            <FaBars />
            </header>
            <div className='sub-info'>
                <img className ="small-cake"src={Cake} alt='cake' />
                <p className='currency'>Cake</p>
	<input className = "checkbox" type="checkbox"/>
                <p className='currency'>USD</p>
            </div>
        </div>
    )
}
export default Header;