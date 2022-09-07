import { useState } from 'react'

import data from './data.json'
import ChartBox from '../../ChartBox/ChartBox'

import './App.css'

interface ChartData {
	date: number;
	value: number;
}

function App() {
	const [county, setCounty] = useState(['Denver', 'El Paso']);
	const countyList = Object.keys(data).map(entry => {
		return (
			<li key={entry}>
				<button
					className={`SelectionButton ${county.includes(entry) ? 'Active' : ''}`}
					onClick={() => {
						if (county.includes(entry)) {
							if (county.length > 1) {
								setCounty(county.filter(c => c !== entry));
							}
							return;
						}
						setCounty([...county, entry]);
					}}
				>
					{entry}
				</button>
			</li>
		);
	});
	const dataSets: any = [];

	county.forEach(entry => {
		const newData = [];
		// https://stackoverflow.com/questions/57409041/element-implicitly-has-an-any-type-because-expression-of-type-string-number
		// @ts-ignore
		for (const dataPoint of data[entry]) {
			newData.push({
				date: dataPoint.year,
				value: dataPoint.totalPopulation
			});
		};
		newData.sort((a: ChartData, b: ChartData) => a.date - b.date);
		dataSets.push({data: newData, name: entry});
	});

	return (
		<div className="App">
			<div className="SidePanel">
				<ul className='SelectionList'>{countyList}</ul>
			</div>
			<ChartBox data={dataSets} />
		</div>
	)
}

export default App
