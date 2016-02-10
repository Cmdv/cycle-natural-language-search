import {h, div, h1, h2, button, p} from 'cycle-snabbdom'

const view = () => {
  return div('.homepage', [
    h1('.content-subhead', ['Other ways to contact us:']),
    div([])
  ])
};

export default view
