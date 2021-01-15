import React from "react";
import ReactPlayer from "react-player";
import "./Video.scss";
const Video = ({ links }) => {

	console.log(links && links.map((link) => link.includes("https://www.youtube.com")));
	console.log(links);
	return (
		<div className="youtubeRes">
			{links ? links.map((link, index) => {

				if (link.includes("https://www.youtube.com")) {
					return(

						<ReactPlayer url={link}
							frameborder='0'
							allow='autoplay; encrypted-media'
							allowFullScreen
							title='video'
							height={'180px'}
							  width={'324px' }
							  
						/>
					);
				} else {
					return(

						
							<a className="externalLink" href={link} target="_blank">{link}</a>
					
					);
				}

			}) : null}

		</div>
	);
};

export default Video;