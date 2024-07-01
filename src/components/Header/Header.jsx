import React from 'react';
import './Header.style.scss';
import {Link, NavLink, useLocation} from "react-router-dom";

const links = [
  {
    path: 'cars',
    text: 'Провідність на машинках'
  },
  {
    path: 'areas',
    text: 'Анімація зон валентної, провідної та забороненої'
  },
  {
    path: 'diods',
    text: 'Струм в діодах'
  },
  {
    path: 'volume-charts',
    text: "Об'ємні графіки"
  }
];


function Header(props) {
  const isActive = ({ isActive }) => {
    return isActive ? "active-link" : "";
  }
  const {pathname} = useLocation()
  return (
    <header>
      
      <div className="logo-box">
        <img id="logo" src="./logo-physics.png" alt="logo image" height={38} width={54}/>
        <span className="logo-text">
          Interactive physics
        </span>
        
      </div>
      <div>
        {pathname !== '/' && (
            <Link to={'/'}>
              Повернутися назад
            </Link>
        )}
      </div>
    </header>
  );
}

export default Header;