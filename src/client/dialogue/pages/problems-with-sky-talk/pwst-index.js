import Rx   from 'rx'
import view from './pwst-view'

const Page1 = () => {
  const view$ = Rx.Observable.just(view());
  return {
    DOM: view$
  }
};

export default Page1
