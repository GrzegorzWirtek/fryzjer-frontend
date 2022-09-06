import './Galery.scss';
import Spinner from '../../Spinner/Spinner';
import { useContext } from 'react';
import AppContext from '../../../state/AppContext';

const Galery = () => {
	const { galery } = useContext(AppContext);
	const images = galery.map((image) => (
		<img className='galery__image' key={image} src={image} alt={image} />
	));

	return (
		<section className='galery'>{galery.length ? images : <Spinner />}</section>
	);
};

export default Galery;
