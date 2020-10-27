(() => ({
  name: 'Login',
  icon: 'ConditionalIcon',
  category: 'LOGIC',
  structure: [
    {
      name: 'login',
      options: [
        {
          type: 'VARIABLE',
          label: 'jwt Token',
          key: 'jwtToken',
          value: [''],
        },
        {
          type: 'VARIABLE',
          label: 'refresh Token',
          key: 'refreshToken',
          value: [''],
        },
        {
          type: 'TEXT',
          label: 'Login endpoint',
          key: 'loginEndpoint',
          value: '',
        },
        {
          type: 'ENDPOINT',
          label: 'Default Redirect',
          key: 'redirect',
          value: '',
        },
      ],
      descendants: [],
    },
  ],
}))();
