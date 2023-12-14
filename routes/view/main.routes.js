const router = require('express').Router();
const MainPage = require('../../components/MainPage');

router.get('/', (req, res) => {
  const main = res.renderComponent(MainPage, { title: 'Main Page' });
  res.send(main);
});

router.get('/logout', async (req, res) => {
  res.locals = undefined;
  res.clearCookie('access').clearCookie('refresh');
  res.redirect('/');
});

module.exports = router;
