import mongoose from 'mongoose';
import { DB_NAME } from '../constants.mjs';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n Database Successfully Connected!   DB Host: {connectionInstance}`);
    } catch (error) {
        console.log('Mongoose Connection Failed: ', error);
        process.exit(1);
    }
};

module.exports = {
    connectDB
};