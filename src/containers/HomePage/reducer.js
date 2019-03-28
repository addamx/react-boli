import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import * as type from './constants';

export const initialState = fromJS({
  username: '',
  githubData: '',
  error: ''
});

export default handleActions(
  {
    [type.CHANGE_NAME]: (state, action) =>
      state.set('username', action.payload),

    [type.LOAD_REPOS_SUCCESS]: (state, action) =>
      state.set('githubData', action.payload),

    [type.LOAD_REPOS_ERROR]: (state, action) =>
      state.set('error', action.payload)
  },
  initialState
);
