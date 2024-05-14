const models = require('../models');
const Service = models.Service;

const create = async(req, res) => {
    const data = req.body;
    const service = await Service.create(data);
    res.json(service);
}

module.exports = {
    create
}