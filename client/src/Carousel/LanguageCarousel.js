import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./LanguageCarousel.scss";

function LanguageCarousel () {

	return (
		<Carousel indicators= {false} >
			<Carousel.Item interval={1000} >
				<img
					className="gallery-cell"
					src="client/src/Carousel/picture/1.png"
					alt="First slide"
				/>

			</Carousel.Item>
			<Carousel.Item interval={500}>
				<img
					className="gallery-cell"
					src="/client/src/Carousel/picture/2.png"
					alt="Third slide"
				/>

			</Carousel.Item>
			<Carousel.Item>
				<img
					className="gallery-cell"
					src="/client/src/Carousel/picture/3.png"
					alt="Third slide"
				/>

			</Carousel.Item>
			<Carousel.Item>
				<img
					className="gallery-cell"
					src="/client/src/Carousel/picture/react.png"
					alt="Third slide"
				/>

			</Carousel.Item>
			<Carousel.Item>
				<img
					className="gallery-cell"
					src="/client/src/Carousel/picture/node.png"
					alt="Third slide"
				/>

			</Carousel.Item>
			<Carousel.Item>
				<img
					className="gallery-cell"
					src="/client/src/Carousel/picture/sql.png"
					alt="Third slide"
				/>

			</Carousel.Item>
		</Carousel>
	);
}
export default LanguageCarousel;
