export interface IGetFavicon {
  domain: string;
  name: string;
}
export type TGetFavicon = ReturnType<() => string>;

export interface IPlatforms {
  domain: string;
  redirect: string;
  name: string;
  match: boolean;
}
