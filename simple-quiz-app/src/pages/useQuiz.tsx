import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Quiz } from "../types/quiz";

interface RouteState {
	state: {
		quizNumber: number;
		quizzes: Quiz[];
	};
}

const useQuiz = (
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
	const location = useLocation() as RouteState;
	const navigate = useNavigate();

	const quizNumber = location.state.quizNumber;
	const quizzes = location.state.quizzes;

	const [isCorrect, setIsCorrect] = useState(false);

	const { question, correct_answer, incorrect_answers } =
		quizzes[quizNumber - 1];

	const [answers, setAnswers] = useState<string[]>([]);
	const [modalButtonText, setModalButtonText] = useState("다음 문항");

	useEffect(() => {
		setAnswers(
			[correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5)
		);
		if (quizNumber === quizzes.length) setModalButtonText("결과 보기");
	}, [quizNumber]);

	const moveToNextPage = () => {
		if (quizNumber === quizzes.length) {
			const end = Date.now();
			localStorage.setItem("end", String(end));
			navigate("/result");
		} else
			navigate("/quiz", { state: { quizNumber: quizNumber + 1, quizzes } });
	};

	const onClickAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (e.currentTarget.innerText === correct_answer) {
			setIsCorrect(true);
			const corrects = Number(localStorage.getItem("corrects"));
			localStorage.setItem("corrects", String(corrects + 1));
		} else {
			setIsCorrect(false);
			const wrongs = Number(localStorage.getItem("wrongs"));
			localStorage.setItem("wrongs", String(wrongs + 1));
		}
		setIsModalOpen(true);
	};

	return {
		quizNumber,
		question,
		answers,
		onClickAnswer,
		moveToNextPage,
		isCorrect,
		modalButtonText,
	};
};

export default useQuiz;
