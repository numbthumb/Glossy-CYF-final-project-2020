import React from 'react';
import {Link} from "react-router-dom";
import ReactPlayer from "react-player";

const Video = ({links}) => {
  
   console.log(links.map(link => link.includes("https://www.youtube.com")))
    console.log(links);
    return (
        <div className="youtubeRes">
            {links.map((link, index) => {

                if (link.includes("https://www.youtube.com")) {
                    return(                 

                    <ReactPlayer url={link}
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                    className="video"
                   />
                     )
                } else {
                    return(

                  <li className="resourceLists"><a href={link} target="_blank">W3Schools Resource {index - 1}</a></li>
                    )
                }
                  
            })} 
             
        </div>
    )
}

export default Video;