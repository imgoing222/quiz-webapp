import { Container } from "../../components/Container";
import { Title } from "../../components/Title";
import useResult from "./useResult";

function Result() {
	const { corrects, wrongs, seconds, minutes } = useResult();

	return (
		<Container>
			<Title>결과</Title>
			<h3>
				소요시간 : {minutes}분 {seconds}초
			</h3>
			<h3>정답 : {corrects ? corrects : 0}</h3>
			<h3>오답 : {wrongs ? wrongs : 0}</h3>
		</Container>
	);
}

export default Result;
