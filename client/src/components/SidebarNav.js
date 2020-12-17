import React from "react";
import Sidebar from "react-sidebar";
import "../App.css";
import {SidebarData} from "./SidebarData";

const SidebarNav = () => {

    return (
        <div className="sidebar"><ul className="SidebarList">
            {SidebarData.map((value, key) =>{
                return (
                <li key={key} className="row"
                onClick={()=>{
                    window.location.pathname=value.link;
                    }}
                    >
                        <div>{value.HTML}</div>
                    <div>{value.title}</div>
                    <div>{value.description}</div>
                    <div>
                       { value.link}

                    </div>
                    {value.link}
                    <div>

                    </div>
                              
                </li>

              )  

            })}
            </ul>
        </div>
    )
};

export default SidebarNav