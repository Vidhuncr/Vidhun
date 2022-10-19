import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes';
import cors from 'cors';
import blogRouter from './routes/blog-routes';

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user/", router);
app.use("/api/blog", blogRouter)

mongoose.connect("mongodb+srv://Vidhun:090802@cluster0.q1tlnul.mongodb.net/?retryWrites=true&w=majority")
        .then(() => app.listen(5000))
        .then(() => console.log("Connected to DB"))
        .catch((err) => console.log("ERR", err));

app.use("/", (request, response, next) => {
    response.send("Welcome to MERN Application")
})