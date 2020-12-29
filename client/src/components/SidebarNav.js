import React,{useState, useEffect}from "react";
import Sidebar from "react-sidebar";
import {SidebarData} from "./SidebarData";
import { getLanguage } from "../service";

const SidebarNav = () => {
const [language, setLanguage] = useState([]);

useEffect(()=> {
  async function getLang() {
    const data = await getLanguage()
    console.log(data);
    setLanguage(data)
  }
  getLang()
}, [])

    return (
      <div className="sidebar">
        <ul className="SidebarList">
          {language.map((value, key) =>{

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