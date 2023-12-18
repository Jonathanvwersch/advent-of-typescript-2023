export type Naughty = `naughty_${string}`;

export type RemoveNaughtyChildren<T extends Record<string, any>> = {
  [K in keyof T as K extends Naughty ? never : K]: T[K];
};
