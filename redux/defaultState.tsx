import { State } from "../types";
import { ADMIN_PAGE_TITLE } from "../config/strings";

const initialState: State = {
  siteInfo: {
    title: ADMIN_PAGE_TITLE,
  },
};

export default initialState;
