import Answer from "../components/Answer";
import useQuiz from "./useQuiz";

function Quiz() {
	const { quizNumber, question, answers, onClickAnswer } = useQuiz();

	return (
		<>
			<h1>Quiz {quizNumber}</h1>
			<h2>{question}</h2>
			{answers.map((answer, idx) => (
				<Answer text={answer} key={idx} onClickAnswer={onClickAnswer} />
			))}
		</>
	);
}

export default Quiz;
