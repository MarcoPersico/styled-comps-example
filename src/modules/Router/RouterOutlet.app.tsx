import { BrowserRouter, Switch } from 'react-router-dom';
import { GuardedRoute, GuardProvider } from 'react-router-guards';
import { GuardFunctionRouteProps, GuardToRoute, Next } from 'react-router-guards/dist/types';
import { APP_ROUTES, loginGuard } from '../../domain';
import LoginService from '../../services/login.service';

const RouterOutlet = () => {
  const routerGuards = [
    (to: GuardToRoute, from: GuardFunctionRouteProps | null, next: Next) => (
      loginGuard(to, from, next, LoginService.isLoggedIn)
    ),
  ];

  return (
    <BrowserRouter>
      <GuardProvider guards={routerGuards}>
        <Switch>
          {APP_ROUTES.map((route) => (
            <GuardedRoute
              key={route.path}
              path={route.path}
              exact={route.exact}
              meta={route.meta}
              component={route.component}
            />
          ))}
        </Switch>
      </GuardProvider>
    </BrowserRouter>
  );
};

export default RouterOutlet;
