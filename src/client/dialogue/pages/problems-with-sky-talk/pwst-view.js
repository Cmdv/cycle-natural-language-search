import {h, div, h1, h2} from '@cycle/dom'

const view = () => {
  return div('.page1', [
    h1('.content-subhead', ['Problems with Sky Talk']),
    h1([`Problems with Sky Talk`]),
  ])
}

export default view;
