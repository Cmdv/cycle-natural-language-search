import routes from './routes'

function ContentRouter(sources) {
  const {router, state$} = sources;
  const {path$, value$} = router.define(routes);

  const childrenDOM$ = path$.zip(value$,
    (path, value) => {
      const comp = value({...sources, router: router.path(path), /* state$: state$.take(1) */})
      return {
        DOM: comp.DOM,
        state$: comp.state$
      }
    }
  )

  return {
    DOM: childrenDOM$.flatMapLatest(s => s.DOM),
    state$: childrenDOM$.flatMapLatest(s => s.state$),
    path$: path$
  };
}

export default ContentRouter;
