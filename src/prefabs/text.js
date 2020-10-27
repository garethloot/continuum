(() => ({
  name: 'Text',
  icon: 'ParagraphIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Text',
      options: [
        {
          type: 'VARIABLE',
          label: 'Content',
          key: 'content',
          value: ['Type your content here...'],
          configuration: {
            as: 'MULTILINE',
          },
        },
        {
          value: 'Body1',
          label: 'Type',
          key: 'type',
          type: 'FONT',
        },
        {
          type: 'VARIABLE',
          label: 'Brush',
          key: 'brush',
          value: [],
        },
        {
          type: 'CUSTOM',
          label: 'Text Alignment',
          key: 'textAlignment',
          value: 'left',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Left', value: 'left' },
              { name: 'Center', value: 'center' },
              { name: 'Right', value: 'right' },
            ],
          },
        },
        {
          value: ['0rem', '0rem', '0rem', '0rem'],
          label: 'Outer space',
          key: 'outerSpacing',
          type: 'SIZES',
        },
        {
          type: 'COLOR',
          label: 'Text color',
          key: 'textColor',
          value: '',
        },
        {
          value: false,
          label: 'Bold',
          key: 'bold',
          type: 'TOGGLE',
        },
        {
          value: false,
          label: 'Shadow',
          key: 'shadow',
          type: 'TOGGLE',
        },
      ],
      descendants: [],
    },
  ],
}))();
