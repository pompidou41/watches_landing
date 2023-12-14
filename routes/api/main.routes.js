const router = require('express').Router();
const { User } = require('../../db/models');

router.post('/', async (req, res) => {
  const inputData = req.body;
  try {
    // проверка на сущетсвующие эл. почту и телефон
    const checkUseMail = await User.findOne({
      where: { email: inputData.email },
    });
    if (checkUseMail) {
      res
        .status(400)
        .json({ message: 'Данная электронная почта уже в листе ожидания!' });
    }
    const checkUsePhone = await User.findOne({
      where: { phone: inputData.phone },
    });
    if (checkUsePhone) {
      res
        .status(400)
        .json({ message: 'Данный номер телефона уже в листе ожидания!' });
    }

    // создание нового пользователя в листе ожидания
    const newUser = await User.create(inputData);
    if (newUser) {
      res.status(200).json({ success: true });
    }
  } catch ({ message }) {
    console.log({ message });
    res.status(500).json({ message: 'Ошибка создания пользователя' });
  }
});

module.exports = router;
