import { get } from "./api";

export const getMessage = async () => {
	const response = await get("/");
	return response.data.message;
};

export const getLanguage = async () => {
	const response = await get("/language");
	return response.data;
};

export const Terms = async () => {
	const response = await get("/terms/:term");
	return response.data;
};
