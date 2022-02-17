import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface SideBar {
  width: string;
  isShow: boolean;
}

export interface Header {
  height: string;
}

export interface Footer {
  height: string;
}

export interface AppState {
  sideBar: SideBar;
  header: Header;
  footer: Footer;
}

const initialState: AppState = {
  sideBar: {
    width: '250px',
    isShow: true,
  },
  header: {
    height: '64px',
  },
  footer: {
    height: '40px',
  },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSideBar: (state, { payload: sideBar }: PayloadAction<SideBar>) => {
      return { ...state, sideBar };
    },
    setShowSideBar: (state, { payload: isShow }: PayloadAction<boolean>) => {
      return { ...state, sideBar: { ...state.sideBar, isShow } };
    },
  },
});

export const { setSideBar, setShowSideBar } = appSlice.actions;
export default appSlice.reducer;
