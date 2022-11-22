import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Statistics.css";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	CartesianGrid,
	Legend,
} from "recharts";

const Statistics = () => {
	const quizData = useLoaderData();
	const quizs = quizData.data;
	return (
		<div className="statistics-chart-bar">
			<h1 className="statistics-title">Quiz Statistics Chart Bar</h1>
			<BarChart width={500} height={300} data={quizs}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="total" fill="#8884d8" />
				<Bar dataKey="id" fill="#82ca9d" />
			</BarChart>
		</div>
	);
};

export default Statistics;
