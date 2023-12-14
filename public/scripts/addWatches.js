const formAddWatches = document.querySelector("#addWatches");

if (formAddWatches) {
  formAddWatches.addEventListener("submit", async (event) => {
    event.preventDefault();

    const { name, price, img } = event.target;

    try {
      const result = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: name.value,
          price: price.value,
          img: img.value,
        }),
      });

      const data = await result.json();
      if (data.message === "success") {
        formAddWatches.reset();
        document
          .querySelector(".carousel-inner")
          .insertAdjacentHTML("beforeend", data.html);
      }
    } catch ({ message }) {
      console.log(message);
    }
  });
}
