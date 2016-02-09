import koa from 'koa';
import koaRouter from 'koa-router';
import json from 'koa-json';
import cors from 'koa-cors';

import nlp from './nlp-api';

const app = koa();
const router = koaRouter();

app.use(cors())

app.use(json())

router.get('/', function* (next) {
  this.set("Access-Control-Allow-Origin", "*");
  console.log('Incoming query: ', this.query.s)
  const classified = nlp(this.query.s)
  this.body = classified;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(process.env.PORT || 3001);
