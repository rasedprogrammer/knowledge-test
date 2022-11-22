import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Toaster } from "react-hot-toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OptionBox from "../OptionBox/OptionBox";
import "./QuizQuestionDetails.css";

const QuizQuestionDetails = ({ quizQuestion }) => {
	const { question, options, correctAnswer } = quizQuestion;
	const quizCorrectAnswer = () => toast(correctAnswer);
	const showCorrectAnswer = (quizQuestion, correctAnswer) => {
		if (quizQuestion === correctAnswer) {
			toast("Correct Answer");
		} else {
			toast("Wrong Answer");
		}
	};
	console.log(quizQuestion);
	return (
		<div className="quizQuestionDetailsContainer">
			<Toaster />
			<div className="title-bar">
				<h2>{question}</h2>
				<button className="btn-eye" onClick={quizCorrectAnswer}>
					<FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
				</button>
				<ToastContainer />
			</div>
			<div className="option-box">
				{options.map((option, idx) => (
					<OptionBox
						key={idx}
						option={option}
						correctAnswer={correctAnswer}
						showCorrectAnswer={showCorrectAnswer}
					></OptionBox>
				))}
			</div>
		</div>
	);
};

export default QuizQuestionDetails;
