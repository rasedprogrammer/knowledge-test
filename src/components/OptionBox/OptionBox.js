import React from "react";
import "./OptionBox.css";

const OptionBox = ({ option, showCorrectAnswer, correctAnswer }) => {
	// console.log(correctAnswer);
	return (
		<div className="optionBox">
			<button
				className="option-btn"
				onClick={() => showCorrectAnswer(option, correctAnswer)}
			>
				{option}
			</button>
		</div>
	);
};

export default OptionBox;
