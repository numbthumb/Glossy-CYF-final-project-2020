import React from "react";
import Carousel from "./Carousel/LanguageCarousel";
// import Carousel from "react-bootstrap/Carousel";
// import { getMessage } from "./service";
// import logo from "./logo.svg";
import Searchbar from "./SEARCHBAR/SearchBar.js";
import SidebarNav from "./components/SidebarNav";
import "./App.scss";

export function App() {
	// const [message, setMessage] = useState("Loading...");

	// useEffect(() => {
	// 	getMessage().then((message) => setMessage(message));
	// }, []);

	return (
		<main role="main">
			<div className="App">
			  <Searchbar />
			  <Carousel />



				<SidebarNav />
			</div>
		</main>
	);
}

export default App;
