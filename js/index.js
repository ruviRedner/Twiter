import exp from 'express';
// import {Express} from "express"
import "dotenv/config";
const app = exp();
app.listen(process.env.PORT, () => {
    console.log(`Server is up and ruuning on port ${process.env.PORT}`);
});
