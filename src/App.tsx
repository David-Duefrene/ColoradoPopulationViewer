import { useState } from 'react'

import data from './data.json';
import ChartBox from './ChartBox/ChartBox';

import './App.css'

function App() {
	const [county, setCounty] = useState('Denver');

	const countyList = Object.keys(data).map(county => {
		return <li><button onClick={() => setCounty(county)}>{county}</button></li>
	});
	const dataSet = [];
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
			<ChartBox data={{name: county, items: dataSet}} />
		</div>
	)
}

export default App
