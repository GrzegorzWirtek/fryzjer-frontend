import './App.css';
import { HashRouter } from 'react-router-dom';
import Router from './components/Routes/Router';
import Nav from './components/Nav/Nav';
import AppContext, { serviceType, contactType, galeryType } from './AppContext';
import { useEffect, useState } from 'react';
import * as api from './api';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import storage from './firebase/firebase';

const imageListRef = ref(storage, 'images/');

function App() {
	const initialContactData = {} as contactType;
	const initialServicesData = [] as serviceType[];
	const initialGaleryData = [] as galeryType;

	const [contactData, setContactData] =
		useState<contactType>(initialContactData);
	const [servicesData, setServicesData] =
		useState<serviceType[]>(initialServicesData);
	const [galeryData, setGaleryData] = useState<galeryType>(initialGaleryData);

	// const getImages = async () => {
	// 	const res = await listAll(imageListRef);
	// 	let urls = res.items.map(async (item) => await getDownloadURL(item));
	// 	return Promise.all(urls);
	// };

	useEffect(() => {
		const getServices = async () => {
			const { data } = await api.getServices();
			setServicesData(data);
		};
		const getContact = async () => {
			const { data } = await api.getContact();
			setContactData(data);
		};

		const getImages = async () => {
			const res = await listAll(imageListRef);
			res.items.map(async (item) => {
				const url = await getDownloadURL(item);
				setGaleryData((prev) => [...prev, url]);
			});
		};
		getServices();
		getContact();
		getImages();
	}, []);

	return (
		<div className='App'>
			<AppContext.Provider
				value={{
					services: servicesData,
					contact: contactData,
					galery: galeryData,
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
