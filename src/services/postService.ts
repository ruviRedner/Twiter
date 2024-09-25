import fs from 'fs/promises';
import Post from '../models/Post';
import { getFileData, saveFile } from '../config/fileDataLayer';
import newPostDto from '../DTO/newPostDto';

export default class PostService  {
    public static async createNewPost(newPost:newPostDto): Promise<boolean> {
            //create new User
            const {authorId,content,hashtags} = newPost
            const post:Post = new Post(authorId, content, hashtags);
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
}