import {Observable}   from 'rx'
import searchBar      from './dialogue/components/search-bar/searchbar-index'
import ContentRouter  from './dialogue/components/content-router/content-router-index'
// @cycle/dom has a hyperscript-helper built in so you can
// declare all html elements you are going to use like div, h1, h2, nav etc
import {div}    from '@cycle/dom'

// view is what we'd like to display in this case our sidebar + content all wrapped in a div
const view = (navbar, content) => {
  return div('#layout .pure-g', [
    div('.content .pure-u-1', [
      div('', [navbar]),
      div('', [content])
    ])
  ])
};

// we need to pass our components to cycle and give them a "source" when they come from cycle
// creating this "cycle", here you can see that view$ is a Rx Observable containing out "view"
// we pass view our nav.DOM + Content.DOM which you can see in const view above become available
// variables. We return all of this in an Object with DOM + History
function main(sources) {

  const Content = ContentRouter(sources);
  const {state$} = Content;

  const {DOM, HTTP, router$} = searchBar(sources);
  const searchBarDOM$ = DOM

  const view$ = Observable.just(
    view(
      searchBarDOM$,
      Content.DOM
    )
  );

  return {
    DOM: view$,
    //router: router$.startWith('/'),
    state$: state$.startWith({counter: 0}),
    HTTP: HTTP
  }
};

export default main