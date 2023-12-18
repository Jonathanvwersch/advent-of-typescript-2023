export type GiftWrapper<
  T extends string,
  P extends string,
  K extends string
> = {
  present: T;
  from: P;
  to: K;
};
