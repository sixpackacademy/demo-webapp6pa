const models = require('../models');
const Service = models.Service;

const create = async(req, res) => {
    const data = req.body;
    const service = await Service.create(data);
    res.json(service);
}

const getServices = async(req, res) => {
    const services = await Service.findAll();
    res.json(services)
}
module.exports = {
    create,
    getServices
}