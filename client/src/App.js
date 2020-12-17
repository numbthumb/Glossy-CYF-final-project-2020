import React, { useEffect, useState } from "react";

import "./App.css";
import { getMessage } from "./service";
import logo from "./logo.svg";
import SidebarNav from "./components/SidebarNav";

export function App() {
	// const [message, setMessage] = useState("Loading...");

	// useEffect(() => {
	// 	getMessage().then((message) => setMessage(message));
	// }, []);

	return (
		<main role="main">
			<div className="App">
				
				<SidebarNav />
			</div>
		</main>
	);
}

export default App;
