(() => ({
  name: 'Vimeo Player',
  icon: 'ImageIcon',
  category: 'PLAYER',
  structure: [
    {
      name: 'vimeoPlayer',
      options: [
        {
          type: 'VARIABLE',
          label: 'Vimeo url',
          key: 'vimeoUrl',
          value: [''],
        },
        {
          type: 'SIZE',
          label: 'Border Radius',
          key: 'radius',
          value: '',
        },
      ],
      descendants: [],
    },
  ],
}))();
