const React = require('react');
const Layout = require('./Layout');

function MainPage() {
  return (
    <Layout>
      <div className="container greeting"></div>
      <div className="container watches"></div>
      <div className="container clients"></div>
      <div className="container contacts"></div>
    </Layout>
  );
}
module.exports = MainPage;
