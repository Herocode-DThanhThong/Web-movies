import {
  HIDE_DRAWER,
  OPEN_FORM_HOC,
  SET_SUBMIT_FORM_HOC,
  SHOW_DRAWER,
} from "./types/drawerTypes";

const initialState = {
  visible: false,
  ComponentContentDrawer: <p>Hello</p>,
  callBackSubmit: () => {
    alert("click demo!");
  },
  title: "",
};

const drawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_DRAWER: {
      return { ...state, visible: true };
    }

    case HIDE_DRAWER: {
      return { ...state, visible: false };
    }

    case OPEN_FORM_HOC: {
      return {
        ...state,
        visible: true,
        ComponentContentDrawer: action.ComponentContentDrawer,
        title: action.title,
      };
    }

    case SET_SUBMIT_FORM_HOC: {
      return { ...state, callBackSubmit: action.callBackSubmit };
    }

    default:
      return { ...state };
  }
};

export default drawerReducer;
