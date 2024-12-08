import { combineReducers } from "redux";
import {
  ApplicationReducer,
  ApplicationState,
} from "./Business/ApplicationReducer";

export type InstanceState = {
  application: ApplicationState;
};

const reducers = combineReducers({
  application: ApplicationReducer,
});

export default reducers;
