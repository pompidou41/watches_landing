const router = require('express').Router();
const fs = require('fs/promises');
const path = require('path');
const { Op } = require('sequelize');
const { Watches } = require('../../db/models');

router.get('/', (req, res) => {
  res.download(
    path.join(__dirname, '../', '../', 'public', 'src') + '/watchesDB.json'
  );
});

router.post('/', async (req, res) => {
  const { id, name, pricemin, pricemax } = req.body;

  let newId = id;
  let newName = name;
  let newPricemin = pricemin;
  let newPricemax = pricemax;

  if (id.trim() === '') {
    newId = { [Op.gte]: 0 };
  }
  if (name.trim() === '') {
    newName = { [Op.regexp]: '.' };
  }
  if (newPricemin.trim() === '') {
    newPricemin = 0;
  }
  if (newPricemax.trim() === '') {
    newPricemax = 99999999999;
  }
  try {
    const watches = await Watches.findAll({
      where: {
        [Op.and]: [
          { id: newId },
          { name: newName },
          { price: { [Op.between]: [newPricemin, newPricemax] } },
        ],
      },
    });
    const jsonWatches = JSON.stringify(watches);
    await fs.writeFile('./public/src/watchesDB.json', jsonWatches);
    return res.json({ success: true });
  } catch ({ message }) {
    console.log(message, 'Не удалось создать файл');
  }
});

module.exports = router;
