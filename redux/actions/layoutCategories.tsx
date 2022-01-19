import initialState from 'redux/defaultState';
import { Action, LayoutCategory } from 'types';

const DELETE_CATEOGRY = 'layoutcategories/DELETE_CATEOGRY';
const EDIT_LAYOUT_ORDER = 'layoutcategories/EDIT_LAYOUT_ORDER';

export function reducer(
  state = initialState.layoutCategories,
  action: Action
): LayoutCategory[] {
  switch (action.type) {
    case DELETE_CATEOGRY:
      const { payload: index } = action;
      return [...state.slice(0, index), ...state.slice(index + 1)];
    case EDIT_LAYOUT_ORDER:
      const {
        payload: { destinaion, soruce },
      } = action;
      const copyState = Array.from(state);
      const [removed] = copyState.splice(destinaion, 1);
      copyState.splice(soruce, 0, removed);
      return copyState;
    default:
      return state;
  }
}

export function deleteLayoutCategories(index: number): Action {
  return { type: DELETE_CATEOGRY, payload: index };
}

export function editLayoutOrder(destinaion: number, soruce: number): Action {
  return { type: EDIT_LAYOUT_ORDER, payload: { destinaion, soruce } };
}
