import styled from "styled-components";

interface Props {
	text: string;
	onClickAnswer: React.MouseEventHandler<HTMLButtonElement>;
}

function Answer({ text, onClickAnswer }: Props) {
	return (
		<AnswerButton data-testid="answer" onClick={onClickAnswer}>
			{text}
		</AnswerButton>
	);
}

const AnswerButton = styled.button`
	background-color: #eeeeee;
	width: 50%;
	margin-top: 1.5rem;
	font-size: 1rem;
	padding: 1rem;
	border: none;
	&:hover {
		background-color: #cdcdcd;
	}
	cursor: pointer;
`;
export default Answer;
