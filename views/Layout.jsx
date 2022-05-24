const React = require('react');

function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/style.css" />
        <link rel="stylesheet" href="/loginstyle.css" />
        <link rel="stylesheet" href="/regastyle.css" />
        <script src="/client.js" />
      </head>
      <body>
        <nav className="top-menu">
          <ul className="menu-main">
            <li className="right-item"><a href="/login">Вход</a></li>
            <li className="right-item"><a href="/rega">Регистрация</a></li>
            <li className="left-item"><a href="/">Главная</a></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
