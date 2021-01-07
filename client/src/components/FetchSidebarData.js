import React from 'react';
import {useState} from "react";


 function FetchSidebarData() {
     const [description, setDescription]=useState("");
     const [link, setLink]=useState("");
    return (
        <div className= "termDetails">
           <div><label>Description</label>
           
           <p>html..............</p>
           </div>
          
         <div><label>Video Link</label>
             <input type="text"
             onChange={event=> { 
                this.setLink(event.target.value)}}
            /></div>                       
        </div>

    )
    }
              
        

export default FetchSidebarData;