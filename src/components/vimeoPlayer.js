(() => ({
  name: 'vimeoPlayer',
  type: 'BODY_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { useText, triggerEvent } = B;
    const { vimeoUrl } = options;
    const playerRef = useRef(null);

    let vimeoPlayer = {};
    const url = useText(vimeoUrl);

    function createPlayer() {
      const newPlayer = new window.Player(playerRef.current, {
        id: url,
        responsive: true,
      });
      newPlayer.on('play', () => triggerEvent('onPlay'), 'play');
      newPlayer.on('ended', () => triggerEvent('onEnded'), 'ended');
      vimeoPlayer = newPlayer;
    }

    useEffect(() => {
      if (url) {
        createPlayer();
      }
    });

    return url ? (
      <div className={classes.wrapper}>
        <div ref={playerRef} />
      </div>
    ) : (
      <div>No access</div>
    );
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      wrapper: {
        minHeight: '400px',
        overflow: 'hidden',
        borderRadius: ({ options: { radius } }) =>
          style.getBorderRadius(radius),
      },
    };
  },
}))();
