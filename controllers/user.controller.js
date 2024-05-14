const models = require('../models');
const User = models.User;

const register = async(req, res) => {
    const data = req.body;
    const user = await User.create(data);
    res.json(user);
}

const login = async(req, res) => {
    const data = req.body;
    const user = await User.findOne({where: {username: data.username}})
    if(!user){
        res.json({message: 'User not found'})
    } else if(!user.validPassword(data.password)){
        res.json({message: 'Invalid Password'})
    } else {
        res.json({message: 'success'})
    }

}

module.exports = {
    register,
    login
}