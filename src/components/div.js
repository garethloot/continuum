(() => ({
  name: 'div',
  type: 'BODY_COMPONENT',
  allowedTypes: ['BODY_COMPONENT', 'CONTAINER_COMPONENT', 'CONTENT_COMPONENT'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { display, backgroundType, shadow, hover, endpoint } = options;
    const { env, useEndpoint } = B;

    const isDev = env === 'dev';
    const isEmpty = isDev && children.length === 0;

    const history = !isDev && useHistory();
    const url = !isDev && endpoint && useEndpoint(endpoint);

    function clickHandler() {
      if (endpoint) {
        history.push(url);
      }
    }

    return (
      <div
        className={[
          classes.root,
          classes[display],
          classes[backgroundType],
          hover ? classes.hover : null,
          isEmpty ? classes.empty : null,
          shadow ? classes.shadow : null,
        ].join(' ')}
        onClick={clickHandler}
      >
        {isEmpty ? 'Empty div' : children}
      </div>
    );
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    const { useText, useProperty, env } = B;
    const isDev = env === 'dev';
    const getSpacing = (idx, device = 'Mobile') =>
      idx === '0' ? '0rem' : style.getSpacing(idx, device);

    function getSize(image, sizeName) {
      const size = image.resized.find(item => item.name === sizeName);
      if (size) {
        return size.url;
      }
      return image.url;
    }

    return {
      root: {
        cursor: ({ options: { endpoint } }) =>
          endpoint ? 'cursor' : 'pointer',
        transition: '0.1s',
        zIndex: '0',
        overflow: ({ options: { overflow } }) =>
          overflow ? 'visible' : 'auto',
        boxSizing: 'border-box',
        height: ({ options: { height } }) => height,
        position: ({ options: { position } }) => position || 'relative',
        top: ({ options: { top } }) => top,
        right: ({ options: { right } }) => right,
        bottom: ({ options: { bottom } }) => bottom,
        left: ({ options: { left } }) => left,
        width: ({ options: { width } }) => width || '100%',
        borderTopLeftRadius: ({ options: { borderRadius } }) =>
          style.getBorderRadius(borderRadius[0]),
        borderTopRightRadius: ({ options: { borderRadius } }) =>
          style.getBorderRadius(borderRadius[1]),
        borderBottomRightRadius: ({ options: { borderRadius } }) =>
          style.getBorderRadius(borderRadius[2]),
        borderBottomLeftRadius: ({ options: { borderRadius } }) =>
          style.getBorderRadius(borderRadius[3]),
        marginTop: ({ options: { outerSpacing } }) =>
          getSpacing(outerSpacing[0]),
        marginRight: ({ options: { outerSpacing } }) =>
          getSpacing(outerSpacing[1]),
        marginBottom: ({ options: { outerSpacing } }) =>
          getSpacing(outerSpacing[2]),
        marginLeft: ({ options: { outerSpacing } }) =>
          getSpacing(outerSpacing[3]),
        paddingTop: ({ options: { innerSpacing, colorLayer } }) =>
          colorLayer ? '0px' : getSpacing(innerSpacing[0]),
        paddingRight: ({ options: { innerSpacing, colorLayer } }) =>
          colorLayer ? '0px' : getSpacing(innerSpacing[1]),
        paddingBottom: ({ options: { innerSpacing, colorLayer } }) =>
          colorLayer ? '0px' : getSpacing(innerSpacing[2]),
        paddingLeft: ({ options: { innerSpacing, colorLayer } }) =>
          colorLayer ? '0px' : getSpacing(innerSpacing[3]),
      },
      block: {
        display: 'block',
      },
      flex: {
        display: 'flex',
        flexDirection: ({ options: { flexDirection } }) => flexDirection,
        justifyContent: ({ options: { justifyContent } }) => justifyContent,
        alingItems: ({ options: { alignItems } }) => alignItems,
        flexWrap: ({ options: { flexWrap } }) => flexWrap,
      },
      theme: {
        backgroundColor: ({ options: { themeColor } }) =>
          themeColor === '' ? 'transparent' : style.getColor(themeColor),
      },
      image: {
        '&:before': {
          content: '""',
          zIndex: '-1',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          position: 'absolute',
          backgroundImage: ({
            options: {
              imgUrl,
              backgroundType,
              sourceType,
              imgUrlFallback,
              propertyId,
              sizeName,
            },
          }) => {
            let imgSrc = useText(imgUrl);
            if (
              !isDev &&
              sourceType === 'id' &&
              backgroundType === 'image' &&
              propertyId
            ) {
              const imageObject = useProperty(propertyId);
              if (imageObject && imageObject.url) {
                imgSrc = getSize(imageObject, sizeName);
                return `url("${imgSrc}")`;
              }
              imgSrc = useText(imgUrlFallback);
            }
            return `url("${imgSrc}")`;
          },
          backgroundSize: ({ options: { backgroundSize } }) => backgroundSize,
          backgroundRepeat: ({ options: { backgroundRepeat } }) =>
            backgroundRepeat,
          filter: ({ options: { brightness } }) => `brightness(${brightness}%)`,
          backgroundPosition: ({ options: { backgroundPosition } }) =>
            backgroundPosition,
        },
      },
      shadow: {
        boxShadow: ({ options: { shadowValue } }) => shadowValue,
      },
      hover: {
        '&:hover': {
          transform: 'scale(1.02)',
        },
      },
      empty: {
        padding: '2rem',
        border: 'dashed 1px rgb(175, 181, 200)',
        backgroundColor: 'rgb(240, 241, 245) important!',
        textAlign: 'center',
      },
    };
  },
}))();
