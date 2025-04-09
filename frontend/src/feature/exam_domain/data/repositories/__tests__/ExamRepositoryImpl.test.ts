import { describe, expect, test } from "vitest";
import { exampleRepository } from "../ExamRepositoryImpl";

describe("ExamRepositoryImpl", () => {
	test("should parsed Model protocol to Entity list", async () => {
		const examList = await exampleRepository.getExamList();

		expect(examList).toBeInstanceOf(Array);
		expect(examList[0]).toBeInstanceOf(Object);
		expect(examList[0]).toHaveProperty("id");
		expect(examList[0]).toHaveProperty("name");
		expect(examList[0]).toHaveProperty("description");
		expect(examList[0]).toHaveProperty("registAt");
		expect(examList[0]).toHaveProperty("duration");
		expect(examList[0]).toHaveProperty("subjectId");
		expect(examList[0]).toHaveProperty("teacherId");
		expect(examList[0].id).toBe("77d73d7a-99e6-407f-880b-a6b257ac1486");
		expect(examList[1].id).toBe("77d73d7a-99e6-407f-880b-a6b257ac1481");
		expect(examList[2].id).toBe("77d73d7a-99e6-407f-880b-a6b257ac1483");
	});
});
