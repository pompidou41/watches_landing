const React = require('React');

function Information() {
  return (
    <div className='information'>
      <div className='text-container'>
        <h2 className='section-title'>О нас</h2>
        <p className='about-us-text'>
          В TimeCraft мы посвящаем себя созданию высококачественных часов,
          сочетая традицию и инноваци. Мы не просто знатоки - мы еще и
          коллекционеры. Мы никогда не посоветуем вам купить часы, которые не
          купили бы сами.
        </p>
      </div>
      <div className='image-container'>
        <img
          className='company-image'
          src='https://watchbox-sfcc.imgix.net/revamp/Worlds+Leading+Watch+House.jpg?auto=format,compress&cs=srgb&usm=5&usmrad=5&vib=5&h=600'
          alt='Компания TimeCraft'
        />
      </div>
    </div>
  );
}

module.exports = Information;
