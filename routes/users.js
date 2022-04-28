import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [];

// all routes in here are starting with /users
router.get('/', (req, res) => {
    res.send(users);
});

// push users to the database
router.post('/', (req, res) => {
    const user = req.body;

    // create a new object which represents the user and then spread all the properties of the user
    // plus create an ID
    users.push({ ...user, id: uuidv4() });
    res.send(`User with the name ${user.firstName} added to the database!`);
});

export default router;