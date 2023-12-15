const React = require('react');
const UpdateWatchesForm = require('./UpdateWatchesForm');

function WatchesCard({ user, watchesOne }) {
  return (
    <div
      className='carousel-card swiper-slide'
      id='card-quadratus'
      data-watchesid={watchesOne.id}
    >
      <div className='divImg'>
        <img className='imgQ' src={watchesOne.img} alt='фото крутых часов' />
      </div>
      <h3 className='watchesName'>{watchesOne.name}</h3>
      <h2 className='watchesPrice'>{watchesOne.price}$</h2>
      {user && <UpdateWatchesForm watchesOne={watchesOne} />}
      {user && <button className='deleteBtn'>Удалить</button>}
    </div>
  );
}

module.exports = WatchesCard;
