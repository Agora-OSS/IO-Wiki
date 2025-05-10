import type { tags } from "typia";
import typia from "typia";

export class Exam {
  readonly id;
  readonly name;
  readonly description;
  readonly registAt;
  readonly duration;
  readonly subjectId;
  readonly teacherId;

  constructor(
    id: string & tags.Format<"uuid">,
    name: string & tags.MaxLength<50>,
    description: string | null,
    registAt: string & tags.Format<"date-time">,
    duration: string & tags.Format<"duration">,
    subjectId: number & tags.Type<"int64">,
    teacherId: number & tags.Type<"int64">,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.registAt = registAt;
    this.duration = duration;
    this.subjectId = subjectId;
    this.teacherId = teacherId;
  }

  static create(examValue: Exam) {
    return new Exam(
      examValue.id,
      examValue.name,
      examValue.description,
      examValue.registAt,
      examValue.duration,
      examValue.subjectId,
      examValue.teacherId,
    );
  }

  static getValidator() {
    return typia.createValidateEquals<Exam>();
  }
}
