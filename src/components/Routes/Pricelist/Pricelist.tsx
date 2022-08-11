import './Pricelist.scss';
import * as api from '../../../api/index';
import { useEffect, useState } from 'react';

interface State {
	servicesType: {
		_id: number;
		text: string;
		price: number;
	}[];
}

export type serviceToEditType = {
	_id: number;
	text: string;
	price: number;
};

const Pricelist = () => {
	const [state, setState] = useState<State['servicesType']>([]);

	useEffect(() => {
		const loadServices = async () => {
			const { data } = await api.getServices();
			setState(data);
		};
		loadServices();
	}, []);

	const prices = state?.map((item, index) => (
		<div key={item._id} className='service'>
			<p className='service__index'>{index + 1}.</p>
			<p className='service__title'>{item.text}</p>
			<p className='service__price'>{item.price}</p>
		</div>
	));

	return <section className='pracelist'>{prices}</section>;
};

export default Pricelist;
