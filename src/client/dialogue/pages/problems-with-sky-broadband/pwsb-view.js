import {h, div, h1, h2} from 'cycle-snabbdom'

const view = () => {
  return div('.page1', [
    h1('.content-subhead', ['Problems with Sky Broadband']),
    h1([`Problems with Sky Broadband`]),
  ])
}

export default view;
