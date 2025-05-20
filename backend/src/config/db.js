import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

const db = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("MongoDB connected"))
        .catch((err) => console.error("Connection Failed", err));


}

export default db