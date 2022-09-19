import styled from "styled-components";
import useQuiz from "../pages/useQuiz";

interface Props {
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isCorrect: boolean;
	moveToNextPage: () => void;
}
function Modal({ setIsModalOpen, isCorrect }: Props) {
	const { modalButtonText, moveToNextPage } = useQuiz(setIsModalOpen);
	const handleNextClick = () => {
		setIsModalOpen(false);
		moveToNextPage();
	};

	return (
		<Background>
			<Content>
				<div>
					{isCorrect ? (
						<div>
							<p>O</p>
							<p>정답입니다</p>
						</div>
					) : (
						<div>
							<p>X</p>
							<p>오답입니다</p>
						</div>
					)}
				</div>
				<button onClick={handleNextClick}>{modalButtonText}</button>
			</Content>
		</Background>
	);
}

export default Modal;

const Background = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	left: 0;
	top: 0;
	text-align: center;
`;

const Content = styled.div`
	height: 70%;
	width: 70%;
	margin-top: 70px;
	position: relative;
	background: #eeeeee;
`;
