import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as CategoriesAPI from '../lib/api/categories';
import { CreateRequest } from '../lib/api/categories';

export interface Category {
  parentId?: string | null;
  id: string;
  name: string;
  children?: Category[];
  data?: {
    code: string;
    visible: boolean;
    use: boolean;
    menuType: 'text' | 'image';
    titleType: 'text' | 'image';
    menuText: string;
    titleText: string;
    menuImage: string;
    titleImage: string;
    cornerNumber: string;
    registerId: string;
    modifierId: string;
    registeredDate: string;
    modifiedDate: string;
  };
}

export interface CategoriesState {
  pending: boolean | null;
  error: boolean;
  data: Category[];
  selectedId: string;
}

const initialState: CategoriesState = {
  pending: null,
  error: false,
  selectedId: '0',
  data: [],
};

export const createCategory = createAsyncThunk(
  'categories/create',
  async ({
    displayName,
    displayYn,
    ordering,
    parentId,
    useYn,
  }: CreateRequest) => {
    const res = await CategoriesAPI.create({
      displayName,
      displayYn,
      ordering,
      parentId,
      useYn,
    });
    return res.data.data;
  }
);

export const getAllCategories = createAsyncThunk(
  'categories/getAll',
  async () => {
    // const res = await CategoriesAPI.getAll();
    // return res.data.data;
    return [
      {
        id: '1',
        name: '대카테고리1',
        parentId: null,
        children: [
          {
            parentId: '1',
            id: '1-1',
            name: '중카테고리1-1',
            children: [
              {
                parentId: '1-1',
                id: '1-1-1',
                code: '1-1-1',
                name: '소카테고리1-1-1',
                data: {
                  code: '01000001',
                  visible: false,
                  use: true,
                  menuType: 'text',
                  titleType: 'image',
                  menuText: '',
                  titleText: '',
                  menuImage: '',
                  titleImage: '',
                  cornerNumber: '3',
                  registerId: 'Tes***1',
                  modifierId: 'Tes***1',
                  registeredDate: 'YYYY-MM-DD',
                  modifiedDate: 'YYYY-MM-DD',
                },
                children: null,
              },
            ],
          },
          {
            id: '1-2',
            name: '중카테고리1-2',
            parentId: '1',
            children: [
              {
                parentId: '1-2',
                id: '1-2-1',
                name: '소카테고리1-2-1',
                data: {
                  code: '01000002',
                  visible: true,
                  use: true,
                  menuType: 'text',
                  titleType: 'image',
                  menuText: '소카테고리1-2-1',
                  titleText: '소카테고리1-2-1',
                  menuImage: '',
                  titleImage: '',
                  cornerNumber: '3',
                  registerId: 'Tes***1',
                  modifierId: 'Tes***1',
                  registeredDate: 'YYYY-MM-DD',
                  modifiedDate: 'YYYY-MM-DD',
                },
                children: null,
              },
            ],
          },
        ],
      },
      {
        id: '2',
        name: '대카테고리2',
        parentId: null,
        children: [
          {
            parentId: '2',
            id: '2-1',
            name: '중카테고리2-1',
            data: {
              code: '01000003',
              visible: false,
              use: false,
              menuType: 'text',
              titleType: 'image',
              menuText: '',
              titleText: '',
              menuImage: '',
              titleImage: '',
              cornerNumber: '3',
              registerId: 'Tes***1',
              modifierId: 'Tes***1',
              registeredDate: 'YYYY-MM-DD',
              modifiedDate: 'YYYY-MM-DD',
            },
            children: null,
          },
          {
            parentId: '2',
            id: '2-2',
            name: '중카테고리2-2',
            children: [
              {
                parentId: '2-2',
                id: '2-2-1',
                code: '2-2-1',
                name: '소카테고리2-2-1',
                data: {
                  code: '01000004',
                  visible: false,
                  use: false,
                  menuType: 'text',
                  titleType: 'image',
                  menuText: '',
                  titleText: '',
                  menuImage: '',
                  titleImage: '',
                  cornerNumber: '3',
                  registerId: 'Tes***1',
                  modifierId: 'Tes***1',
                  registeredDate: 'YYYY-MM-DD',
                  modifiedDate: 'YYYY-MM-DD',
                },
                children: null,
              },
            ],
          },
        ],
      },
    ];
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setSelectedId: (state, action: PayloadAction<string>) => {
      state.selectedId = action.payload;
    },
  },
  extraReducers: {
    [createCategory.pending.type]: (state, action) => {
      state.pending = true;
      state.error = false;
    },
    [createCategory.fulfilled.type]: (state, action) => {
      state.pending = false;
      state.data.push(action.payload);
    },
    [createCategory.rejected.type]: (state, action) => {
      state.pending = false;
      state.error = true;
    },
    [getAllCategories.pending.type]: (state, action) => {
      state.pending = true;
      state.error = false;
    },
    [getAllCategories.fulfilled.type]: (state, action) => {
      state.pending = false;
      state.data = action.payload;
    },
    [getAllCategories.rejected.type]: (state, action) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { setSelectedId } = categoriesSlice.actions;
export default categoriesSlice.reducer;
