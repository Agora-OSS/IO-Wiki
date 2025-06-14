import { toEntity } from "@/core/utils/validator";
import { Exam } from "@/feature/exam_domain/domain/entities";
import { fetchAllExams } from "../datasources";
import type { ExamProtocol } from "../protocol";

export const exampleRepository = {
  async getExamList(): Promise<Exam[]> {
    const exams = await fetchAllExams();

    return toEntity<ExamProtocol, Exam>(
      exams,
      (examProtocol) =>
        Exam.create({
          id: examProtocol.id ?? "77d73d7a-99e6-407f-880b-a6b257ac1485",
          name: examProtocol.name ?? "default name",
          description: examProtocol.description ?? null,
          registAt: examProtocol.registAt ?? "2023-10-01T00:00:00Z",
          duration: examProtocol.duration ?? "1095",
          subjectId: examProtocol.subjectId ?? 0,
          teacherId: examProtocol.teacherId ?? 0,
        }),
      Exam.getValidator(),
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

type exampleRepositoryType = typeof exampleRepository;

export type { exampleRepositoryType };
