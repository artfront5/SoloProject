const React = require('react');
const Layout = require('./Layout');

function Login({ title }) {
  return (
    <Layout title={title}>
      {/* <form action="/login" method="GET"> */}
      <br />
      <br />
      <br />
      <div className="cont">
        <p className="justtext">Войти</p>
        <p>Логин</p>
        <input type="text" placeholder="Введите логин" />
        <br />
        <p>Пароль</p>
        <input type="password" placeholder="Введите логин" />
        <br />
        <button type="submit" className="btn">Войти</button>
      </div>
      {/* </form> */}
    </Layout>
  );
}

module.exports = Login;
