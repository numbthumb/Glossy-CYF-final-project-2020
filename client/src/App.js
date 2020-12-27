import React from "react";
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import "./App.scss";
import Carousel from "./Carousel/LanguageCarousel";
// import Carousel from "react-bootstrap/Carousel";
// import { getMessage } from "./service";
// import logo from "./logo.svg";
import SidebarNav from "./components/SidebarNav";
import SearchBar from "./SEARCHBAR/SearchBar.js";




export function App() {
	return (
		<React.Fragment>
			<Header />
			<SearchBar />
			<main role="main">
				<div className="App">
		  <Carousel />
		  <SidebarNav />
				</div>
	  </main>

	  {/* <MainBody /> */}
	  <Footer />
	  </React.Fragment>
	);
}
export default App;
