import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import {ReactReduxContext} from 'react-redux';

import getInjectors from './reducerInjectors';

export default ({key, reducer}) => WrappedComponent => {
  class ReducerInjector extends React.Component {
    static WrappedComponent = WrappedComponent;

    static contextType = ReactReduxContext; //for react-redux @^6.0
    // for react-redux below @6.0
    // static contextTypes = {
    //   store: PropTypes.object.isRequired
    // };

    static displayName = `withReducer(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    componentWillMount() {
      const {injectReducer} = this.injectors;

      // 通知reducerInjector检查是否插入reducer并重置reducers
      injectReducer(key, reducer);
    }

    // 获取当前store的reducerInjector
    injectors = getInjectors(this.context.store);

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return hoistNonReactStatic(ReducerInjector, WrappedComponent);
};
