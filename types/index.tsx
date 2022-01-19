import { Dispatch, ReactNode } from 'react';
import { AnyAction } from 'redux';
import { ActionType } from 'redux/actions';

/**
 * All Type
 */
export interface State {
  app: AppState;
  page: PageState;
  tabs: TabsState;
  dialog: DialogState;
  categories: Category[];
  category: Category;
  layoutCategories: LayoutCategory[];
}

export interface ComponentProps {
  children?: ReactNode;
  state?: State;
  dispatch: Dispatch<Action>;
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
  url: string;
}

export interface AppState {
  sideBar: SideBarInfo;
  header: HeaderInfo;
  footer: FooterInfo;
}

export interface SideBarInfo {
  width: string;
  isShow: boolean;
}

export interface HeaderInfo {
  height: string;
}

export interface FooterInfo {
  height: string;
}

export interface DialogState {
  [id: string]: {
    isOpen: boolean;
  };
}

export interface Category {
  parentId?: string;
  id: string;
  name: string;
  children?: Category[];
  data?: {
    code: string;
    visible: boolean;
    use: boolean;
    menuType: 'text' | 'image';
    titleType: 'text' | 'image';
    menuText: string;
    titleText: string;
    menuImage: string;
    titleImage: string;
    cornerNumber: string;
    registerId: string;
    modifierId: string;
    registeredDate: string;
    modifiedDate: string;
  };
  depth?: number;
}

export interface LayoutCategory {
  id: string;
  name: string;
}

export interface Action extends AnyAction {
  type: ActionType | string;
  payload?: any;
}
