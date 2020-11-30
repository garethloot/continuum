(() => ({
  name: 'Inter Action',
  icon: 'ContainerIcon',
  category: 'ACTIONS',
  structure: [
    {
      name: 'interAction',
      options: [
        {
          type: 'ACTION',
          label: 'Action',
          key: 'actionId',
          value: '',
          configuration: {
            apiVersion: 'v1',
            condition: {
              type: 'SHOW',
              option: 'triggerAction',
              comparator: 'EQ',
              value: true,
            },
          },
        },
        {
          value: [],
          label: 'Property',
          key: 'actionProperties',
          type: 'ACTION_PROPERTIES',
          configuration: {
            apiVersion: 'v1',
            condition: {
              type: 'SHOW',
              option: 'triggerAction',
              comparator: 'EQ',
              value: true,
            },
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
