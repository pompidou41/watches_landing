const React = require('react');
const WatchesCard = require('./WatchesCard');
const AddWatchesForm = require('./AddWatchesForm');

function CarouselWatches({ user, watches }) {
  return (
    <>
      {user && <AddWatchesForm />}
      <div className='swiper-container'>
        <div className='swiper-wrapper'>
          {watches.map((watchesOne) => (
            <WatchesCard watchesOne={watchesOne} user={user} />
          ))}
        </div>
      </div>

      <script src='https://unpkg.com/swiper/swiper-bundle.min.js' />

      <div className='carousel'>
        <div className='carousel-inner'>
         </div>
      </div>
    </>
  );
}

module.exports = CarouselWatches;
