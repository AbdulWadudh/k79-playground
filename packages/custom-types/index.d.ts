export interface CustomImportMeta extends ImportMeta {
  env: Record<string, any>;
}

export type TObjString = Record<string, string>;
export type TObj = Record<string, string | number | boolean | undefined | null | TObjString>;
