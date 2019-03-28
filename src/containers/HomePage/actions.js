import { createAction } from 'redux-actions';
import * as type from './constants';

export const changeUserName = createAction(type.CHANGE_NAME);

export const reposLoad = createAction(type.LOAD_REPOS);

export const repoLoadSuccess= createAction(type.LOAD_REPOS_SUCCESS);

export const repoLoadError= createAction(type.LOAD_REPOS_ERROR);
