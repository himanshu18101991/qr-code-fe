export const getQRValue = async () => {
	try {
		let data = await fetch("http://localhost:3001");
		let res = await data.json();
		return res;
	} catch (err) {
		console.log(err);
	}
};

export const getRedirectURL = (link) => {
	try {
		return `http://2ee6-103-85-11-83.ngrok.io/${link}`;
	} catch (err) {
		console.log(err);
	}
};
