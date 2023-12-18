export type LengthOfArray<T extends any[]> = T["length"];
export type Concat<T extends any[], K extends any[]> = K extends [
  infer Head,
  ...infer Tail
]
  ? Concat<[...T, Head], Tail>
  : T;
export type CreateArrayOfLength<
  T extends number,
  K extends any[] = []
> = K["length"] extends T ? K : CreateArrayOfLength<T, [any, ...K]>;

export type Add<T extends number, K extends number> = LengthOfArray<
  Concat<CreateArrayOfLength<T>, CreateArrayOfLength<K>>
>;

export type DayCounter<
  Start extends number,
  End extends number
> = Start extends End ? End : Start | DayCounter<Add<Start, 1> & number, End>;
