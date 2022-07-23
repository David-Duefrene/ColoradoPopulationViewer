export interface ChartData {
	date: number;
	value: number;
}

export interface ChartBoxProps {
	data: ChartData[];
	name: string;
}
