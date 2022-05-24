const React = require('react');
const Layout = require('./Layout');

function Rega({ title }) {
  return (
    <Layout title={title}>
      <form id="createUser" action="/rega" method="POST">
        <br />
        <br />
        <br />
        <div className="cont">
          <p className="justtext">Регистрация</p>
          <p>Email</p>
          <input name="email" type="email" placeholder="Введите e-mail" />
          <p>Логин</p>
          <input name="login" type="text" placeholder="Введите логин" />
          <br />
          <p>Пароль</p>
          <input name="password" type="password" placeholder="Введите логин" />
          <br />
          <button type="submit" className="btn">Войти</button>
        </div>
      </form>
    </Layout>
  );
}

module.exports = Rega;
