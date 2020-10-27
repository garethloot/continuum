(() => ({
  name: 'Div',
  icon: 'ContainerIcon',
  category: 'LAYOUT',
  structure: [
    {
      name: 'div',
      options: [
        {
          type: 'SIZE',
          label: 'Height',
          key: 'height',
          value: '',
          configuration: {
            as: 'UNIT',
          },
        },
        {
          type: 'SIZE',
          label: 'Width',
          key: 'width',
          value: '',
          configuration: {
            as: 'UNIT',
          },
        },
        {
          type: 'CUSTOM',
          label: 'Display',
          key: 'display',
          value: 'block',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              {
                name: 'Block',
                value: 'block',
              },
              {
                name: 'Flex',
                value: 'flex',
              },
            ],
          },
        },
        {
          type: 'CUSTOM',
          label: 'Flex direction',
          key: 'flexDirection',
          value: 'row',
          configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
              {
                name: 'Row',
                value: 'row',
              },
              {
                name: 'Column',
                value: 'column',
              },
              {
                name: 'Row reverse',
                value: 'row-reverse',
              },
              {
                name: 'Column reverse',
                value: 'column-reverse',
              },
            ],
            condition: {
              type: 'SHOW',
              option: 'display',
              comparator: 'EQ',
              value: 'flex',
            },
          },
        },
        {
          type: 'CUSTOM',
          label: 'Justify Content',
          key: 'justifyContent',
          value: 'flex-start',
          configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
              {
                name: 'Flex start',
                value: 'flex-start',
              },
              {
                name: 'Center',
                value: 'center',
              },
              {
                name: 'Flex end',
                value: 'flex-end',
              },
              {
                name: 'Space between',
                value: 'space-between',
              },
              {
                name: 'Space around',
                value: 'space-around',
              },
              {
                name: 'Space evenly',
                value: 'space-evenly',
              },
            ],
            condition: {
              type: 'SHOW',
              option: 'display',
              comparator: 'EQ',
              value: 'flex',
            },
          },
        },
        {
          type: 'CUSTOM',
          label: 'Align Items',
          key: 'alignItems',
          value: 'flex-start',
          configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
              {
                name: 'Flex start',
                value: 'flex-start',
              },
              {
                name: 'Center',
                value: 'center',
              },
              {
                name: 'Flex end',
                value: 'flex-end',
              },
              {
                name: 'Stretch',
                value: 'stretch',
              },
              {
                name: 'Baseline',
                value: 'baseline',
              },
            ],
            condition: {
              type: 'SHOW',
              option: 'display',
              comparator: 'EQ',
              value: 'flex',
            },
          },
        },
        {
          type: 'CUSTOM',
          label: 'Flex wrap',
          key: 'flexWrap',
          value: 'nowrap',
          configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
              {
                name: 'No wrap',
                value: 'nowrap',
              },
              {
                name: 'Wrap',
                value: 'wrap',
              },
              {
                name: 'Wrap reverse',
                value: 'wrap-reverse',
              },
            ],
            condition: {
              type: 'SHOW',
              option: 'display',
              comparator: 'EQ',
              value: 'flex',
            },
          },
        },
        {
          type: 'SIZES',
          label: 'Border Radius',
          key: 'borderRadius',
          value: ['', '', '', ''],
        },
        {
          type: 'TOGGLE',
          label: 'Shadow',
          key: 'shadow',
          value: false,
        },
        {
          type: 'TOGGLE',
          label: 'Hover Effect',
          key: 'hover',
          value: false,
        },
        {
          type: 'ENDPOINT',
          label: 'Page',
          key: 'endpoint',
          value: '',
        },
        {
          type: 'TEXT',
          label: 'Shadow value',
          key: 'shadowValue',
          value: '0 2px 44px rgba(0, 0, 0, 0.15)',
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'shadow',
              comparator: 'EQ',
              value: true,
            },
          },
        },
        {
          value: ['0rem', '0rem', '0rem', '0rem'],
          label: 'Outer space',
          key: 'outerSpacing',
          type: 'SIZES',
        },
        {
          value: ['M', 'M', 'M', 'M'],
          label: 'Inner space',
          key: 'innerSpacing',
          type: 'SIZES',
        },
        {
          type: 'CUSTOM',
          label: 'Background type',
          key: 'backgroundType',
          value: 'theme',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              {
                name: 'Theme',
                value: 'theme',
              },
              {
                name: 'Image',
                value: 'image',
              },
              {
                name: 'Gradient',
                value: 'gradient',
              },
            ],
          },
        },
        {
          type: 'COLOR',
          label: 'Theme Color',
          key: 'themeColor',
          value: '',
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'backgroundType',
              comparator: 'EQ',
              value: 'theme',
            },
          },
        },
        {
          type: 'CUSTOM',
          label: 'Source Type',
          key: 'sourceType',
          value: 'url',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              {
                name: 'Url',
                value: 'url',
              },
              {
                name: 'Property ID',
                value: 'id',
              },
            ],
            condition: {
              type: 'SHOW',
              option: 'backgroundType',
              comparator: 'EQ',
              value: 'image',
            },
          },
        },
        {
          value: [],
          label: 'Image url',
          key: 'imgUrl',
          type: 'VARIABLE',
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'sourceType',
              comparator: 'EQ',
              value: 'url',
            },
          },
        },
        {
          type: 'TEXT',
          label: 'Image property ID',
          key: 'propertyId',
          value: '',
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'sourceType',
              comparator: 'EQ',
              value: 'id',
            },
          },
        },
        {
          type: 'TEXT',
          label: 'Size name',
          key: 'sizeName',
          value: '',
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'sourceType',
              comparator: 'EQ',
              value: 'id',
            },
          },
        },
        {
          value: [],
          label: 'Image fallback',
          key: 'imgUrlFallback',
          type: 'VARIABLE',
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'sourceType',
              comparator: 'EQ',
              value: 'id',
            },
          },
        },
        {
          type: 'NUMBER',
          label: 'Brightness,',
          key: 'brightness',
          value: 100,
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'backgroundType',
              comparator: 'EQ',
              value: 'image',
            },
          },
        },
        {
          value: 'initial',
          label: 'Background size',
          key: 'backgroundSize',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Initial', value: 'initial' },
              { name: 'Contain', value: 'contain' },
              { name: 'Cover', value: 'cover' },
            ],
            condition: {
              type: 'SHOW',
              option: 'backgroundType',
              comparator: 'EQ',
              value: 'image',
            },
          },
        },
        {
          value: 'no-repeat',
          label: 'Background repeat',
          key: 'backgroundRepeat',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'None', value: 'no-repeat' },
              { name: 'X', value: 'repeat-x' },
              { name: 'Y', value: 'repeat-y' },
              { name: 'All', value: 'repeat' },
            ],
            condition: {
              type: 'SHOW',
              option: 'backgroundType',
              comparator: 'EQ',
              value: 'image',
            },
          },
        },
        {
          type: 'CUSTOM',
          label: 'Position',
          key: 'backgroundPosition',
          value: 'left top',
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'backgroundType',
              comparator: 'EQ',
              value: 'image',
            },
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
              {
                name: 'left top',
                value: 'left top',
              },
              {
                name: 'left center',
                value: 'left center',
              },
              {
                name: 'left bottom',
                value: 'left bottom',
              },
              {
                name: 'right top',
                value: 'right top',
              },
              {
                name: 'right center',
                value: 'right center',
              },
              {
                name: 'right bottom',
                value: 'right bottom',
              },
              {
                name: 'center top',
                value: 'center top',
              },
              {
                name: 'center center',
                value: 'center center',
              },
              {
                name: 'center bottom',
                value: 'center bottom',
              },
            ],
          },
        },
        {
          value: false,
          label: 'Show positioning options',
          key: 'positioningOptions',
          type: 'TOGGLE',
        },
        {
          value: 'relative',
          label: 'Position',
          key: 'position',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Relative', value: 'relative' },
              { name: 'Absolute', value: 'absolute' },
              { name: 'Fixed', value: 'fixed' },
              { name: 'Sticky', value: 'sticky' },
            ],
            condition: {
              type: 'SHOW',
              option: 'positioningOptions',
              comparator: 'EQ',
              value: true,
            },
          },
        },
        {
          type: 'SIZE',
          label: 'Top position',
          key: 'top',
          value: '',
          configuration: {
            as: 'UNIT',
            condition: {
              type: 'SHOW',
              option: 'positioningOptions',
              comparator: 'EQ',
              value: true,
            },
          },
        },
        {
          type: 'SIZE',
          label: 'Right position',
          key: 'right',
          value: '',
          configuration: {
            as: 'UNIT',
            condition: {
              type: 'SHOW',
              option: 'positioningOptions',
              comparator: 'EQ',
              value: true,
            },
          },
        },
        {
          type: 'SIZE',
          label: 'Bottom position',
          key: 'bottom',
          value: '',
          configuration: {
            as: 'UNIT',
            condition: {
              type: 'SHOW',
              option: 'positioningOptions',
              comparator: 'EQ',
              value: true,
            },
          },
        },
        {
          type: 'SIZE',
          label: 'Left position',
          key: 'left',
          value: '',
          configuration: {
            as: 'UNIT',
            condition: {
              type: 'SHOW',
              option: 'positioningOptions',
              comparator: 'EQ',
              value: true,
            },
          },
        },
        {
          type: 'TOGGLE',
          label: 'Allow overflow',
          key: 'overflow',
          value: false,
        },
      ],
      descendants: [],
    },
  ],
}))();
