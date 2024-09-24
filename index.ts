import exp,{Express} from 'express';
import AuthController from './src/controllers/auth.controller';
import PostController from './src/controllers/post.controller';
import UserController from './src/controllers/user.controller';

import "dotenv/config"

const app:Express = exp();

app.use("/auth", AuthController);

app.use("/post", PostController);

app.use("/user", UserController);



app.listen(process.env.PORT,():void =>{
    console.log(`Server is up and ruuning on port ${process.env.PORT}`)
})