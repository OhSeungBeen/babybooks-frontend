/**
 * All Type
 */
export interface State {
  siteInfo: SiteInfoState;
  tabs: TabsState;
}

export interface SiteInfoState {
  title: string;
}

export interface TabsState {
  index: number;
  items: TabInfo[];
}

export interface TabInfo {
  id: string;
  label: string;
}
