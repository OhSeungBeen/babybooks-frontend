import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface Tab {
  id: string;
  title: string;
  url: string;
}

export interface TabsState {
  index: number;
  data: Tab[];
}

const initialState: TabsState = {
  index: -1,
  data: [],
};

const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    changeTab: (state, { payload: index }: PayloadAction<number>) => {
      state.index = index;
    },
    addTab: (state, { payload: tab }: PayloadAction<Tab>) => {
      const index = state.data.push(tab);
      state.index = index - 1;
    },
    deleteTab: (state, { payload: index }: PayloadAction<number>) => {
      state.data.splice(index, 1);
      if (state.index >= index && state.index > 0) {
        state.index = index - 1;
      }
    },
  },
});

export const { changeTab, addTab, deleteTab } = tabsSlice.actions;
export default tabsSlice.reducer;
