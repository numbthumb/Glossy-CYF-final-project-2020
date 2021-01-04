import React, { useState } from "react";
import Resources from "./Resources";
// import {BodyData} from "./BodyData";

const Body = ({language}) => {
   
  
    return (
        
        <div className="body">
         <Resources language={language} />
        </div>
    )
}


export default Body;