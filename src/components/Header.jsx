import React from 'react'
import logo from '../assets/black.png';


const Header = () => {
    return(
        <div className='headerSection'>

               <div className="logo">
                   <img src={logo} alt="logo"/>
               </div>

            <div className="center">
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

            </div>
            <div className="search">
                <input type="text" placeholder='Search...' />
            </div>
            <div className="right">
                <div className="signin">
                    Sign in / Sign up
                </div>
                <div className="cart">
                    Cart
                </div>
            </div>
        </div>
    )

}

export default Header