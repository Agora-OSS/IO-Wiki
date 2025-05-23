export type FormErrorType = {
  isValid: boolean;
  error?: unknown;
};

export type ExtractEntityKey<T> = {
  // biome-ignore lint/complexity/noBannedTypes: <explanation>
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

export type ExtractEntityProperty<T> = Pick<T, ExtractEntityKey<T>>;

export type WikiApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};
