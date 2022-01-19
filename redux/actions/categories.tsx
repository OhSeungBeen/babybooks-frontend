import initialState from 'redux/defaultState';
import { Action, Category } from 'types';

export function reducer(
  state = initialState.categories,
  action: Action
): Category[] {
  switch (action.type) {
    default:
      return state;
  }
}
