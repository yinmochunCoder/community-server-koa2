import path from 'path'
import Koa from 'koa'
import helmet from 'koa-helmet'
import statics from 'koa-static';
import router from './routers/routers'

const app = new Koa()
app.use(helmet())
app.use(statics(path.join(__dirname, '../public')))
app.use(router())
app.listen(8000)
