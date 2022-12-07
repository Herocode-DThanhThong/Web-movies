import { toast } from "react-toastify";
import { call, put, select } from "redux-saga/effects";
import { manageUser } from "../../services/ManagerUser";
import { setInfoUser, setToken } from "../../utils/common/setLocalStorage";
import { CHECK_ADMIN, CHECK_LOGIN } from "../reducers/types/checkLogin";
import { HIDE_LOADING, SHOW_LOADING } from "../reducers/types/loadingType";
import { SET_ALL_USER } from "../reducers/types/userType";
import { GET_ALL_USER_SAGA } from "../sagas/contants/manageUserContants";
export function* registerUserAction(action) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data } = yield call(() => manageUser.registerApi(action.userData));
    const { success, content, message } = data;
    if (success) {
      // Notify for user
      toast.success(message);
      // Navigate
      const { navigate } = yield select((state) => state.navigateReducer);
      navigate("/login");
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
  yield put({
    type: HIDE_LOADING,
  });
}

export function* loginUserAction(action) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data } = yield call(() => manageUser.loginApi(action.userData));
    const { success, content, message } = data;

    if (success) {
      // Save token local
      setToken(content.token);

      // Save info local
      setInfoUser(data);

      // Notify for user
      toast.success(message);

      // Navigate
      const { navigate } = yield select((state) => state.navigateReducer);
      navigate("/home");
    }
  } catch (error) {
    console.log(error);
    // console.log(error.response.data);
    toast.error(error.response.data.message);
  }

  yield put({
    type: HIDE_LOADING,
  });
}

export function* checkLoginAction(action) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data } = yield call(() => manageUser.checkLoginApi());
    const { success, content, message } = data;

    if (success) {
      yield put({
        type: CHECK_LOGIN,
        isLogin: true,
      });
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: CHECK_LOGIN,
      isLogin: false,
    });
  }
  yield put({
    type: HIDE_LOADING,
  });
}

export function* checkAdminAction(action) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data } = yield call(() => manageUser.checkAdminApi());
    const { success, message } = data;
    if (success) {
      yield put({
        type: CHECK_ADMIN,
        isAdmin: true,
      });
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: CHECK_ADMIN,
      isAdmin: false,
    });
  }
  yield put({
    type: HIDE_LOADING,
  });
}

export function* getAllUserAction(action) {
  const { navigate } = yield select((state) => state.navigateReducer);
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data } = yield call(() => manageUser.getAllUserApi());
    const { success, users } = data;
    if (success) {
      yield put({
        type: SET_ALL_USER,
        users,
      });
    }
  } catch (error) {
    console.log(error);
    navigate("/");
  }
  yield put({
    type: HIDE_LOADING,
  });
}

export function* updateUserAction(action) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data } = yield call(() => manageUser.editUserApi(action.data));
    const { success, message } = data;
    if (success) {
      yield put({
        type: GET_ALL_USER_SAGA,
      });
      toast.success(message);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
  yield put({
    type: HIDE_LOADING,
  });
}

export function* deleteUserAction(action) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data } = yield call(() => manageUser.deleteUserApi(action.id));
    const { success, message } = data;
    if (success) {
      yield put({
        type: GET_ALL_USER_SAGA,
      });
      toast.success(message);
    }
  } catch (error) {
    console.log(error);
  }
  yield put({
    type: HIDE_LOADING,
  });
}

export function* searchUserAction(action) {
  try {
    const { data } = yield call(() =>
      manageUser.searchUserApi(action.username)
    );
    const { success, users } = data;
    console.log("users: ", users);
    if (success) {
      yield put({
        type: SET_ALL_USER,
        users,
      });
    }
  } catch (error) {
    console.log(error);
  }
}
