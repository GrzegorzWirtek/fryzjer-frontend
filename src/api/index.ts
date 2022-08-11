import axios from 'axios';

const URL = 'http://localhost:3001/';
const SERVICES = 'services';
const CONTACT = 'contact';

export type contactDataType = {
	street: string;
	buildingNr: number;
	apartmentNr: number;
	zipCode: string;
	city: string;
	info: string;
	tel: string;
};

export const getServices = () => axios.get(`${URL}${SERVICES}`);
export const getContact = () => axios.get(`${URL}${CONTACT}`);
