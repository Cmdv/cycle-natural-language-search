import view from './searchbar-view'
import searchbarIntent from './searchbar-intent'
import searchbarModel from './searchbar-model'

const searchBar = (sources) => {

  const intent$ = searchbarIntent(sources);
  const {mergedQuery$, HTTPres$} = searchbarModel(sources, intent$);
  const view$ = view(HTTPres$, intent$);

  return {
    DOM: view$,
    HTTP: mergedQuery$,
    router: HTTPres$
  }
};

export default searchBar;
