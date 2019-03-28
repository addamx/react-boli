import {createAction} from 'redux-actions';
import * as type from './constants';

export const changeUserName = createAction(type.CHANGE_NAME);

export const reposLoad = createAction(type.LOAD_REPOS);

export const repoLoadingError = createAction(type.LOAD_ERROR);
