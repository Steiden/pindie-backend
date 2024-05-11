const usersRouter = require('express').Router();

const {findAllUsers, createUser, findUserById, updateUser, deleteUser, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, checkIsUserExists} = require('../middlewares/users');
const {sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted} = require('../controllers/users');

usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post('/users', findAllUsers, checkEmptyNameAndEmailAndPassword, checkIsUserExists, createUser, sendUserCreated);
usersRouter.get('/users/:id', findUserById, sendUserById);
usersRouter.put('/users/:id', checkEmptyNameAndEmail, checkIsUserExists, updateUser, sendUserUpdated);
usersRouter.delete('/users/:id', deleteUser, sendUserDeleted);

module.exports = usersRouter;