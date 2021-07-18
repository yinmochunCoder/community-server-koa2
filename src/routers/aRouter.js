import Router from 'koa-router'
import aApi from '../api/a'

const aRouter = new Router()
aRouter.get('/a',aApi)
export default aRouter