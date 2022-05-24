// Babel позволяет подключать jsx файлы (компоненты)
require('@babel/register');
// библиотека ноды для работы с путями
const path = require('path');
// подключаю экспресс для поднятия сервиса
const express = require('express');
// создаю экземпляр экспресса
const app = express();
// библиотека для логирования http запросов
const morgan = require('morgan');
// роутеры
const bodyParser = require('body-parser');
const startRouter = require('./routes/start.router');
const loginRouter = require('./routes/login.router');
const regaRouter = require('./routes/rega.router');

// чтобы не указывать полную директорию(сам считывает папку) app.use промежуточная ф-я
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// объединяет объекты моделей с бд
const { sequelize } = require('./db/models');

const PORT = process.env.PORT ?? 3000;
// промежуточный обработчик уровня приложения с экземпляром объекта приложения
// регистрация обработчиков
app.use('/', startRouter);
app.use('/login', loginRouter);
app.use('/rega', regaRouter);
// слушатель порта
app.listen(PORT, async () => {
  console.log('Веб-сервер слушает порт', PORT);
  try {
    await sequelize.authenticate();
    console.log('БД-сервер подключен успешно');
  } catch (error) {
    console.log('БД-сервер не подключен');
    console.log(error.message);
  }
});
