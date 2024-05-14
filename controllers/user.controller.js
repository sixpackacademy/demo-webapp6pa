const models = require('../models');
const User = models.User;

const register = async(req, res) => {
    try{
        // Get data from body
        const data = req.body;

        // Try to find a user
        // users can't register
        // with usernames that already exists
        const user = await User.findOne({where: {username: data.username}})
        if(!user){
            // No user claimed that username, so it creates a user with that username
            const created_user = await User.create(data);

            // Send response as created user
            res.json(created_user);
        } else {
            // If a user tries to get a claimed username
            // It will return a warning message that is already claimed
            res.json({message: "Username already claimed."})
        }
    } catch(error) {
        res.json({message: error})
    }
    
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