import { useState } from 'react'

import data from './data.json';
import ChartBox from './ChartBox/ChartBox';

import './App.css'

function App() {
	const [county, setCounty] = useState('Denver');
	const countyList = Object.keys(data).map(entry => {
		return (
			<li>
				<button
					className={`SelectionButton ${county == entry ? 'Active' : ''}`}
					onClick={() => setCounty(entry)}
				>
					{entry}
				</button>
			</li>
		);
	});
	const dataSet = [];

	// https://stackoverflow.com/questions/57409041/element-implicitly-has-an-any-type-because-expression-of-type-string-number
	// @ts-ignore
	for (const dataPoint of data[county]) {
		dataSet.push({
			date: dataPoint.year,
			value: dataPoint.totalPopulation
		});
	};

	dataSet.sort((a, b) => a.date - b.date);

	return (
		<div className="App">
			<div className="SidePanel">
				<ul className='SelectionList'>{countyList}</ul>
			</div>
			<ChartBox data={{
				/* @ts-ignore */
				items: dataSet
			}} />
		</div>
	)
}

export default App
