import Rx   from 'rx'
import view from './cst-view'

const Page1 = (sources) => {
  const state$ = sources.state$;
  const $view = view(state$);

  return {
    DOM: Rx.Observable.just($view),
    state$: state$,
  }
};

export default Page1
