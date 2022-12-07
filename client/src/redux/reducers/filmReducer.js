import {
  SET_ALL_FILM,
  SET_BANNER,
  SET_EPISODE_FILM_DETAIL,
  SET_FILM_DETAIL,
  SET_NEW_FILM,
  SET_NEW_FILM_EDIT,
  SET_POPULAR_FILM,
  SET_POPULAR_FILM_EDIT,
  SET_RECOMMEND_FILM,
} from "./types/filmTypes";

const initialState = {
  allFilm: [],
  listBanner: [],
  listPopularFilm: [],
  listNewFilm: [],
  newFilmEdit: {},
  popularFilmEdit: {},
  filmDetail: {},
  episodeFilmDetail: [],
  recommendFilm: [],
};

const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BANNER: {
      return {
        ...state,
        listBanner: action.lstBanner,
      };
    }
    case SET_POPULAR_FILM: {
      return {
        ...state,
        listPopularFilm: action.lstPopularFilm,
      };
    }
    case SET_NEW_FILM: {
      return {
        ...state,
        listNewFilm: action.lstNewFilm,
      };
    }

    case SET_NEW_FILM_EDIT: {
      return {
        ...state,
        newFilmEdit: action.filmEdit,
      };
    }

    case SET_POPULAR_FILM_EDIT: {
      return {
        ...state,
        popularFilmEdit: action.filmEdit,
      };
    }

    case SET_FILM_DETAIL: {
      return {
        ...state,
        filmDetail: action.data,
      };
    }

    case SET_EPISODE_FILM_DETAIL: {
      return {
        ...state,
        episodeFilmDetail: action.data,
      };
    }

    case SET_ALL_FILM: {
      return { ...state, allFilm: action.data };
    }

    case SET_RECOMMEND_FILM: {
      return { ...state, recommendFilm: action.data };
    }

    default:
      return { ...state };
  }
};

export default filmReducer;
