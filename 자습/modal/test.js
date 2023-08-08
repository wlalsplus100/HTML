const modal = document.querySelector(".modal");

modalOpen = (img) => {
  const modalImg = document.querySelector(".modal-img");
  modalImg.src = img.src;
  modal.classList.add("modal-open");
};

modalClose = () => {
  modal.classList.remove("modal-open");
};
