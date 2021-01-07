import React from "react";
import Video from "./Video";

const Resources = ({language}) => {
    console.log(language)
    return (    
        <>
            <div className="description">
                <h3>Definition</h3> 
                <h4>{language.term}</h4>
                <p>{language.definitions}</p>
            </div>      
            <div className="resource">
                <h3>Resources</h3>
            </div>
            <div className="resourceLink">
              <Video links={language.links}/>
               
          
         </div> 
        </>
         
    )
}
export default Resources;