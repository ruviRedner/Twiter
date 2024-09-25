import fs from 'fs/promises';
import User from '../models/User';
import { getFileData, saveFile } from '../config/fileDataLayer';

export default class UserService{
    public static async createNewUser(newUser:newUserDto): Promise<boolean> {
            //create new User
            const {username,password,email,Birthday,avatarUrl} = newUser
            const user:User = new User(username,password,email,Birthday,avatarUrl);
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
}
