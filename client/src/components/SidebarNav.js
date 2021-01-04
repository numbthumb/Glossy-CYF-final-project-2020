import React,{useState, useEffect}from "react";
import {Link} from 'react-router-dom';
import Sidebar from "react-sidebar";


const SidebarNav = ({language, setTerm}) => {


    return (
      <div className="sidebar">
        <ul className="SidebarList">
          {language.map((value, key) =>{

            return (
              <li 
                key={key} 
                className="row" 
                onClick={()=>{
                  setTerm(language.filter(item => item.term === value.term)[0]);
                }}
                >
                  <Link>{value.term}</Link>
              </li>
              )  
            })}
          </ul>
       </div>
    )
};

export default SidebarNav