import {p, h, div, ul, li, a, input, h1, h2} from '@cycle/dom'

function view (sources, intent$) {
  const {HTTP} = sources;

  const NLP_API = 'http://localhost:3001/?q=';

  return sources.HTTP
    .flatMap(x => x)
    .map(res => {
      console.log(res);
      return res.text
    })
    .startWith([])
    .map((x) => {

    return div([
      h1('.brand-title', [`Contact Us`]),
      h2('.brand-tagline', [`What would you like to contact us about?`]),
      div('.searchbar', [
        input('.searchinput', {type: 'text'}, []),
        h1(['result: ' + x])
      ])])

  });
};

export default view;
