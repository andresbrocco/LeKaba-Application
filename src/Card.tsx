import React from 'react';
import './Card.css';
import IPlace from './Place';
import Carousel from 'react-bootstrap/Carousel';

interface ICard {
	key: number;
	place: IPlace;
}

function Card(props: ICard) {
	var images:string[] = props.place.images.split("|");
	return (
		<div className="Card">
			<h4>{props.place.name}</h4>
			<Carousel indicators={false} interval={null}>
				{images.map(image => 
					<Carousel.Item key={image}>
						{console.log(image)}
						<img src={image} alt={props.place.name} className="CarouselImage"/>
					</Carousel.Item>
				)}
			</Carousel>
			<p>{props.place.address}</p>
		</div>
	)
};

export default Card;
