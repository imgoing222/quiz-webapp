import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import Home from "../Home";
import Quiz from "../Quiz";

test("Home에서 퀴즈 시작 버튼 클릭 시 퀴즈 페이지로 넘어가는가?", async () => {
	render(
		<MemoryRouter>
			<Routes>
				<Route path={"/"} element={<Home />}></Route>
				<Route path={"/quiz"} element={<Quiz />}></Route>
			</Routes>
		</MemoryRouter>
	);
	expect(screen.getByText(/Home/i)).toBeInTheDocument();
	userEvent.click(screen.getByText(/퀴즈 시작/i));
	expect(screen.getByText(/Quiz/i)).toBeInTheDocument();
});

export {};
