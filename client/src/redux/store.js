import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import checkLoginReducer from "./reducers/checkLoginReducer";
import drawerReducer from "./reducers/drawerReducer";
import filmReducer from "./reducers/filmReducer";
import loadingReducer from "./reducers/loadingReducer";
import navigateReducer from "./reducers/navigateReducer";
import theaterReducer from "./reducers/theaterReducer";
import userReducer from "./reducers/userReducer";
import watchingReducer from "./reducers/watchingReducer";
import { rootSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  navigateReducer,
  loadingReducer,
  checkLoginReducer,
  filmReducer,
  theaterReducer,
  userReducer,
  drawerReducer,
  watchingReducer,
});
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
