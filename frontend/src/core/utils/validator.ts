import { map, pipe, toArray } from "@fxts/core";
import type typia from "typia";

export function validatePipe<T, D>(
	protocols: T[],
	mapToEntity: (protocol: T) => D,
	validator: (input: unknown) => typia.IValidation<D>,
	defaultValue?: D,
): Promise<D[]>;

export function validatePipe<T, D>(
	protocols: Promise<T[]>,
	mapToEntity: (protocol: T) => D,
	validator: (input: unknown) => typia.IValidation<D>,
	defaultValue?: D,
): Promise<D[]>;

export function validatePipe<T, D>(
	protocols: T[] | Promise<T[]>,
	mapToEntity: (protocol: T) => D,
	validator: (input: unknown) => typia.IValidation<D>,
	defaultValue?: D,
) {
	return pipe(
		protocols,
		(protocols) => protocols.map((protocol) => mapToEntity(protocol)),
		map((entity) => {
			const validateResult = validator(entity);
			if (validateResult.success) {
				return validateResult.data;
			}

			console.error(
				`Validator Error: ${validateResult.errors.map((error) => error.path).join(", ")}`,
			);

			return defaultValue;
		}),
		toArray,
	);
}
