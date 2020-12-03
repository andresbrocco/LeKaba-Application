import React from 'react';
import './Grid.css';
import Card from './Card';
import IPlace from './Place';

interface IGridProps {
	places: IPlace[];
}

function Grid (props: IGridProps):JSX.Element {
	console.log("Loaded csvfile (inside Grid):", props.places);
	return (
		<div className="Grid">
			{props.places.map(place => <Card key={place.id} place={place}/>)}
		</div>
	)
};

export default Grid;
