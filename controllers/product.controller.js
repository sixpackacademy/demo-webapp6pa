const models = require('../models');
const Product = models.Product;
const ProductReservation = models.ProductReservation;

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

const getProductRservationPendente = async(req, res) => {
    const products = await ProductReservation.findAll({where: {is_aproved: false}})
    res.json(products)

}

const aceitarReserva = async(req, res) => {
    try {
        const productReservation = await ProductReservation.findByPk(req.params.id)
        if(productReservation){
            productReservation.is_aproved = true;
            productReservation.status = "Aceite";
            await productReservation.save()
            res.json(productReservation)
        } else {
            res.json({message: 'Reserva não encontrada.'})
        }
    } catch (error) {
        res.json({message: error})
    }
}

module.exports = {
    create,
    getProducts,
    getProductRservationPendente,
    aceitarReserva,
}