import React from "react";
import "./OptionBox.css";

const OptionBox = ({ option }) => {
	return (
		<div className="optionBox">
			<button className="option-btn">{option}</button>
		</div>
	);
};

export default OptionBox;
