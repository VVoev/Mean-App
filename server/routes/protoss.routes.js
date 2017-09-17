const { Router } = require('express');


const attachRoutes = (app, { protossController }) => {
    const router = new Router();

    router
        .get('/all', protossController.getAllUnits)

    app.use('/api/protoss', router);
};

module.exports = attachRoutes;