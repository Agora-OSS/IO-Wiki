import { map, pipe, toArray } from "@fxts/core";
import type typia from "typia";
import type { IDomain } from "./domain";

export function validatePipe<T, D extends IDomain>(
	protocols: T[],
	mapToEntity: (protocol: T) => D,
	validator: (input: unknown) => typia.IValidation<D>,
): Promise<D[]>;

export function validatePipe<T, D extends IDomain>(
	protocols: Promise<T[]>,
	mapToEntity: (protocol: T) => D,
	validator: (input: unknown) => typia.IValidation<D>,
): Promise<D[]>;

export function validatePipe<T, D extends IDomain>(
	protocols: T[] | Promise<T[]>,
	mapToEntity: (protocol: T) => D,
	validator: (input: unknown) => typia.IValidation<D>,
) {
	return pipe(
		protocols,
		(protocols) => protocols.map((protocol) => mapToEntity(protocol)),
		map((entity) => {
			const validateResult = validator(entity);
			if (validateResult.success) {
				return validateResult.data;
			}
			return validateResult.errors;
		}),
		toArray,
	);
}
