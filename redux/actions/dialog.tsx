import { ActionType } from ".";
import initialState from "redux/defaultState";
import { Action, DialogState } from "types";

export function reducer(
  state = initialState.dialog,
  action: Action
): DialogState {
  switch (action.type) {
    case ActionType.DIALOG_OPEN: {
      const { payload: id } = action;
      const dialog = state[id] || { isOpen: true };
      dialog.isOpen = true;
      state[id] = dialog;
      return state;
    }
    default:
      return state;
  }
}

export function open(id: string): Action {
  return { type: ActionType.DIALOG_OPEN, payload: id };
}
