(() => ({
  name: 'Body',
  orientation: 'VERTICAL',
  styles: () => () => ({
    root: {
      display: 'flex',
      'flex-direction': 'column',
      height: '100%',
      backgroundColor: '${theme.color.white}',
      fontFamily: 'Roboto, sans-serif',
      textRendering: 'optimizeLegibility',
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    },
    empty: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      fontSize: 12,
      color: '${theme.color.grey700}',
      textTransform: 'uppercase',
      backgroundColor: '${theme.color.grey50}',
      border: '0.0625rem dashed ${theme.color.grey500}',
      boxSizing: 'border-box',
      padding: '0 2.8125rem',
      textAlign: 'center',
    },
  }),
  jsx: (
    <div
      className={
        children.length ? classes.root : [classes.root, classes.empty].join(' ')
      }
    >
      {children.length ? children : "${t('components.startDragging')}"}
    </div>
  ),
  allowedTypes: ['ROW', 'PAGE_BODY', 'BODY_COMPONENT', 'NAVIGATION_BAR'],
  type: 'ROOT',
}))();
