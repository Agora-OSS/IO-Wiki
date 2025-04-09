import type { IDomain } from "@/core/utils/domain";
import type { tags } from "typia";
import typia from "typia";

export class Exam implements IDomain {
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
}

export const examValidator = typia.createValidateEquals<Exam>();
