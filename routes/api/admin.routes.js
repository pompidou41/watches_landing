const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Admin } = require('../../db/models');
const generateTokens = require('../../utils/authUtils');
const cookiesConfig = require('../../config/cookiesConfig');

router.post('/', async (req, res) => {
  const inputData = req.body;

  try {
    const adminDB = await Admin.findOne({
      where: { login: inputData.login },
    });
    // проверка существует ли такой админ
    if (adminDB) {
      const isValidPassword = await bcrypt.compare(
        inputData.password,
        adminDB.password
      );
      // проверка пароля
      if (isValidPassword) {
        // создание токенов куки
        const { accessToken, refreshToken } = generateTokens({
          user: { id: adminDB.id, login: adminDB.login },
        });

        // успешный вход админа
        return res
          .cookie(cookiesConfig.refresh, refreshToken, {
            maxAge: cookiesConfig.maxAgeRefresh,
            httpOnly: true,
          })
          .cookie(cookiesConfig.access, accessToken, {
            maxAge: cookiesConfig.maxAgeAccess,
            httpOnly: true,
          })
          .status(200)
          .json({ success: true });
      }
      return res.status(400).json({ message: 'Неверный пароль' });
    }
    return res.status(400).json({ message: 'Такого логина не существует' });
  } catch ({ message }) {
    console.log(message);
    res.status(500).json({ message: 'Не удалось войти' });
  }
});

module.exports = router;
