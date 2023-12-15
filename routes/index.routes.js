const router = require('express').Router();

const mainRoutes = require('./view/main.routes');
const adminRoutes = require('./view/admin.routes');

const apiMainRoutes = require('./api/main.routes');
const apiAdminRoutes = require('./api/admin.routes');
const apiGetClientsRoutes = require('./api/getClients.routes');
const apiGetWatchesRoutes = require('./api/getWatches.routes');

router.use('/', mainRoutes);
router.use('/admin', adminRoutes);

router.use('/', apiMainRoutes);
router.use('/api/admin', apiAdminRoutes);
router.use('/api/getclients', apiGetClientsRoutes);
router.use('/api/getwatches', apiGetWatchesRoutes);

module.exports = router;
