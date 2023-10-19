export * as collections from "./collections"
import { init, makeRouter } from "sonata-api"

const router = makeRouter()
router.GET("/getpizzasedges",(context)=>{
    return context.collections.pizza.functions.getAll({
        filters:{
            edge:{
                $ne:null
            }
        }
    })
})
init()