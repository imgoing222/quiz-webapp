interface Props {
	text: string;
	onClickAnswer: React.MouseEventHandler<HTMLButtonElement>;
}

function Answer({ text, onClickAnswer }: Props) {
	return <button onClick={onClickAnswer}>{text}</button>;
}

export default Answer;
