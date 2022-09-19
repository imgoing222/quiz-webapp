import styled from "styled-components";

import { Container } from "../../components/Container";
import { Title } from "../../components/Title";
import useHome from "./useHome";

function Home() {
	const { quizzes, startQuiz } = useHome();

	return (
		<Container>
			<Title>Quiz App</Title>
			{quizzes && <Button onClick={startQuiz}>퀴즈 시작</Button>}
		</Container>
	);
}

export const Button = styled.div`
	background-color: none;
	font-size: 1.5rem;
	border: 0.5px solid #eeeeee;
	padding: 1rem;
	border-radius: 10%;
	margin-top: 10rem;
	&:hover {
		background-color: #eeeeee;
	}
	cursor: pointer;
`;

export default Home;
