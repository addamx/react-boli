import { call, put, select, takeLatest, delay } from 'redux-saga/effects';

import * as type from './constants';
import { repoLoadError, repoLoadSuccess } from './actions';
import { makeSelectUsername } from './selectors';
import request from 'utils/request';

export function* getRepos() {
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    yield delay(500);
    const repos = yield call(request, requestURL);
    if (!Array.isArray(repos)) {
      throw new Error('something is wrong');
    }
    yield put(repoLoadSuccess(repos));
  } catch (err) {
    yield put(repoLoadError(err));
  }
}

export default function* githubData() {
  yield takeLatest(type.LOAD_REPOS, getRepos);
}
