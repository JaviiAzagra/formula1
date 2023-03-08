import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./auth/auth.reducer";
import driversReducer from "./drivers/drivers.reducer";
import teamsReducer from "./teams/teams.reducer";

const rootReducer = combineReducers({
  drivers: driversReducer,
  teams: teamsReducer,
  auth: authReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;