const models = require('../models');
const User = models.User;

const register = async(req, res) => {
    const data = req.body;
    const user = await User.create(data);
    res.json(user);
}

module.exports = {
    register
}