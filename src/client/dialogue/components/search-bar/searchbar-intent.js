import {Observable} from 'rx'
// Our navbar need some intent, our intent looks out for clicks on elements with the class of .link
// and once we get one we filter it through our History driver
const intent = ({DOM}) => {
  const ENTER_KEYCODE = 13

  const enterPressed$ = DOM.select('.searchinput').events('keydown')
    .filter(({keyCode}) => keyCode === ENTER_KEYCODE);

  const inputFieldChange$ = enterPressed$
    .map((evt) => {
      const target = evt.target.value
      evt.target.value = ''
      return target
    })
    .startWith('')
    .share();

  return {
    apiQuery$: inputFieldChange$,
  }
}

export default intent;
