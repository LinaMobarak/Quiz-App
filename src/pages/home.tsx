import React, { useEffect } from "react";
import { useState } from "react";
import "../index.css";
import { useQuizStore } from "../stores/Quiz-store";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const {
		allQuestions,
		currentQuestion,
		setCurrentQuestion,
		checkAnswer,
		score,
		userAnswers,
	} = useQuizStore();
	const [scorey, setScorey] = React.useState(0);
	const [isShown, setIsShown] = useState(false);
	const [timeLeft, setTimeLeft] = useState(60);
	const [isTimeUp, setIsTimeUp] = useState(false);

	useEffect(() => {
		if (timeLeft === 0) {
			setIsTimeUp(true);
			return;
		}

		const timer = setInterval(() => {
			setTimeLeft((prevTime) => prevTime - 1);
		}, 1000);

		return () => clearInterval(timer);
	}, [timeLeft]);

	const next = () => {
		if (currentQuestion < allQuestions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
			setIsShown(false);
		} else {
			alert("Quiz Completed");
		}
	};

	const navigate = useNavigate();
	const goToRes = () => {
		navigate("/result");
	};

	return (
		<div>
			<div>
				<div>
					<h2>Time Left: {timeLeft}s</h2>
					{isTimeUp && <p>Time's up! Your quiz is over.</p>}
				</div>
				<h1 className="text-center text-4xl font-bold">Quiz App</h1>
				<div className="flex flex-col items-center justify-center">
					<h2 className="text-2xl font-semibold">
						{allQuestions[currentQuestion].question}
					</h2>
					<div className="flex flex-col items-center">
						{allQuestions[currentQuestion].options.map((ans) => (
							<button
								type="button"
								key={ans}
								className="bg-blue-500 text-white p-2 m-2 rounded-md"
								onClick={() => {
									checkAnswer(ans);
									setIsShown(true);
								}}
							>
								{ans}
							</button>
						))}
					</div>

					<button type="button" onClick={next} disabled={!isShown}>
						Next
					</button>
					<button type="button" onClick={() => setScorey(score)}>
						Finish
					</button>
					<p>{scorey}</p>

					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<div style={{ cursor: "pointer" }} onClick={goToRes}>
						Show Full Test
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
