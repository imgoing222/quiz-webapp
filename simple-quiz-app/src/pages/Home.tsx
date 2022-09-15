import { Link } from "react-router-dom";

function Home() {
	return (
		<>
			<h1>Home</h1>
			<Link to="/quiz" data-testid="quizStartButton">
				퀴즈 시작
			</Link>
		</>
	);
}

export default Home;
