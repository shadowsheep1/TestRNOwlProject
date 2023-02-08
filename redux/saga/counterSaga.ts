import { all, call, put, fork, takeEvery, takeLatest } from 'redux-saga/effects'
import { CounterAction } from '../actions/counterAction';

export function* logCount(action: CounterAction) {
    console.log(`🦄 -> ${action.type}`)
}

export function* watchAll() {
    yield all([
        increaseSaga(),
        decreaseSaga()
      ]);
}

export function* increaseSaga() {
    yield takeEvery('COUNT_INCREASE' , logCount);
}

export function* decreaseSaga() {
    yield takeEvery('COUNT_DECREASE' , logCount);
}
/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export function* increaseLatestSaga() {
    yield takeLatest('COUNT_INCREASE' , logCount);
}

export function* decreaseLatestSaga() {
    yield takeLatest('DECREASE_INCREASE' , logCount);
}