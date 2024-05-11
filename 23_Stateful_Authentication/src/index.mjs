import { app } from './app.mjs';
import { connectDB } from './database/connectDB.mjs'
import { PORT } from  './constants.mjs'

connectDB()
.then(() => {
    app.listen( PORT , () => {
        console.log(`Server listening  on port ${PORT}`);
    })
    app.on("error", (error) => {
        console.log("Error: ", error);
        throw error;
    })
})
.catch((error) => {
    console.log('MongoDB Connection Failed: ', error);
})