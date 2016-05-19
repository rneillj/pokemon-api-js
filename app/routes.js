var resources = require('./resources');

var routes = function(app) {
    app.get('/healthcheck', resources.healthCheck);
    app.get('/pokemon', resources.get);
    app.get('/pokemon/:id', resources.getById);
}

module.exports = routes;
