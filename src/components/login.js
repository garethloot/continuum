(() => ({
  name: 'login',
  type: 'BODY_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { jwtToken, refreshToken, loginEndpoint, redirect } = options;
    const { useText, env, defineFunction, useEndpoint } = B;
    const isDev = env === 'dev';

    const history = !isDev && useHistory();

    const value = 'Login';

    function login() {
      if (jwtToken && refreshToken && !loginEndpoint) {
        localStorage.setItem('TOKEN', useText(jwtToken));
        localStorage.setItem('REFRESH_TOKEN', useText(refreshToken));
      }
    }
    login();

    function redirectTo() {
      const url = localStorage.getItem('redirect') || useEndpoint(redirect);
      if (url) {
        history.push(url);
      }
    }

    function goToLogin() {
      localStorage.setItem('redirect', window.location.pathname);
      const webblocks = `https://${artifact.applicationIdentifier}.bettywebblocks.com${loginEndpoint}`;
      window.location.replace(webblocks);
    }

    useEffect(() => {
      defineFunction('GoToEndpoint', goToLogin);
      defineFunction('redirect', redirectTo);
    }, []);

    return <div className={classes.root}>{isDev ? value : null}</div>;
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      root: {},
      hide: {
        display: 'none',
      },
    };
  },
}))();
