const React = require("react");
const WatchesCard = require("../components/WatchesCard");

function CarouselWatches({ watches }) {
  return (
    <div style={{ display: "flex" }}>
      {watches.map((watchesOne) => (
        <WatchesCard watchesOne={watchesOne} />
      ))}
    </div>
  );
}

module.exports = CarouselWatches;
