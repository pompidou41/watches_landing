const React = require('react');
const UpdateWatchesForm = require('./UpdateWatchesForm');
const BtnDeleteWatches = require('./BtnDeleteWatches');

function WatchesCard({ user, watchesOne }) {
  return (
    <div className='carousel-card' data-watchesid={watchesOne.id}>
      <img
        src={watchesOne.img}
        alt='фото крутых часов'
        style={{ width: '350px', height: '500px' }}
      />
      <h3>{watchesOne.name}</h3>
      <h2>{watchesOne.price}$</h2>
      {user && <UpdateWatchesForm watchesOne={watchesOne} />}
      {user && <BtnDeleteWatches />}
    </div>
  );
}

module.exports = WatchesCard;
