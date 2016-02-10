import Rx   from 'rx'
import view from './cst-view'

const Page1 = () => {

  const view$ = Rx.Observable.just(view());
  return {
    DOM: view$
  }
};

export default Page1
