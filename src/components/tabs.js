(() => ({
  name: 'tabs',
  type: 'BODY_COMPONENT',
  allowedTypes: ['TAB'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { Children, env } = B;
    const { defaultValue } = options;

    const isDev = env === 'dev';

    const [value, setValue] = useState(parseInt(defaultValue - 1, 10) || 0);
    const devValue = parseInt(defaultValue - 1, 10) || 0;
    const currentValue = isDev ? devValue : value;

    const [tabData, setTabData] = useState({});

    function handleChange(i) {
      setValue(Number(i));
    }

    B.defineFunction('SetActiveTab', handleChange);

    const Tabs = (
      <div className={classes.tabs}>
        {React.Children.map(children, (child, index) => {
          const { options } = child.props;
          const { label = tabData[`label${index}`] || [`Tab`] } = isDev
            ? {}
            : options;

          return <div className={classes.label}>{label}</div>;
        })}
      </div>
    );

    const TabGroup = (
      <div>
        {isDev ? Tabs : null}
        <Children
          value={currentValue}
          tabData={tabData}
          setTabData={setTabData}
        >
          {children}
        </Children>
      </div>
    );

    return isDev ? (
      <div
        className={[
          classes.wrapper,
          children.length === 0 && classes.empty,
        ].join(' ')}
      >
        {children.length === 0 ? 'Tabs' : TabGroup}
      </div>
    ) : (
      TabGroup
    );
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      root: {},
      tabs: {
        display: 'flex',
      },
      label: {
        marginRight: '10px',
      },
    };
  },
}))();
