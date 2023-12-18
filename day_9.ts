export type Reverse<
  T extends string,
  A extends string = ""
> = T extends `${infer F}${infer R}` ? Reverse<R, `${F}${A}`> : A;
