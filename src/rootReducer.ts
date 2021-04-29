import { useSelector, useDispatch } from "react-redux";
import {
  combineReducers,
  bindActionCreators,
  createStore,
  applyMiddleware
} from "redux";
import { counterReducer } from "./reducers";

import thunk from "redux-thunk";
// import rootReducer from './reducers/index';

// Note: this API requires redux@>=3.1.0
// const store = createStore(
// rootReducer,
// applyMiddleware(thunk)
// );
const rootReducer = combineReducers({
  counter: counterReducer
});
export type RootReducerType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));
