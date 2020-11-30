(() => ({
  name: 'chapterPlaylist',
  type: 'BODY_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { gql } = window;
    const { Query, useProperty, useText, env } = B;
    const isDev = env === 'dev';

    const { chapterId, cSlug, cUser } = options;
    const id = isDev || useProperty(chapterId);
    const currentSlug = isDev || useText(cSlug);
    const currentUser = isDev || useProperty(cUser);

    const history = !isDev && useHistory();

    const GET_ITEMS = gql`
      query Items($id: String!) {
        allChapteritem(
          where: { chapter: { id: { eq: $id } } }
          sort: { relation: { index: ASC } }
        ) {
          results {
            chapter {
              course {
                slug
              }
            }
            itemType
            itemTitle
            duration
            slug
            video {
              link
            }
            coursefile {
              id
              fileTitle
              fileitem {
                fileName
                fileProperty {
                  url
                }
              }
            }
            mycourseprogresses {
              isFinished
            }
          }
        }
      }
    `;

    const GET_ITEMS_ANON = gql`
      query Items($id: String!) {
        allChapteritem(
          where: { chapter: { id: { eq: $id } } }
          sort: { relation: { index: ASC } }
        ) {
          results {
            chapter {
              course {
                slug
              }
            }
            itemType
            itemTitle
            duration
            slug
            video {
              link
            }
            coursefile {
              id
              fileTitle
              fileitem {
                fileName
              }
            }
            mycourseprogresses {
              isFinished
            }
          }
        }
      }
    `;

    function user() {
      return currentUser;
    }

    const Icon = props => {
      const { icon } = props;
      const iconSelection = {
        video: 'zmdi-videocam',
        exercise: 'zmdi-file-text',
        play: 'zmdi-play-circle-outline',
        lock: 'zmdi-lock',
      }[icon];
      const classText = `zmdi ${iconSelection} zmdi-hc-lg zmdi-hc-fw`;
      return (
        <div className={[classes.icon, classes[icon]].join(' ')}>
          <i class={classText}></i>
        </div>
      );
    };

    const Body = props => {
      const { title, subtitle, type } = props;
      return (
        <div className={classes.body}>
          <div
            className={[type === 'playvideo' ? classes.play : null].join(' ')}
          >
            {title}
          </div>
          <div className={classes.medium}>{subtitle}</div>
        </div>
      );
    };

    const CheckIcon = props => {
      const { seen, hasaccess } = props;
      function click(evt) {
        evt.stopPropagation();
        console.log('toggleSeen');
      }
      return hasaccess ? (
        <div
          onClick={click}
          className={[
            classes.icon,
            !seen ? classes.accent : classes.green,
          ].join(' ')}
        >
          {user() ? (
            <i class="zmdi zmdi-check zmdi-hc-lg zmdi-hc-fw"></i>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div className={[classes.icon, classes.accent].join(' ')}>
          <i class="zmdi zmdi-lock zmdi-hc-lg zmdi-hc-fw"></i>
        </div>
      );
    };

    function checkType(item) {
      const { itemType, slug } = item;
      if (currentSlug === slug) return { icon: 'play', type: 'playvideo' };
      if (itemType === 'Video') return { icon: 'video', type: 'video' };
      if (itemType === 'Exercise')
        return { icon: 'exercise', type: 'exercise' };
    }

    function handleClick(slug, courseSlug, hasAccess, type, fileitem) {
      if (hasAccess) {
        if (type === 'video') {
          history.push(`/courses/${courseSlug}/${slug}`);
        } else if (fileitem) {
          window.open(fileitem.fileProperty.url, '_blank');
        }
      }
    }

    function Item(props) {
      const {
        item,
        item: {
          itemTitle,
          itemType,
          duration,
          mycourseprogresses,
          video,
          coursefile,
          slug,
          chapter: {
            course: { slug: courseSlug },
          },
        },
      } = props;
      const seen =
        mycourseprogresses.length > 0 && mycourseprogresses[0].isFinished;
      const { icon, type } = checkType(item);
      const hasAccess = video || (coursefile && coursefile.fileitem);
      const fileitem = coursefile && coursefile.fileitem;
      return (
        <div
          onClick={() =>
            handleClick(slug, courseSlug, hasAccess, type, fileitem)
          }
          className={classes.item}
        >
          <Icon icon={icon} />
          <Body
            title={itemTitle}
            subtitle={type === 'video' ? duration : 'File download'}
            type={type}
          />
          <CheckIcon seen={seen} hasaccess={hasAccess} />
        </div>
      );
    }

    function playList() {
      const query = currentUser ? GET_ITEMS : GET_ITEMS_ANON;
      return (
        <div className={classes.root}>
          <Query query={query} variables={{ id }}>
            {({ loading, error, data }) => {
              if (loading) return 'Loading...';
              if (error) return `Error! ${error.message}`;
              const {
                allChapteritem: { results },
              } = data;
              return results.map(item => <Item item={item} />);
            }}
          </Query>
        </div>
      );
    }
    return isDev ? <div>Example</div> : playList();
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      root: {
        fontFamily: '"Ubuntu"',
      },
      item: {
        display: 'flex',
        marginBottom: '10px',
      },
      body: {
        flexGrow: 1,
      },
      icon: {
        marginRight: '10px',
      },
      medium: {
        color: style.getColor('Medium'),
        fontSize: '14px',
      },
      accent: {
        color: style.getColor('Accent1'),
      },
      green: {
        color: '#38E66B',
      },
      play: {
        color: '#3C6FFA',
      },
      lock: {
        color: style.getColor('Accent1'),
      },
    };
  },
}))();
