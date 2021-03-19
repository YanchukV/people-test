import { ActionType, PeopleState, PeopleActionTypes } from "./types";

export const initPeople: PeopleState = {
  people: null,
  isLoading: false,
  isError: null,
};

export const peopleReducer = (state = initPeople, action: PeopleActionTypes) => {
  switch (action?.type) {

    case ActionType.SET_IS_PEOPLE_LOADING:
      return { ...state, isLoading: action?.payload };

    case ActionType.SET_IS_PEOPLE_ERROR:
      return { ...state, isLoading: false, isError: action?.payload };

    case ActionType.SET_PEOPLE:
      return { ...state, people: action?.payload, isLoading: false };

    default:
      return state;
  }
};