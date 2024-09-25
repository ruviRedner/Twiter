import express,{Router,Request,Response} from 'express';
import PostService from '../services/postService';

const router:Router = express.Router();
router.get("/",async(
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

router.post("/",async(
    req:Request
    ,res:Response
):Promise<void>=>{
    try {
        const result = await PostService.createNewPost(req.body);
        if(result){
            res.status(200).json({
                err:false,
                message:"surry",
                data:req.body
            })
        }else{
            throw new Error("Cant save the user to the file")
        }
        
        
    } catch (err) {
        res.status(400).json({
            err:true,
            message:"surry",
            data:null
        })
    }

})

router.get("/:id",async(
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

router.patch("/like/:id",async(
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
