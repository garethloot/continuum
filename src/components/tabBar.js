(() => ({
  name: 'tabBar',
  type: 'BODY_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { itemsList } = options;

    const [active, setActive] = useState(0);

    const itemsValues = itemsList.split(',');

    function handleClick(i) {
      setActive(i);
      B.triggerEvent('onClick', i);
    }

    function Item(props) {
      const { isActive, item, i, click } = props;
      return (
        <div
          onClick={() => click(i)}
          className={[
            classes.item,
            isActive === i ? classes.active : null,
          ].join(' ')}
        >
          <div className={classes.p}>{item}</div>
        </div>
      );
    }

    const Links = (
      <div className={classes.root}>
        {itemsValues.map((item, i) => (
          <Item click={handleClick} i={i} item={item} isActive={active} />
        ))}
      </div>
    );
    return <div className={classes.wrapper}>{Links}</div>;
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      root: {
        boxSizing: 'border-box',
        paddingLeft: ({ options: { leftSpace } }) =>
          style.getSpacing(leftSpace),
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        padding: '18px 0px 0px 0px',
        [`@media ${B.mediaMinWidth(600)}`]: {
          paddingLeft: ({ options: { leftSpace } }) =>
            style.getSpacing(leftSpace, 'Portrait'),
        },
        [`@media ${B.mediaMinWidth(960)}`]: {
          paddingLeft: ({ options: { leftSpace } }) =>
            style.getSpacing(leftSpace, 'Landscape'),
        },
        [`@media ${B.mediaMinWidth(1280)}`]: {
          paddingLeft: ({ options: { leftSpace } }) =>
            style.getSpacing(leftSpace, 'Desktop'),
        },
      },
      wrapper: {
        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.09)',
      },
      item: {
        marginRight: '40px',
        paddingBottom: '18px',
        cursor: 'pointer',
        '&:hover': {
          borderBottom: '2px solid #395bff',
        },
        borderBottom: '2px solid transparent',
        transition: '0.1s',
      },
      active: {
        borderBottom: '2px solid #395bff',
      },
      p: {
        lineHeight: '30px',
        fontFamily: 'Ubuntu',
        fontSize: '1rem',
        fontWeight: '500',
      },
    };
  },
}))();
