const React = require('react');

function Footer() {
  return (
    <footer className="page-footer">
      <div className="container-footer">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Что- то про часы</h5>
            <p className="grey-text text-lighten-4">
              Еще что-то про часы но уже подробнее
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  yourwatch@gmail.com
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  something here
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  something here
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  something here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container-copyright">
          © 2014 Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">
            More Links
          </a>
        </div>
      </div>
    </footer>
  );
}

module.exports = Footer;
