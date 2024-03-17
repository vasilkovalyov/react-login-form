export type ApiErrorDetails =
  | string
  | {
      error: string;
      field_name: string;
    }[];
