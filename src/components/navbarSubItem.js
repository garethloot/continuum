(() => ({
  name: 'navbarSubItem',
  type: 'NAV_ITEM',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { useText, env, useEndpoint } = B;
    const { label, endpoint, visible, linkType, linkToExternal } = options;

    const isDev = env === 'dev';

    const history = !isDev && useHistory();

    const [isVisible, setIsVisible] = useState(visible);

    const hideButton = () => setIsVisible(false);
    const showButton = () => setIsVisible(true);
    const toggleVisibility = () => setIsVisible(s => !s);

    B.defineFunction('Show', showButton);
    B.defineFunction('Hide', hideButton);
    B.defineFunction('ToggleVisibility', toggleVisibility);

    function clickHandler() {
      if (linkType === 'endpoint' && endpoint) {
        history.push(useEndpoint(endpoint));
      }
      if (linkType === 'external' && linkToExternal !== []) {
        window.location.href = useText(linkToExternal);
      }
    }

    if (isDev) {
      return (
        <div onClick={clickHandler} className={classes.root}>
          {useText(label)}
        </div>
      );
    }

    return isVisible ? (
      <div onClick={clickHandler} className={classes.root}>
        {useText(label)}
      </div>
    ) : (
      <></>
    );
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      root: {
        marginTop: '16px',
        cursor: 'pointer',
        '&:first-child': {
          marginTop: '0px !important',
        },
      },
    };
  },
}))();
