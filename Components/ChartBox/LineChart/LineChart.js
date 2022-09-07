import * as d3 from 'd3';

const LineChart = ({ data, dimensions, svgRef, min, max }) => {
    // const { width = null, height = null } = dimensions;
	const width = 1500;
	const height = 750;
    const parseDate = d3.timeParse('%Y');
    const xScale = d3.scaleTime()
        .domain(d3.extent(data[0].data, (d) => parseDate(d.date)))
        .range([0, width]);

    const yScale = d3.scaleLinear()
        .domain([
            min < 0 ? min * 1.25 : min * 0.75,
            max < 0 ? max * 0.75 : max * 1.1,
        ])
        .range([height - 50, 0]);

    // Create root container where we will append all other chart elements
    const svgEl = d3.select(svgRef.current);
    svgEl.selectAll('*').remove(); // Clear svg content before adding new elements
    const svg = svgEl
        .append('g')
        .attr('transform', `translate(100,20)`);

    // Add X grid lines with labels
    const xAxis = d3.axisBottom(xScale)
        .tickSize(-height)
        .tickFormat(d3.timeFormat('%Y'));
    const xAxisGroup = svg.append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(xAxis);
    xAxisGroup.select('.domain').remove();
    xAxisGroup.selectAll('line').attr('stroke', 'var(--alt-color)');
    xAxisGroup.selectAll('text')
        .attr('transform', 'rotate(-45)')
        .attr('color', 'var(--text-color)')
        .attr('font-size', '0.75rem');

    // Add Y grid lines with labels
    const yAxis = d3.axisLeft(yScale)
        .tickSize(-width)
        .tickFormat((val) => val);
    const yAxisGroup = svg.append('g').call(yAxis);
    yAxisGroup.select('.domain').remove();
    yAxisGroup.selectAll('line').attr('stroke', 'var(--alt-color)');
    yAxisGroup.selectAll('text')
        .attr('color', 'var(--text-color)')
        .attr('font-size', '0.75rem');

    // Draw the line
	const DrawLine = (lineData, key) => {
		const line = d3.line()
			.x((d) => xScale(parseDate(d.date)))
			.y((d) => yScale(d.value));

		svg.append('path')
			.attr('d', line(lineData))
			.attr('stroke', `var(--line-color-${key%10})`)
			.attr('stroke-width', 2)
			.attr('fill', 'none')
			.attr('class', 'line');
	}

	for (const dataLine in data) {
		DrawLine(data[dataLine].data, dataLine);
	}
};

export default LineChart;
