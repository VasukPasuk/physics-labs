import React, { useRef, useState } from 'react';
import './style.scss';
import { Link } from "react-router-dom";
import DataRoutes from "../../features/DataRoutes";
import {FaArrowRight, } from "react-icons/fa";
import Header from "../../components/Header/Header";
import {IoSearchOutline} from "react-icons/io5";
import {MdClose} from "react-icons/md";

function SelectAnimation(props) {
	let inputRef = useRef(null);
	const [searchValue, setSearchValue] = useState('');
	
	const searchBtnHandler = () => {
		setSearchValue(prev => inputRef.current.value);
	}
	
	return (
		<>
			<Header />
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
						<div className="input-container">
							<input
								id="search-input"
								type="text"
								placeholder="Назва симуляції"
								ref={inputRef}
								onChange={event => !event.currentTarget.value && setSearchValue(event.currentTarget.value)}
							>
							</input>
							{searchValue && (
								<MdClose
									onClick={() => setSearchValue(prev => {
										inputRef.current.value = '';
										return ''
									})}
									className="delete-query"
								/>)}
						</div>
						<div
							className="icon-box"
							onClick={searchBtnHandler}
						>
							<IoSearchOutline/>
						</div>
					</div>
				</div>
				<div className="brick-links__container">
					{DataRoutes
						.filter(({linkText}) => linkText.toLowerCase().includes(String(searchValue).toLowerCase()))
						.map(({ route, linkText }) => (
							<Link className="brick-link" to={route} key={route}>
							<span className="brick-link__text">
								{linkText}
							</span>
								<div className="brick-link__arrow">
									<FaArrowRight />
								</div>
							</Link>
						))}
				</div>
			</main>
		</>
	);
}

export default SelectAnimation;
