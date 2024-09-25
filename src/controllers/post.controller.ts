import express,{Router,Request,Response} from 'express';
import PostService from '../services/postService';
import newPostDto from '../DTO/newPostDto';

const router:Router = express.Router();
router.get("/",async(
    req:Request
    ,res:Response
):Promise<void>=>{
    try {
        const result = await PostService.getAllPosts();
        if(result){
            res.status(200).json({
                err:false,
                message:"surry",
                data:result
            })
        }else{
            throw new Error("Cant get all posts")
        }
        
    } catch (err) {
        res.status(400).json({
            err:true,
            message:"surry",
            data:null
        })
    }

})

router.get("/search",async(
    req:Request<any,any,string>
    ,res:Response
):Promise<void>=>{
    try {
        const result = await PostService.getPostBySearch(req.query.word as string);
        if(result){
            res.status(200).json({
                err:false,
                message:"please have a post",
                data:result
            })
        }else{
            throw new Error("Cant get post by search")
        }    
        } catch (err) {
        res.status(400).json({
            err:true,
            message:"surry",
            data:null
        })
    }

})

router.post("/",async(
    req:Request<any,any,newPostDto>
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
         const result = await PostService.getPostById(req.params.id);
        if(result){
            res.status(200).json({
                err:false,
                message:"please have a post",
                data:result
            })
        }else{
            throw new Error("Cant get post by id")
        }
        } catch (err) {
            res.status(400).json({
            err:true,
            message:"surry",
            data:null
        })
    }

})

router.patch("/like/:idp/:idu",async(
    req:Request
    ,res:Response
):Promise<void>=>{
    try {
        const result = await PostService.likePost(req.params.idp,req.params.idu);
        if(result){
            res.status(200).json({
                err:false,
                message:"surry",
                data:result
            })
        }else{
            throw new Error("Cant  save like the post")
        }
        
        
    } catch (err) {
        res.status(400).json({
            err:true,
            message:"surry",
            data:null
        })
    }

})

export default router;
