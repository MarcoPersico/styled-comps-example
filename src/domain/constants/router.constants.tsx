import RouterRedirector from '../../modules/Router/RouterRedirector.app';
import { Route } from '../models';

export const AUTH_ONLY = 'AUTH_ONLY';

const TestComp = () => (
  <div>Test</div>
);

export const APP_ROUTES: Route[] = [
  {
    path: '/login',
    exact: true,
    component: TestComp,
  },
  {
    path: '/dashboard',
    exact: true,
    component: TestComp,
    meta: {
      [AUTH_ONLY]: true,
    },
  },
  {
    path: '/',
    component: RouterRedirector,
    ignoreGlobal: true,
  },
  {
    path: '*',
    component: RouterRedirector,
    ignoreGlobal: true,
  },
];
