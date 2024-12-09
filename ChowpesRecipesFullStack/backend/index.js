import express from "express";
import { HOST, PORT, dataBase } from "./config.js";
import mongoose from "mongoose";
// import User from "./models/formModel.js";
import userRoute from "./routes/userRoute.js";
import cors from "cors";
import { User } from "./models/formModel.js";
import { Recipe } from "./models/recipeModel.js";
import recipeRouter from "./routes/recipeRoute.js";
const app = express()

// Middleware for parsing request body
app.use(express.json())

// Middleware for handling CORS POLICY
app.use(cors());

app.get("/", (req, res) => {
    return res.status(234).send("Welcome to ChowPe's Recipes");
});

app.post('/', async (req, res) => {
    let existingUser = await User.findOne(req.body) // .select('userName firstName lastName').lean();
    console.dir(existingUser)
    if (existingUser) {
        res.json(existingUser)
    } else if (!existingUser) {
        res.json('User does not exist')
    }
});

app.get('/account', async (req, res) => {
    let accountUser = await User.findOne(req.body)
    console.dir(accountUser)
    if (accountUser) {
        res.json(accountUser)
    } else if (!accountUser) {
        res.json('User does not exist')
    }
});




app.use('/users', userRoute);
app.use('/recipes', recipeRouter);

mongoose
    .connect(dataBase)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(`App is listening to port ${HOST}:${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });