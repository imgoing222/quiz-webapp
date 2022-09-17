import { useLocation, useNavigate } from "react-router-dom";
import { Quiz } from "../types/quiz";

interface RouteState {
	state: {
		quizNumber: number;
		quizzes: Quiz[];
	};
}
const useQuiz = () => {
	const location = useLocation() as RouteState;
	const navigate = useNavigate();

	const quizNumber = location.state.quizNumber;
	const quizzes = location.state.quizzes;

	const shuffle = (arr: string[]) => {
		arr.sort(() => Math.random() - 0.5);
	};

	const { question, correct_answer, incorrect_answers } =
		quizzes[quizNumber - 1];
	let answers = [correct_answer, ...incorrect_answers];

	// 보기 순서 섞기
	shuffle(answers);

	const moveToNextPage = () => {
		if (quizNumber === quizzes.length) navigate("/result");
		else navigate("/quiz", { state: { quizNumber: quizNumber + 1, quizzes } });
	};
	const onClickAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
		// 정, 오답 local storage에 기록
		if (e.currentTarget.innerText === correct_answer) {
		}
		// 모달 오픈
	};

	return { quizNumber, question, answers, onClickAnswer };
};

export default useQuiz;
