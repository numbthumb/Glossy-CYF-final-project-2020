import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./LanguageCarousel.scss";
import htmlImage from "./picture/1.png"
import cssImage from "./picture/2.png"
import jsImage from "./picture/3.png"
import reactImage from "./picture/react.png"
import nodeImage from "./picture/node.png"
import sqlImage from "./picture/sql.png"

function LanguageCarousel () {

	return (
		<Carousel indicators= {false} >
			<Carousel.Item interval={1000} >
				<img
					className="gallery-cell"
					src={htmlImage}
					alt="First slide"
				/>

			</Carousel.Item>
			<Carousel.Item interval={500}>
				<img
					className="gallery-cell"
					src={cssImage}
					alt="Third slide"
				/>

			</Carousel.Item>
			<Carousel.Item>
				<img
					className="gallery-cell"
					src={jsImage}
					alt="Third slide"
				/>

			</Carousel.Item>
			<Carousel.Item>
				<img
					className="gallery-cell"
					src={reactImage}
					alt="Third slide"
				/>

			</Carousel.Item>
			<Carousel.Item>
				<img
					className="gallery-cell"
					src={nodeImage}
					alt="Third slide"
				/>

			</Carousel.Item>
			<Carousel.Item>
				<img
					className="gallery-cell"
					src={sqlImage}
					alt="Third slide"
				/>

			</Carousel.Item>
		</Carousel>
	);
}
export default LanguageCarousel;
