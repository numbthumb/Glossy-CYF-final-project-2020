import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./LanguageCarousel.scss";
import htmlImage from "./picture/1.png";
import cssImage from "./picture/2.png";
import jsImage from "./picture/3.png";
import reactImage from "./picture/react.png";
import nodeImage from "./picture/node.png";
import sqlImage from "./picture/sql.png";
import { Link } from "react-router-dom";

function LanguageCarousel () {
	const items = [
		{ src: htmlImage, alt: "html", route: "/html" },
		{ src: cssImage, alt: "css" ,route: "/CSS" },
		{ src: jsImage, alt: "javascript",route: "/Javascript" },
		{ src: reactImage, alt: "react" ,route: "/React" },
		{ src: nodeImage, alt: "node",route: "/Node" },
		{ src: sqlImage, alt: "sql",route: "/SQL" },
	];
	const l = items.length;
	return (
		<Carousel indicators= {false} >
			{items.map((item, index) => [items[(index+l -1)%l], item,items[(index+1)%l]])
				.map((group, index) => <Carousel.Item interval={2000} key={index} >
					<Link to={group[0].route}><img
						className="gallery-cell"
						src={group[0].src}
						alt={group[0].alt}
					/></Link>
					<Link to={group[1].route}><img
						className="gallery-cell"
						src={group[1].src}
						alt={group[1].alt}
					/></Link>
					<Link to={group[2].route}><img
						className="gallery-cell"
						src={group[2].src}
						alt={group[2].alt}
					/></Link>

				</Carousel.Item> ) }


		</Carousel>
	);
}
export default LanguageCarousel;
