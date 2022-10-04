const {Router} = require ('express');
const animal = require('../models').animal

const router = new Router ()

router.get("/:animalId", async(req, res) => {
    const animalById = await animal.findByPk(req.params.animalId)
    res.json(animalById)
})

router.get("/", async (req,res) => {
    const allAnimals = await animal.findAll()
    res.json(allAnimals)
})

module.exports = router;