import { combineReducers } from "redux";

import { peopleReducer } from "../app/components/People/reducer";

export const rootReducer = combineReducers({
  peopleReducer
});

export type AppState = ReturnType<typeof rootReducer>;