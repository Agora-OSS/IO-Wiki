import {
  filter,
  flat,
  forEach,
  isNull,
  map,
  pipe,
  take,
  toArray,
} from "@fxts/core";
import { toast } from "sonner";
import type { IValidation } from "typia";

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

export function validateDisplayErrorThenHasError(
  validateResults: IValidation[],
) {
  const errors = pipe(
    validateResults,
    take(1),
    map((result) => (!result.success ? result.errors : null)),
    filter((error) => !isNull(error)),
    flat,
    toArray,
  );

  if (errors.length) {
    displayErrors(errors);

    return true;
  }

  return false;
}

export function displayErrors(errors: IValidation.IError[]) {
  pipe(
    errors,
    forEach((error) => toast.error(error.expected)),
  );
}
