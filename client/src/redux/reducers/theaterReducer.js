import { CHECK_LOGIN } from "./types/checkLogin";
import { SET_BANNER, SET_NEW_FILM, SET_POPULAR_FILM } from "./types/filmTypes";
import { HIDE_LOADING, SHOW_LOADING } from "./types/loadingType";
import { ADD_NAVIGATE } from "./types/navigateType";
import {
  SET_LIST_CHILDREN_SYSTEM_THEATER,
  SET_LIST_SYSTEM_THEATER,
} from "./types/theaterType";

const initialState = {
  listSystemTheater: [],
  listChilrenSysTheater: [],
};

const theaterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST_SYSTEM_THEATER: {
      return {
        ...state,
        listSystemTheater: action.lstSysTheater,
      };
    }
    case SET_LIST_CHILDREN_SYSTEM_THEATER: {
      return {
        ...state,
        listChilrenSysTheater: action.lstChilrenSysTheater,
      };
    }
    default:
      return { ...state };
  }
};

export default theaterReducer;
