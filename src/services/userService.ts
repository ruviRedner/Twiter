import fs from 'fs/promises';
import User from '../models/User';

class UserService{
    public static async createNewUser(newUser:newUserDto): Promise<void> {
            //create new User
            const {username,password,email,Birthday,avatarUrl} = newUser
            const user:User = new User(username,password,email,Birthday,avatarUrl);
            //add to the user file
            //get the file as an array
            //push
            //save the array back to the file          
    }
}