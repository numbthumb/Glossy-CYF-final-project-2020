import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import "./App.scss";
import Carousel from "./Carousel/LanguageCarousel";
// import Carousel from "react-bootstrap/Carousel";
import { getMessage } from "./service";
import Resources from "./components/Resources";
import SidebarNav from "./components/SidebarNav";
import Body from "./components/Body.js";
import { getLanguage } from "./service";
import SidebarData from "./components/SidebarData.js";
export function App() {
const [language, setLanguage] = useState([]);
const [term, setTerm] = useState({});

useEffect(()=> {
  async function getLang() {
    const data = await getLanguage()
    console.log(data);
    setLanguage(data) 
    setTerm(data[0]);
  }
  getLang()
 
}, [])

  return (
    <BrowserRouter>
      <div className="termPage">
        <Link to="/body">Terms Page</ Link>       
      </div>
      <Header />
      <Switch>
        <Route exact path="/">
			   <Carousel />
        </Route>
        <Route path="/body">
          <div className="sideBody">
            <SidebarNav language={language} setTerm={setTerm} />
            
            <Body language={term}/>
          </div>
      
        </Route>
      </Switch>
	 {/* {  <MainBody />} */}
	  <Footer />
    </BrowserRouter>  
   
  );
}
export default App;
