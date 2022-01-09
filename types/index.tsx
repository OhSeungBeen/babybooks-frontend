import { Dispatch, ReactNode } from "react";
import { AnyAction } from "redux";
import { ActionType } from "redux/actions";

/**
 * All Type
 */
export interface State {
  app: AppState;
  page: PageState;
  tabs: TabsState;
  dialog: DialogState;
}

export interface ComponentProps {
  children?: ReactNode;
  state?: State;
  dispatch: Dispatch<any>;
}

export interface PageState {
  title: string;
  breadcrumb: string[];
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

export interface DialogState {
  [id: string]: {
    isOpen: boolean;
  };
}

export interface Action extends AnyAction {
  type: ActionType | string;
  payload?: any;
}
