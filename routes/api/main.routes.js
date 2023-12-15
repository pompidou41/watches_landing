const router = require('express').Router();
const nodemailer = require('nodemailer');
const WatchesCard = require('../../components/WatchesCard');
const { User, Watches } = require('../../db/models');
const Subscriber = require('../../db/models/subscriber');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kiryanova.ad@gmail.com',
    pass: 'yqrs cobr tkle zlfw',
  },
});
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
      const mailOptions = {
        from: 'kiryanova.ad@gmail.com',
        to: inputData.email,
        subject: 'Заявка получена',
        text: `${inputData.name}, Ваша заявка получена. С вами свяжутся в ближайшее время, чтобы уточнить все детали. Спасибо за вашу заявку!`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log(`Email sent: ${info.response}`);
        }
      });
      res.status(200).json({ success: true });
    }
  } catch ({ message }) {
    console.log({ message });
    res.status(500).json({ message: 'Ошибка создания пользователя' });
  }
});

router.post('/api', async (req, res) => {
  const data = req.body;
  try {
    const watches = await Watches.create(data);
    const html = res.renderComponent(
      WatchesCard,
      { watchesOne: watches },
      { doctype: false }
    );
    if (watches) {
      res.json({ message: 'success', html });
    }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.delete('/:watchesId', async (req, res) => {
  const { watchesId } = req.params;
  const data = await User.destroy({ where: { id: watchesId } });
  if (data > 0) {
    res.json({ message: 'success' });
  }
});

router.post('/', async (req, res) => {
  const inputData = req.body;
  try {
    const checkUseMail = await Subscriber.findOne({
      where: { mail: inputData.mail },
    });
    if (checkUseMail) {
      res
        .status(400)
        .json({ message: 'Данная электронная почта уже в листе ожидания!' });
    }

    const newUser = await Subscriber.create(inputData);
    if (newUser) {
      const mailOptions = {
        from: 'kiryanova.ad@gmail.com',
        to: inputData.email,
        subject: 'Заявка получена',
        text: `${inputData.name}, Cпасибо за ваше доверие! Предлагаем вам ознакомиться со статьями, которые введут вас в мир часов. Приятного погружения! https://www.thewatchbox.com/categories/buying-guides/`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log(`Email sent: ${info.response}`);
        }
      });
      res.status(200).json({ success: true });
    }
  } catch ({ message }) {
    console.log({ message });
    res.status(500).json({ message: 'Ошибка создания пользователя' });
  }
});

module.exports = router;
