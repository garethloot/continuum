(() => ({
  name: 'Tab Bar',
  icon: 'ButtonGroupIcon',
  category: 'TABS',
  structure: [
    {
      name: 'tabBar',
      options: [
        {
          value: 'M',
          label: 'Left space',
          key: 'leftSpace',
          type: 'SIZE',
        },
        {
          type: 'TEXT',
          label: 'Items comma list',
          key: 'itemsList',
          value: '',
          configuration: {
            as: 'MULTILINE',
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
