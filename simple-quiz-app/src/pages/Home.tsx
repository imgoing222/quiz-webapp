import useHome from "./useHome";

function Home() {
	const { quizzes, startQuiz } = useHome();

	return (
		<>
			<h1>Home</h1>
			{quizzes && <button onClick={startQuiz}>퀴즈 시작</button>}
		</>
	);
}

export default Home;
