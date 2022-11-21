import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizQuestionDetails from "../QuizQuestionsDetails/QuizQuestionDetails";
import "./QuizDetails.css";

const QuizDetails = () => {
	const quizDetailsData = useLoaderData();
	const quizData = quizDetailsData.data;
	const { logo, name, total, questions } = quizData;
	return (
		<div className="quiz-details-container">
			<h1>{name} Quiz Details</h1>
			<div className="quizDetails">
				<img src={logo} alt="" />
				<h2>{name}</h2>
				<p>Total Quiz: {total}</p>
			</div>
			{questions.map((quizQuestion) => (
				<QuizQuestionDetails
					key={quizQuestion.id}
					quizQuestion={quizQuestion}
				></QuizQuestionDetails>
			))}
		</div>
	);
};

export default QuizDetails;
