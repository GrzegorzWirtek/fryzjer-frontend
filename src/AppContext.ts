import { createContext } from 'react';
import { contactDataType } from './api/index';

export type serviceType = {
	_id: number;
	text: string;
	price: number;
};

const initialState = {
	services: [] as serviceType[],
	contact: {} as contactDataType,
};

const AppContext = createContext(initialState);
export default AppContext;
