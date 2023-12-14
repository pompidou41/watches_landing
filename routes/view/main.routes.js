const router = require("express").Router();
const MainPage = require("../../components/MainPage");
const { Watches } = require("../../db/models");

router.get("/", (req, res) => {
  res.redirect("/main");
});

router.get("/main", async (req, res) => {
  const watches = await Watches.findAll();
  const main = res.renderComponent(MainPage, { title: "Main Page", watches });
  res.send(main);
});

module.exports = router;
