import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import "./App.scss";
import Carousel from "./Home/Carousel/LanguageCarousel";
import SearchBar from "./Home/Searchbar/Searchbar.js";
// import { getMessage } from "./service";
// import logo from "./logo.svg";
// import SidebarNav from "./TermPage/SidebarNav/SidebarNav.js";
import AddTermUserBtn from "./TermPage/AddTermUserBtn.js";


export function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/">
              <Link to="/TermPage">
                <SearchBar />
                <Carousel />
              </Link>
            </Route>
            <Route exact path="/TermPage">
              <AddTermUserBtn />
              {/* <SidebarNav /> */}
            </Route>
            <Route>
              <Link to="/LoginPage">
                <BackToHome />
                <LoginForm />
              </Link>
            </Route>
          </Switch>
        </Container>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
