import { v4 } from "uuid"

class User {
        public id: string
        public folowers: string[] = []
        public folowing: string[] = []
        public isLockedAcccount: boolean = false;
        public token?: string;
    constructor(
          public username: string,
          public password: string,
          public email:    string,
          public birthday: Date,
          public avatarUrl:string,
    ) {
        this.id = v4();
        
    }
}

export default User;