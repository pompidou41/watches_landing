const React = require('react');

function Contacts() {
  return (
    <div className="contacts-form">
      <form id="addUserForm">
        <input name="name" type="text" placeholder="Ваше имя" />
        <input name="email" type="email" placeholder="Ваша электронная почта" />
        <input name="phone" type="phone" placeholder="Ваш номер телефона" />
        <input name="img" type="text" placeholder="Ссылка на ваш эскиз" />
        <button className="addUserBtn" type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
}

module.exports = Contacts;
