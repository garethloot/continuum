(() => ({
  name: 'Nav Item',
  icon: 'NavItemIcon',
  category: 'NAVBAR',
  structure: [
    {
      name: 'navbarItem',
      options: [
        {
          type: 'VARIABLE',
          label: 'Text',
          key: 'text',
          value: ['Nav item'],
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
          label: 'Show popup',
          key: 'showPopup',
          value: false,
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
