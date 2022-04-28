import express from 'express';
import { createUser, getUsers, getUser, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();

// all routes in here are starting with /users
router.get('/', getUsers);

// push users to the database
router.post('/', createUser);

// new route for different users
router.get('/:id', getUser);

// new route for delete users
router.delete('/:id', deleteUser);

// new route for change user details
router.patch('/:id', updateUser);

export default router;