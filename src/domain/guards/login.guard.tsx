import { GuardFunctionRouteProps, GuardToRoute, Next } from 'react-router-guards/dist/types';
import { AUTH_ONLY } from '../constants';

export const loginGuard = async (
  to: GuardToRoute,
  from: GuardFunctionRouteProps | null,
  next: Next,
  isLoggedIn: () => boolean,
) => {
  if (to.meta[AUTH_ONLY] && !isLoggedIn()) {
    return next.redirect('/login');
  }
  if (to.match.path === '/login' && isLoggedIn()) {
    return next.redirect('/dashboard');
  }
  return next();
};

export default null;
