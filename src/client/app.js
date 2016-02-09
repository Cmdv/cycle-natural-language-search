import {Observable}   from 'rx'
import searchBar      from './dialogue/components/search-bar/searchbar-index'
import ContentRouter  from './dialogue/components/content-router/content-router-index'
import {div}    from '@cycle/dom'

const view = (navbar, content) => {
  return div('#layout .pure-g', [
    div('.content .pure-u-1', [
      div('', [navbar]),
      div('', [content])
    ])
  ])
};

function main(sources) {

  const Content = ContentRouter(sources);
  const {state$} = Content;

  const {DOM, HTTP, router} = searchBar(sources);
  const searchBarDOM$ = DOM

  const view$ = Observable.just(
    view(
      searchBarDOM$,
      Content.DOM
    )
  );

  return {
    DOM: view$,
    router: router.startWith('/'),
    state$: state$.startWith({counter: 0}),
    HTTP: HTTP
  }
};

export default main
