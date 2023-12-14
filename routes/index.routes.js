const router = require('express').Router();

const mainRoutes = require('./view/main.routes');
const adminRoutes = require('./view/admin.routes');

const apiMainRoutes = require('./api/main.routes');
const apiAdminRoutes = require('./api/admin.routes');

router.use('/', mainRoutes);
router.use('/admin', adminRoutes);

router.use('/', apiMainRoutes);
router.use('/api/admin', apiAdminRoutes);

module.exports = router;
