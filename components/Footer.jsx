const React = require('react');

function Footer() {
  return (
    <footer id='footer'>
      <div className='row'>
        <div className='col-md-4'>
          <h4>ENDLESS DISCOVERY IN YOUR INBOX</h4>

          <form className='formSubscribe'>
            <input
              className='subscribeInput'
              type='email'
              name='email'
              placeholder='Введите ваш email'
            />
            <button className='subscribeBtn' type='submit'>
              Подписаться
            </button>
          </form>
          <div className='forSubscriber'></div>
        </div>
        <div className='col-md-4'>
          <h4>EXPLORE</h4>
          <ul className='ul'>
            <li>
              <a href='#watchesPage'>All WATCHES</a>
            </li>
            <li>
              <a href='#informationPage'>ABOUT US</a>
            </li>
            <li>
              <a href='#applicationForPurchase'>BUY</a>
            </li>
          </ul>
        </div>
        <div className='col-md-4'>
          <h4>CONNECT</h4>
          <ul className='ul'>
            <li>
              <a href='mailto:kiryanova.ad@gmail.com'>EMAIL US</a>
            </li>
            <li>
              <a href='https://www.youtube.com/c/WatchBoxStudios'>YOUTUBE</a>
            </li>
            <li>
              <a href='https://www.instagram.com/watchbox/'>INSTAGRAM</a>
            </li>
          </ul>
        </div>
      </div>

      <p>© 2023</p>
    </footer>
  );
}

module.exports = Footer;
