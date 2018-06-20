import { put, takeEvery, call } from 'redux-saga/effects';
import Api from '../api';
import * as actions from '../actions';

export function* fetchFilmAsync(action) {
  yield put(actions.saveSearchParemeters(action.payload));
  yield put(actions.startFetchFilms());

  try {
    const response = yield call(json => new Api(json).fetchJSON(), action.payload);
    yield put(actions.getFilms(response));
  } catch (e) {
    yield put(actions.abortGetFilms(e.message));
  }
}

export default function* watchFilmsAsync() {
  yield takeEvery('FETCH_FILMS_ASYNC', fetchFilmAsync);
}
