import React from "react";
import "./Blog.css";

const Blog = () => {
	return (
		<div className="blog-container">
			<div className="blog">
				<h2>Question-1: What is the purpose the react router?</h2>
				<p>
					React Router is a JavaScript framework that lets us handle client and
					server-side routing in React applications. It enables the creation of
					single-page web or mobile apps that allow navigating without
					refreshing the page.
				</p>
			</div>
			<div className="blog">
				<h2>Question-2: How does context api work?</h2>
				<p>
					The React Context API is a way for a React app to effectively produce
					global variables that can be passed around. This is the alternative to
					"prop drilling" or moving props from grandparent to child to parent,
					and so on. Context is also touted as an easier, lighter approach to
					state management using Redux.
				</p>
			</div>
			<div className="blog">
				<h2>Question-3: What is the uses react useRef hook?</h2>
				<p>
					The useRef Hook allows you to persist values between renders. It can
					be used to store a mutable value that does not cause a re-render when
					updated. It can be used to access a DOM element directly.
				</p>
			</div>
		</div>
	);
};

export default Blog;
