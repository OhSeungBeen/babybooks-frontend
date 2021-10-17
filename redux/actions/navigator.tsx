import { AnyAction } from "redux";
import { ActionType } from ".";
import initialState from "../defaultState";

export function reducer(
    state = initialState.navigator,
    action: AnyAction
): string[] {
    switch (action.type) {
        case ActionType.NAVIGATOR_PUSH:
            const { item } = action;
            state.push(item)
            return [...state];
        case ActionType.NAVIGATOR_POP:
            state.splice(state.length - 1)
            return [...state];
        default:
            return state;
    }
}

export function pushNav(item: string): Function {
    return (dispatch: Function) =>
        dispatch({ type: ActionType.NAVIGATOR_PUSH, item });
}

export function popNav(): Function {
    return (dispatch: Function) =>
        dispatch({ type: ActionType.NAVIGATOR_POP });
}