import { all } from "redux-saga/effects";
import {
  followAddBannerAction,
  followAddEpisodeFilmAction,
  followAddNewFilmAction,
  followAddPopularFilmAction,
  followDeleteBannerAction,
  followDeleteDeleteFilmAction,
  followDeleteNewFilmFilmAction,
  followEditPopularFilmAction,
  followeEditNewFilmAction,
  followGetAllFilmAction,
  followGetBannerAction,
  followGetDetailFilmAction,
  followGetEpisodeFilmDetailAction,
  followGetListNewFilmAction,
  followGetListPopularFilmAction,
  followGetRecommendFilmAction,
} from "./manageFilm";

import {
  followCheckLoginAction,
  followDeleteUserAction,
  followGetAllUserAction,
  followLoginAction,
  followRegisterAction,
  followSearchUserAction,
  followUpdateUserAction,
} from "./manageUser";

export function* rootSaga() {
  yield all([
    followLoginAction(),
    followRegisterAction(),
    followCheckLoginAction(),
    followGetBannerAction(),
    followGetListPopularFilmAction(),
    followGetListNewFilmAction(),

    followGetAllUserAction(),
    followUpdateUserAction(),
    followDeleteUserAction(),
    followSearchUserAction(),
    followAddBannerAction(),
    followDeleteBannerAction(),
    followAddNewFilmAction(),
    followDeleteNewFilmFilmAction(),
    followeEditNewFilmAction(),
    followAddPopularFilmAction(),
    followDeleteDeleteFilmAction(),
    followEditPopularFilmAction(),
    followGetDetailFilmAction(),
    followAddEpisodeFilmAction(),
    followGetEpisodeFilmDetailAction(),
    followGetAllFilmAction(),
    followGetRecommendFilmAction(),
  ]);
}
