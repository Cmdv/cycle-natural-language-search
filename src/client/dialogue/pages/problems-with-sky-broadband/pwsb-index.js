import Rx   from 'rx'
import view from './pwsb-view'

const problemsWithSkyBroadband = (sources) => {

  const view$ = Rx.Observable.just(view());

  return {
    DOM: view$
  }
};

export default problemsWithSkyBroadband
