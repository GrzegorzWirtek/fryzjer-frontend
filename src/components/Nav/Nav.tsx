import './Nav.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {
	return (
		<>
			<nav className='nav'>
				<NavLink className={'nav__link'} to='/pricelist'>
					Cennik
				</NavLink>
				<NavLink className={'nav__link'} to='/contact'>
					Kontakt
				</NavLink>
			</nav>
		</>
	);
};

export default Nav;
