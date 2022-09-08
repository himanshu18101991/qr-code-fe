import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="" exact element={<Home />} />
				<Route path="/details/:id" exact element={<Details />} />
				<Route path="*" element={<NotFound />} exact />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
