import bcrypt from "bcrypt"
import User from '../models/User';
import { getFileData, saveFile } from '../config/fileDataLayer';

export default class UserService{
    public static async createNewUser(newUser:newUserDto): Promise<boolean> {
            //create new User
            const {username,password,email,Birthday,avatarUrl} = newUser
            //hash the password
            const hashPassword :string = await bcrypt.hash(password,10)
            const user:User = new User(username,hashPassword,email,Birthday,avatarUrl);
            //add to the user file
            //get the file as an array
            let users:User[] = await getFileData<User>('users') as User[];
            if(!users){
                users = [];
            }
            //push
            users.push(user);
            //save the array back to the file 
            return await saveFile('users', users);         
    }

    public static async makeFollow(userid:string,userToFollowId:string):Promise<boolean>{
        //get the file as an array
        let users:User[] = await getFileData<User>('users') as User[];
        const userIndex = users.findIndex(user=>user.id === userid)
        const userToFollowIndex = users.findIndex(user=>user.id === userToFollowId)
        if(userIndex > -1 && userToFollowIndex > -1){
            if(!users[userIndex].folowing.includes(userToFollowId) &&!users[userToFollowIndex].folowers.includes(userid)){
                users[userIndex].folowing.push(userToFollowId);
                users[userToFollowIndex].folowers.push(userid);
                return await saveFile('users', users);
            }
        }
        return false;
    }
    public static async getUserBySearchQuery(query:string): Promise<User[]>{
        //get the file as an array
        let users:User[] = await getFileData<User>('users') as User[];
        return users.filter(user=>user.username.includes(query));
    }
    public static async getUserProfile(id:string):Promise<User | undefined>{
        let users:User[] = await getFileData<User>('users') as User[];
        return users.find(user => user.id == id)
    }

    public static async getFolloers(id:string) : Promise<string[]>{
        //get the file as an array
        let users:User[] = await getFileData<User>('users') as User[];
        const user = users.find(u => u.id == id)
        if(!user){
             throw new Error("gyfb");
             
            
        }
        return user.folowers
    }

    public static async getFolloing(id:string) : Promise<string[]>{
        //get the file as an array
        let users:User[] = await getFileData<User>('users') as User[];
        const user = users.find(u => u.id == id)
        if(!user){
             throw new Error("gyfb");
             
            
        }
        return user.folowing
    }

   

    
        
    
}

   
