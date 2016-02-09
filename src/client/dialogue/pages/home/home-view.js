import {h, div, h1, h2, button, p} from '@cycle/dom'

const view = (state$) =>
  state$.map(({counter}) => {
      return div('.homepage', [
        h1('.content-subhead', ['Other ways to contact us:']),
        div([])
      ])
    }
  );

export default view
