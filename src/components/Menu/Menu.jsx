import React from 'react';
import './Menu.style.scss';
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
	{
		path: 'diods',
		text: 'Струм в діодах'
	},
	{
		path: 'volume-charts',
		text: "Об'ємні графіки"
	}
];

function Menu(props) {
	const isActive = ({ isActive }) => {
		return isActive ? "active-link" : "";
	}
	return (
		<div className="right-menu">
			{links.map(({path, text}) => {
				return (
					<NavLink className={isActive} to={'/' + path }> {text} </NavLink>
				)
			})}
		</div>
	);
}

export default Menu;