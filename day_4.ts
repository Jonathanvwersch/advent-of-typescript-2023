export type Address = { address: string; city: string };
export type PresentDeliveryList<
  T extends Record<string, Record<string, string>> = Record<string, any>
> = { [K in keyof T]: Address };
