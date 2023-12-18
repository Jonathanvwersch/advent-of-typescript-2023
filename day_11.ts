export type NonObject = symbol | number | boolean | string | Function;

export type SantaListProtector<T extends Record<string, any>> = {
  readonly [key in keyof T]: T[key] extends Function
    ? T[key]
    : SantaListProtector<T[key]>;
};
