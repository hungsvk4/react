import {Link} from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'
export default function Navbar(){
    const[click,setClick]=useState(false)
    function handleClick(){
        setClick(!click)
    }
   return(
    <div className="navbar">
        <div className="navbar-brand">
            <img src="./img/logo.jpg"/>
        </div>
        <div className="navbar-items-mobile">
            <i className={click?'fa fa-times':'fa fa-align-justify'}
                onClick={handleClick}
            ></i>
        </div>
        <ul className={click?'navbar-items active':"navbar-items"}>
            <li className="navbar-item">
                <Link to='/'>Home</Link> 
            </li>
            <li className="navbar-item">
                <Link to='/'>About</Link> 
            </li>
            <li className="navbar-item">
                <Link to='/'>Packages</Link> 
            </li>
            <li className="navbar-item">
                <Link to='/'>Blog</Link> 
            </li>
            <li className="navbar-item">
                <Link to='/'>Page</Link> 
            </li>
            <li className="navbar-item">
                <Link to='/'>Contact</Link> 
            </li>
            
        </ul>
    </div>
   )
}