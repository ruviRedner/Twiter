import express,{Request, Router,Response} from 'express';
import UserService from '../services/userService';

const router:Router = express.Router();
router.post("/register",async(
    req:Request<any,any,newUserDto>
    ,res:Response
):Promise<void>=>{
    try {
        const result = await UserService.createNewUser(req.body);
        if(result){
            res.status(200).json({
                err:false,
                message:"data saved sucsspuly",
                data:req.body
            })
        }else{
            throw new Error("Cant save the user to the file")
        }
       
        
    } catch (err) {
        res.status(400).json({
            err:true,
            message: "sorry",
            data:null
        })
    }

})

router.post("/follow",async(
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

router.get("/search",async(
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

//? type = mine || else
router.get("/profile",async(
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

//? type = mine || else
router.get("/followers",async(
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


//? type = mine || else
router.get("/following",async(
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
export default router;