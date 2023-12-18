export type Count<
  T extends string[],
  K extends string,
  Index extends Number[] = [],
  Total extends Number[] = []
> = T[Index["length"]] extends K
  ? Count<T, K, [...Index, 0], [...Total, 0]>
  : Index["length"] extends T["length"]
  ? Total["length"]
  : Count<T, K, [...Index, 0], Total>;
