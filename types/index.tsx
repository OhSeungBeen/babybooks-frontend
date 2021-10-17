/**
 * All Type
 */
export interface State {
  app: AppState;
  page: PageState;
  tabs: TabsState;
  navigator: string[];
}

export interface PageState {
  title: string;
  isFavorites: boolean;
}

export interface TabsState {
  index: number;
  items: TabInfo[];
}

export interface TabInfo {
  id: string;
  label: string;
}

export interface AppState {
  sideBar: SideBarInfo;
}

export interface SideBarInfo {
  width: string;
  isShow: boolean;
}
