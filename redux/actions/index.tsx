export * as SiteInfoAction from "./siteInfo";
export * as TabsAction from "./tabs";
export * as NavigatorAction from "./navigator";

export enum ActionType {
  SITEINFO_AVAILABLE,
  TAB_CHANGE,
  TAB_ADD,
  TAB_DELETE,
  NAVIGATOR_PUSH,
  NAVIGATOR_POP,
}
