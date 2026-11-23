(function () {
  "use strict";
  const slides = Array.from(document.querySelectorAll(".slide"));
  const prevButton = document.getElementById("prevBtn");
  const nextButton = document.getElementById("nextBtn");
  const pageNumber = document.getElementById("pageNumber");
  const progressBar = document.getElementById("progressBar");
  let currentIndex = 0;

  function showSlide(index) {
    if (index < 0 || index >= slides.length) return;
    slides[currentIndex].classList.remove("is-active");
    currentIndex = index;
    const slide = slides[currentIndex];
    slide.classList.add("is-active");
    pageNumber.textContent = String(currentIndex + 1).padStart(2, "0") + " / " + String(slides.length).padStart(2, "0");
    progressBar.style.width = ((currentIndex + 1) / slides.length * 100) + "%";
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === slides.length - 1;
    document.title = slide.dataset.title + "｜NMIXX 教學簡報";
  }

  prevButton.addEventListener("click", () => showSlide(currentIndex - 1));
  nextButton.addEventListener("click", () => showSlide(currentIndex + 1));
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
      event.preventDefault();
      showSlide(currentIndex + 1);
    }
    if (event.key === "ArrowLeft" || event.key === "PageUp") {
      event.preventDefault();
      showSlide(currentIndex - 1);
    }
    if (event.key === "Home") showSlide(0);
    if (event.key === "End") showSlide(slides.length - 1);
  });
  showSlide(0);
})();
