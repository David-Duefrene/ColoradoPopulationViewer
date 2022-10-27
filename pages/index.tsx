import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { useState } from 'react'

import data from './data.json';
import ChartBox from '../Components/ChartBox/ChartBox';
import styles from '../styles/Home.module.css'

interface ChartData {
	date: number;
	value: number;
}

const Home: NextPage = () => {
	const [county, setCounty] = useState(['Denver', 'El Paso']);
	const countyList = Object.keys(data).map(entry => {
		return (
			<li key={entry}>
				<button
					className={`${styles.SelectionButton} ${county.includes(entry) ? `${styles.Active}` : ''}`}
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
    <div className={styles.container}>
      <Head>
        <title>Colorado Population Viewer</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.App}>
	  	<div className={styles.SidePanel}>
			<ul className={styles.SelectionList}>{countyList}</ul>
		</div>
		<ChartBox data={dataSets} />
      </main>
    </div>
  )
}

export default Home
