const gamesRouter = require("express").Router();

const {
	findAllGames,
	createGame,
	findGameById,
	updateGame,
	deleteGame,
	checkEmptyFields,
	checkIsGameExists,
	checkIfCategoriesAvaliable,
	checkIfUsersAreSafe,
	checkIsVoteRequest,
} = require("../middlewares/games");
const {
	sendAllGames,
	sendGameCreated,
	sendGameById,
	sendGameUpdated,
	sendGameDeleted,
} = require("../controllers/games");
const { checkAuth } = require("../middlewares/auth");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post(
	"/games",
	checkAuth,
	findAllGames,
	checkEmptyFields,
	checkIsGameExists,
	checkIfCategoriesAvaliable,
	createGame,
	sendGameCreated
);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.put(
	"/games/:id",
	checkAuth,
	findGameById,
	checkIsVoteRequest,
	checkEmptyFields,
	checkIfCategoriesAvaliable,
	checkIfUsersAreSafe,
	updateGame,
	sendGameUpdated
);
gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendGameDeleted);

module.exports = gamesRouter;
