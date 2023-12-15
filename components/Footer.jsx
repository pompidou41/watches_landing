const React = require('react');

function Footer() {
  return (
    <footer id='footer'>
      <div className='row'>
        <div className='col-md-4'>
          <h4 className='discovery'>ENDLESS DISCOVERY IN YOUR INBOX</h4>
          <h5 className='textRT'>
            Присоединяйся к нам, чтобы быть в курсе последних коллекций и
            участовать в закрытых распродажах
          </h5>
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
          <div className='forSubscriber' />
        </div>
        <div className='col-md-4'>
          <h4>EXPLORE</h4>
          <ul className='ul'>
            <li>
              <button className='footerBtn'>
                <a href='#watchesPage'>All WATCHES</a>
              </button>
            </li>
            <li>
              <button className='footerBtn'>
                <a href='#informationPage'>ABOUT US</a>
              </button>
            </li>
            <li>
              <button className='footerBtn'>
                <a href='#applicationForPurchase'>BUY</a>
              </button>
            </li>
          </ul>
        </div>
        <div className='col-md-4'>
          <h4>CONNECT</h4>
          <ul className='ul'>
            <li>
              <button className='footerBtn'>
                <a href='mailto:kiryanova.ad@gmail.com'>EMAIL US</a>
              </button>
            </li>
            <li>
              <button className='footerBtn'>
                <a href='https://www.youtube.com/c/WatchBoxStudios'>YOUTUBE</a>
              </button>
            </li>
            <li>
              <button className='footerBtn'>
                <a href='https://www.instagram.com/watchbox/'>INSTAGRAM</a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

module.exports = Footer;
