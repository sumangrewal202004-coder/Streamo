import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FiHome } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { FiBell } from "react-icons/fi";

import './Navbar.css';
function Navbar() {
  return (
    <div className='Navbar'>
      <div><img src={logo} alt="logo" height='70px' /></div>
      <div><NavLink to='/'><h1>STREAMO</h1></NavLink></div>
      <ul>
        <li><NavLink to="/"><FiHome/></NavLink></li>
         <li><NavLink to="/profile"><FiUser/></NavLink></li>
          <li><NavLink to="/notifications"><FiBell/></NavLink></li>
           <li><NavLink to="/messages"><FiMessageSquare/></NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
