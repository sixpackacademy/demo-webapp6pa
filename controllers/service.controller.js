const models = require('../models');
const Service = models.Service;

const create = async(req, res) => {

    try {
        // Get data from request body
        const data = req.body;
        // Verify if already exists that service
        const exists_service = await Service.findOne({where: {name: data.name}})
        if(exists_service){
            res.json({message: "Service already exists."})
        } else {
            const service = await Service.create(data);
            res.json(service);
        }
    } catch {
        res.json({message: error})
    }
}

const getServices = async(req, res) => {
    const services = await Service.findAll();
    res.json(services)
}
module.exports = {
    create,
    getServices
}