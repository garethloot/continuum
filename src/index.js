import gql from 'graphql-tag';
import Player from '@vimeo/player';
import * as Core from '@material-ui/core';
import * as Lab from '@material-ui/lab';
import * as Pickers from '@material-ui/pickers';
import * as Styles from '@material-ui/styles';
import DateFnsUtils from '@date-io/date-fns';
import Icons from './icons';

window.gql = gql;
window.Player = Player;

function css() {
  const cssId = 'myCss'; // you could encode the css path itself to generate id..
  if (!document.getElementById(cssId)) {
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.id = cssId;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href =
      'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap';
    link.media = 'all';
    head.appendChild(link);
  }
}

css();

export default { Core, Icons, Lab, Pickers, Styles, DateFnsUtils };
