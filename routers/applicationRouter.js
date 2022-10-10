const { Router } = require("express");
const application = require('../models').application;
const user = require('../models').user;
const animal = require('../models').animal;
const auth = require('../auth/middleware');

const router = new Router();

router.get('/', auth, async (req, res) => {
    if (!req.user.isAdmin) {
        return res.status(401).send("Only admins can block or unblock users!");
    }

    const allApps = await application.findAll({
        include: [user, animal]
    });
    res.json(allApps);
});

router.put('/:appId', auth, async (req, res, next) => {
    if (!req.user.isAdmin) {
        return res.status(401).send("Only admins can block or unblock users!");
    }

    const { approved } = req.body;

    try {
        const updatedApp = await application.update(
            { approved },
            {
                where: {
                    id: req.params.appId
                }
            }
        );
        res.json(updatedApp);
    } catch (e) {
        console.log(e);
        next(e);
    }
});

module.exports = router;