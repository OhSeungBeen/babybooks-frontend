import { AnyAction } from "redux";
import { ActionType } from ".";
import { DialogState } from "../../types";
import initialState from "../defaultState";

export function reducer(
  state = initialState.dialog,
  action: AnyAction
): DialogState {
  switch (action.type) {
    case ActionType.DIALOG_OPEN:
      const dialog = state[action.payload.id] || { isOpen: true };
      dialog.isOpen = true;
      state[action.payload.id] = dialog;
      return state;
    default:
      return state;
  }
}

export function open(id: string): Function {
  return (dispatch: Function) => dispatch({ type: ActionType.DIALOG_OPEN, id });
}
