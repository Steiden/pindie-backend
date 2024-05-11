const gamesRouter = require('express').Router();

const {findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIsGameExists, checkIfCategoriesAvaliable, checkIfUsersAreSafe} = require('../middlewares/games');
const {sendAllGames, sendGameCreated, sendGameById, sendGameUpdated, sendGameDeleted} = require('../controllers/games');

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post('/games', findAllGames, checkEmptyFields, checkIsGameExists, checkIfCategoriesAvaliable, createGame, sendGameCreated);
gamesRouter.get('/games/:id', findGameById, sendGameById);
gamesRouter.put('/games/:id', findAllGames, checkEmptyFields, checkIfCategoriesAvaliable, checkIfUsersAreSafe, updateGame, sendGameUpdated);
gamesRouter.delete('/games/:id', deleteGame, sendGameDeleted);

module.exports = gamesRouter;