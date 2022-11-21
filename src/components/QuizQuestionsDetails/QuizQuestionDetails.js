import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import OptionBox from "../OptionBox/OptionBox";
import "./QuizQuestionDetails.css";

const QuizQuestionDetails = ({ quizQuestion }) => {
	const { idx, question, options } = quizQuestion;
	console.log(quizQuestion);
	return (
		<div className="quizQuestionDetailsContainer">
			<div className="title-bar">
				<h2>{question}</h2>
				<button className="btn-eye">
					<FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
				</button>
			</div>
			<div className="option-box">
				{options.map((option) => (
					<OptionBox key={idx} option={option}></OptionBox>
				))}
			</div>
		</div>
	);
};

export default QuizQuestionDetails;
