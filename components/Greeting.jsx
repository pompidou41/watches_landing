const React = require('react');

function Greeting() {
  return (
    <div className='greeting'>
      <video className='background-video' autoPlay loop muted>
        <source
          src='https://watchbox-sfcc.imgix.net/WatchBox/Desktop/2023-10-12_1916_HP_Desktop.webm'
          type='video/webm'
        />
      </video>

      <div className='container-text'>
        <h1 className='companyName'>Time Craft</h1>
        <h2 className='company'>The 1918 company </h2>
        <p className='slogan'>Время ремесла, воплощающего элегантность</p>
        <button className='learnMore' type='submit'>
          Узнать больше
        </button>
      </div>
    </div>
  );
}

module.exports = Greeting;
