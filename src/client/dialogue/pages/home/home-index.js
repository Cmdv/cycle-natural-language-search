import {Observable}     from 'rx'
import view   from './home-view'
import intent from './home-intent'
import model  from './home-model'

// returning our DOM
const Home = (sources) => {
  //const {state$} = sources;
  //const actions  = intent(sources);
  //const state$$  = model({...actions,state$});

  const view$ = Rx.Observable.just(view());

  return {
    DOM: view$
    //state$: state$$,
  }
};

export default Home
