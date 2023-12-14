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
            <button className='subscribeBtn' type='submit'>Подписаться</button>
          </form>
        </div>
        <div className='col-md-4'>
          <h4>EXPLORE</h4>
          <ul className='ul'>
            <li>
              <a href='#'>All WATCHES</a>
            </li>
            <li>
              <a href='#'>ABOUT US</a>
            </li>
            <li>
              <a href='#'>CONNECT</a>
            </li>
          </ul>
        </div>
        <div className='col-md-4'>
          <h4>CONNECT</h4>
          <ul className='ul'>
            <li>
              <a href='#'>EMAIL US</a>
            </li>
            <li>
              <a href='#'>YOUTUBE</a>
            </li>
            <li>
              <a href='#'>INSTAGRAM</a>
            </li>
          </ul>
        </div>
      </div>

      <p>© 2023</p>
    </footer>
  );
}

module.exports = Footer;
