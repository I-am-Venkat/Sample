import express from 'express'
import dotenv from 'dotenv'
import db from  './src/config/db.js' 
import cors from 'cors'
dotenv.config();
import addUser from './src/controller/addUser.js'

const app = express();
// Connect to MongoDB
db();
app.use(cors(
    {
        origin:"http://localhost:5173",
        methods:["GET","POST","DELETE","PUT"],
        credentials:true,
        allowedHeaders:["Content-Type","Authorization"],
    }
));
app.use(express.json());
//


app.post("/Register",addUser);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});