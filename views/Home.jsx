const React = require('react');
const Layout = require('./Layout');

function First({ title }) {
  return (
    <Layout title={title}>
      <p className="wlc">WELCOME!</p>
    </Layout>
  );
}

module.exports = First;
