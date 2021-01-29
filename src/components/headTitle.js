(() => ({
  name: 'headTitle',
  type: 'BODY_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { env, useText } = B;
    const { headTitle, visible } = options;
    const isDev = env === 'dev';
    const title = useText(headTitle);

    if (title !== '' && !isDev) {
      document.title = title;
    }
    return isDev ? (
      <div className={classes.root}>{visible ? 'Head Title' : null}</div>
    ) : (
      <></>
    );
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      root: {},
    };
  },
}))();
