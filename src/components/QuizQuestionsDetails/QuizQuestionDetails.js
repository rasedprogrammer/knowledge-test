import React from "react";
import OptionBox from "../OptionBox/OptionBox";
import "./QuizQuestionDetails.css";

const QuizQuestionDetails = ({ quizQuestion }) => {
	const { idx, question, options } = quizQuestion;
	console.log(quizQuestion);
	return (
		<div className="quizQuestionDetailsContainer">
			<h2>{question}</h2>
			<div className="option-box">
				{options.map((option) => (
					<OptionBox key={idx} option={option}></OptionBox>
				))}
			</div>
		</div>
	);
};

export default QuizQuestionDetails;
