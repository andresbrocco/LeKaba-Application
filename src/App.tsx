import React from 'react';
import './App.css';
import csvData from './exercice_lekaba.csv'; // I am using this library to import csv as a json file: https://github.com/theplatapi/csv-loader
import Grid from './Grid';
import MyMap from './MyMap';

function App() {
	console.log("Loaded csvfile:", csvData);
	return (
		<div className="App" >
			<header>
				<h2>On ne se preoccupe pas du header</h2>
			</header>
			<section className="Body">
				<Grid places={csvData}/>
				<MyMap places={csvData}/>
			</section>
		</div>
	);
};

export default App;
