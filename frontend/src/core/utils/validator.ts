import { filter, map, pipe, toArray } from "@fxts/core";
import type { IValidation } from "typia";

export function toEntity<T, D>(
  protocols: T[],
  mapToEntity: (protocol: T) => D,
  validator: (input: unknown) => IValidation<D>,
): Promise<D[]>;

export function toEntity<T, D>(
  protocols: Promise<T[]>,
  mapToEntity: (protocol: T) => D,
  validator: (input: unknown) => IValidation<D>,
): Promise<D[]>;

export function toEntity<T, D>(
  protocols: T[] | Promise<T[]>,
  mapToEntity: (protocol: T) => D,
  validator: (input: unknown) => IValidation<D>,
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

      return null;
    }),
    filter((entity) => entity !== null),
    toArray,
  );
}
