import {p, h, div, ul, li, a, input, h1, h2} from '@cycle/dom'

function view (HTTPres$) {
  return HTTPres$
    .map((x) => {
    return div([
      h1('.brand-title', [`Contact Us`]),
      h2('.brand-tagline', [`What would you like to contact us about?`]),
      div('.searchbar', [
        input('.searchinput', {type: 'text'}, []),
      ])
    ])

  });
};

export default view;
