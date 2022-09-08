export const getQRValue = async () => {
	try {
		let data = await fetch(process.env.REACT_APP_URL);
		let res = await data.json();
		return res;
	} catch (err) {
		console.log(err);
	}
};

export const getRedirectURL = (link) => {
	try {
		return `${process.env.REACT_APP_URL}/${link}`;
	} catch (err) {
		console.log(err);
	}
};
