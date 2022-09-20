import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Result from "../pages/result/Result";

test("소요시간, 정답, 오답이 출력되는가?", async () => {
	render(<Result />, { wrapper: BrowserRouter });

	expect(screen.getByText(/소요시간/i)).toBeInTheDocument();
	expect(screen.getByText(/정답/i)).toBeInTheDocument();
	expect(screen.getByText(/오답/i)).toBeInTheDocument();
});

export {};
