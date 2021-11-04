import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './NavBarStyles.css';
import { MenuList } from './MenuList';
import { CartWidget } from './CartWidget';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


export const NavBar = () => {
  return (
    <>
      <nav className="nav__container">
        <Link to="/">LOGO</Link>
        <ul className="menu__container">
          <li className="menu__list">
            <Link to="/">Home</Link>
          </li>
          <li className="menu__list">
            <Link to="/about">Nosotros</Link>
          </li>
          <li className="menu__list">
            <Link to="/productos">Productos</Link>
          </li>
          <li className="menu__list">
            <Link to="/">Home</Link>
          </li>
        </ul>
        <Link to="cart-details">  <ShoppingCartOutlinedIcon/> </Link>
      </nav>
    </>
  )
}

