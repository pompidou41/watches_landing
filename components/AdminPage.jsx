const React = require('react');
const Layout = require('./Layout');

function AdminPage({ user }) {
  return (
    <Layout>
      {user ? (
        <div className="adminContainer">
          <p>{user.login}</p>
          <a className="nav-link" href="/logout">
            <button style={{ margin: 'auto' }}>logout</button>
          </a>
        </div>
      ) : (
        <div className="adminContainer">
          <form className="adminForm">
            <input type="text" name="login" placeholder="login" />
            <input type="password" name="password" placeholder="password" />
            <button type="submit">Log In</button>
          </form>
          <div className="attention">
            <p className="checkInputsAuth" style={{ color: 'red' }}></p>
          </div>
        </div>
      )}
    </Layout>
  );
}

module.exports = AdminPage;
