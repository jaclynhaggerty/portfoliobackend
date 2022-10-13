const {Router} = require ('express');
const product = require('../models').product

const router = new Router ()
router.get("/", async (req,res) => {
    const allProducts = await product.findAll()
    res.json(allProducts)
})

module.exports = router;