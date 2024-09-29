import express,{Router,Response,Request} from 'express';
import loginDTO from '../DTO/loginDto';
import AuthService from '../services/authService';

const router:Router = express.Router();


export default router;

router.post("/login",async(
    req:Request<any,any,loginDTO>
    ,res:Response
):Promise<void>=>{
    try {
        const token = await AuthService.login(req.body)
        res.status(200).json({
            err:false,
            message:"here`s your token ",
            data:token
        })
        
    } catch (err) {
        console.log(err as Error)
        const [status,msg] = (err as Error).message.split(":")
        res.status(Number(status)).json({
            
            
            err:true,
            message: msg || "Sorry no token today", 
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