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

export const initialState = {
	services: [] as serviceType[],
	contact: {} as contactType,
	galery: [] as galeryType,
};
