export type SantaOrForest = "🎅🏼" | "🎄";

export type FindSantaInArray<T extends SantaOrForest[]> = T extends [
  ...infer F,
  infer R
]
  ? R extends "🎅🏼"
    ? F["length"]
    : FindSantaInArray<F extends SantaOrForest[] ? F : never>
  : never;

export type FindSanta<
  T extends SantaOrForest[][],
  Index extends Number[] = []
> = T[Index["length"]] extends SantaOrForest[]
  ? FindSantaInArray<T[Index["length"]]> extends never
    ? FindSanta<T, [...Index, 0]>
    : [Index["length"], FindSantaInArray<T[Index["length"]]>]
  : never;
