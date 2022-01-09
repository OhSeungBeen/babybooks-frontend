import { AnyAction } from 'redux';
import { ActionType } from '.';
import { TabInfo, TabsState } from '../../types';
import initialState from '../defaultState';

export function reducer(
  state = initialState.tabs,
  action: AnyAction
): TabsState {
  switch (action.type) {
    case ActionType.TAB_CHANGE: {
      const { index } = action;
      return { ...state, index };
    }
    case ActionType.TAB_ADD: {
      const { tab } = action;
      return {
        ...state,
        items: [...state.items, tab],
        index: state.items.length,
      };
    }
    case ActionType.TAB_DELETE: {
      const { id } = action;
      let { index } = state;

      const delIndex = state.items.findIndex((tab) => tab.id === id);

      if (index >= delIndex && index > 0) {
        index--;
      }

      state.items.splice(delIndex, 1);
      return { ...state, index };
    }
    default:
      return state;
  }
}

export function changeTab(index: number): Function {
  return (dispatch: Function) =>
    dispatch({ type: ActionType.TAB_CHANGE, index });
}

export function addTab(tab: TabInfo): Function {
  return (dispatch: Function) => dispatch({ type: ActionType.TAB_ADD, tab });
}

export function deleteTab(id: string): Function {
  return (dispatch: Function) => dispatch({ type: ActionType.TAB_DELETE, id });
}
