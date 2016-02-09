import {run}                from '@cycle/core';
import {makeDOMDriver}      from '@cycle/dom';
import {makeHTTPDriver}     from '@cycle/http';
import {makeHistoryDriver}  from 'cyclic-history'
import {makeRouterDriver}   from 'cyclic-router'
import {createHashHistory}  from 'history'
import {makeStateDriver}    from './state-driver'

import Main                 from './app'

require("!style!css!./styles/pure-min.css");
require("!style!css!./styles/layout.css");
require("!style!css!./styles/grids-responsive-min.css");

const sources = {
  DOM: makeDOMDriver('#application'),
  router: makeRouterDriver(makeHistoryDriver(createHashHistory())),
  state$: makeStateDriver(),
  HTTP: makeHTTPDriver(),
};

run(Main,sources);
