import { createSelector } from "reselect";
import { AppState } from "../../../store/rootReducer";
import { PeopleState } from "./types";

export const getPeople = (state: AppState) => state.peopleReducer;
export const isPeopleLoading = createSelector(getPeople, (peopleReducer:PeopleState) => peopleReducer.isLoading);
export const getPeopleList = createSelector(getPeople, (peopleReducer:PeopleState) => peopleReducer.people);