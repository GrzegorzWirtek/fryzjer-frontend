import './Home.scss';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../../../state/AppContext';

const Home = () => {
	const {
		contact: { tel },
	} = useContext(AppContext);

	const telToString = `${String(tel).slice(0, 3)}-${String(tel).slice(
		3,
		6,
	)}-${String(tel).slice(6, 9)}`;

	return (
		<main className='home'>
			<section className='home__text-wrapper'>
				<h1 className='home__title'>Fryzjer Męski</h1>
				<p className='home__subtitle'>Twoje włosy w dobrych rękach</p>
				<NavLink className='home__link' to='/services'>
					Cennik
				</NavLink>
				<a href='tel: 506189914' className='home__link home__link--tel'>
					<img src='icons/phone.svg' alt='' className='home__tel-icon' />
					{telToString}
				</a>
			</section>
		</main>
	);
};

export default Home;
