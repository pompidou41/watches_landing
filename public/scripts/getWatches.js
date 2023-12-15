const getWatchesForm = document.querySelector('.getWatchesForm');

if (getWatchesForm) {
  getWatchesForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { id, name, pricemin, pricemax } = e.target;
    try {
      const res = await fetch('/api/getwatches', {
        headers: { 'content-type': 'application/json' },
        method: 'post',
        body: JSON.stringify({
          id: id.value,
          name: name.value,
          pricemin: pricemin.value,
          pricemax: pricemax.value,
        }),
      });

      const data = await res.json();
      if (data.success) {
        window.location.assign('/api/getwatches')
      }
    } catch ({ message }) {
      console.log(message);
    }
  });
}
