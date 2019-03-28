import {createSelector} from 'reselect';
import {initialState} from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectUsername = () =>
  createSelector(selectHome, homeState =>  homeState.get('username'));

const makeSelectRepos = () =>
  createSelector(selectHome, homeState => homeState.get('githubData'));

export {
  selectHome,
  makeSelectUsername,
  makeSelectRepos,
};
