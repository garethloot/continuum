(() => ({
  name: 'Text',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { useText } = B;

    const Tag = {
      Title1: 'h1',
      Title2: 'h2',
      Title3: 'h3',
      Title4: 'h4',
      Title5: 'h5',
      Title6: 'h6',
      Body1: 'p',
      Body2: 'p',
    }[options.type || 'Body1'];

    return (
      <div className={classes.wrapper}>
        <Tag className={classes.text}>
          {options.content.length > 0 && <B.Text value={options.content} />}
          {options.content.length === 0 && B.env === 'dev' && (
            <span className={classes.placeholder}>Empty content</span>
          )}
        </Tag>
        {options.brush.length !== 0 ? (
          <img
            className={classes.brush}
            alt="brush"
            src={useText(options.brush)}
          />
        ) : null}
      </div>
    );
  })(),
  styles: B => t => {
    const style = new B.Styling(t);
    const getSpacing = (idx, device = 'Mobile') =>
      idx === '0' ? '0rem' : style.getSpacing(idx, device);
    return {
      wrapper: {
        display: 'block',
        marginTop: ({ options: { outerSpacing } }) =>
          getSpacing(outerSpacing[0]),
        marginRight: ({ options: { outerSpacing } }) =>
          getSpacing(outerSpacing[1]),
        marginBottom: ({ options: { outerSpacing } }) =>
          getSpacing(outerSpacing[2]),
        marginLeft: ({ options: { outerSpacing } }) =>
          getSpacing(outerSpacing[3]),
        textAlign: ({ options: { textAlignment } }) => textAlignment,
        padding: 0,
        whiteSpace: 'pre-wrap',
        [`@media ${B.mediaMinWidth(600)}`]: {
          marginTop: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[0], 'Portrait'),
          marginRight: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[1], 'Portrait'),
          marginBottom: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[2], 'Portrait'),
          marginLeft: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[3], 'Portrait'),
          fontSize: ({ options: { type } }) =>
            style.getFontSize(type, 'Portrait'),
        },
        [`@media ${B.mediaMinWidth(960)}`]: {
          marginTop: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[0], 'Landscape'),
          marginRight: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[1], 'Landscape'),
          marginBottom: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[2], 'Landscape'),
          marginLeft: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[3], 'Landscape'),
          fontSize: ({ options: { type } }) =>
            style.getFontSize(type, 'Landscape'),
        },
        [`@media ${B.mediaMinWidth(1280)}`]: {
          marginTop: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[0], 'Desktop'),
          marginRight: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[1], 'Desktop'),
          marginBottom: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[2], 'Desktop'),
          marginLeft: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[3], 'Desktop'),
          fontSize: ({ options: { type } }) =>
            style.getFontSize(type, 'Desktop'),
        },
      },
      text: {
        marginBlockStart: '0px',
        marginBlockEnd: '0px',
        color: ({ options: { type, textColor } }) =>
          textColor === 'Transparent' || textColor === ''
            ? style.getFontColor(type)
            : style.getColor(textColor),
        fontFamily: ({ options: { type } }) => {
          switch (type) {
            case 'Title1':
            case 'Title2':
            case 'Title3':
            case 'Title4':
              return '"Merriweather", serif';
            default:
              return '"Ubuntu"';
          }
        },
        fontSize: ({ options: { type } }) => style.getFontSize(type),
        fontWeight: ({ options: { type, bold } }) =>
          bold ? '700' : style.getFontWeight(type),
        textTransform: ({ options: { type } }) => style.getTextTransform(type),
        textShadow: ({ options: { shadow } }) =>
          shadow ? 'rgba(0, 0, 0, 0.5) 2px 2px 2px' : 'none',
        [`@media ${B.mediaMinWidth(600)}`]: {
          fontSize: ({ options: { type } }) =>
            style.getFontSize(type, 'Portrait'),
        },
        [`@media ${B.mediaMinWidth(960)}`]: {
          fontSize: ({ options: { type } }) =>
            style.getFontSize(type, 'Landscape'),
        },
        [`@media ${B.mediaMinWidth(1280)}`]: {
          fontSize: ({ options: { type } }) =>
            style.getFontSize(type, 'Desktop'),
        },
      },
      brush: {
        [`@media ${B.mediaMinWidth(600)}`]: { marginTop: '20px !important' },
        marginTop: '0px',
        marginLeft: '5px',
      },
      placeholder: {
        color: '#dadde4',
      },
    };
  },
}))();
