import { expect, test } from "vitest";

test("should return a list of exams", async () => {
	const exams = [
		{ id: 1, name: "Math" },
		{ id: 2, name: "Science" },
	];

	const getExams = () => {
		return exams;
	};

	const result = getExams();

	expect(result).toEqual(exams);
});
