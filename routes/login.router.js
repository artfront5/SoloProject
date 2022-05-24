const React = require('react');
const ReactDOMServer = require('react-dom/server');
const loginRouter = require('express').Router();
const Login = require('../views/Login');

loginRouter.get('/', (req, res) => {
  // создаём React-элемент на основе React-компонента
  const login = React.createElement(Login, {
    title: 'login',
  });
  // рендерим элемент и получаем HTML (в виде строки)
  const html = ReactDOMServer.renderToStaticMarkup(login);
  // отправляем первую строку нашего HTML-документа
  res.write('<!DOCTYPE html>');
  // отправляем отрендеренный HTML и закрываем соединение
  res.end(html);
});

module.exports = loginRouter;
