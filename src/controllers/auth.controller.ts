import express,{Router,Response,Request} from 'express';

const router:Router = express.Router();


export default router;

router.post("/login",async(
    req:Request
    ,res:Response
):Promise<void>=>{
    try {

        res.status(200).json({
            err:false,
            message:"surry",
            data:undefined
        })
        
    } catch (err) {
        res.status(400).json({
            err:true,
            message:"surry",
            data:null
        })
    }

})

router.delete("/logout",async(
    req:Request
    ,res:Response
):Promise<void>=>{
    try {

        res.status(200).json({
            err:false,
            message:"surry",
            data:undefined
        })
        
    } catch (err) {
        res.status(400).json({
            err:true,
            message:"surry",
            data:null
        })
    }

})