const React = require('react');
const ReactDOMServer = require('react-dom/server');
const regaRouter = require('express').Router();
// подключаю модель user
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const Rega = require('../views/Rega');

regaRouter.get('/', (req, res) => {
  // создаём React-элемент на основе React-компонента
  const rega = React.createElement(Rega, {
    title: 'Registration',
  });
  // рендерим элемент и получаем HTML (в виде строки)
  const html = ReactDOMServer.renderToStaticMarkup(rega);
  // отправляем первую строку нашего HTML-документа
  res.write('<!DOCTYPE html>');
  // отправляем отрендеренный HTML и закрываем соединение
  res.end(html);
});

regaRouter.post('/', async (req, res) => {
  const { email, login, password } = req.body;
  const emails = await User.findOne({
    where: {
      email,
    },
  });
  if (emails) {
    console.log(emails);
    return res.status(500).send({ error: 'Пользователь с таким email уже существует' });
  }
  const logins = await User.findOne({
    where: {
      login,
    },
  });
  if (logins) {
    console.log(logins);
    return res.status(500).send({ error: 'Пользователь с таким логином уже существует' });
  }
  // записываю эти данные в бд
  try {
    const hash = await bcrypt.hash(password, 10);
    const createUser = await User.create({ email, login, password: hash });
    // проверяю на наличие в бд
    if (createUser) {
      res.sendStatus(201);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }
});

module.exports = regaRouter;
