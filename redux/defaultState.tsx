import { State } from "../types";
import { ADMIN_PAGE_TITLE } from "../config/strings";

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
};

export default initialState;
