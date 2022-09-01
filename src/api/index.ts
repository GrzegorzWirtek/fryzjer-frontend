import axios from 'axios';

const URL = 'http://localhost:3001/';
const SERVICES = 'services';
const CONTACT = 'contact';

export const getServices = () => axios.get(`${URL}${SERVICES}`);
export const getContact = () => axios.get(`${URL}${CONTACT}`);

// import {
// 	ref,
// 	uploadBytes,
// 	listAll,
// 	getDownloadURL,
// 	deleteObject,
// 	getMetadata,
// } from 'firebase/storage';
// import storage from '../firebase/firebase';

// export const getImages = async () => {
// 	const res = await listAll(imageListRef);
// 	let urls = res.items.map(async (item) => {
// 		const url = await getDownloadURL(item);
// 		const name = (await getMetadata(item)).fullPath;
// 		return { url, name };
// 	});
// 	return Promise.all(urls);
// };
