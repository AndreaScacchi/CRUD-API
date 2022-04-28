import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [];

// all routes in here are starting with /users
router.get('/', (req, res) => {
    res.send(users);
});

// push users to the database
router.post('/', (req, res) => {
    const user = req.body;

    // spread all the properties of the user plus create an ID
    users.push({ ...user, id: uuidv4() });
    res.send(`User with the name ${user.firstName} added to the database!`);
});

// new route for different users
router.get('/:id', (req, res) => {
    const { id } = req.params;

    // send the user data for a specific id
    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
});

// new route for delete users
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with the id ${id} deleted from the database!`);
});

// new route for change user details
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age} = req.body;
    const user = users.find((user) => user.id === id);

    if(firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User witht the id ${id} has been updated`);
})

export default router;