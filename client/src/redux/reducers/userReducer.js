import { SET_ALL_USER, SET_USER_EDIT } from "./types/userType";

const initialState = {
  allUser: [],
  userEdit: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_USER: {
      return { ...state, allUser: action.users };
    }
    case SET_USER_EDIT: {
      return { ...state, userEdit: action.userEdit };
    }
    default:
      return { ...state };
  }
};

export default userReducer;
