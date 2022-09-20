import { useEffect, useState } from "react";
import { Quiz } from "../../types/quiz";
import { useNavigate } from "react-router-dom";

const URL =
	"https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple";

const useHome = () => {
	const navigate = useNavigate();

	const [quizzes, setQuizzes] = useState<Quiz[]>();

	useEffect(() => {
		getQuizzes();
		localStorage.clear();
	}, []);

	const getQuizzes = async () => {
		try {
			const res = await (await fetch(URL)).json();
			setQuizzes(res.results);
		} catch (e) {
			console.log(e);
		}
	};

	const startQuiz = () => {
		const start = Date.now();
		navigate("/quiz", { state: { quizNumber: 1, quizzes } });
		localStorage.setItem("start", String(start));
	};

	return { quizzes, startQuiz };
};

export default useHome;
