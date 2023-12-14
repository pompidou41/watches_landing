const addUserForm = document.querySelector('#addUserForm');

if (addUserForm) {
  addUserForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, email, phone, img } = e.target;
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          phone: phone.value,
          img: img.value,
        }),
      });

      const data = await res.json();
      if (data.success) {
        console.log('пользователь добавлен в лист ожидания');
        addUserForm.reset();
      } else {
        console.log(data.message);
      }
    } catch ({ message }) {
      console.log({ message });
    }
  });
}
