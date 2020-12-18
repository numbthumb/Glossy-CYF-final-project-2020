import React from "react";
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import "./App.scss";
import MainBody from "./Main_Body/MainBody.js";

export function App() {
  return (
    <React.Fragment>
      <Header />
	  <MainBody />
	  <Footer />
    </React.Fragment>
  );
}

export default App;
