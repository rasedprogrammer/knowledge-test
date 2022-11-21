import React from "react";
import { Link } from "react-router-dom";
import "./Quiz.css";

const Quiz = ({ quiz }) => {
	const { id, name, logo, total } = quiz;
	return (
		<div className="quiz-container">
			<div className="logo">
				<img src={logo} alt="" />
			</div>
			<div className="quiz-info">
				<h2>Quiz Name: {name}</h2>
				<p>Total Quiz: {total}</p>
				<Link to={`/quiz/${id}`}>
					<button className="quiz-btn">Started Quiz</button>
				</Link>
			</div>
		</div>
	);
};

export default Quiz;
