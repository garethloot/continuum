(() => ({
  name: 'interAction',
  type: 'BODY_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { useAction, env } = B;
    const { actionId, actionProperties } = options;

    const isDev = env === 'dev';

    const propertyMappings = new Map(actionProperties);
    const input = Array.from(propertyMappings.keys()).reduce((acc, key) => {
      const propertyId = propertyMappings.get(key);

      const value = isDev ? '' : B.useProperty(propertyId);
      acc[key] = value;
      return acc;
    }, {});

    const [value, setValue] = useState(input);

    const [actionCallback] = useAction(actionId, {
      variables: {
        input: value,
      },
      onCompleted(data) {
        B.triggerEvent('onActionSuccess', data.actionb5);
      },
      onError(error) {
        B.triggerEvent('onActionError', error.message);
      },
    });

    useEffect(() => {
      B.defineFunction('actionWithMessage', message => {
        if (typeof message === 'string') {
          input.message = message;
          setValue({ ...input });
        }
        actionCallback();
        setValue({});
      });
      B.defineFunction('Reload', data => {
        if (data === 'ended') history.go(0);
      });
    }, []);

    return <div className={classes.root}>{isDev ? 'Inter Action' : null}</div>;
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      root: {},
    };
  },
}))();
