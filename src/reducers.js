/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';

import history from 'utils/history';

// App global reducer
import globalReducer from 'containers/App/reducer';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,
    ...injectedReducers
  });

  // combine with router state
  /*
  connectRouter = history =>
    return (state = initialRouterState, { type, payload } = {}) => {
      if (type === LOCATION_CHANGE) {
        const { location, action, isFirstRendering } = payload
        return isFirstRendering
          ? state
          : merge(state, { location: fromJS(location), action })
      }
      return state
    }
  */
  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}
