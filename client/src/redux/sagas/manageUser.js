import { takeLatest } from "redux-saga/effects";
import {
  checkLoginAction,
  deleteUserAction,
  getAllUserAction,
  loginUserAction,
  registerUserAction,
  searchUserAction,
  updateUserAction,
} from "../actions/manageUserActions";
import {
  CHECK_LOGIN_SAGA,
  DELETE_USER_SAGA,
  GET_ALL_USER_SAGA,
  LOGIN_USER_SAGA,
  REGISTER_USER_SAGA,
  SEARCH_USER_SAGA,
  UPDATE_USER_SAGA,
} from "./contants/manageUserContants";

export function* followLoginAction() {
  yield takeLatest(LOGIN_USER_SAGA, loginUserAction);
}

export function* followRegisterAction() {
  yield takeLatest(REGISTER_USER_SAGA, registerUserAction);
}

export function* followCheckLoginAction() {
  yield takeLatest(CHECK_LOGIN_SAGA, checkLoginAction);
}

export function* followGetAllUserAction() {
  yield takeLatest(GET_ALL_USER_SAGA, getAllUserAction);
}

export function* followUpdateUserAction() {
  yield takeLatest(UPDATE_USER_SAGA, updateUserAction);
}

export function* followDeleteUserAction() {
  yield takeLatest(DELETE_USER_SAGA, deleteUserAction);
}

export function* followSearchUserAction() {
  yield takeLatest(SEARCH_USER_SAGA, searchUserAction);
}
