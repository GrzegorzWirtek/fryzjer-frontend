import axios from 'axios';

const URL = 'https://fryzjer-backend.herokuapp.com/';
const SERVICES = 'services';
const CONTACT = 'contact';

export const getServices = () => axios.get(`${URL}${SERVICES}`);
export const getContact = () => axios.get(`${URL}${CONTACT}`);
