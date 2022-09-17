import { useEffect, useState } from "react";
import { Quiz } from "../types/quiz";

const URL =
	"https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple";

const useHome = () => {
	const [quizzes, setQuizzes] = useState<Quiz[]>();

	useEffect(() => {
		getQuizzes();
	}, []);

	const getQuizzes = async () => {
		try {
			const res = await (await fetch(URL)).json();
			setQuizzes(res.results);
		} catch (e) {
			// 에러 시 처리
		}
	};

	return quizzes;
};

export default useHome;
