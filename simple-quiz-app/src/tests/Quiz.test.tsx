import { render, screen } from "@testing-library/react";
import Quiz from "../pages/quiz/Quiz";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
	useLocation: jest.fn().mockReturnValue({
		pathname: "/quiz",
		state: {
			quizNumber: 1,
			quizzes: [
				{
					category: "Animals",
					type: "multiple",
					difficulty: "easy",
					question: "What is the fastest  land animal?",
					correct_answer: "Cheetah",
					incorrect_answers: [
						"Lion",
						"Thomson&rsquo;s Gazelle",
						"Pronghorn Antelope",
					],
				},
				{
					category: "Animals",
					type: "multiple",
					difficulty: "easy",
					question: "What is the scientific name for modern day humans?",
					correct_answer: "Homo Sapiens",
					incorrect_answers: [
						"Homo Ergaster",
						"Homo Erectus",
						"Homo Neanderthalensis",
					],
				},
				{
					category: "Animals",
					type: "multiple",
					difficulty: "easy",
					question:
						"The Kākāpō is a large, flightless, nocturnal parrot native to which country?",
					correct_answer: "New Zealand",
					incorrect_answers: ["South Africa", "Australia", "Madagascar"],
				},
				{
					category: "Animals",
					type: "multiple",
					difficulty: "easy",
					question: "How many legs do butterflies have?",
					correct_answer: "6",
					incorrect_answers: ["2", "4", "0"],
				},
				{
					category: "Animals",
					type: "multiple",
					difficulty: "easy",
					question: "What do you call a baby bat?",
					correct_answer: "Pup",
					incorrect_answers: ["Cub", "Chick", "Kid"],
				},
				{
					category: "Animals",
					type: "multiple",
					difficulty: "easy",
					question: "What is Grumpy Cat&#039;s real name?",
					correct_answer: "Tardar Sauce",
					incorrect_answers: ["Sauce", "Minnie", "Broccoli"],
				},
				{
					category: "Animals",
					type: "multiple",
					difficulty: "easy",
					question: "By definition, where does an abyssopelagic animal live?",
					correct_answer: "At the bottom of the ocean",
					incorrect_answers: [
						"In the desert",
						"On top of a mountain",
						"Inside a tree",
					],
				},
				{
					category: "Animals",
					type: "multiple",
					difficulty: "easy",
					question: "What colour is the female blackbird?",
					correct_answer: "Brown",
					incorrect_answers: ["Black", "White", "Yellow"],
				},
				{
					category: "Animals",
					type: "multiple",
					difficulty: "easy",
					question: "How many teeth does an adult rabbit have?",
					correct_answer: "28",
					incorrect_answers: ["30", "26", "24"],
				},
				{
					category: "Animals",
					type: "multiple",
					difficulty: "easy",
					question: "What is the name of a rabbit&#039;s abode?",
					correct_answer: "Burrow",
					incorrect_answers: ["Nest", "Den", "Dray"],
				},
			],
		},
	}),
	useNavigate: () => mockedUsedNavigate,
}));

describe("quiz 페이지가 올바로 작동하는가?", () => {
	render(<Quiz />);

	test("4개의 답안이 있는가?", async () => {
		await screen.findAllByTestId("answer");
		const answers = screen.getAllByTestId("answer");
		expect(answers.length).toEqual(4);
	});
});

export {};
