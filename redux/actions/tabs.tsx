import { ActionType } from ".";
import initialState from "redux/defaultState";
import { Action, TabInfo, TabsState } from "types";

export function reducer(state = initialState.tabs, action: Action): TabsState {
  switch (action.type) {
    case ActionType.TAB_CHANGE: {
      const { payload: index } = action;
      return { ...state, index };
    }
    case ActionType.TAB_ADD: {
      const { payload: tab } = action;
      state.items.push(tab);
      return { ...state };
    }
    case ActionType.TAB_DELETE: {
      const { payload: id } = action;
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

export function changeTab(index: number): Action {
  return { type: ActionType.TAB_CHANGE, payload: index };
}

export function addTab(tab: TabInfo): Action {
  return { type: ActionType.TAB_ADD, payload: tab };
}

export function deleteTab(id: string): Action {
  return { type: ActionType.TAB_DELETE, payload: id };
}
