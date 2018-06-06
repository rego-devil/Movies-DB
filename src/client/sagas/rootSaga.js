import { all } from 'redux-saga/effects';

import watchFilmsAsync from './films';
import watchFilmByIDAsync from './films-by-id';

export default function* rootSaga() {
  yield all([
    watchFilmsAsync(),
    watchFilmByIDAsync()
  ]);
}
