import type { Exam } from "../entities";

// TODO : 레포지터리의 추상체를 만듭니디.
export interface ExamRepository {
	getExamList(): Promise<Exam[]>;
	getExamDetail(examId: number): Promise<Exam>;
	updateExam(examId: number): Promise<boolean>;
	createExam(exam: Exam): Promise<boolean>;
	deleteExam(examId: number): Promise<boolean>;
}
