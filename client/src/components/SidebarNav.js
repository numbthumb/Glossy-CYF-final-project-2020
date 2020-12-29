import React,{useState, useEffect}from "react";
import Sidebar from "react-sidebar";
import {SidebarData} from "./SidebarData";
import { getLanguage } from "../service";

const SidebarNav = () => {
// const terms = fetch("/language");
const [language, setLanguage] = useState([]);

  useEffect(() => {
    fetch(
      `localhost:3100/api/language?language=Javascript`
    )
   .then((res)=> res.json())
   .then((data)=>{
      
   })

}, []);

console.log(terms);

    return (
      <div className="sidebar">
        <ul className="SidebarList">
          {SidebarData.map((value, key) =>{
            return (
              <li 
                key={key} 
                className="row" 
                onClick={()=>{
                  window.location.pathname=value.link;
                }}
                >
                  <div>{value.term}</div>
              </li>
              )  
            })}
          </ul>
       </div>
    )
};

export default SidebarNav