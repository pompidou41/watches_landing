const formUpdates = document.querySelectorAll('.updateForm');

formUpdates.forEach((formUpdate) => {
  if (formUpdate) {
    formUpdate.addEventListener('submit', async (e) => {
      e.preventDefault();
      const { name, price, img } = e.target;
      const { watchesid } = e.target.dataset;
      const res = await fetch(`/update/${watchesid}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          price: price.value,
          img: img.value,
        }),
      });
      console.log(res);
      const data = await res.json();
      console.log(data);
      if (data.message === 'success') {
        window.location.assign('/');
      }
    });
  }
});
