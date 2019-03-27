import { fromJS } from 'immutable';
import { LOAD_DATA_SUCCESS, LOAD_DATA, LOAD_DATA_ERROR } from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    name: false
  }
});

function appReducer(state = initialState, action) {
  switch (action.type) {
  case LOAD_DATA:
    return state
      .set('loading', true)
      .set('error', false)
      .setIn(['userData', 'name'], false);
  case LOAD_DATA_SUCCESS:
    return state
      .setIn(['userData', 'name'], action.name)
      .set('loading', false)
      .set('currentUser', action.id);
  case LOAD_DATA_ERROR:
    return state
      .set('error', action.error)
      .set('loading', false);
  default:
    return state;
  }
}

export default appReducer;
