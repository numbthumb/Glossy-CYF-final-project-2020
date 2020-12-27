import React from "react";
import Sidebar from "react-sidebar";
import "./App.scss";
import {SidebarData} from "./SidebarData";

const SidebarNav = () => {

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
                  {/* <div>{ value.link}</div> */}
              </li>
              )  
            })}
          </ul>
       </div>
    )
};

export default SidebarNav