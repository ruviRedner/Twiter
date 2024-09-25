// import fs from 'fs/promises';
import Post from '../models/Post';
import { getFileData, saveFile } from '../config/fileDataLayer';
import newPostDto from '../DTO/newPostDto';

export default class PostService  {
    public static async createNewPost(newPost:newPostDto): Promise<boolean> {
            //create new User
            const {authorId,content,hashtags,ref} = newPost
            const post:Post = new Post(authorId, content, hashtags,ref);
            //add to the user file
            //get the file as an array
            let posts:Post[] = await getFileData<Post>('posts') as Post[];
            if(!posts){
                posts = [];
            }
            //push
            posts.push(post);
            //save the array back to the file 
            return await saveFile('posts', posts);         
    }

    public static async getAllPosts(): Promise<Post[]> {
        //get the file as an array
        const posts: Post[] = await getFileData<Post>('posts') as Post[];
        return posts;
    }
    public static async getPostBySearch(word: string): Promise<Post[]>{
        //get the file as an array
        const posts: Post[] = await getFileData<Post>('posts') as Post[];
        const filter = posts.filter(post=>post.content.includes(word))
        return filter;
    }  
    public static async getPostById(Id: string): Promise<Post | undefined> {
        //get the file as an array
        const posts: Post[] = await getFileData<Post>('posts') as Post[];
        const post = posts.find(post=>post.id === Id)
        return post;
    } 
    public static async likePost(postId: string, userId: string): Promise<boolean> {
        //get the file as an array
        let posts: Post[] = await getFileData<Post>('posts') as Post[];
        const postIndex = posts.findIndex(post=>post.id === postId)
        if(postIndex > -1){
            if(!posts[postIndex].likedBy.includes(userId)){
                posts[postIndex].likedBy.push(userId);
                return await saveFile('posts', posts);
            }
        }
        return false;
    }     
}
