import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";

test("Home의 타이틀과 퀴즈 시작 버튼이 렌더링 되는가?", async () => {
	render(<Home />, { wrapper: BrowserRouter });
	expect(screen.getByText(/Quiz App/i)).toBeInTheDocument();
	await screen.findByTestId("startButton");
	const startButton = screen.getByTestId("startButton");
	expect(startButton).toBeInTheDocument();
});

export {};
