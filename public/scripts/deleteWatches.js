const container = document.querySelector('.swiper-wrapper');

if (container) {
  container.addEventListener('click', async (e) => {
    if (e.target.classList.contains('deleteBtn')) {
      const card = e.target.closest('.carousel-card, .swiper-slide');
      const { watchesid } = card.dataset;
      const res = await fetch(`/delete/${watchesid}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.message === 'success') {
        card.remove();
      }
    }
  });
}
