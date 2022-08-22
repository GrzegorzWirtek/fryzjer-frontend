import './Contact.scss';
import { useContext } from 'react';
import AppContext from '../../../AppContext';

const Contact = () => {
	const { contact } = useContext(AppContext);

	const { street, buildingNr, apartmentNr, zipCode, city, info, tel } = contact;

	const telToString = `${String(tel).slice(0, 3)}-${String(tel).slice(
		3,
		6,
	)}-${String(tel).slice(6, 9)}`;

	const zipCodeToString = `${String(zipCode)
		.padStart(5, '0')
		.slice(0, 2)}-${String(zipCode).padStart(5, '0').slice(2, 5)}`;

	return (
		<section className='contact'>
			<div className='contact__wrapper'>
				<h2 className='contact__title'>Kontakt</h2>
				<p className='contact__street'>
					ul. {street} {buildingNr} lok.
					{apartmentNr}
				</p>
				<p className='contact__city'>
					{zipCodeToString} {city}
				</p>
				<p className='contact__info'>{info}</p>
				<a href={`tel:${tel}`} className='contact__phone'>
					<img
						src='icons/phone.svg'
						alt='Phone icon'
						className='contact__phone-img'
					/>
					<p className='contact__phone-nr'>{telToString}</p>
				</a>
			</div>
		</section>
	);
};

export default Contact;
