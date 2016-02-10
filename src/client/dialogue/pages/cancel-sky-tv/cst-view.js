import {h, div, h1, h2} from 'cycle-snabbdom'

const view = () => {
    return div('.page1',[
      h1('.content-subhead', ['Cancel Sky TV']),
      h1([`Cancel Sky TV`]),
    ])
}

export default view;
