const React = require("react");
const WatchesCard = require("../components/WatchesCard");

function CarouselWatches({ watches }) {
  return (
    <>
      <button className="add-watches">Добавить часы</button>
      <div className="carousel">
        <div className="carousel-inner">
          {watches.map((watchesOne) => (
            <WatchesCard watchesOne={watchesOne} />
          ))}
        </div>
      </div>
    </>
  );
}

module.exports = CarouselWatches;
