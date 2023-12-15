const React = require('react');
const Layout = require('./Layout');

function AdminPage({ user }) {
  return (
    <Layout>
      {user ? (
        <div className="adminContainer">
          <p>{user.login}</p>
          <a href="/logout">
            <button style={{ margin: 'auto' }} type="button">
              logout
            </button>
          </a>
          <a href="/">
            <button style={{ margin: 'auto' }} type="button">
              homepage
            </button>
          </a>
          <a className="downloadCSV" href="/api/getclients">
            <button style={{ margin: 'auto' }} type="button">
              download clients database
            </button>
          </a>
          <form className="getWatchesForm">
            <input type="text" name="id" placeholder="id (default all)" />
            <input type="text" name="name" placeholder="name (default all)" />
            <input
              type="text"
              name="pricemin"
              placeholder="price min (default all)"
            />
            <input
              type="text"
              name="pricemax"
              placeholder="price max (default all)"
            />
            <button type="submit">get watches database</button>
          </form>
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
