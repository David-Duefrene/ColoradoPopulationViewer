export interface ChartData {
	date?: number;
	value?: number;
}

export interface ChartBoxProps {
	data: {
		items: ChartData[]
	};
}
