import initialState from 'redux/defaultState';
import { Action, Category } from 'types';

const SET_CATEGORY = 'category/SET_CATEGORY';
const CHANGE_NAME = 'category/CHANGE_NAME';
const SET_VISIBLE = 'category/SET_VISIBLE';
const SET_USE = 'category/SET_USE';
const SET_MENU_TYPE = 'cateogry/SET_MENU_TYPE';
const SET_MENU_TEXT = 'cateogry/SET_MENU_TEXT';
const SET_MENU_IMAGE = 'cateogry/SET_MENU_IMAGE';
const SET_TITLE_TYPE = 'cateogry/SET_TITLE_TYPE';
const SET_TITLE_TEXT = 'cateogry/SET_TITLE_TEXT';
const SET_TITLE_IMAGE = 'cateogry/SET_TITLE_IMAGE';

export function reducer(
  state = initialState.category,
  action: Action
): Category {
  switch (action.type) {
    case SET_CATEGORY:
      const { payload: category } = action;
      return category;
    case CHANGE_NAME:
      const { payload: name } = action;
      return { ...state, name };
    case SET_VISIBLE:
      const { payload: visible } = action;
      return { ...state, data: { ...state.data, visible } };
    case SET_USE:
      const { payload: use } = action;
      return { ...state, data: { ...state.data, use } };
    case SET_MENU_TYPE:
      const { payload: menuType } = action;
      return { ...state, data: { ...state.data, menuType } };
    case SET_MENU_TEXT:
      const { payload: menuText } = action;
      return { ...state, data: { ...state.data, menuText } };
    case SET_MENU_IMAGE:
      const { payload: menuImage } = action;
      return { ...state, data: { ...state.data, menuImage } };
    case SET_TITLE_TYPE:
      const { payload: titleType } = action;
      return { ...state, data: { ...state.data, titleType } };
    case SET_TITLE_TEXT:
      const { payload: titleText } = action;
      return { ...state, data: { ...state.data, titleText } };
    case SET_TITLE_IMAGE:
      const { payload: titleImage } = action;
      return { ...state, data: { ...state.data, titleImage } };
    default:
      return state;
  }
}

export function setCategory(category: Category): Action {
  return { type: SET_CATEGORY, payload: category };
}

export function changeName(name: string): Action {
  return { type: CHANGE_NAME, payload: name };
}

export function setVisible(visible: boolean): Action {
  return { type: SET_VISIBLE, payload: visible };
}

export function setUse(use: boolean): Action {
  return { type: SET_USE, payload: use };
}

export function setMenuType(menuType: 'text' | 'image'): Action {
  return {
    type: SET_MENU_TYPE,
    payload: menuType,
  };
}
export function setMenuText(menuText: string): Action {
  return {
    type: SET_MENU_TEXT,
    payload: menuText,
  };
}
export function setMenuImage(menuImage: string): Action {
  return {
    type: SET_MENU_IMAGE,
    payload: menuImage,
  };
}

export function setTitleType(titleType: 'text' | 'image'): Action {
  return {
    type: SET_TITLE_TYPE,
    payload: titleType,
  };
}
export function setTitleText(titleText: string): Action {
  return {
    type: SET_TITLE_TEXT,
    payload: titleText,
  };
}
export function setTitleImage(titleImage: string): Action {
  return {
    type: SET_TITLE_IMAGE,
    payload: titleImage,
  };
}
