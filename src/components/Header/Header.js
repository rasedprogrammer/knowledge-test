import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<div className="header">
			<div className="header-name">
				<p>Knowledge Test</p>
			</div>
			<div className="header-link">
				<Link to="/">Home</Link>
				<Link to="/marks">Marks</Link>
				<Link to="/about">About</Link>
			</div>
		</div>
	);
};

export default Header;
