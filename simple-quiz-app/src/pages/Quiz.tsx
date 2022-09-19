import { useEffect } from "react";
import Answer from "../components/Answer";
import Modal from "../components/Modal";
import useModal from "../hooks/useModal";
import ModalPortal from "../Portal";
import useQuiz from "./useQuiz";

function Quiz() {
	const { isModalOpen, setIsModalOpen } = useModal();
	const {
		quizNumber,
		question,
		answers,
		onClickAnswer,
		isCorrect,
		moveToNextPage,
	} = useQuiz(setIsModalOpen);

	return (
		<>
			<h1>Quiz {quizNumber}</h1>
			<h2>{question}</h2>
			{answers.map((answer, idx) => (
				<Answer text={answer} key={idx} onClickAnswer={onClickAnswer} />
			))}
			<ModalPortal>
				{isModalOpen && (
					<Modal
						setIsModalOpen={setIsModalOpen}
						isCorrect={isCorrect}
						moveToNextPage={moveToNextPage}
					/>
				)}
			</ModalPortal>
		</>
	);
}

export default Quiz;
