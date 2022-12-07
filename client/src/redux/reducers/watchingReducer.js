import { SET_FILM_WATCHING } from "./types/watchingReducer";

const initialState = {
  idFilmPlaying: "",
  numberEpisode: 1,
};

const watchingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILM_WATCHING: {
      return {
        ...state,
        idFilmPlaying: action.idYoutube,
        numberEpisode: action.number,
      };
    }
    default:
      return { ...state };
  }
};

export default watchingReducer;
