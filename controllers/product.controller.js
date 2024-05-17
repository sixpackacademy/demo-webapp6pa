const models = require('../models');
const Product = models.Product;

const create = async(req, res) => {
    try {
        const data = req.body;
        const product_exists = await Product.findOne({where: {name: data.name}})
        if(product_exists){
            res.json({message: 'product already exists.'})
        } else {
            const product = await Product.create(data);
            res.json(product);
        } 
    } 
    
    catch (error) {
        res.json({message: error})
    }
    
}

const getProducts = async(req, res) => {
    const products = await Product.findAll()
    res.json(products);
}

module.exports = {
    create,
    getProducts
}