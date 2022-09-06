import AppContext, { serviceType, contactType, galeryType } from './AppContext';
import { useEffect, useState } from 'react';
import * as api from '../api';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import storage from '../firebase/firebase';

const imageListRef = ref(storage, 'images/');

type Props = {
	children: JSX.Element | JSX.Element[];
};

const AppState = ({ children }: Props) => {
	const initialContactData = {} as contactType;
	const initialServicesData = [] as serviceType[];
	const initialGaleryData = [] as galeryType;

	const [contactData, setContactData] =
		useState<contactType>(initialContactData);
	const [servicesData, setServicesData] =
		useState<serviceType[]>(initialServicesData);
	const [galeryData, setGaleryData] = useState<galeryType>(initialGaleryData);

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
