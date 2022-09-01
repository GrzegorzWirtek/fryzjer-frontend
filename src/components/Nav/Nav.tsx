import './Nav.scss';
import { NavLink } from 'react-router-dom';
import Ham from './Ham/Ham';
import { useState } from 'react';

const Nav = () => {
	const [hamActive, setHamActve] = useState(false);

	const toggleHam = () => {
		setHamActve((prev) => !prev);
	};

	const closeHam = () => {
		setHamActve(false);
	};

	return (
		<>
			<Ham hamActive={hamActive} toggleHam={toggleHam} />
			<nav className={`nav ${hamActive ? 'nav--active' : ''}`}>
				<NavLink className={'nav__link'} to='/' onClick={closeHam}>
					Strona główna
				</NavLink>
				<NavLink className={'nav__link'} to='/services' onClick={closeHam}>
					Cennik
				</NavLink>
				<NavLink className={'nav__link'} to='/contact' onClick={closeHam}>
					Kontakt
				</NavLink>
				<NavLink className={'nav__link'} to='/galery' onClick={closeHam}>
					Galeria
				</NavLink>
			</nav>
		</>
	);
};

export default Nav;
