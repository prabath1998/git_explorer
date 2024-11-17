import express from "express";
import dotenv from "dotenv";
import cors from "cors";


import userRoutes from "./routes/user.route.js"
import exploreRoutes from "./routes/explore.route.js";
dotenv.config();


const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.use(cors());
app.use("/api/users",userRoutes);
app.use("/api/explore", exploreRoutes);

app.listen(5000, () => {
    console.log('Server listening on port http://localhost:5000');
    
})