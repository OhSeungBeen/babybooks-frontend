import { ADMIN_PAGE_TITLE } from "config/strings";
import { State } from "types";

const initialState: State = {
  app: {
    sideBar: {
      width: "250px",
      isShow: true,
    },
  },
  page: {
    title: ADMIN_PAGE_TITLE,
    breadcrumb: ["First", "Second"],
    isFavorites: false,
  },
  tabs: {
    index: 0,
    items: [],
  },
  dialog: {},
};

export default initialState;
