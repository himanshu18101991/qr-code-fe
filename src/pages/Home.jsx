import React, { useEffect, useState } from "react";
import { getQRValue, getRedirectURL } from "../utils";
import logo from "./../logo.svg";
import QRCode from "react-qr-code";

function Home() {
	const [loader, setLoader] = useState(true);
	const [error, setError] = useState(false);
	const [qrCode, setqrCode] = useState(null);

	useEffect(() => {
		const getData = async () => {
			setLoader(true);
			try {
				setError(false);
				const { body } = await getQRValue();
				setqrCode(getRedirectURL(`${body}`));
			} catch (err) {
				setError(true);
			} finally {
				setLoader(false);
			}
		};
		getData();
	}, []);

	return (
		<div className="App">
			<header className={`App-header ${error ? "error" : ""}`}>
				{loader || error ? (
					<img src={logo} className="App-logo" alt="logo" />
				) : qrCode ? (
					<>
						<QRCode value={qrCode} />
						<p>Scan the Code!</p>
					</>
				) : null}
				<p>{error ? "Refresh" : ""}</p>
			</header>
		</div>
	);
}

export default Home;
