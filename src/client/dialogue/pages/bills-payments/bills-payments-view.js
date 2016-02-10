import {h, div, h1,} from 'cycle-snabbdom'

const view = () => {
  return div([
    h1('.content-subhead',['Bill Payments']),
    h1(`Bill Payments`)
  ])
};

export default view
