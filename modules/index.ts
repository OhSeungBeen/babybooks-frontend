import { AnyAction, Reducer, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import app, { AppState } from './app';
import categories, { CategoriesState } from './categories';
import category, { CategoryState } from './category';
import corners, { ConersState } from './coners';
import tabs, { TabsState } from './tabs';

export type RootState = {
  app: AppState;
  tabs: TabsState;
  categories: CategoriesState;
  category: CategoryState;
  corners: ConersState;
};

const reducer: Reducer<RootState, AnyAction> = (state, action) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  }
  return combineReducers({
    app,
    tabs,
    categories,
    category,
    corners,
  })(state, action);
};

export default reducer;
