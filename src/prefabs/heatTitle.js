(() => ({
  name: 'Page Title',
  icon: 'TitleIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'headTitle',
      options: [
        {
          label: 'Toggle visibility',
          key: 'visible',
          value: true,
          type: 'TOGGLE',
          configuration: {
            as: 'VISIBILITY',
          },
        },
        {
          type: 'VARIABLE',
          label: 'Page title',
          key: 'headTitle',
          value: [''],
        },
      ],
      descendants: [],
    },
  ],
}))();
