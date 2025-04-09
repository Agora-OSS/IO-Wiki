import { validatePipe } from "@/core/utils/validator";
import { Exam } from "@/feature/exam_domain/domain/entities";
import type { ExamRepository } from "@/feature/exam_domain/domain/repository";
import { examValidator } from "../../domain/entities/Exam";
import { fetchAllExams } from "../datasources";
import type { ExamProtocol } from "../models";

export const exampleRepository: ExamRepository = {
	async getExamList(): Promise<Exam[]> {
		const defaultValue: Exam = {
			id: "77d73d7a-99e6-407f-880b-a6b257ac1485",
			name: "default name",
			description: null,
			registAt: "2023-10-01T00:00:00Z",
			duration: "1095",
			subjectId: 0,
			teacherId: 0,
		};

		return validatePipe<ExamProtocol, Exam>(
			fetchAllExams(),
			(examProtocol) =>
				new Exam(
					examProtocol.id,
					examProtocol.name,
					examProtocol.description,
					examProtocol.registAt,
					examProtocol.duration,
					examProtocol.subjectId,
					examProtocol.teacherId,
				),
			examValidator,
			defaultValue,
		);
	},
	getExamDetail(examId: number): Promise<Exam> {
		throw new Error("Method not implemented.");
	},
	updateExam(examId: number): Promise<boolean> {
		throw new Error("Method not implemented.");
	},
	createExam(exam: Exam): Promise<boolean> {
		throw new Error("Method not implemented.");
	},
	deleteExam(examId: number): Promise<boolean> {
		throw new Error("Method not implemented.");
	},
};
