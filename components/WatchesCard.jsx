const React = require('react');
const UpdateWatchesForm = require('./UpdateWatchesForm');

function WatchesCard({ user, watchesOne }) {
  return (
    <div className='carousel-card swiper-slide' data-watchesid={watchesOne.id}>
      <img
        src={watchesOne.img}
        alt='фото крутых часов'
        style={{ width: '350px', height: '500px' }}
      />
      <h3 className='watchesName'>{watchesOne.name}</h3>
      <h2 className='watchesPrice'>{watchesOne.price}$</h2>
      {user && <UpdateWatchesForm watchesOne={watchesOne} />}
      {user && <button className='deleteBtn'>Удалить</button>}
    </div>
  );
}

module.exports = WatchesCard;
