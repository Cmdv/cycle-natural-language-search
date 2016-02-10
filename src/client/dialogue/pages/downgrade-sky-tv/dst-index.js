import Rx   from 'rx'
import view from './dst-view'

const Page2 = () => {

  const view$ = Rx.Observable.just(view());
  return {
    DOM: view$
  }
};

export default Page2
