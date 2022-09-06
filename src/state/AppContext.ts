import { createContext } from 'react';

export type serviceType = {
	_id: number;
	text: string;
	price: number;
};

export type contactType = {
	street: string;
	buildingNr: number;
	apartmentNr: number;
	zipCode: string;
	city: string;
	info: string;
	tel: string;
};

export type galeryType = string[];

const initialState = {
	services: [] as serviceType[],
	contact: {} as contactType,
	galery: [] as galeryType,
};

const AppContext = createContext(initialState);
export default AppContext;
