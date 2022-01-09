import { AnyAction } from 'redux';
import { ActionType } from '.';
import { AppState, SideBarInfo } from '../../types';
import initialState from '../defaultState';

export function reducer(state = initialState.app, action: AnyAction): AppState {
  switch (action.type) {
    case ActionType.APP_SHOW_SIDEBAR:
      const { sideBar } = action;
      return { ...state, sideBar: { ...sideBar } };
    default:
      return state;
  }
}

export function setSideBar(sideBar: SideBarInfo): Function {
  return (dispatch: Function) =>
    dispatch({ type: ActionType.APP_SHOW_SIDEBAR, sideBar });
}
