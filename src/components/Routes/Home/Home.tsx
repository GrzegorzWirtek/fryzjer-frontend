import './Home.scss';
import { NavLink } from 'react-router-dom';

const Home = () => {
	return (
		<main className='home'>
			<section className='home__text-wrapper'>
				<h1 className='home__title'>Fryzjer Męski</h1>
				<p className='home__subtitle'>Twoje włosy w dobrych rękach</p>
				<NavLink className='home__link' to='/pricelist'>
					Cennik
				</NavLink>
				<NavLink className='home__link' to='/contact'>
					Kontakt
				</NavLink>
			</section>
		</main>
	);
};

export default Home;
