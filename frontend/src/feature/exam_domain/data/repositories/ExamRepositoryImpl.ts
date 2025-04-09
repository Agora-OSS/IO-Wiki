import { validatePipe } from "@/core/utils/validator";
import { Exam } from "@/feature/exam_domain/domain/entities";
import type { ExamRepository } from "@/feature/exam_domain/domain/repository";
import type { IValidation } from "typia";
import { examValidator } from "../../domain/entities/Exam";
import { fetchAllExams } from "../datasources";
import type { ExamProtocol } from "../models";

class ExamRepositoryImpl implements ExamRepository {
	async getExamList(): Promise<Exam[]> {
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
		);
	}
	getExamDetail(examId: number): Promise<Exam> {
		throw new Error("Method not implemented.");
	}
	updateExam(examId: number): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	createExam(exam: Exam): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	deleteExam(examId: number): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
}

const exampleRepository = new ExamRepositoryImpl();

export { exampleRepository };
