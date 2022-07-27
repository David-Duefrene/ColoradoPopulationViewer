import React, { useState, useEffect } from 'react';

// @ts-ignore
import LineChart from './LineChart/LineChart';
import * as d3 from 'd3';

import { ChartBoxProps } from './Interfaces';
// import './ChartBox.css';

/**
 *  ChartBox is a React wrapper for LineChart.
 */
const ChartBox = ({ data }: ChartBoxProps) => {
    const svgRef = React.useRef(null);

    /**
     * The width of the chart
     * @constant
     * @type {state}
     */
    const [width, setWidth] = useState(window.innerWidth * 0.8);

    /**
     * The height of the chart
     * @constant
     * @type {state}
     */
    const [height, setHeight] = useState(window.innerHeight * 0.75);

    // Resize the chart on window resize
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth * 0.75);
            setHeight(window.innerHeight * 0.75);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const dimensions = { width, height };
    useEffect(() => {
		const min = d3.min(data.items, d => d.value);
        LineChart({ data, dimensions, svgRef, min });
    }, [data, dimensions, svgRef]);

    return (
		<div>
			<h1>Colorado Population & Projected Growth</h1>
			<svg className='Chart' ref={svgRef} width={width + 120} height={height * 1.1} />
		</div>
	);
};

export default ChartBox;
