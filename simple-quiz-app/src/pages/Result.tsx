import useResult from "./useResult";

function Result() {
	const { corrects, wrongs, seconds, minutes } = useResult();

	return (
		<>
			<h1>결과</h1>
			<h3>
				소요시간: {minutes}분 {seconds}초
			</h3>
			<h3>정답 : {corrects}문제</h3>
			<h3>오답 : {wrongs}문제</h3>
		</>
	);
}

export default Result;
