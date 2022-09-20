import { Container } from "../../components/Container";
import { Title } from "../../components/Title";
import { Button } from "../home/Home";
import useResult from "./useResult";

function Result() {
	const { corrects, wrongs, seconds, minutes, moveToHome } = useResult();

	return (
		<Container>
			<Title>결과</Title>
			<h3>
				소요시간 : {minutes}분 {seconds}초
			</h3>
			<h3>정답 : {corrects ? corrects : 0}</h3>
			<h3>오답 : {wrongs ? wrongs : 0}</h3>
			<Button data-testid="homeButton" onClick={moveToHome}>
				Home
			</Button>
		</Container>
	);
}

export default Result;
