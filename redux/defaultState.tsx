import { State } from "../types";
import { ADMIN_PAGE_TITLE } from "../config/strings";

const initialState: State = {
  siteInfo: {
    title: ADMIN_PAGE_TITLE,
  },
  tabs: {
    index: 0,
    items: [],
  },
  navigator: ["First", "Second"]
};

export default initialState;
