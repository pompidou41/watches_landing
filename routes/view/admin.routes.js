const router = require('express').Router();
const AdminPage = require('../../components/AdminPage');

router.get('/', (req, res) => {
  const { user } = res.locals;
  const html = res.renderComponent(AdminPage, { title: 'Admin Page', user });
  res.send(html);
});

module.exports = router;
