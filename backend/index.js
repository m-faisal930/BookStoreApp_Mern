import express from 'express';
import mongoose, { mongo } from 'mongoose';
import dotenv from "dotenv"
import bookRoute from "./route/book.rout.js";
import userRoute from "./route/user.rout.js";
import cors from "cors";
dotenv.config();
const app = express()
const port = process.env.PORT
app.use(cors());
app.use(express.json());

// connect to mongoDB
try {
    mongoose.connect(process.env.MongoDBURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}
    

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})