import { State } from '../types';
import { ADMIN_PAGE_TITLE } from '../config/strings';

const initialState: State = {
  app: {
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
  },
  page: {
    title: ADMIN_PAGE_TITLE,
    breadcrumb: ['First', 'Second'],
    isFavorites: false,
  },
  tabs: {
    index: 0,
    items: [],
  },
  dialog: {},
};

export default initialState;
