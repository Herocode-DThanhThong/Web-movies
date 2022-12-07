import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import { managerFilm } from "../../services/ManagerFilm";
import { HIDE_DRAWER } from "../reducers/types/drawerTypes";
import {
  SET_ALL_FILM,
  SET_BANNER,
  SET_EPISODE_FILM_DETAIL,
  SET_FILM_DETAIL,
  SET_NEW_FILM,
  SET_POPULAR_FILM,
  SET_RECOMMEND_FILM,
} from "../reducers/types/filmTypes";
import { HIDE_LOADING, SHOW_LOADING } from "../reducers/types/loadingType";
import {
  GET_BANNER_SAGA,
  GET_LIST_NEW_FILM_SAGA,
  GET_LIST_POPULAR_FILM_SAGA,
} from "../sagas/contants/manageFilmContants";
export function* getBannerAction(action) {
  try {
    const { data } = yield call(() => managerFilm.getListBannerApi());
    const { success, content, message } = data;
    if (success) {
      yield put({
        type: SET_BANNER,
        lstBanner: content,
      });
      //   console.log("banner: ", content);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
}

export function* getListPopularFilmAction(action) {
  try {
    const { data } = yield call(() => managerFilm.getListPopularFilmApi());
    const { success, content, message } = data;
    if (success) {
      yield put({
        type: SET_POPULAR_FILM,
        lstPopularFilm: content,
      });
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
}

export function* getListNewFilmAction(action) {
  try {
    const { data } = yield call(() => managerFilm.getListNewFilmApi());
    const { success, content, message } = data;
    if (success) {
      yield put({
        type: SET_NEW_FILM,
        lstNewFilm: content,
      });
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
}

export function* addBannerFilmAction(action) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data } = yield call(() => managerFilm.addBannerApi(action.data));
    const { success, content, message } = data;
    if (success) {
      yield put({
        type: GET_BANNER_SAGA,
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

export function* deleteBannerAction(action) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data } = yield call(() => managerFilm.deleteBannerApi(action.id));
    const { success, content, message } = data;
    if (success) {
      yield put({
        type: GET_BANNER_SAGA,
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

export function* addNewFilmAction(action) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data } = yield call(() => managerFilm.addNewFilmApi(action.data));
    const { success, content, message } = data;
    if (success) {
      yield put({
        type: GET_LIST_NEW_FILM_SAGA,
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

export function* deleteNewFilmAction(action) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data } = yield call(() => managerFilm.deleteNewFilmApi(action.id));
    const { success, content, message } = data;
    if (success) {
      yield put({
        type: GET_LIST_NEW_FILM_SAGA,
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

export function* editNewFilmAction(action) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data } = yield call(() => managerFilm.editNewFilmApi(action.data));
    const { success, content, message } = data;
    if (success) {
      yield put({
        type: GET_LIST_NEW_FILM_SAGA,
      });
      yield put({
        type: HIDE_DRAWER,
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

export function* addPopularFilmAction(action) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data } = yield call(() =>
      managerFilm.addPopularFilmApi(action.data)
    );
    const { success, content, message } = data;
    if (success) {
      yield put({
        type: GET_LIST_POPULAR_FILM_SAGA,
      });
      yield put({
        type: HIDE_DRAWER,
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

export function* deletePopularFilmAction(action) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data } = yield call(() =>
      managerFilm.deletePopularFilmApi(action.id)
    );
    const { success, content, message } = data;
    if (success) {
      yield put({
        type: GET_LIST_POPULAR_FILM_SAGA,
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

export function* editPopularFilmAction(action) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data } = yield call(() =>
      managerFilm.editPopularFilmApi(action.data)
    );
    const { success, content, message } = data;
    if (success) {
      yield put({
        type: GET_LIST_POPULAR_FILM_SAGA,
      });
      yield put({
        type: HIDE_DRAWER,
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

export function* getDetailFilmAction(action) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data } = yield call(() => managerFilm.getFilmDetailApi(action.id));
    const { success, content, message } = data;
    if (success) {
      yield put({
        type: SET_FILM_DETAIL,
        data: content,
      });
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
  yield put({
    type: HIDE_LOADING,
  });
}

export function* addEpisodeFilmAction(action) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data } = yield call(() => managerFilm.addEpisodeApi(action.data));
    const { success, content, message } = data;
    if (success) {
      yield put({
        type: GET_LIST_NEW_FILM_SAGA,
      });
      yield put({
        type: GET_LIST_POPULAR_FILM_SAGA,
      });
      yield put({
        type: HIDE_DRAWER,
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

export function* getEpisodeFilmDetailAction(action) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data } = yield call(() =>
      managerFilm.getEpisodeDetailApi(action.id)
    );
    const { success, content, message } = data;
    if (success) {
      yield put({
        type: SET_EPISODE_FILM_DETAIL,
        data: content,
      });
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
  yield put({
    type: HIDE_LOADING,
  });
}

export function* getAllFilmAction(action) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data } = yield call(() => managerFilm.getAllFilmApi());
    const { success, content, message } = data;
    if (success) {
      yield put({
        type: SET_ALL_FILM,
        data: content,
      });
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
  yield put({
    type: HIDE_LOADING,
  });
}

export function* getRecommendFilmAction(action) {
  try {
    const { data } = yield call(() => managerFilm.getRecommendFilmApi());
    const { success, content, message } = data;
    if (success) {
      yield put({
        type: SET_RECOMMEND_FILM,
        data: content,
      });
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
}
