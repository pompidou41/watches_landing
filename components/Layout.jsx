const React = require('react');
const Header = require('./Header');
const Footer = require('./Footer');

function Layout({ title, children }) {
  return (
    <html lang='ru'>
      <head>
        <title>{title}</title>

        <link rel='stylesheet' href='/styles/style.css' />
        <link rel='stylesheet' href='/styles/swiper.css' />

        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC'
          crossOrigin='anonymous'
        />
        <link
          rel='stylesheet'
          href='https://unpkg.com/swiper/swiper-bundle.min.css'
        />
            
        <script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM'
          crossOrigin='anonymous'
        />
            
        <script defer src='/scripts/addWatches.js' />
        <script defer src='/scripts/addUser.js' />
        <script defer src='/scripts/auth.js' />
        <script defer src="/scripts/getWatches.js" />
        <script defer src='/scripts/deleteWatches.js' />
        <script defer src='/scripts/updateWatches.js' />
          
      </head>
      <body>{children}</body>
    </html>
  );
}

module.exports = Layout;
