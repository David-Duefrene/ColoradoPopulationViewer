export interface ChartData {
	date: number;
	value: number;
}

export interface ChartBoxData {
	data: ChartData[];
	name: string;
}

export interface ChartBoxProps {
	data: ChartBoxData[]
}
