import Router from 'koa-router'
import bApi from '../api/b'

const bRouter = new Router()
bRouter.get('/b',bApi)
export default bRouter