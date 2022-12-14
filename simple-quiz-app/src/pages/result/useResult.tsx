import { useNavigate } from "react-router-dom";

const useResult = () => {
	const navigate = useNavigate();

	const start = Number(localStorage.getItem("start"));
	const end = Number(localStorage.getItem("end"));

	let minutes, seconds;
	const timeTaken = Math.ceil((end - start) / 1000);
	seconds = timeTaken % 60;
	minutes = (timeTaken - seconds) / 60;

	const corrects = localStorage.getItem("corrects");
	const wrongs = localStorage.getItem("wrongs");

	const moveToHome = () => {
		navigate("/");
	};

	return { corrects, wrongs, seconds, minutes, moveToHome };
};

export default useResult;
