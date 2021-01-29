(() => ({
  name: 'login',
  type: 'BODY_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { jwtToken, refreshToken, loginEndpoint, redirect, userId } = options;
    const { useProperty, useText, env, useEndpoint } = B;
    const isDev = env === 'dev';

    const history = !isDev && useHistory();
    const wuser = !isDev && useProperty(userId);

    if (wuser) {
      console.log(wuser);
      localStorage.setItem('wuser', wuser);
    }

    const value = 'Login';

    function login() {
      const jwt = useText(jwtToken);
      const refresh = useText(refreshToken);
      if (jwt !== '' && refresh !== '' && !loginEndpoint) {
        localStorage.setItem('TOKEN', useText(jwtToken));
        localStorage.setItem('REFRESH_TOKEN', useText(refreshToken));
      }
    }

    login();

    function redirectTo() {
      const url = localStorage.getItem('redirect') || useEndpoint(redirect);
      if (url !== '/login') {
        history.push(url);
      }
    }

    function goToLogin() {
      console.log('go to login function');
      localStorage.setItem('redirect', window.location.pathname);
      const webblocks = `https://${artifact.applicationIdentifier}.bettywebblocks.com${loginEndpoint}`;
      window.location.replace(webblocks);
    }

    useEffect(() => {
      B.defineFunction('GoToEndpoint', goToLogin);
      B.defineFunction('redirect', redirectTo);
    }, []);

    return <div className={classes.root}>{isDev ? value : ''}</div>;
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
