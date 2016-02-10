const NLP_API = 'http://localhost:3001/';

const searchBarModel = (sources, intent$) => {

  const mergedQuery$ = intent$.apiQuery$.map((x) => {
      const url = NLP_API + '?s=' + encodeURIComponent(x)
      return {
        url: url,
        method: 'GET',
      };
    })
    .skip(1).do(x => console.log(x))

  const HTTPres$ = sources.HTTP.flatMap(x => x)
    .map(res => res.text + '/')
    .startWith([])

  return {
    mergedQuery$,
    HTTPres$
  }
}

export default searchBarModel;
