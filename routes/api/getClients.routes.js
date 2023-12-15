const router = require('express').Router();
const fs = require('fs/promises');
const path = require('path');
const { EOL } = require('os');
const { User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const clients = await User.findAll();
    const writeFile = await fs.writeFile(
      './public/src/clientsDB.csv',
      `id, name, email, phone, img${EOL}${clients
        .map(
          (el) =>
            `${el.dataValues.id}, ${el.dataValues.name}, ${el.dataValues.email}, ${el.dataValues.phone}, ${el.dataValues.img}`
        )
        .join(EOL)}`,
      (error) => {
        if (error) {
          return console.log(error);
        }
      }
    );
    return res.sendFile(
      path.join(__dirname, '../', '../', 'public', 'src') + '/clientsDB.csv'
    );
  } catch ({ message }) {
    console.log(message, 'Не удалось создать файл');
  }
});

module.exports = router;
