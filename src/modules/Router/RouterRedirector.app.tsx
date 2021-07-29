import { Redirect } from 'react-router-dom';
import LoginService from '../../services/login.service';

const RouterRedirector = () => {
  const checkRedirection = () => {
    let path = '/login';
    if (LoginService.isLoggedIn()) {
      path = '/dashboard';
    }
    return <Redirect to={path} />;
  };

  return checkRedirection();
};

export default RouterRedirector;
