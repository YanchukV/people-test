export interface Person {
  name: string;
  birth_year: string,
}

export type People = Person[] | null;

export interface PeopleState {
  people: People | null;
  isLoading: boolean;
  isError: boolean | null;
}

export enum ActionType {
  GET_PEOPLE_SAGA = "GET_PEOPLE_SAGA",
  SET_IS_PEOPLE_LOADING = "SET_IS_PEOPLE_LOADING",
  SET_IS_PEOPLE_ERROR = "SET_IS_PEOPLE_ERROR",
  SET_PEOPLE = "SET_PEOPLE",
}

export type GetPeopleSaga = {
  type: ActionType.GET_PEOPLE_SAGA;
};

export type SetIsPeopleLoading = {
  type: ActionType.SET_IS_PEOPLE_LOADING;
  payload: {};
};

export type SetIsPeopleError = {
  type: ActionType.SET_IS_PEOPLE_ERROR;
  payload: {};
};

export type SetPeople = {
  type: ActionType.SET_PEOPLE;
  payload: [];
};

export type PeopleActionTypes =
  | GetPeopleSaga
  | SetIsPeopleLoading
  | SetIsPeopleError
  | SetPeople;