import React from 'react';
import './NavBarStyles.css';
import { MenuList } from './MenuList';
import { CartWidget } from './CartWidget';


export const NavBar = () => {
  return (
    <>
      <nav className="nav__container">
        <div className="logo">
          <a href="#">Casa G Pattiserie</a>
        </div>
        <ul className="menu__container">
          {
            MenuList.map((index, key) => {
              return (
                <li key={key} className="menu__list">
                  <a href={index.url} className={index.cName}>
                    {index.title}
                  </a>
                </li>
              )
            })
          }
        </ul>
        <CartWidget />
      </nav>
    </>
  )
}

