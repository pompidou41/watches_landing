const React = require('react');

function Contacts() {
  return (
    <div className="contacts-form" id="applicationForPurchase">
      <div className="image-container">
        <img
          className="company-image"
          src="https://watchbox-sfcc.imgix.net/home/11-29-23-hpg-collecting-together/Third+mod/11-24-23+Thrid+mod.jpg?auto=format,compress&cs=srgb&usm=5&usmrad=5&vib=5&h=600"
          alt="Компания TimeCraft"
        />
      </div>
      <form id="addUserForm">
        <p>
          Оставьте свои контактные данные для дальнейшей консультации.
          {/* Также вы можете оставить ссылку на
          изображение вашего эскиза, чтобы процесс подготовки Ваших
          индивидуальных часов шел продуктивнее. */}
        </p>
        <input
          className="input-field"
          name="name"
          type="text"
          placeholder="Ваше имя"
        />
        <input
          className="input-field"
          name="email"
          type="email"
          placeholder="Ваша электронная почта"
        />
        <input
          className="input-field"
          name="phone"
          type="phone"
          placeholder="Ваш номер телефона"
        />
        <input
          className="input-field"
          name="img"
          type="text"
          placeholder="Ссылка на ваш эскиз"
        />
        <button className="addUserBtn" type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
}

module.exports = Contacts;
