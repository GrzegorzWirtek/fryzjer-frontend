import './App.css';
import { HashRouter } from 'react-router-dom';
import Router from './components/Routes/Router';
import Nav from './components/Nav/Nav';
import AppContext, { serviceType } from './AppContext';
import { useEffect, useState } from 'react';
import * as api from './api';

function App() {
	const initialContactData = {} as api.contactDataType;
	const initialServicesData = [] as serviceType[];

	const [contactData, setContactData] =
		useState<api.contactDataType>(initialContactData);
	const [servicesData, setServicesData] =
		useState<serviceType[]>(initialServicesData);

	useEffect(() => {
		const getServices = async () => {
			const { data } = await api.getServices();
			setServicesData(data);
		};
		const getContact = async () => {
			const { data } = await api.getContact();
			setContactData(data);
		};
		getServices();
		getContact();
	}, []);

	return (
		<div className='App'>
			<AppContext.Provider
				value={{
					services: servicesData,
					contact: contactData,
				}}>
				<HashRouter>
					<Nav />
					<Router />
				</HashRouter>
			</AppContext.Provider>
		</div>
	);
}

export default App;
