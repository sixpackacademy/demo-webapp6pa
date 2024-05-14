const models = require('../models');
const Product = models.Product;

const create = async(req, res) => {
    const data = req.body;
    const product = await Product.create(data);
    res.json(product);
}

module.exports = {
    create
}