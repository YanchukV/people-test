import { all, fork } from "redux-saga/effects";

import { peopleSagaWatchers } from "../app/components/People/actions";

const sagas = [
  peopleSagaWatchers
];

export function* rootSaga() {
  yield all(sagas.map(fork));
}