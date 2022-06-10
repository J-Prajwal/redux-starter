import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/auth.reducer";
import { feedReducer } from "./Feed/feed.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  feed: feedReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
//reducers are not ready
