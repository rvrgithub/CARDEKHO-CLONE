import thunk from "redux-thunk";

import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { reducer as AppReducer } from "./AppReducer/reducer";
const rootReducer = combineReducers({
  AppReducer: AppReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
