import React from 'react';
import './MyMap.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import IPlace from './Place';
var googleAPIKey = "";

interface IMyMap {
	places: IPlace[];
}

function MyMap(props: IMyMap) {
	const mapStyles = {
		height: "100%",
		width: "100%"
	};
	var LatSum=0;
	var LngSum=0;
	var n_places=0;
	props.places.map(place => {
		n_places += 1;
		LatSum += place.latitude;
		LngSum += place.longitude;
	})
	const defaultCenter = {
		// Paris coordinates:
		lat: LatSum/n_places,
		lng: LngSum/n_places
  }
	return (
		<div className="MyMap">
			<LoadScript
				googleMapsApiKey={googleAPIKey}>
				<GoogleMap
					mapContainerStyle={mapStyles}
					zoom={13}
					center={defaultCenter}
				>
				{
					props.places.map(place => {
						return (
						<Marker key={place.name} position={{lat: place.latitude, lng: place.longitude}}/>
						)
					})
				}
				</GoogleMap>
			</LoadScript>
		</div>
	)
};

export default MyMap;
