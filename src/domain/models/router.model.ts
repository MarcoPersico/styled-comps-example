export interface Route {
  path: string,
  route?: string,
  exact?: boolean,
  meta?: { AUTH_ONLY: boolean },
  component: () => JSX.Element,
  ignoreGlobal?: boolean,
}

export default null;
