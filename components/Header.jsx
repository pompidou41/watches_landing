const React = require('react');

function Header({ user }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#informationPage">
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
