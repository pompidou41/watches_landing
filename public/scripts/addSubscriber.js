const subscriberForm = document.querySelector('#formSubscribe');

if (subscriberForm) {
    console.log(subscriberForm);
  subscriberForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { mail } = e.target;
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          mail: mail.value,
        }),
      });

      const data = await res.json();
      if (data.success) {
        console.log('заявка принята');
        addUserForm.reset();
        document.querySelector('.forSubscriber').insertAdjacentHTML('Вы успешно подписались на новости');
      } else {
        console.log(data.message);
      }
    } catch ({ message }) {
      console.log({ message });
    }
  });
}
