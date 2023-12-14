const adminForm = document.querySelector('.adminForm');
const checkInputsAuth = document.querySelector('.checkInputsAuth');

if (adminForm) {
  adminForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { login, password } = e.target;
    try {
      if (login.value.trim() === '' || password.value.trim() === '') {
        if (!checkInputsAuth.innerText.includes('заполните все поля')) {
          checkInputsAuth.innerText = 'заполните все поля';
        }
      } else {
        const res = await fetch('/api/admin', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            login: login.value,
            password: password.value,
          }),
        });

        const data = await res.json();
        if (data.success) {
          window.location.assign('/');
        } else {
          checkInputsAuth.innerText = data.message;
        }
      }
    } catch ({ message }) {
      console.log(message);
    }
  });
}
