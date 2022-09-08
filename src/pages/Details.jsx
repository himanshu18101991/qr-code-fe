import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import logo from "./../logo.svg";
import "../css/detail-page.css";

function Details() {
	const history = useNavigate();
	let { id } = useParams();
	const [productData, setProductData] = useState(null);

	useEffect(() => {
		if (id.length) {
			fetchProduct();
		}
	}, [id]);

	const fetchProduct = async () => {
		try {
			let a = `http://localhost:3001/${id}`;
			const req = await fetch(a);
			const response = await req.json();
			if (response?.body?.code === 500) {
				history("/");
				return;
			}
			setProductData(response.body);
		} catch (e) {
			history("/");
			return { res: e, status: 404 };
		}
	};

	return (
		<>
			<div className="details-container">
				<h2>Details</h2>
				<div className="info-wrapper">
					<div className="result-data">
						{!productData ? (
							<img src={logo} className="App-logo" alt="logo" />
						) : (
							Object.keys(productData).map((key, index) => (
								<p key={key?.id || index}>
									<span className="key-data">{key}: </span>
									<span className="values">{productData[key]}</span>
								</p>
							))
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default Details;
