import {h, div, h1,} from 'cycle-snabbdom'

const view = () => {
  return div([
    h1('.content-subhead',['No results']),
    h1(`Sorry we have no results for this query right now!!`)
  ])
};

export default view
