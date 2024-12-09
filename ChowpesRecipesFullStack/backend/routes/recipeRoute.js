
import express from "express";
import { Recipe } from "../models/recipeModel.js";
import { User } from "../models/formModel.js";

const recipeRouter = express.Router();

//? Route for saving a new recipe and updating user with recipes created.
recipeRouter.post('/', async (req, res) => {
    console.dir(req.body);
    let newRecipe = await Recipe.create(req.body);
    let newnew = await newRecipe.populate('userId');
    let arr = await newnew.userId._doc.recipesCreated;
    let update = await User.findByIdAndUpdate(newRecipe.userId, { recipesCreated: [...arr, newRecipe._id] }, { new: true });
    console.dir(update);
    return res.json(req.body);
})


//? Route to get all recipes from the database
recipeRouter.get("/", async (req, res) => {
    try {
        const recipes = await Recipe.find({});
        return res.status(200).json({
            count: recipes.length,
            data: recipes
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

recipeRouter.get("/userRecipes", async (req, res) => {
    try {
        const recipes = await Recipe.find({});
        return res.status(200).json({
            count: recipes.length,
            data: recipes
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

recipeRouter.get("/editRecipe/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findById(id);
        console.log(id)

        return res.status(200).json(recipe);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: "edit This didnt work" })
    }
});

//? Route to get one recipe from the database by id
recipeRouter.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        // console.log(id)
        const recipe = await Recipe.findById(id)
        // console.log(recipe.userId);
        return res.status(200).json(recipe);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: "personalized" })
    }
});

//? Route to update a recipe
recipeRouter.put("/editRecipe/:id", async (req, res) => {
    console.log('At the PUT')
    // console.log(req.body);
    try {
        const { id } = req.params;
        let result = await Recipe.findByIdAndUpdate(id, req.body).populate('userId', 'firstName');
        if (!result) {
            return res.status(404).json({ message: "Recipe not found" });
        }
        return res.json(req.body);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

//? Route for deleting a recipe
recipeRouter.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        let result = await Recipe.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: "Recipe not found" })
        }
        return res.json(result)
    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message });
    }
});
export default recipeRouter;