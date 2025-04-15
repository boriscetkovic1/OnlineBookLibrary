// Book Modal tabs (on book details page) //
const bookModalTabs = document.querySelectorAll(".book-modal-main__toggle");
const bookModalContent = document.querySelectorAll(".book-modal-main__content");
bookModalTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    bookModalContent.forEach((content) => {
      content.classList.remove("is-active");
    });

    bookModalTabs.forEach((tab) => {
      tab.classList.remove("is-active");
    });

    bookModalContent[index].classList.add("is-active");
    bookModalTabs[index].classList.add("is-active");
  });
});
