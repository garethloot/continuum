(() => ({
  name: 'tab',
  type: 'TAB',
  allowedTypes: ['BODY_COMPONENT', 'CONTAINER_COMPONENT', 'CONTENT_COMPONENT'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { env, useText } = B;
    const isDev = env === 'dev';

    const { label } = options;

    const { value, tabData, setTabData } = parent;
    const isActive = value === index;

    const emptyBox = <div className={classes.empty}>Tab</div>;

    const TabPanel = (isActive || !isDev) && (
      <div className={!isActive && classes.hide}>
        {children.length === 0 ? emptyBox : children}
      </div>
    );

    const labelChanged = () => {
      const currentLabel = tabData[`label${index}`]
        ? useText(tabData[`label${index}`])
        : '';
      return currentLabel !== useText(label);
    };

    const hasChange = () => labelChanged();
    useEffect(() => {
      if (setTabData && hasChange()) {
        setTabData({
          ...tabData,
          [`label${index}`]: label,
        });
      }
    }, [setTabData, tabData, label]);

    return isDev ? <div>{TabPanel}</div> : TabPanel;
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      root: {
        width: '100%',
        height: '100%',
        minHeight: '100px',
      },
      empty: {
        padding: '2rem',
        border: 'dashed 1px rgb(175, 181, 200)',
        backgroundColor: 'rgb(240, 241, 245) important!',
        textAlign: 'center',
      },
      hide: {
        display: 'none',
      },
    };
  },
}))();
