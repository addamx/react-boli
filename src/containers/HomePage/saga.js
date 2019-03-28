import {call, put, select, takeLatest} from 'redux-saga/effects';

import * as type from './constants';
import {reposLoad, repoLoadingError} from './actions';
import {makeSelectUsername} from './selectors';
import request from 'utils/request';

export function* getRepos() {
  // const username = yield select(makeSelectUsername());
  const username = 'addamx';
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    const repos = yield call(request, requestURL);
    // yield put(reposLoaded(repos, username));
  } catch(err) {
    yield put(repoLoadingError(err));
  }
}

export default function* githubData() {
  yield takeLatest(type.LOAD_REPOS, getRepos);
}
