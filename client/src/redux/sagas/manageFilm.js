import { takeLatest } from "redux-saga/effects";
import {
  addBannerFilmAction,
  addEpisodeFilmAction,
  addNewFilmAction,
  addPopularFilmAction,
  deleteBannerAction,
  deleteNewFilmAction,
  deletePopularFilmAction,
  editNewFilmAction,
  editPopularFilmAction,
  getAllFilmAction,
  getBannerAction,
  getDetailFilmAction,
  getEpisodeFilmDetailAction,
  getListNewFilmAction,
  getListPopularFilmAction,
  getRecommendFilmAction,
} from "../actions/manageFilmAction";
import {
  ADD_BANNER_SAGA,
  ADD_EPISODE_FILM_SAGA,
  ADD_NEW_FILM_SAGA,
  ADD_POPULAR_FILM_SAGA,
  DELETE_BANNER_SAGA,
  DELETE_NEW_FILM_SAGA,
  DELETE_POPULAR_FILM_SAGA,
  EDIT_NEW_FILM_SAGA,
  EDIT_POPULAR_FILM_SAGA,
  GET_ALL_FILM_SAGA,
  GET_BANNER_SAGA,
  GET_DETAIL_FILM_SAGA,
  GET_EPISODE_FILM_DETAIL_SAGA,
  GET_LIST_NEW_FILM_SAGA,
  GET_LIST_POPULAR_FILM_SAGA,
  GET_RECOMMEND_FILM_SAGA,
} from "./contants/manageFilmContants";

export function* followGetBannerAction() {
  yield takeLatest(GET_BANNER_SAGA, getBannerAction);
}

export function* followGetAllFilmAction() {
  yield takeLatest(GET_ALL_FILM_SAGA, getAllFilmAction);
}

export function* followGetListPopularFilmAction() {
  yield takeLatest(GET_LIST_POPULAR_FILM_SAGA, getListPopularFilmAction);
}

export function* followGetListNewFilmAction() {
  yield takeLatest(GET_LIST_NEW_FILM_SAGA, getListNewFilmAction);
}

export function* followAddBannerAction() {
  yield takeLatest(ADD_BANNER_SAGA, addBannerFilmAction);
}

export function* followDeleteBannerAction() {
  yield takeLatest(DELETE_BANNER_SAGA, deleteBannerAction);
}

export function* followAddNewFilmAction() {
  yield takeLatest(ADD_NEW_FILM_SAGA, addNewFilmAction);
}

export function* followDeleteNewFilmFilmAction() {
  yield takeLatest(DELETE_NEW_FILM_SAGA, deleteNewFilmAction);
}

export function* followeEditNewFilmAction() {
  yield takeLatest(EDIT_NEW_FILM_SAGA, editNewFilmAction);
}

export function* followAddPopularFilmAction() {
  yield takeLatest(ADD_POPULAR_FILM_SAGA, addPopularFilmAction);
}

export function* followEditPopularFilmAction() {
  yield takeLatest(EDIT_POPULAR_FILM_SAGA, editPopularFilmAction);
}

export function* followDeleteDeleteFilmAction() {
  yield takeLatest(DELETE_POPULAR_FILM_SAGA, deletePopularFilmAction);
}

export function* followGetDetailFilmAction() {
  yield takeLatest(GET_DETAIL_FILM_SAGA, getDetailFilmAction);
}

export function* followAddEpisodeFilmAction() {
  yield takeLatest(ADD_EPISODE_FILM_SAGA, addEpisodeFilmAction);
}

export function* followGetEpisodeFilmDetailAction() {
  yield takeLatest(GET_EPISODE_FILM_DETAIL_SAGA, getEpisodeFilmDetailAction);
}

export function* followGetRecommendFilmAction() {
  yield takeLatest(GET_RECOMMEND_FILM_SAGA, getRecommendFilmAction);
}
