(() => ({
  name: 'vimeoPlayer',
  type: 'BODY_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { useText, env } = B;
    const { vimeoUrl } = options;

    const isDev = env === 'dev';

    const playerRef = useRef(null);

    let vimeoPlayer = {};
    const url = useText(vimeoUrl);

    function createPlayer() {
      const newPlayer = new window.Player(playerRef.current, {
        id: url,
        responsive: true,
      });
      newPlayer.on('play', () => {
        console.log('Vimeo', 'play');
        B.triggerEvent('onPlay', 'play');
      });
      newPlayer.on('playing', () => {
        console.log('Vimeo', 'playing');
        B.triggerEvent('onPlaying', 'playing');
      });
      newPlayer.on('pause', () => {
        console.log('Vimeo', 'pause');
        B.triggerEvent('onPause', 'pause');
      });
      newPlayer.on('loaded', () => {
        console.log('Vimeo', 'loaded');
        B.triggerEvent('onLoaded', 'loaded');
      });
      newPlayer.on('ended', () => {
        console.log('ended');
        B.triggerEvent('onEnded', 'ended');
      });
      newPlayer.on('timeupdate', event => {
        console.log('ended', event);
      });
      vimeoPlayer = newPlayer;
    }

    useEffect(() => {
      if (url) {
        createPlayer();
      }
    }, []);

    return url ? (
      <div className={[classes.wrapper, isDev ? classes.dev : null].join(' ')}>
        <div ref={playerRef} />
      </div>
    ) : (
      <div>{isDev ? 'Vimeo Player' : null}</div>
    );
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      wrapper: {
        overflow: 'hidden',
        borderRadius: ({ options: { radius } }) =>
          style.getBorderRadius(radius),
      },
      dev: {
        minHeight: '400px',
      },
    };
  },
}))();
