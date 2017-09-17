const { Router } = require('express');

const passport = require('passport');

const attachRoutes = (app, { protossController }) => {
    const router = new Router();

    router
        .get('/all', protossController.getAllUnits)
        // .post('/add',protossController.addUnit)
        // .get('/:id', protossController.getUnitById)

    app.use('/api/protoss', router);
};

module.exports = attachRoutes;