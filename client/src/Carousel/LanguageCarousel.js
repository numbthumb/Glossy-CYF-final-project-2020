import React from "react";
import Carousel from "react-bootstrap/Carousel";
import {Link } from "react-router-dom";
import "./LanguageCarousel.scss";
import htmlImage from "./picture/1.png";
import cssImage from "./picture/2.png";
import jsImage from "./picture/3.png";
import reactImage from "./picture/react.png";
import nodeImage from "./picture/node.png";
import sqlImage from "./picture/sql.png";

function LanguageCarousel () {

	return (
		<Carousel indicators= {false} >
			<Carousel.Item interval={1000} >
				<Link to="/html">
					<img
						className="gallery-cell"
						src={htmlImage}
						alt="First slide"
					/>
				</Link>
			</Carousel.Item>
			<Carousel.Item interval={500}>
				<Link to="/CSS"><img
					className="gallery-cell"
					src={cssImage}
					alt="Third slide"
				/>
				</Link>

			</Carousel.Item>
			<Carousel.Item>
				<Link to="/Javascript"><img
					className="gallery-cell"
					src={jsImage}
					alt="Third slide"
				/>
				</Link>

			</Carousel.Item>
			<Carousel.Item>
				<Link to="/React"><img
					className="gallery-cell"
					src={reactImage}
					alt="Third slide"
				/>
				</Link>

			</Carousel.Item>
			<Carousel.Item>
				<Link to="/Node"><img
					className="gallery-cell"
					src={nodeImage}
					alt="Third slide"
				/>
				</Link>

			</Carousel.Item>
			<Carousel.Item>
				<Link to="/SQL"><img
					className="gallery-cell"
					src={sqlImage}
					alt="Third slide"
				/>
				</Link>

			</Carousel.Item>
		</Carousel>
	);
}
export default LanguageCarousel;
