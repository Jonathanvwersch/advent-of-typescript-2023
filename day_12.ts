export type FindSanta<T extends unknown[]> = T extends [...infer F, infer R]
  ? R extends "🎅🏼"
    ? F["length"]
    : FindSanta<F>
  : never;
export type FindSantaInArray<T extends unknown[]> = T extends [
  ...infer F,
  infer R
]
  ? R extends "🎅🏼"
    ? F["length"]
    : FindSantaInArray<F[]>
  : never;
