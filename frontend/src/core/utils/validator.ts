import { filter, map, pipe, toArray, toAsync } from "@fxts/core";
import type { IValidation } from "typia";
import typia from "typia";

export function toEntity<T, D>(
  data: T | T[],
  mapToEntity: (data: T) => D,
  validator: (input: unknown) => IValidation<D>,
) {
  const datas = Array.isArray(data) ? data : [data];

  return pipe(
    validateEntity(datas, mapToEntity, validator),
    filter((validatedEntity) => validatedEntity.success),
    map((validatedEntity) => validatedEntity.data),
    toArray,
  );
}

export function validateEntity<T, D>(
  data: T | T[],
  mapToEntity: (data: T) => D,
  validator: (input: unknown) => IValidation<D>,
) {
  const datas = Array.isArray(data) ? data : [data];

  return pipe(
    datas,
    map(mapToEntity),
    map((entity) => validator(entity)),
    toArray,
  );
}
