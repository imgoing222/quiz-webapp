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
						<Result>
							<p>O</p>
							<p>정답입니다</p>
						</Result>
					) : (
						<Result>
							<p>X</p>
							<p>오답입니다</p>
						</Result>
					)}
				</div>
				<Button onClick={handleNextClick}>{modalButtonText}</Button>
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
	height: 30%;
	width: 70%;
	position: relative;
	border: 0.5px solid #ababab;
	background: rgba(0, 0, 0, 0.9);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
`;

const Result = styled.div`
	color: white;
`;

const Button = styled.button`
	font-size: 1rem;
	padding: 0.5rem 0.7rem;
	width: 60%;
	cursor: pointer;
`;
