import React from 'react';
import './Card.css';
import Carroussel from './Carroussel';

function Card() {
	return (
		<div className="Card">
			<h4>Title</h4>
			<Carroussel />
			<p>Address</p>
		</div>
	)
};

export default Card;
