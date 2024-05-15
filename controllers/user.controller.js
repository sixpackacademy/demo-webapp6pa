const models = require('../models');
const User = models.User;
const Product = models.Product;
const ProductReservation = models.ProductReservation;
const Service = models.Service;
const ServiceAppointment = models.ServiceAppointment;

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
        req.session.loggedIn = true
        req.session.userID = user.id
        res.json(user)
    }

}

const serviceappointment = async(req, res) => {
    try {
        const service = await Service.findOne({where:{id: req.params.id}})
        const user = await User.findOne({where: {username: req.params.username}})
        const service_appointment_exists = await ServiceAppointment.findOne({where: {UserID: user.id, ServiceID: service.id}})
        if(service_appointment_exists){
            // What if he already done that servic
            // and he wants to appoint it again but to another day
            if(service.status === "Feito"){
                const service_appointment = await ServiceAppointment.create({
                    date_time: req.body.date_time,
                    UserID: user.id,
                    ServiceID: service.id,
                })
                res.json(service_appointment)
            } else {
                res.json({message: "Service not done."})
            }
        } else {
            const service_appointment = await ServiceAppointment.create({
                date_time: req.body.date_time,
                UserID: user.id,
                ServiceID: service.id,
            })
            res.json(service_appointment)
        }   
    } catch(error) {
        res.json({message: error.messageS})
    }
}

const productreservation = async(req, res) => {
    try {
        // Try to get product by URL given id
        // Ando also try to get user By URL given username

        const product = await Product.findOne({where: {id: req.params.id}});
        const user = await User.findOne({where: {username: req.params.username}});
        
        // Get user id to insert data
        // To ProductRservation
        const user_id = user.id;
        
        // Check if exists an product reservation
        const exists_reserve_product = await ProductReservation.findOne({where: {UserID: user_id, ProductID: product.id}})
        if(exists_reserve_product){
            res.json({message: 'Already reserved.'})
        } else {
            const reserve_product = await ProductReservation.create(
                {
                    UserID: user_id,
                    ProductID: product.id,
                }
            )
            res.json(reserve_product);
        }
        
        
    } catch(error) {
        res.json({message: error})
    }
}

const getProductRservation = async(req, res) => {
    try {
        const ProductsReservations = await ProductReservation.findAll()
        res.json(ProductsReservations);
    } catch(error){
        res.json({message: error})
    }
}

module.exports = {
    register,
    login,
    productreservation,
    getProductRservation,
    serviceappointment,
}