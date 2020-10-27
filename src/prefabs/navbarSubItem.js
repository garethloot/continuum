(() => ({
  name: 'Nav Sub item',
  icon: 'UnorderedListIcon',
  category: 'NAVBAR',
  structure: [
    {
      name: 'navbarSubItem',
      options: [
        {
          type: 'VARIABLE',
          label: 'Label text',
          key: 'label',
          value: ['Label'],
        },
        {
          type: 'CUSTOM',
          label: 'Link type',
          key: 'linkType',
          value: 'endpoint',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              {
                name: 'Endpoint',
                value: 'endpoint',
              },
              {
                name: 'External',
                value: 'external',
              },
            ],
          },
        },
        {
          type: 'ENDPOINT',
          label: 'Page',
          key: 'endpoint',
          value: '',
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'linkType',
              comparator: 'EQ',
              value: 'endpoint',
            },
          },
        },
        {
          type: 'VARIABLE',
          label: 'External url',
          key: 'linkToExternal',
          value: [''],
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'linkType',
              comparator: 'EQ',
              value: 'external',
            },
          },
        },
        {
          type: 'TOGGLE',
          label: 'Visible',
          key: 'visible',
          value: true,
        },
      ],
      descendants: [],
    },
  ],
}))();
