import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import "./App.scss";
import MainBody from "./Main_Body/MainBody.js";
import Carousel from "./Carousel/LanguageCarousel";
// import Carousel from "react-bootstrap/Carousel";
import { getMessage } from "./service";
import SidebarNav from "./components/SidebarNav";
import Body from "./components/Body.js";
import Resources from "./components/Resources";

export function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/body">Terms Page</Link>
      </div>
      <Header />
      <Switch>
        <Route exact path="/">
			   <Carousel />
        </Route>
        <Route path="/body">
      <SidebarNav />
          <Body />
        </Route>
      </Switch>
	 {/*   <MainBody />*/}
	  <Footer />
    </BrowserRouter>
  );
}

export default App;
