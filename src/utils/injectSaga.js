import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {ReactReduxContext} from 'react-redux';

import getInjectors from './sagaInjectors';

export default ({key, saga}) => WrappedComponent => {
  class InjectSaga extends React.Component {
    static WrappedComponent = WrappedComponent;

    static contextType = ReactReduxContext;

    static displayName = `withSaga(${WrappedComponent.displayName ||
      WrappedComponent.name ||
      'Component'})`;

    componentWillMount() {
      const { injectSaga } = this.injectors;

      injectSaga(key, { saga }, this.props);
    }

    injectors = getInjectors(this.context.store);

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return hoistNonReactStatics(InjectSaga, WrappedComponent);
};
