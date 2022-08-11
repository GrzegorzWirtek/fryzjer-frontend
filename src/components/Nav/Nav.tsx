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
				<NavLink className={'nav__link'} to='/pricelist' onClick={closeHam}>
					Cennik
				</NavLink>
				<NavLink className={'nav__link'} to='/contact' onClick={closeHam}>
					Kontakt
				</NavLink>
			</nav>
		</>
	);
};

export default Nav;
