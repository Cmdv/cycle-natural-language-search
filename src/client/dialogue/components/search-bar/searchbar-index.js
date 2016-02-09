import view from './searchbar-view'
import searchbarIntent from './searchbar-intent'
import searchbarModel from './searchbar-model'

const searchBar = (sources) => {

  const intent$ = searchbarIntent(sources);
  const apiQuery$ = searchbarModel(intent$);
  const view$ = view(sources, intent$);

  return {
    DOM: view$,
    HTTP: apiQuery$,
    //router: httpRes$
  }
};

export default searchBar;
