import express from "express";
import { User } from "../models/formModel.js";

const router = express.Router();

//? Route for saving a new User
router.post("/", async (req, res) => {
    console.log(req.body);
    try {
        if (!req.body.firstName || !req.body.lastName || !req.body.userName || !req.body.email || !req.body.password || !req.body.address || !req.body.city || !req.body.state || !req.body.zipCode || !req.body.phone) {
            return res.status(400).send({
                message: "Send all required fields: firstName, lastName, userName, password, address, city, state, zipCode, phone"
            });
        }

        const newUser = {
            image: req.body.image,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zipCode: req.body.zipCode,
            phone: req.body.phone,
            favorites: []
        }

        const user = await User.create(newUser);

        return res.status(201).send(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

//? Route to get all users from database
router.get("/", async (req, res) => {
    try {
        const users = await User.find({});
        return res.status(200).json({
            count: users.length,
            data: users
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

//? Route for admin to get populated users
router.get("/admin", async (req, res) => {
    try {
        const users = await User.find({}).populate('favorites').exec();
        return res.status(200).json(users);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

//? Route to get one user from database by id
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id);

        return res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
});

//? get User favorites
router.get('/:id/favs', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User
            .findById(id)
            .populate('favorites')
            .exec()

        return res.status(200).json(user);

    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message })
    }
});

//? Route for update user
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await User.findByIdAndUpdate(id, req.body, { new: true })
        // .populate('recipesCreated').exec()
        console.dir(result)
        // console.dir(res)
        console.log(req.body);
        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(result);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

//? Route for deleting a user
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const result = await User.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).send({ message: "User deleted successfully" });

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});


export default router;