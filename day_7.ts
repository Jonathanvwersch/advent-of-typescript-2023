export type AppendGood<T extends Record<string, any>> = {
  [K in keyof T as K extends string ? `good_${K}` : K]: T[K];
};
