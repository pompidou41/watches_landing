const container = document.querySelector('.carousel-inner');
console.log(container);
if (container) {
  container.addEventListener('click', async (e) => {
    if (e.target.classList.contains('deleteBtn')) {
      const card = e.target.closest('.carousel-card');
      const { watchesid } = card.dataset;
      const res = await fetch(`/api/${watchesid}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.message === 'success') {
        card.remove();
      }
    }
  });
}
