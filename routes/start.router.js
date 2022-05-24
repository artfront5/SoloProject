const React = require('react');
const ReactDOMServer = require('react-dom/server');
const startRouter = require('express').Router();
const Home = require('../views/Home');

startRouter.get('/', (req, res) => {
  // создаём React-элемент на основе React-компонента
  const home = React.createElement(Home, {
    title: 'My site',
  });
  // рендерим элемент и получаем HTML (в виде строки)
  const html = ReactDOMServer.renderToStaticMarkup(home);
  // отправляем первую строку нашего HTML-документа
  res.write('<!DOCTYPE html>');
  // отправляем отрендеренный HTML и закрываем соединение
  res.end(html);
});

module.exports = startRouter;
