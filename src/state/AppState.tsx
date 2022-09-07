import AppContext from './AppContext';
import {
	serviceType,
	contactType,
	galeryType,
	initialState,
} from './StateTypes';
import { useEffect, useState } from 'react';
import * as api from '../api';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import storage from '../firebase/firebase';

const imageListRef = ref(storage, 'images/');

type Props = {
	children: JSX.Element | JSX.Element[];
};

const AppState = ({ children }: Props) => {
	const [contactData, setContactData] = useState<contactType>(
		initialState.contact,
	);
	const [servicesData, setServicesData] = useState<serviceType[]>(
		initialState.services,
	);
	const [galeryData, setGaleryData] = useState<galeryType>(initialState.galery);

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
			const urls = res.items.map(async (item) => {
				const url = await getDownloadURL(item);
				return url;
			});
			return Promise.all(urls);
		};
		getServices();
		getContact();
		getImages().then((urls) => setGaleryData(urls));
	}, []);

	return (
		<AppContext.Provider
			value={{
				services: servicesData,
				contact: contactData,
				galery: galeryData,
			}}>
			{children}
		</AppContext.Provider>
	);
};
export default AppState;
