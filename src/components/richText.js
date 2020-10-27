(() => ({
  name: 'richText',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { propertyId } = options;
    const { env, useProperty } = B;
    const isDev = env === 'dev';

    const exampleText = `
    <div>Rich text example</div>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <p>Paragraph</p>
    <p><strong>Strong Paragraph</strong></p>
    <ul>
    <li>List item 1</li>
    <li>List item 2</li>
    </ul>
    `;

    const richText = isDev ? exampleText : useProperty(propertyId);

    function richTextDiv() {
      return { __html: richText };
    }

    return (
      <div className={classes.root} dangerouslySetInnerHTML={richTextDiv()} />
    );
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      root: {
        fontFamily: 'Ubuntu',
        '& h1': {
          fontSize: '48px',
          fontFamily: 'Merriweather',
          fontWeight: 'bold',
        },
        '& h2': {
          fontSize: '32px',
          fontFamily: 'Merriweather',
          fontWeight: 'bold',
        },
        '& h3': {
          fontSize: '28px',
          fontFamily: 'Merriweather',
          fontWeight: 'bold',
        },
        '& h4': {
          fontSize: '24px',
          fontFamily: 'Merriweather',
          fontWeight: 'bold',
        },
        '& h5': {
          fontSize: '18px',
          fontFamily: 'Ubuntu',
          fontWeight: 'medium',
        },
        '& h6': {
          fontSize: '16px',
          fontFamily: 'Ubuntu',
          fontWeight: 'medium',
        },
        '& img': {
          width: '100%',
        },
      },
    };
  },
}))();
