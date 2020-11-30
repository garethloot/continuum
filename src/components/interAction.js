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

    function Action(msg) {
      console.log('action start');

      if (typeof msg === 'string') {
        input.message = msg;
      }
      console.log('before action', input);
      const [actionCallback, { loading }] = useAction(actionId, {
        variables: {
          input,
        },
        onCompleted(data) {
          B.triggerEvent('onActionSuccess', data.actionb5);
        },
        onError(error) {
          B.triggerEvent('onActionError', error.message);
        },
      }) || [() => {}, { loading: false }];
      console.log('action', input);
      actionCallback();
    }

    useEffect(() => {
      B.defineFunction('withMessage', message => {
        console.log('interAction', message);
        Action(message, input);
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
