(() => ({
  name: 'Chapter Playlist',
  icon: 'UnorderedListIcon',
  category: 'PLAYER',
  structure: [
    {
      name: 'chapterPlaylist',
      options: [
        {
          type: 'PROPERTY',
          label: 'Chapter ID',
          key: 'chapterId',
          value: '',
        },
        {
          type: 'VARIABLE',
          label: 'Current slug',
          key: 'cSlug',
          value: [''],
        },
        {
          type: 'PROPERTY',
          label: 'Current user',
          key: 'cUser',
          value: '',
        },
      ],
      descendants: [],
    },
  ],
}))();
