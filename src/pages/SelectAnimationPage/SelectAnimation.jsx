import React, {useState} from 'react';
import './style.scss';
import {Link} from "react-router-dom";
import DataRoutes from "../../features/DataRoutes";
import {FaArrowRight} from "react-icons/fa";
import Header from "../../components/Header/Header";
import {IoSearchOutline} from "react-icons/io5";

function SelectAnimation(props) {
	const [activeSearch, setActiveSearch] = useState(false)
	return (
		<>
			<Header/>
			<main>
				<h2>
					Інтерактивна фізика / Interactive physics
				</h2>
				<h3>
					Данний веб-сайт створений для того, щоб кожен мав змогу не тільки побачити фізичні явища, а й
					змогти "прощупати" своїми власними руками ці явища.
				</h3>
				<div className="tools-container">
					<span className="group-title">
						Симуляції фізичних явищ
					</span>
					<div className="search-box">
						<input
							id="search-input"
							type="text"
							placeholder="Назва симуляції"
						/>
						<div className="icon-box">
							<IoSearchOutline/>
						</div>
					</div>
				</div>
				<div className="brick-links__container">
					{DataRoutes.map(({route, linkText}) => (
						<Link className="brick-link" to={route} key={route}>
						<span className="brick-link__text">
							{linkText}
						</span>
							<div className="brick-link__arrow">
								<FaArrowRight/>
							</div>
						</Link>
					))}
				</div>
			</main>
		</>
	
	);
}

export default SelectAnimation;