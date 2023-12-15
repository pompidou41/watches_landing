const React = require('react');

function UpdateWatchesForm({ watchesOne }) {
  return (
    <div>
      <form className='updateForm' data-watchesid={watchesOne.id}>
        <input
          className='input1'
          type='text'
          name='name'
          value={watchesOne.name}
        />
        <input
          className='input2'
          type='text'
          name='price'
          value={watchesOne.price}
        />
        <input
          className='input3'
          type='text'
          name='img'
          value={watchesOne.img}
        />
        <button type='submit'>Изменить</button>
      </form>
    </div>
  );
}

module.exports = UpdateWatchesForm;
