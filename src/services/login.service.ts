class LoginService {
  public static isLoggedIn(): boolean {
    return !!document.cookie.match('auth_check');
  }
}

export default LoginService;
