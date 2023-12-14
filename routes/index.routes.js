const router = require('express').Router();

const mainRoutes = require('./view/main.routes');
const apiMainRoutes = require('./api/main.routes');

router.use('/', mainRoutes);

router.use('/', apiMainRoutes);

module.exports = router;
