import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quizs/Quiz";

const Home = () => {
	const quizsData = useLoaderData();
	const quizs = quizsData.data;
	console.log(quizs);
	return (
		<div>
			{quizs.map((quiz) => (
				<Quiz key={quiz.id} quiz={quiz}></Quiz>
			))}
		</div>
	);
};

export default Home;
