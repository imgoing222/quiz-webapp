import styled from "styled-components";
import Answer from "../components/Answer";
import { Container } from "../components/Container";
import Modal from "../components/Modal";
import { Title } from "../components/Title";
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
		<Container>
			<Title>Quiz {quizNumber}</Title>
			<Question>{question}</Question>
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
		</Container>
	);
}

const Question = styled.p`
	font-size: 1.2rem;
	word-break: break-all;
`;

export default Quiz;
