import {fromJS} from 'immutable';
import {handleActions} from 'redux-actions';
import * as type from './constants';

export const initialState = fromJS({
  username: '',
  githubData: ''
});

export default handleActions(
  {
    [type.CHANGE_NAME]: state => {
      return state.set('username', 'Addams');
    },
    [type.LOAD_REPOS]: (state, action)=> {
      console.log(action);
      return state.set('githubData', action.payload);
    }
  },
  initialState
);
