import {h, div, h1, h2} from '@cycle/dom'

const view = state$ => {
  return state$.map(({counter}) => {
    return div('.page1',[
      h1('.content-subhead', ['Cancel Sky TV']),
      h1([`Cancel Sky TV`]),
      h2(['Counter: ' + counter])
    ])
  });
}

export default view;
