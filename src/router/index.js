import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Layout from 'components/Layout';
import {routerMap} from './config';

import style from './_switch.scss';

const renderRouteComponent = routes => routes.map((route) => {
  if (route.hasLayout) {
    const WrappedComponent = route.component;
    route.component = () => (
      <Layout><WrappedComponent /></Layout>
    );
  }
  return <Route key={route.name} {...route} />;
});
const routerComponents = renderRouteComponent(routerMap);

export default () => (
  <div>
    <Route render={({location, history}) => {
      return (
        <div>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className={style['switch-wrapper']}
          >
            {routerComponents}
          </AnimatedSwitch>
        </div>
      );
    }} />
  </div>
);
