import { ADD_NAVIGATE } from "./types/navigateType";

const initialState = {
  navigate: null,
};

const navigateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAVIGATE: {
      return {
        ...state,
        navigate: action.navigate,
      };
    }
    default:
      return { ...state };
  }
};

export default navigateReducer;
