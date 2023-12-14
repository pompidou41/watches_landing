const React = require("react");

function WatchesCard({ watchesOne }) {
  return (
    <div>
      <img
        src={watchesOne.img}
        alt="фото крутых часов"
        style={{ width: "350px", height: "500px" }}
      />
      <h3>{watchesOne.name}</h3>
      <h2>{watchesOne.price}$</h2>
    </div>
  );
}

module.exports = WatchesCard;
