const router = require('express').Router();
const MainPage = require('../../components/MainPage');
const { Watches } = require('../../db/models');

router.get('/', async (req, res) => {
  const watches = await Watches.findAll();
  const main = res.renderComponent(MainPage, { title: 'Main Page', watches });
  res.send(main);
});

router.get('/logout', async (req, res) => {
  res.locals = undefined;
  res.clearCookie('access').clearCookie('refresh');
  res.redirect('/');
});

module.exports = router;
