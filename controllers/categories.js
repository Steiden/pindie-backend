const sendAllCategories = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(req.categoriesArray));
}

const sendCategoryCreated = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(req.category));
}

const sendCategoryById = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(req.category));
}

const sendCategoryUpdated = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(req.category));
}

const sendCategoryDeleted = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(req.category));
}

module.exports = {
    sendAllCategories,
    sendCategoryCreated,
    sendCategoryById,   
    sendCategoryUpdated,
    sendCategoryDeleted
};