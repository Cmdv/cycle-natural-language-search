import {h, div, h1, h2} from '@cycle/dom'

const view = () => {
  return div('.page2', [
    h1('.content-subhead', ['Downgrade Sky Tv']),
    h1([`Downgrade Sky Tv`]),
  ])
};

export default view
