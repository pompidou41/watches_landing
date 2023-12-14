const router = require("express").Router();

const mainRoutes = require("./view/main.routes");

router.use("/", mainRoutes);

module.exports = router;
