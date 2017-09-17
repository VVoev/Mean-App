const path = require('path');
const fs = require('fs');

const attachRoutes = (app, controllers) => {
    fs.readdirSync(__dirname)
        .filter((file) => file.includes('.routes'))
        .forEach((fileName) => {
            const currentPathFile = path.join(__dirname, fileName);
            require(currentPathFile)(app, controllers);
        });
};

module.exports = attachRoutes;