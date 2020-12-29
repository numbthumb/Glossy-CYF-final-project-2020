import React from "react";
<<<<<<< Updated upstream
=======
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
>>>>>>> Stashed changes
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import "./App.scss";
import MainBody from "./Main_Body/MainBody.js";
import Carousel from "./Carousel/LanguageCarousel";
// import Carousel from "react-bootstrap/Carousel";
import { getMessage } from "./service";
import SidebarNav from "./components/SidebarNav";
<<<<<<< Updated upstream


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
	  <MainBody />
	  <Footer />
    </React.Fragment>
=======
import NewSidebar from "./components/NewSidebar";
import Body from "./components/Body.js";

export function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/body">Terms Page</Link>
      </div>
      <Header />
      {/* <SidebarNav /> */}
      <Switch>
        <Route exact path="/">
			   <Carousel />
        </Route>
        <Route path="/body">
          <Body />
        </Route>
      </Switch>
	 {/*   <MainBody />*/}
	  <Footer />
    </BrowserRouter>
>>>>>>> Stashed changes
  );
}

export default App;
