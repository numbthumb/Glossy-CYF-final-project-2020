import React from "react";
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import "./App.scss";
// import MainBody from "./Main_Body/MainBody.js";
import Carousel from "./Carousel/LanguageCarousel";
// import Carousel from "react-bootstrap/Carousel";
import { getMessage } from "./service";
import logo from "./logo.svg";
import SidebarNav from "./components/SidebarNav";
import AddTermUser from "./AddTermUser/AddTermUser.js";


export function App() {
  return (
    <React.Fragment>
      <Header />
      <main role="main">
      <div className="App">
			  <Carousel />
        <SidebarNav />
			</div>
		</main>
    <AddTermUser />
	  {/* <MainBody /> */}
	  <Footer />
    </React.Fragment>
  );
}

export default App;
