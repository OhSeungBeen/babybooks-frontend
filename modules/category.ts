import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CategoryState {
  parentId?: string;
  id: string;
  name: string;
  children?: CategoryState[];
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

const initialState: CategoryState = {
  parentId: '',
  id: '0',
  name: '',
  data: {
    code: '',
    visible: true,
    use: true,
    menuType: 'text',
    titleType: 'text',
    menuText: '',
    titleText: '',
    menuImage: '',
    titleImage: '',
    cornerNumber: '',
    registerId: '',
    modifierId: '',
    registeredDate: '',
    modifiedDate: '',
  },
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<CategoryState>) => {
      return action.payload;
    },
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setVisible: (state, action: PayloadAction<boolean>) => {
      state.data.visible = action.payload;
    },
    setUse: (state, action: PayloadAction<boolean>) => {
      state.data.use = action.payload;
    },
    setMenuType: (state, action: PayloadAction<'image' | 'text'>) => {
      state.data.menuType = action.payload;
    },
    setMenuText: (state, action: PayloadAction<string>) => {
      state.data.menuText = action.payload;
    },
    setMenuImage: (state, action: PayloadAction<string>) => {
      state.data.menuImage = action.payload;
    },
    setTitleType: (state, action: PayloadAction<'image' | 'text'>) => {
      state.data.titleType = action.payload;
    },
    setTitleText: (state, action: PayloadAction<string>) => {
      state.data.titleText = action.payload;
    },
    setTitleImage: (state, action: PayloadAction<string>) => {
      state.data.titleImage = action.payload;
    },
  },
});

export const {
  setCategory,
  changeName,
  setVisible,
  setUse,
  setMenuType,
  setMenuText,
  setMenuImage,
  setTitleType,
  setTitleText,
  setTitleImage,
} = categorySlice.actions;
export default categorySlice.reducer;
