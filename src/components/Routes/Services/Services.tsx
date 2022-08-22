import './Services.scss';
import { useContext } from 'react';
import AppContext from '../../../AppContext';

const Services = () => {
	const { services } = useContext(AppContext);

	const prices = services.map((item, index) => (
		<div key={item._id} className='service'>
			<p className='service__index'>{index + 1}.</p>
			<p className='service__title'>{item.text}</p>
			<p className='service__price'>{item.price} zł</p>
		</div>
	));

	return (
		<section className='services'>
			<div className='services__wrapper'>
				<h2 className='services__title'>Cennik</h2>
				{prices}
			</div>
		</section>
	);
};

export default Services;
