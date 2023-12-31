const React = require('react');

function Header({ user }) {
  return (
    <ul className="nav nav-tabs">
      <img
        className="nav-icon"
        src="https://cdn-icons-png.flaticon.com/512/3876/3876985.png"
        alt="..."
      />
      <li className="nav-item">
        <a className="nav-link" aria-current="page" href="#informationPage">
          About us
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#watchesPage">
          Explore
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#applicationForPurchase">
          Buy
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#footer">
          Contact us
        </a>
      </li>
      {user && (
        <li className="nav-item">
          <a href="/admin">{user.login}</a>
          <a className="nav-link" href="/logout">
            logout
          </a>
        </li>
      )}
    </ul>
  );
}
module.exports = Header;
