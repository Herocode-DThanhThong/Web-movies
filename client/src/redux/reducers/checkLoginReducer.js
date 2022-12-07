import { CHECK_ADMIN, CHECK_LOGIN } from "./types/checkLogin";
import { HIDE_LOADING, SHOW_LOADING } from "./types/loadingType";
import { ADD_NAVIGATE } from "./types/navigateType";

const initialState = {
  isLogin: null,
  isAdmin: null,
};

const checkLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_LOGIN: {
      return { ...state, isLogin: action.isLogin };
    }
    case CHECK_ADMIN: {
      return { ...state, isAdmin: action.isAdmin };
    }
    default:
      return { ...state };
  }
};

export default checkLoginReducer;
