const NLP_API = 'http://localhost:3001/';

const searchBarModel = (intent$) => {

  return intent$.apiQuery$
    .map((x) => {
      const url = NLP_API + '?s=' + encodeURIComponent(x)

      return {
        url: url,
        method: 'GET',
      };
    })
    .skip(1)
    .do(x => console.log(x))
}

export default searchBarModel;
