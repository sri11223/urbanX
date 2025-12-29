import express from "express"

import dotenv from "dotenv";
import { connectDB } from "./batabase/connectDB.js";
import authResponse from "./routes/auth.js";
import bodyParser from "body-parser";


const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();
app.use(bodyParser.json());
app.use(express.json());
app.use("/api/auth",authResponse);


app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});

