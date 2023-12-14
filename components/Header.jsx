const React = require('react');

function Header({ user }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          About us
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Explore
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Buy
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Contact us
        </a>
      </li>
      {user && (
        <li className="nav-item">
          <p>{user.login}</p>
          <a className="nav-link" href="/logout">
            logout
          </a>
        </li>
      )}
    </ul>
  );
}
module.exports = Header;
