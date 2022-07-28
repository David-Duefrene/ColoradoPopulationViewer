import { useState } from 'react'

import data from './data.json';
import ChartBox from './ChartBox/ChartBox';

import './App.css'

interface ChartData {
	date: number;
	value: number;
}

function App() {
	const [county, setCounty] = useState(['Denver']);
	const countyList = Object.keys(data).map(entry => {
		return (
			<li key={entry}>
				<button
					className={`SelectionButton ${county.includes(entry) ? 'Active' : ''}`}
					onClick={() => {
						if (county.includes(entry)) { return; }
						setCounty([...county, entry]);
					}}
				>
					{entry}
				</button>
			</li>
		);
	});
	const dataSets: any = {};

	county.forEach(entry => {
		dataSets[entry] = [];
		// https://stackoverflow.com/questions/57409041/element-implicitly-has-an-any-type-because-expression-of-type-string-number
		// @ts-ignore
		for (const dataPoint of data[entry]) {
			dataSets[entry].push({
				date: dataPoint.year,
				value: dataPoint.totalPopulation
			});
		};

		dataSets[entry].sort((a: ChartData, b: ChartData) => a.date - b.date);
	});

	return (
		<div className="App">
			<div className="SidePanel">
				<ul className='SelectionList'>{countyList}</ul>
			</div>
			<ChartBox data={dataSets[Object.keys(dataSets)[0]]} />
		</div>
	)
}

export default App
