export type ArrayLength<T extends unknown[]> = T["length"];
export type CreateArrayOfLength<
  T extends Number,
  U extends unknown[] = []
> = U["length"] extends T ? U : [...CreateArrayOfLength<T, [any, ...U]>];
export type Trim<
  T extends unknown[],
  K extends Number,
  U extends unknown[] = []
> = U["length"] extends K
  ? T
  : T extends [infer First, ...infer Rest]
  ? Trim<[...Rest], K, [First, ...U]>
  : never;

export type Subtract<T extends Number, K extends Number> = ArrayLength<
  Trim<CreateArrayOfLength<T>, K>
>;

export type BoxToys<
  ToyName extends String,
  BoxesCount extends Number
> = BoxesCount extends 0
  ? []
  : [ToyName, ...BoxToys<ToyName, Subtract<BoxesCount, 1>>];
