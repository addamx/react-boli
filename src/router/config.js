import loadable from 'loadable-components';
import LoadingIndicator from 'components/LoadingIndicator';
import NotFound from 'containers/ErrorPage/404';

export const _import_component = file => loadable(() => import(`components/${file}`));

export const _import_page = file => loadable(() => import(`containers/${file}`), {
  LoadingComponent: LoadingIndicator,
});

export const routerMap = [
  {
    path: '/',
    name: '首页',
    exact: true,
    hasLayout: true,
    component: _import_page('HomePage')
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  }
];
