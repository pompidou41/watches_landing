const React = require('react');
const WatchesCard = require('./WatchesCard');
const AddWatchesForm = require('./AddWatchesForm');

function CarouselWatches({ user, watches }) {
  return (
    <>
      {user && <AddWatchesForm />}
      <div className='carousel'>
        <div className='carousel-inner'>
          {watches.map((watchesOne) => (
            <WatchesCard watchesOne={watchesOne} />
          ))}
        </div>
      </div>
    </>
  );
}

module.exports = CarouselWatches;
