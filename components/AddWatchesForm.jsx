const React = require("react");

function AddWatchesForm() {
  return (
    <div>
      <form id="addWatches">
        <input type="text" name="name" />
        <input type="number" name="price" />
        <input type="text" name="img" />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

module.exports = AddWatchesForm;
