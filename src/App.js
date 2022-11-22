import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import QuizDetails from "./components/QuizDetails/QuizDetails";
import Statistics from "./components/Statistics/Statistics";
import Main from "./layouts/Main";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Main></Main>,
			children: [
				{
					path: "/",
					loader: () => {
						return fetch("https://openapi.programming-hero.com/api/quiz");
					},
					element: <Home></Home>,
				},
				{
					path: "/quiz/:id",
					loader: ({ params }) => {
						return fetch(
							`https://openapi.programming-hero.com/api/quiz/${params.id}`
						);
					},
					element: <QuizDetails></QuizDetails>,
				},
				{
					path: "/statistics",
					loader: () => {
						return fetch("https://openapi.programming-hero.com/api/quiz");
					},
					element: <Statistics></Statistics>,
				},
				{
					path: "/about",
					element: <About></About>,
				},
			],
		},
		{
			path: "*",
			element: <NotFoundPage></NotFoundPage>,
		},
	]);
	return (
		<div className="App">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
