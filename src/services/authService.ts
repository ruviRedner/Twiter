import bcrypt from "bcrypt"
import { getFileData, saveFile } from '../config/fileDataLayer';
import loginDTO from '../DTO/loginDto';
import User from '../models/User';
import  Jwt  from 'jsonwebtoken';


export default class AuthService  {
    public static async login(userData:loginDTO): Promise<Error| string> {
            //create new User
            const {username,password} = userData
            
            //add to the user file
            //get the file as an array
            let users:User[] = await getFileData<User>('users') as User[];
            if(!users){
                throw new Error("500: No users at all was found in the system");   
            }
            const user = users.find(u => u.username == username)
            if(!user){
                throw new Error("401: No user with that username");  
            }
            //hash
            if(!await bcrypt.compare(password,user.password)){ 
                throw new Error("403:Wrong password ");
            }
            const payloed = {username,id:user.id,avatarUrl:user.avatarUrl,email:user.email,isLockedAccount:user.isLockedAcccount}
            return   Jwt.sign(payloed,process.env.TOKEN_SECRET as string,{
                expiresIn:"10m"
            })     
    }
    
}
