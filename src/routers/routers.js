import combineRouters from  'koa-combine-routers'
import aRouter from './aRouter'
import bRouter from './bRouter'

const router = combineRouters(aRouter, bRouter)

export default router
