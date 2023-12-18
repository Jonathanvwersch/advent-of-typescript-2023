export type WordSplit<
  Word extends string,
  Delimiter extends string
> = Word extends `${infer Start}${Delimiter}${infer Rest}`
  ? [Start, ...WordSplit<Rest, Delimiter>]
  : [Word];
export type FromStringArrayToUnion<T extends string[]> = T extends [
  infer First,
  ...infer Rest extends string[]
]
  ? First | FromStringArrayToUnion<Rest>
  : never;

export type test = FromStringArrayToUnion<["tehh", "gfsdfd"]>;
export type DecipherNaughtyList<T extends string> = FromStringArrayToUnion<
  WordSplit<T, "/">
>;
