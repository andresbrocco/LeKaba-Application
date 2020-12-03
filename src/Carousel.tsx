import React from 'react';
import './Carousel.css';

interface ICarousel {
	images: string;
	name: string;
}

function Carousel(props: ICarousel) {
	var images = props.images.split("|");
	return (
		<div className="Carousel">
			<img src={images[0]} alt={props.name} width="100%" height="100%"/>
		</div>
	)
};

export default Carousel;
