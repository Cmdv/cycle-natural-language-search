const NLP_API = 'http://localhost:3001/';

const searchBarModel = (sources, intent$) => {
  return {
    mergedQuery$: intent$.apiQuery$.map((x) => {
        const url = NLP_API + '?s=' + encodeURIComponent(x)
        return {
          url: url,
          method: 'GET',
        };
      })
      .skip(1).do(x => console.log(x)),

    HTTPres$: sources.HTTP.flatMap(x => x)
      .map(res => res.text + '/')
      .startWith([]).share()
  }
}

export default searchBarModel;


//
//const NLP_API = 'http://localhost:3001/';
//
//const searchBarModel = ({HTTP, apiQuery$}) => {
//
//  const apiQuery = apiQuery$
//    .map((x) => {
//      const url = NLP_API + '?s=' + encodeURIComponent(x)
//      return {
//        url: url,
//        method: 'GET',
//      };
//    })
//    .skip(1)
//    .do(x => console.log(x));
//
//  const HTTPres$ = HTTP.flatMap(x => x)
//    .map(res => res.text)
//    .startWith([])
//    .do(x => console.log(x));
//
//
//  return {
//
//    apiQuery,
//    HTTPres$
//  }
//}
//
//export default searchBarModel;
