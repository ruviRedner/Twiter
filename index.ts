import exp,{Express} from 'express';
import "dotenv/config"

const app:Express = exp();



app.listen(process.env.PORT,()=>{
    console.log(`Server is up and ruuning on port ${process.env.PORT}`)
})