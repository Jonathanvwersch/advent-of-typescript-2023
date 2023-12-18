export type Split<
  Str extends string,
  Delimeter extends string
> = Str extends `${infer Left}${Delimeter}${infer Right}`
  ? [...Split<Right, Delimeter>, Left]
  : [Str];

export type StreetSuffixTester<
  Street extends string,
  Suffix extends string
> = Split<Street, " ">[0] extends Suffix ? true : false;
