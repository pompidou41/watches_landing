const router = require('express').Router();
const MainPage = require('../../components/MainPage');

router.get('/', (req, res) => {
  const main = res.renderComponent(MainPage, { title: 'Main Page' });
  res.send(main);
});

module.exports = router;
