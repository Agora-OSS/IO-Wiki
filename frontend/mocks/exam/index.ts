import type { ExamProtocol } from "@/feature/exam_domain/data/protocol";
import type { Exam } from "@/feature/exam_domain/domain/entities";
import { http, HttpResponse } from "msw";
import { random } from "typia";

const examList: ExamProtocol[] = [
  {
    ...random<Exam>(),
    id: "77d73d7a-99e6-407f-880b-a6b257ac1486",
    friendId: 0,
    frinenName: "",
    parentsNumber: "",
  },
  {
    ...random<Exam>(),
    id: "77d73d7a-99e6-407f-880b-a6b257ac1481",
    friendId: 2,
    frinenName: "Friend 2",
    parentsNumber: "0987654321",
  },
  {
    ...random<Exam>(),
    id: "77d73d7a-99e6-407f-880b-a6b257ac1483",
    friendId: 3,
    frinenName: "Friend 3",
    parentsNumber: "0987654321",
  },
];

const exampleListHandler = http.get(
  "http://localhost:3000/api/exams",
  async () => {
    return HttpResponse.json(examList, {
      status: 200,
      statusText: "OK",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
);

export const examHandlers = [exampleListHandler];
