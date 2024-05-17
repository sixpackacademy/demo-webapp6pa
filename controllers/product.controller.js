const models = require('../models');
const Product = models.Product;

const create = async(req, res) => {
    const data = req.body;
    const product_exists = await Product.findOne({where: {name: data.name}})
    if(product_exists){
        res.json({message: 'product already exists.'})
    } else {
        const product = await Product.create(data);
        res.json(product);
    }
    
}

module.exports = {
    create
}