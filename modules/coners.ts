import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface Coner {
  id: string;
  name: string;
}

export interface ConersState {
  data: Coner[];
}

const initialState: ConersState = {
  data: [
    { id: '1', name: '메인이미지' },
    { id: '2', name: '베스트상품' },
    { id: '3', name: '추천상품' },
    { id: '4', name: '광고배너' },
    { id: '5', name: '분야별 추천 도서' },
    { id: '6', name: '공지사항' },
    { id: '7', name: '기획전' },
  ],
};

const conersSlice = createSlice({
  name: 'coners',
  initialState,
  reducers: {
    editLayoutOrder: (
      state,
      action: PayloadAction<{ destination: number; source: number }>
    ) => {
      const [removed] = state.data.splice(action.payload.destination, 1);
      state.data.splice(action.payload.source, 0, removed);
    },
    deleteCorner: (state, action: PayloadAction<number>) => {
      state.data.splice(action.payload, 1);
    },
  },
});

export const { editLayoutOrder, deleteCorner } = conersSlice.actions;
export default conersSlice.reducer;
