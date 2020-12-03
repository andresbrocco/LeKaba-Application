import React from 'react';
import './Card.css';
import Carousel from './Carousel';
import IPlace from './Place';

interface ICard {
	key: number;
	place: IPlace;
}

function Card(props: ICard) {
	return (
		<div className="Card">
			<h4>{props.place.name}</h4>
			<Carousel images={props.place.images} name={props.place.name}/>
			<p>{props.place.address}</p>
		</div>
	)
};

export default Card;
