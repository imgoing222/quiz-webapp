import { Link } from "react-router-dom";
import useHome from "./useHome";

function Home() {
	const quizzes = useHome();

	return (
		<>
			<h1>Home</h1>
			{quizzes && (
				<Link to="/quiz" state={{ quizNumber: 1, quizzes }}>
					퀴즈 시작
				</Link>
			)}
		</>
	);
}

export default Home;
