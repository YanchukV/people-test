import {takeEvery, call, put} from "redux-saga/effects";

import api from "../../../services/api";
import {ActionType, PeopleActionTypes, GetPeopleSaga} from "./types";

export const getPeopleSaga = (): PeopleActionTypes => ({
  type: ActionType.GET_PEOPLE_SAGA
});
export const setIsPeopleLoading = (payload: boolean): PeopleActionTypes => ({
  type: ActionType.SET_IS_PEOPLE_LOADING,
  payload
});
export const setIsPeopleError = (payload: boolean): PeopleActionTypes => ({
  type: ActionType.SET_IS_PEOPLE_ERROR,
  payload
});
export const setPeople = (payload: []): PeopleActionTypes => ({
  type: ActionType.SET_PEOPLE, payload
});


export function* sagaOnGetPeople(action: GetPeopleSaga) {
  try {
    yield put(setIsPeopleLoading(true));
    const {data, status} = yield call(api.app.getPeople);
    if (status >= 200 && status < 300) {
      yield put(setPeople(data?.results));
    }
  } catch (error) {
    console.error(error);
    setIsPeopleError(true)
  } finally {
    yield put(setIsPeopleLoading(false));
  }
}

export function* peopleSagaWatchers() {
  yield takeEvery(ActionType.GET_PEOPLE_SAGA, sagaOnGetPeople);
}