const users = require("../models/user");
const bcrypt = require("bcryptjs");

const findAllUsers = async (req, res, next) => {
	req.usersArray = await users.find().select("-password");
	next();
};

const createUser = async (req, res, next) => {
	try {
		req.user = await users.create(req.body);
		next();
	} catch (error) {
		res.setHeader("Content-Type", "application/json");
		res.status(400).send(JSON.stringify({ message: "Ошибка создания пользователя" }));
	}
};

const findUserById = async (req, res, next) => {
	try {
		req.user = await users.findById(req.params.id).select("-password");
		next();
	} catch (error) {
		res.setHeader("Content-Type", "application/json");
		res.status(404).send({ message: "Пользователь не найден" });
	}
};

const updateUser = async (req, res, next) => {
	try {
		req.user = await users.findByIdAndUpdate(req.params.id, req.body);
		next();
	} catch (error) {
		res.setHeader("Content-Type", "application/json");
		res.status(400).send({ message: "Ошибка обновления пользователя" });
	}
};

const deleteUser = async (req, res, next) => {
	try {
		req.user = await users.findByIdAndDelete(req.params.id);
		next();
	} catch (error) {
		res.setHeader("Content-Type", "application/json");
		res.status(400).send({ message: "Error deleting user" });
	}
};

const checkEmptyNameAndEmailAndPassword = async (req, res, next) => {
	if (!req.body.username || !req.body.email || !req.body.password) {
		res.setHeader("Content-Type", "application/json");
		res.status(400).send(JSON.stringify({ message: "Введите имя, email и пароль" }));
	} else {
		next();
	}
};

const checkEmptyNameAndEmail = async (req, res, next) => {
	if (!req.body.username || !req.body.email) {
		res.setHeader("Content-Type", "application/json");
		res.status(400).send(JSON.stringify({ message: "Введите имя и email" }));
	} else {
		next();
	}
};

const checkIsUserExists = async (req, res, next) => {
	const isInArray = req.usersArray.find((user) => {
		return req.body.email === user.email;
	});
	if (isInArray) {
		res.setHeader("Content-Type", "application/json");
		res.status(400).send(JSON.stringify({ message: "Пользователь с таким email уже существует" }));
	} else {
		next();
	}
};

const hashPassword = async (req, res, next) => {
	try {
		// Создаём случайную строку длиной в десять символов
		const salt = await bcrypt.genSalt(10);
		// Хешируем пароль
		const hash = await bcrypt.hash(req.body.password, salt);
		// Полученный в запросе пароль подменяем на хеш
		req.body.password = hash;
		next();
	} catch (error) {
		res.status(400).send({ message: "Ошибка хеширования пароля" });
	}
};

module.exports = {
	findAllUsers,
	createUser,
	findUserById,
	updateUser,
	deleteUser,
	checkEmptyNameAndEmailAndPassword,
	checkEmptyNameAndEmail,
	checkIsUserExists,
	hashPassword,
};
