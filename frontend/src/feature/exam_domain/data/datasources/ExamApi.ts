import axios from "axios";
import type { ExamProtocol } from "../models/ExamModel";

export const fetchAllExams = async (): Promise<ExamProtocol[]> => {
	const response = await axios.get<ExamProtocol[]>("/api/exams", {
		baseURL: "http://localhost:3000",
	});

	if (!(response.status === 200)) {
		console.error("Error fetching exams", response);
		throw new Error("Network response was not ok");
	}

	const data = await response.data;
	return data;
};

export const fetchExamById = async (examId: string): Promise<ExamProtocol> => {
	const response = await axios.get<ExamProtocol>(`/api/exams/${examId}`);

	if (!(response.status === 200)) {
		throw new Error("Network response was not ok");
	}

	const data = await response.data;
	return data;
};
