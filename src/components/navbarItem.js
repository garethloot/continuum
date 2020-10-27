(() => ({
  name: 'navbarItem',
  type: 'CONTENT_COMPONENT',
  allowedTypes: ['NAV_ITEM'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const {
      text,
      showPopup,
      endpoint,
      visible,
      linkType,
      linkToExternal,
    } = options;
    const { useText, env, useEndpoint } = B;

    const isDev = env === 'dev';
    const hasItems = children.length > 0;
    const popupRef = useRef(null);
    const navitemRef = useRef(null);

    const [hover, setHover] = useState(false);

    const [isVisible, setIsVisible] = useState(visible);

    const hideButton = () => setIsVisible(false);
    const showButton = () => setIsVisible(true);
    const toggleVisibility = () => setIsVisible(s => !s);

    useEffect(() => {
      B.defineFunction('Show', showButton);
      B.defineFunction('Hide', hideButton);
      B.defineFunction('ToggleVisibility', toggleVisibility);
    }, []);

    const history = !isDev && useHistory();

    function popupHandler() {
      const rect = navitemRef.current.getBoundingClientRect();
      const half = navitemRef.current.offsetWidth / 2;
      popupRef.current.style.top = `${rect.top + 35}px`;
      popupRef.current.style.left = `${rect.left + half - 110}px`;
    }

    function mouseEnter() {
      if (hasItems) {
        popupHandler();
        setHover(true);
      }
    }

    function mouseLeave(e, t) {
      if (t === 'nav') {
        const navRect = navitemRef.current.getBoundingClientRect();
        if (
          e.pageX <= navRect.left ||
          e.pageY <= navRect.top ||
          e.pageX + 1 >= navRect.right
        ) {
          setHover(false);
        }
      } else {
        setHover(false);
      }
    }

    useEffect(() => {
      if (showPopup) {
        popupHandler();
      }
    }, [showPopup]);

    function clickHandler() {
      if (linkType === 'endpoint' && endpoint) {
        history.push(useEndpoint(endpoint));
      }
      if (linkType === 'external' && linkToExternal !== []) {
        window.location.href = useText(linkToExternal);
      }
    }

    function popup() {
      return isDev ? (
        <div ref={popupRef} className={classes.popup}>
          {children}
        </div>
      ) : (
        <div
          onMouseLeave={e => mouseLeave(e, 'popup')}
          ref={popupRef}
          className={[classes.popup, hover ? classes.show : classes.hide].join(
            ' ',
          )}
        >
          {children}
        </div>
      );
    }

    function navbarItem() {
      return isDev ? (
        <div className={classes.navbarItem} ref={navitemRef}>
          {useText(text)}
        </div>
      ) : (
        <div
          className={classes.navbarItem}
          onMouseEnter={mouseEnter}
          onMouseLeave={e => mouseLeave(e, 'nav')}
          onClick={clickHandler}
          ref={navitemRef}
        >
          {useText(text)}
        </div>
      );
    }

    if (isDev) {
      return (
        <div className={classes.root}>
          {navbarItem()}
          {showPopup ? popup() : null}
        </div>
      );
    }

    return isVisible ? (
      <div className={classes.root}>
        {navbarItem()}
        {popup()}
      </div>
    ) : (
      <></>
    );
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    const { useText } = B;
    return {
      root: {
        position: 'relative',
        margin: '0 10px',
      },
      navbarItem: {
        color: '#fff',
        fontFamily: 'Ubuntu',
        fontSize: '16px',
        cursor: 'pointer',
        fontWeight: '500',
      },
      popup: {
        position: 'fixed',
        backgroundColor: '#fff',
        borderRadius: '6px',
        boxSizing: 'border-box',
        width: '220px',
        padding: '27px 24px 21px',
        boxShadow: '0 0 50px rgba(0,0,0,0.16)',
        zIndex: '99',
        '&:before': {
          content: '""',
          width: '60px',
          height: '20px',
          borderRadius: '20px 20px 0 0',
          position: 'absolute',
          top: '-20px',
          left: '50%',
          marginLeft: '-30px',
          overflow: 'hidden',
        },
        '&:after': {
          content: '""',
          width: '26px',
          height: '26px',
          borderRadius: '5px',
          position: 'absolute',
          top: '-5px',
          left: '50%',
          background: '#fff',
          marginLeft: '-13px',
          transform: 'rotate(45deg)',
          overflow: 'hidden',
        },
      },
      show: {
        visibility: 'visible',
        opacity: '1',
        transition: 'all 0.3s',
      },
      hide: {
        visibility: 'hidden',
        opacity: '0',
        transition: 'all 0.3s',
      },
    };
  },
}))();
