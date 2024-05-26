import express from 'express';
// import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from "./routes/ToDoRoute.js"
import cors from "cors";
import { } from "dotenv/config.js";

const app = express();
// app.use(bodyParser.json());
const PORT = process.env.port || 5000

//Middleware
app.use(cors())
app.use(express.json())

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log(`Connected to MongoDB...`))
    .catch((err) => console.log(err))

app.use("/api", routes);

app.listen(PORT, () => console.log(`Listening on: ${PORT}`))