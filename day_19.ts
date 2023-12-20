export type Presents = ["🛹", "🚲", "🛴", "🏄"];

export type Repeat<
  T extends string,
  K extends number,
  N extends readonly string[] = []
> = N["length"] extends K ? N : Repeat<T, K, [T, ...N]>;

export type PresentsIndexes<Indexes extends Number[]> =
  Indexes["length"] extends Presents["length"] ? [0] : [...Indexes, 0];
export type PresentsIndex<Indexes extends Number[]> =
  Indexes["length"] extends Presents["length"] ? 0 : Indexes["length"];

export type Rebuild<
  PresentAmounts extends readonly number[],
  Indexes extends number[] = []
> = PresentAmounts extends [
  infer First extends number,
  ...infer Rest extends number[]
]
  ? [
      ...Repeat<Presents[PresentsIndex<Indexes>], First>,
      ...Rebuild<Rest, PresentsIndexes<Indexes>>
    ]
  : [];
