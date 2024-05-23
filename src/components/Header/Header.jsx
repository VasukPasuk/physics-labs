import React from 'react';
import './Header.style.scss';
import {NavLink} from "react-router-dom";

const links = [
  {
    path: 'cars',
    text: 'Провідність на машинках'
  },
  {
    path: 'areas',
    text: 'Анімація зон валентної, провідної та забороненої'
  },
  // {
  //   path: 'chart',
  //   text: 'Об\'ємний графік'
  // },
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
  return (
    <header>
      <nav>
        {links.map(({path, text}) => {
          return (
            <NavLink className={isActive} to={'/' + path }> {text} </NavLink>
          )
        })}
      </nav>
    </header>
  );
}

export default Header;